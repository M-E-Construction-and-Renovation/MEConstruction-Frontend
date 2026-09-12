# Design tool lead gate

Captures an email before the bathroom configurator opens, and offers a returning
visitor their saved design back.

**It is a lead gate, not a lock.** There is no login on this site, the 3D assets
are public files and the configurator runs in the browser. Anyone who reads the
page source gets in. The job is to collect an address from the ordinary visitor,
not to protect a secret — do not describe it to the client as protection.

---

## Before it works: two setup steps

### 1. Environment variable

```
DESIGN_GATE_SECRET=<a long random string>
```

Needed locally and in **Vercel → Settings → Environment Variables → Production**.
Any long random value works; it only signs the cookie.

**If it is unset the gate is switched off** and every visitor reaches the
configurator directly, with a line in the server log saying so. That is
deliberate: no key means no cookie can be issued, so gating would bounce visitors
between the gate and the configurator forever. A missing variable costs a few
uncaptured addresses; the alternative is a dead design tool on production.

### 2. Supabase table

The gate records every address, including visitors who never save a design —
which is most of them, and the whole point of gating.

```sql
create table if not exists design_leads (
  email       text primary key,
  "firstName" text,
  subscribed  boolean not null default false,
  "lastSeenAt" timestamptz not null default now(),
  "createdAt"  timestamptz not null default now()
);

alter table design_leads enable row level security;
```

Column names are quoted because the API sends camelCase, matching the existing
`projects` table. Postgres folds unquoted identifiers to lowercase, so `firstName`
would silently become `firstname` and every insert would fail.

No policies are added: the API uses the service-role key, which bypasses RLS.
Enabling RLS with no policy means the anon key can read nothing — which is what
you want for a table of lead email addresses.

**Until this table exists** the gate still works. The insert fails, the failure is
logged as `design-access: lead upsert failed`, and the visitor is let through —
losing a lead row is bad, refusing entry because a table is missing is worse.

### 3. Normalise existing emails (one time)

Addresses are the only thing joining a `projects` row to a `design_leads` row to
a Mailchimp contact -- there is no account or id. So they have to be stored the
same way everywhere, and they were not: the gate lowercased before looking for a
saved design while `save-project` stored whatever casing the visitor typed.
Anyone who saved as `Jordan.Test@Example.com` was told they had no saved design.

The code now normalises in one place (`src/lib/email.js`, used by every route
that accepts an address). Rows written before that need fixing:

```sql
update projects set email = lower(trim(email)) where email <> lower(trim(email));
```

If that fails on a duplicate key, two rows differ only by casing -- the same
person with two designs. Merge them by hand and rerun; the failure is the
useful part.

---

## The flow

```
/design  →  choose-project  →  bathroom/plumbing  →  [GATE]  →  bathroom/configure
   1              2                    3                4
```

The gate sits at step 3 because that is the cheapest place to ask. By then the
visitor has spent two clicks saying what they want, so the question is earned —
but they have not built anything yet, so being turned away costs them nothing
they would mourn. Asking on the landing page asks before showing any value;
asking at save time stops someone ten minutes in, the most expensive moment to
lose them.

**The plumbing links still point at the configurator, not at the gate.**
Middleware decides whether to detour, so a returning visitor with a valid cookie
goes straight through and is never asked twice.

## Consent

The subscribe checkbox starts **unticked** and is worded as what it is. Handing
over an address to open a tool is not a request for marketing email, and
subscribing people who did not ask produces spam complaints that damage
deliverability for every campaign the client sends — not just this one.

`save-project` no longer subscribes either. It used to add every saver to the
audience silently, which meant the same site asked permission in one place and
not the other. Consent is now asked once, at the gate.

## Files

| File | Role |
| --- | --- |
| `src/lib/design-gate.js` | Cookie signing and verification |
| `src/app/api/design/access/route.js` | Validate, record lead, optionally subscribe, issue cookie |
| `src/app/api/design/session/route.js` | Hand the email back to the configurator |
| `src/middleware.js` | Enforce the detour |
| `src/app/[locale]/(design)/design/bathroom/start/page.js` | The gate screen |

### Why Web Crypto and not `node:crypto`

The gate is enforced in middleware, middleware runs on the Edge Runtime, and the
Edge Runtime has no Node built-ins. Importing `node:crypto` builds without
failing and then breaks at request time on production. Every function in
`design-gate.js` is async because Web Crypto is.

### Why the email left the URL

A saved design used to be reloaded with `?email=` in the query string, which
parks a real address in browser history, the back button, and anything logging
referrers. It now travels in an httpOnly cookie and the configurator asks for it
via `/api/design/session`. Old `?email=` links still work.

## Measuring it

Two GA4 events, so the gate can be judged rather than assumed:

| Event | Parameters |
| --- | --- |
| `design_gate_view` | `plumbing` |
| `design_gate_submit` | `plumbing`, `subscribed`, `returning` |

**The ratio between them is the number that matters.** It tells you what share of
interested visitors the gate turns away. If submissions run far below views, the
gate is costing more leads than it captures and belongs at save time instead.

Register `subscribed` and `returning` as custom dimensions (`docs/analytics.md`,
section 5) or they will not appear in reports.

## Known limits

- Bypassable by anyone who forges past the client, by design.
- `design_gate_view` fires on the gate screen, not on an attempt to reach the
  configurator, so a visitor who abandons mid-redirect is not counted.
- The disposable-domain list in the access route is short and deliberately so. It
  catches casual throwaways, not a determined visitor.
