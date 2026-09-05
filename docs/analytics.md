# GA4 setup runbook — M&E Construction

Everything needed to get one consistent set of GA4 analytics across both of the
client's sites, in the order it must happen.

## The two sites

| Site | Host | Platform |
| --- | --- | --- |
| Marketing site + campaign landing pages | `www.meconstructionrenovations.com` (apex redirects here) | Mailchimp |
| Main website | `home.meconstructionrenovations.com` | This Next.js app, on Vercel |

They report into **one GA4 property and one web data stream**, so a visitor who
lands on a Mailchimp campaign page and continues to the main site is one user in
one session, and the campaign that brought them keeps the credit.

Mailchimp is the constraint that shapes everything else: its tracking field takes
**one** pasted ID and nothing more — no custom events, no second tag, no GTM
container. Anything Mailchimp cannot send is either renamed into our event
dictionary inside GA4 (section 5) or recorded as a known gap (section 8).

## Status

Done:

- [x] GA4 property and web data stream created
- [x] Measurement ID pasted into Mailchimp → Website → Settings → Site tracking
- [x] Mailchimp website republished
- [x] App instrumented and building clean (code is merged; nothing renders until
      the env var is set)

Blocked, waiting on the client:

- [ ] **Ownership** — the property currently sits under a personal Google
      account. Resolve in section 1 before doing anything else.
- [ ] **Google Ads** — `AW-11277137176` was removed from the Mailchimp site by
      the measurement ID replacing it. Nobody on our side has access to the Ads
      account that owns it. Section 7.

Not started: sections 2 through 7.

**Fill these in as soon as they are known:**

- Measurement ID: `G-________________`
- Google Ads customer ID that owns `AW-11277137176`: `___-___-____`

---

## 1. Ownership — do this first

The property was created under a personal Google account. The client's analytics
history should not live there: if the account is lost or the engagement ends, so
is their data.

Good news — this does not require rebuilding anything. **Moving a GA4 property
between Analytics accounts preserves the measurement ID**, so the tag already
live on the Mailchimp site keeps working and no re-tagging is needed.

Once client access arrives, pick one:

**Option A — move the property into a client-owned Analytics account (preferred)**

1. Have the client create a Google Analytics *account* (the level above
   properties) under their own Google login, or identify an existing one.
2. Get **Administrator** on that account.
3. **Admin → Property details → Move property**, choose the client's account.
   Requires Administrator + Editor on both source and destination.
4. When asked about permissions, choose to keep existing property permissions so
   you do not lock yourself out mid-project.

**Option B — leave it where it is, grant the client Administrator**

**Admin → Property access management → `+` → Add users** → the client's Google
account → role **Administrator**.

Weaker, but it means they can never be locked out, and Option A stays available
later. Do at least this much before going further.

---

## 2. Data stream settings

Get to the stream once, then work down its page:

**Admin → (Data collection and modification) Data streams → Web → click the
stream**

The page has two areas that matter. They are siblings, not nested — this trips
people up.

### In "Configure tag settings" (panel at the bottom of the stream page)

1. **Configure your domains** → *Add condition* → domain
   `meconstructionrenovations.com` → **Save**

   Both hostnames are subdomains of it, so the `_ga` cookie is already shared and
   no cross-domain linker is needed. This entry is what stops apex ↔ subdomain
   hops being counted as new sessions.

2. **Click "Show all"** to expand the settings list — *List unwanted referrals*
   is not in the short default list. Then **List unwanted referrals** → *Add
   condition* → domain `meconstructionrenovations.com` → **Save**

   Without it, traffic arriving on the main site from Mailchimp is attributed to
   "meconstructionrenovations.com / referral" instead of the campaign that
   actually earned it.

### In the "Events" block (top of the same page)

3. **Enhanced measurement** → leave the master switch **on** → click its **gear
   icon** → expand **Page views** → uncheck the advanced sub-option **"Page
   changes based on browser history events"** → Save

   It is a setting *inside* Page views, not a row of its own. The app sends its
   own `page_view` on client-side navigation
   (`src/components/analytics/page-view-tracker.jsx`); leaving the history
   trigger on double-counts every in-app navigation. Turning it off costs the
   Mailchimp side nothing — those pages are server-rendered, so every navigation
   is a full load that fires `page_view` on its own.

4. **Redact data** → confirm **Email** is on (default-on for properties created
   after mid-2023) → under *URL query parameters* type `email` and **press
   Enter** so it becomes a chip, then **Save**

   Typing without pressing Enter produces "The URL parameter keys must not be
   empty" on save. This matters because the design tool carries the visitor's
   address as `?email=` in the URL. The app already redacts it before sending
   (`sanitizeUrl` in `src/lib/analytics.js`); this is the backstop, and it covers
   `page_location`, `page_referrer` and `link_url` — exactly the parameters the
   app sets.

### Elsewhere in Admin

5. **Admin → (Data collection and modification) Data retention** → *Event data
   retention* → **14 months** → Save

   Standard properties offer only 2 or 14 months. The 2-month default is too
   short to compare a campaign season against last year's.

---

## 3. The measurement ID goes in four places

One ID, one stream, both sites. **Do not create a second data stream for the
subdomain** — two streams split users and sessions, which is the exact
inconsistency this whole exercise removes.

1. **Local `.env`**

   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. **Vercel** → Project → Settings → Environment Variables → same name and value
   on **Production, Preview and Development** → then **redeploy**.

   It is inlined at build time, so an existing deployment will not pick it up.
   Leave the variable unset and no tag renders at all — that is deliberate, and
   it is how local and preview builds stay out of the client's data.

3. **Mailchimp website** — Website → Settings → Site tracking → Edit → tick
   *Track with Google Analytics* → paste the ID → Save → **Website → Edit Site →
   Publish Changes**. ✅ *already done*

4. **Every Mailchimp landing page**, individually — Campaigns → All campaigns →
   the landing page → Edit → Settings & Tracking → tick *Track with Google
   Analytics* → paste the ID → Save and publish.

   There is no bulk action. A new campaign page ships untracked unless someone
   ticks this box, so put it on the campaign checklist.

### Why not Google Tag Manager

GTM would be the better container, but Mailchimp's field takes a measurement ID
and the plan in use has no custom-code block. Running GTM on one site and a bare
ID on the other means two configurations to keep in step. Direct gtag on both is
the version that stays consistent.

---

## 4. The shared event dictionary

Defined once in `src/lib/analytics.js` as `GA_EVENTS`. The Mailchimp column is
what the same user action produces on the other site.

| Event | Main site | Mailchimp |
| --- | --- | --- |
| `page_view` | manual, on every client navigation | automatic, every page load |
| `quote_modal_open` | any of the ~17 quote CTAs, with `cta_source` | none — forms are inline |
| `form_start` | first keystroke in the quote or contact form | `form_start` (enhanced measurement) |
| `generate_lead` | quote or contact form submitted successfully | via the rule in section 5 |
| `form_error` | consent missing, API rejection, network failure | not available |
| `contact_click` | `tel:`, `mailto:`, Calendly — with `method` and `placement` | Calendly only, as outbound `click` |
| `design_project_save` | design saved in the bathroom tool | n/a |
| `design_project_load` | saved design reopened by email | n/a |
| `language_switch` | EN/ES switcher, `from_locale` / `to_locale` | n/a — English only |
| `search` | site search, debounced, `search_term` / `result_count` | n/a |

Every event also carries `locale` and an explicitly set, redacted
`page_location`.

Split the two platforms in any report with the built-in **hostname** dimension —
no custom parameter needed, and it works on the Mailchimp side where we cannot
set one.

**Where the code lives:**

- `src/lib/analytics.js` — dictionary, `trackEvent`, `trackPageView`,
  `sanitizeUrl`
- `src/components/analytics/google-analytics.jsx` — gtag loader
- `src/components/analytics/page-view-tracker.jsx` — client-navigation page views
- `src/components/analytics/contact-link.jsx` — `tel:` / `mailto:` click tracking

---

## 5. Make Mailchimp's events match

Mailchimp cannot send `generate_lead`. GA4 can rename its automatic events
instead, which keeps one conversion definition across both sites.

**Admin → (Data display) Events → Create event → Create**

- Custom event name: `generate_lead`
- Matching condition 1: `event_name` **equals** `form_submit`
- Matching condition 2: `hostname` **equals** `www.meconstructionrenovations.com`
- Leave **Copy parameters from the source event** on
- Switch **Mark as key event** on, in the same form

Key events are keyed by event *name* and apply property-wide, so that one toggle
also covers the `generate_lead` the app sends directly. Confirm it appears under
**Admin → (Data display) Key events**.

One key event fed by both sites means the conversion count in any report is the
real total rather than half of it.

### Custom dimensions

**Admin → (Data display) Custom definitions → Create custom dimensions**, Scope
**Event**, typing each parameter name into *Event parameter* — it will not
autocomplete until data has flowed:

`cta_source`, `form_id`, `method`, `placement`, `error_type`, `locale`,
`search_term`, `result_count`

A standard property allows 50 event-scoped dimensions, so there is plenty of
room.

---

## 6. Verify

With the env var deployed, open **Admin → DebugView** (or read `window.dataLayer`
in the browser console) and check in this order:

1. Load `/en` → one `config` with the measurement ID, and no separate `page_view`
   event — gtag sends the first one itself.
2. Navigate to another page in-app → exactly **one** `page_view`, whose
   `page_title` is the **new** page's title and whose `page_referrer` is the
   previous in-app URL.
3. Click a header phone number → `contact_click` with `method: "phone"`.
4. Open a quote CTA → `quote_modal_open` with the right `cta_source`. Type in the
   form → exactly one `form_start`, however many keys are pressed.
5. Load `/en/design/bathroom/configure?email=someone@example.com` → the
   `page_location` reads `email=redacted`.
6. Load a Mailchimp landing page → events arrive in the same property with
   `hostname` = `www.meconstructionrenovations.com`.
7. **Reports → Realtime**, break down by **hostname** → both hosts under the one
   property. That is the finish line.

---

## 7. Google Ads — relinking `AW-11277137176`

**Why this is needed.** That Ads tag was on the Mailchimp site *because* the ID
had been pasted into Mailchimp's "Google Analytics ID" field — Mailchimp simply
loads `gtag/js?id=<whatever is in the field>`. Replacing it with the GA4
measurement ID removed the Ads tag from the site. Mailchimp allows one ID only,
so both cannot coexist there.

The fix is better than what was there before: routing Ads through GA4 means Ads
sees leads from **both** sites, not just the Mailchimp half.

**Blocked on:** admin access to the Google Ads account that owns
`AW-11277137176`. Nobody on our side has it. This needs the client to either
grant access or perform the steps themselves.

### 7a. Link the accounts

Requires **Administrator or Editor** on the GA4 property **and Administrator on
the Ads account**.

1. GA4 → **Admin → (Product links) Google Ads links** → **Link**
2. **Choose Google Ads accounts** → select the account owning `AW-11277137176` →
   **Confirm** → **Next**
3. **Enable Personalized Advertising** — leave on (this is what feeds remarketing
   audiences, replacing what the removed tag did)
4. **Enable Auto-Tagging** — turn on, so `gclid` is appended to ad clicks and GA4
   can attribute them
5. **Next** → review → **Submit**

Ads data appears in GA4 reports within about 48 hours.

### 7b. Import the conversion into Ads

The link alone does not create a conversion. `generate_lead` must already be
marked as a key event (section 5).

1. Google Ads → **Goals → Conversions → Summary**
   (older navigation: **Tools and Settings → Measurement → Conversions**)
2. **+ New conversion action**
3. **Import** → **Google Analytics 4 properties** → **Continue**
4. Tick **`generate_lead`** → **Import and continue** → **Done**

### 7c. Clean up

- Imported GA4 conversions default to **secondary**. If this should drive
  bidding, open the conversion action and set it to **Primary**.
- Find the old Ads-native conversion action that the raw `AW-` tag fed and set it
  to secondary or remove it, so the same lead is not counted twice.
- Expect a gap in Ads conversion data covering the period between the Mailchimp
  republish and this link being completed. Historical data is not lost;
  collection simply stopped.

---

## 8. Known gaps

Worth stating plainly rather than discovering later in a report.

- **Phone taps on the Mailchimp site are not measured.** Enhanced measurement
  only auto-tracks outbound `http(s)` clicks, so `tel:` links are invisible, and
  the plan in use offers no way to add a click handler. The main site measures
  them via `contact_click`; the apex does not. Any comparison of phone intent
  between the two sites understates Mailchimp. Fixing it needs a Mailchimp plan
  with a custom-code block, or moving the landing pages onto the Next.js app.
- **The main site is not linked from the apex.** The Mailchimp homepage has no
  link to `home.meconstructionrenovations.com`, so cross-site sessions are rare
  today and the shared-cookie setup will not show much traffic until that link
  exists. Worth raising with the client — it is a bigger win than most of this
  document.
- **No consent banner on either site.** Consistent, and fine for Illinois today.
  If the client starts advertising into states with opt-out privacy laws, Consent
  Mode v2 has to go onto both sites at once or the two diverge again.
- **`mc_cid` / `mc_eid` in campaign URLs.** Mailchimp appends these to campaign
  links. They are pseudonymous, not addresses, and are left alone so campaign
  debugging still works. If policy tightens, add `mc_eid` to the same URL query
  parameter redaction list from section 2.4.

---

## Reference

- [Cross-domain measurement](https://support.google.com/analytics/answer/10071811)
- [Unwanted referrals](https://support.google.com/analytics/answer/10327750)
- [Enhanced measurement](https://support.google.com/analytics/answer/9216061)
- [Redact data](https://support.google.com/analytics/answer/13544947)
- [Data retention](https://support.google.com/analytics/answer/7667196)
- [Create events](https://support.google.com/analytics/answer/10085872)
- [Key events](https://support.google.com/analytics/answer/12844695)
- [Custom dimensions](https://support.google.com/analytics/answer/14239696)
- [Move a property](https://support.google.com/analytics/answer/9305872)
- [Link Google Ads and Analytics](https://support.google.com/analytics/answer/9379420)
- [Create Ads conversions from Analytics key events](https://support.google.com/google-ads/answer/10632359)
- [Mailchimp: use Google Analytics](https://mailchimp.com/help/use-google-analytics/)
- [Mailchimp: manage your website](https://mailchimp.com/help/manage-your-website/)
