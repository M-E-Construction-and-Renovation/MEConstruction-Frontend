# GA4 setup runbook — M&E Construction

Everything needed to get one consistent set of GA4 analytics across both of the
client's sites, in the order it must happen.

**Reading this runbook:** values shown as `like_this` are literal — type the
text, not the backticks. GA4 event and parameter names allow only letters,
digits and underscores, must start with a letter, and are case-sensitive.

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

Everything now runs in the **client's own Google accounts** — Analytics, Google
Ads and Mailchimp. Both blockers that previously held this up are gone.

> **The GA4 property was created fresh in the client's account, not moved.** A
> new property means a **new measurement ID** and an **empty history** — nothing
> configured on the earlier personal-account property carries over, and neither
> does its data. Treat that property as abandoned. If any key events, created
> events or custom dimensions were already set up there, they must be built again
> here (sections 2 and 5). Check before assuming a step is done.

Done:

- [x] GA4 property and web data stream created, in the client's account
- [x] App instrumented and building clean (code is merged; nothing renders until
      the env var is set)
- [x] Access to the Google Ads account owning `AW-11277137176`
- [x] Access to the client's Mailchimp

Verified working:

- [x] Main site instrumentation, checks 1–5 of section 6, in DebugView
- [x] New measurement ID pasted into the Mailchimp **website** and republished
- [x] Landing pages resolve to `www.meconstructionrenovations.com`, so the `_ga`
      cookie is shared with the main site and cross-site visitors stay one user
- [x] `generate_lead` counting as a key event (count reached 1) — section 7 is
      unblocked. Note this proves it counts *with* `value` / `currency` present;
      it does not settle whether the April 2026 requirement is real, and there is
      no reason to find out by removing them.

To do, in order:

- [ ] **Section 2** — data stream settings, on the new property
- [ ] **Section 5** — event rules and custom dimensions, on the new property
- [ ] **Section 3, place 4** — audit each campaign **landing page** for the
      **new** measurement ID, one at a time. Existing pages carry the old `AW-`
      Ads tag instead and are invisible in GA4. See section 8.
- [ ] **Section 6, checks 6–7** — the Mailchimp half, in Realtime by hostname.
- [x] ~~**Section 7** — Google Ads~~ **Not applicable.** The client no longer
      uses Google Ads and the account is canceled. Do not reactivate it. Section
      kept as the path back if they resume.

**Fill these in as soon as they are known:**

- Measurement ID (new property): `G-________________`
- Google Ads customer ID that owns `AW-11277137176`: `___-___-____`

---

## 1. Ownership — settled

**Resolved.** The property was created directly in the client's own Analytics
account, which is the outcome the old move-or-share procedure existed to reach.
Nothing to do here.

Kept as a standing rule rather than a step: the client's analytics history must
never live under a personal or agency Google account. If the account is lost or
the engagement ends, so is their data.

Two consequences of having started fresh rather than moving the original
property, both of which matter later in this runbook:

- **The measurement ID is different.** A property move would have preserved it;
  creating a new property does not. Every place holding the old ID is now
  pointing at a dead property — section 3 lists all four.
- **There is no history.** Reporting starts from first collection on the new
  property. Data in the abandoned one cannot be merged in, so if any of it is
  worth keeping, export it before the account goes away.

Confirm you hold **Administrator** on the new property before continuing —
sections 2, 5 and 7 all need it.

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

**Use the new property's ID.** Places 3 and 4 may still hold the ID of the
abandoned property; those need replacing, not just filling in. Anything left on
the old ID reports into a property nobody reads.

1. **Local `.env`**

   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. **Vercel** → Project → Settings → Environment Variables → same name and value
   on **Production only** → then **redeploy**.

   Deliberately *not* on Preview or Development. It is inlined at build time, so
   an existing deployment will not pick it up, and with the variable unset no tag
   renders at all — which is how branch previews and local builds stay out of the
   client's data. Ticking Preview would mix staging traffic into the same
   property with no way to separate it after the fact.

3. **Mailchimp website** — Website → Settings → Site tracking → Edit → tick
   *Track with Google Analytics* → paste the ID → Save → **Website → Edit Site →
   Publish Changes**.

   ⚠️ Previously done with the **old** property's ID. Replace it and republish —
   saving without publishing changes nothing on the live site.

4. **Every Mailchimp landing page**, individually — Campaigns → All campaigns →
   the landing page → Edit → Settings & Tracking → tick *Track with Google
   Analytics* → paste the ID → Save and publish.

   There is no bulk action, and any page already carrying the old ID must be
   edited and republished individually. A new campaign page ships untracked
   unless someone ticks this box, so put it on the campaign checklist.

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
`page_location`. `generate_lead` additionally carries `value` and `currency`
from `LEAD_VALUE` / `LEAD_CURRENCY` in `src/lib/analytics.js` — see the note
there; the figure is a placeholder until the client supplies a real one.

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

### What a Mailchimp landing page can and cannot report

Mailchimp accepts a pasted measurement ID and nothing else, so its pages get
**enhanced measurement only**. Worth knowing precisely, because the gaps are
invisible in reports:

| Action on a Mailchimp landing page | Reported |
| --- | --- |
| Page view | yes |
| Scroll to 90% | yes |
| Form submission | yes — `form_submit`, renamed to `generate_lead` by the rule above |
| Click through to another page | as a `page_view` of the destination |
| File download, embedded video | yes |
| Tap on a `tel:` link | **no** |
| Which specific button was clicked | **no** |

A button on one of those pages therefore splits three ways: one that submits a
form counts as a lead; one that navigates shows up as the destination's page
view, and because both hosts sit under one configured domain, `www.` → `home.`
is treated as internal rather than as leaving the site; one that dials a phone
number is invisible.

**The dependency to check:** the rule in this section only works if `form_submit`
is actually being sent, which comes from **Form interactions** inside enhanced
measurement (section 2.3, the same panel as the browser-history setting).
Default-on for new properties, but confirm it — with it off, Mailchimp form
submissions never become leads and nothing surfaces the reason.

**The asymmetry to remember when reading reports:** the main site reports which
CTA fired (`cta_source`, `placement`, `method`); Mailchimp reports that *a* form
was submitted. Never compare phone intent across the two — the main site counts
taps and Mailchimp cannot, so any such comparison understates Mailchimp
completely rather than slightly.

### Custom dimensions

**One dimension per parameter** — the *Event parameter* field takes a single
name, so this is eleven separate trips through the form, not one.

**Admin → (Data display) Custom definitions → Create custom dimensions**, Scope
**Event**. *Dimension name* is the label shown in reports and can be changed
later; *Event parameter* is the technical name and is **locked once saved**, so a
typo there means archiving and re-creating.

| Event parameter | Sent by |
| --- | --- |
| `cta_source` | `quote_modal_open` |
| `form_id` | every form event |
| `placement` | `contact_click` |
| `error_type` | `form_error` |
| `status` | `form_error` — HTTP status, separates 4xx from 5xx |
| `locale` | every event |
| `result_count` | `search` |
| `from_locale` | `language_switch` |
| `to_locale` | `language_switch` |
| `product_count` | `design_project_save` |
| `plumbing` | `design_project_save` |

**Do not register** `search_term`, `method` or `link_url` — GA4 has built-in
dimensions for all three. Confirm in any report's dimension picker before
spending a slot on a duplicate.

`result_count`, `product_count` and `status` are numeric, so GA4 would also
accept them as custom *metrics*, and a parameter cannot be both. Register them as
**dimensions**: the useful question is "which searches returned zero results",
which is a filter on a dimension. An average result count is not actionable.

Two things about the form:

- The *Event parameter* box will not autocomplete until GA4 has seen the
  parameter, and shows a "not seen in the last 48 hours" notice. Type the name
  manually and save through it — expected until the env var is deployed.
- Custom dimensions are **not retroactive**. They populate only from the moment
  they are saved; data already collected stays invisible even though the
  parameter was in the payload. Create these before real traffic, not after
  noticing an empty report.

A standard property allows 50 event-scoped dimensions, so eleven leaves plenty of
room.

---

## 6. Verify

### Prerequisites

Section 3 must be finished first: the **new** measurement ID set in Vercel
(Production), redeployed, and pasted into Mailchimp and every landing page, each
republished. Until then no tag renders and there is nothing to verify.

Confirm in the browser console on the live site that `window.dataLayer` exists.
`undefined` means the env var never reached the build — fix section 3, do not
continue.

### Step 0 — get into debug mode

**DebugView shows nothing until the browser is in debug mode**, and this app does
not set `debug_mode` on the config. Without this step the screen is empty and
gives no signal either way.

Install the **Google Analytics Debugger** Chrome extension, open the live site,
switch the extension **on**, then **reload**. It forces `debug_mode` on hits from
your browser only.

**Admin → DebugView** → pick your device in the *Debug device* dropdown, top
left. An empty dropdown means the extension is off, the page was not reloaded
after switching it on, or you are in the wrong property.

### The checks

Checks 1–5 are instant. 6–8 are not: Realtime lags 10–30 seconds, and the key
event count lags up to 24 hours.

1. **First load.** Load `/en` → **exactly one** `page_view`. Two means gtag's
   built-in page view and `PageViewTracker` are both firing on initial load,
   which double-counts every session.
2. **In-app navigation.** Click through to another page → exactly **one** new
   `page_view`, with `page_title` = the **new** page's title and `page_referrer`
   = the previous in-app URL. A title one page behind means the tracker read it
   before React committed.
3. **Phone click.** Upper-header phone number → `contact_click` with
   `method: "phone"`, `placement: "upper_header"`.
4. **Quote flow.** Any quote CTA → `quote_modal_open` with a `cta_source` from
   the real set: `bathroom_before_after`, `shower_before_after`,
   `bathtub_before_after`, `kitchen_before_after`, `basement_before_after`,
   `kitchen_personalization`, `basement_personalization`. Then type in the form →
   **exactly one** `form_start`, however many keys are pressed. A second one means
   the `hasStarted` guard is not holding.
5. **Email redaction — do not skip.** Load
   `/en/design/bathroom/configure?email=someone@example.com` and read
   `page_location` on the `page_view`. It must read `email=redacted`. A real
   address there is a GA4 terms violation, not merely a bug.
6. **Mailchimp side.** Open a Mailchimp landing page → events arrive in the
   **same property** with `hostname` = `www.meconstructionrenovations.com`.
   Nothing arriving means that page still holds the old measurement ID, or was
   saved but never republished. Every landing page is separate.
7. **Both hosts together.** **Reports → Realtime**, break down by **hostname** →
   both hosts under the one property. Does not need debug mode.
8. **The key event actually counting.** Submit a real quote form. Fast read:
   **Reports → Realtime**, key events card. Slow read: **Admin → (Data display)
   Key events** — but its count column lags up to 24 hours, so an empty count
   immediately after submitting means nothing.

   `generate_lead` must show a **non-zero count** — not merely exist. If it
   appears in DebugView but never counts, GA4 is refusing it, most likely over
   missing `value` / `currency` (see `LEAD_VALUE` in `src/lib/analytics.js`).
   Nothing in section 7b can be imported until this counts. That is the finish
   line.

### Your own traffic

These checks put your visits into the client's real data — debug traffic still
counts as traffic. Either accept a little noise during setup, or define internal
traffic first (**Admin → Data streams → Configure tag settings → Define internal
traffic**), which is worth doing regardless.

---

## 7. Google Ads — NOT APPLICABLE

> **The client has stopped using Google Ads.** Skip this entire section.
>
> **Do not click Reactivate.** The Ads account is canceled, and reactivating it
> would restart any campaign still in an *enabled* state — real spend, on an
> account the client has deliberately wound down.
>
> Kept in full below, unchanged, because it is the path back if they ever resume
> advertising. Everything it depends on — the property, the key event, the event
> dictionary — is being built anyway, so resuming would be a short job rather
> than a rebuild.
>
> Two live consequences elsewhere in this runbook:
>
> - The landing pages carrying `AW-11277137176` (section 8) now have **no**
>   argument for keeping that tag. It feeds an account nobody reads while
>   blocking GA4 from seeing those pages at all. Replace with the GA4 measurement
>   ID and republish, per page.
> - `LEAD_VALUE` / `LEAD_CURRENCY` in `src/lib/analytics.js` existed partly for
>   value-based bidding. Keep them — they may still be load-bearing for GA4
>   counting `generate_lead` as a key event — but nobody needs to chase the
>   client for a real revenue figure.

---

### 7 (archived). Relinking `AW-11277137176`

**Why this is needed.** That Ads tag was on the Mailchimp site *because* the ID
had been pasted into Mailchimp's "Google Analytics ID" field — Mailchimp simply
loads `gtag/js?id=<whatever is in the field>`. Replacing it with the GA4
measurement ID removed the Ads tag from the site. Mailchimp allows one ID only,
so both cannot coexist there.

The fix is better than what was there before: routing Ads through GA4 means Ads
sees leads from **both** sites, not just the Mailchimp half.

**Access is in place, but the account is CANCELED.** Google Ads shows *"Your
account isn't active — your ads aren't running because your account has been
canceled."* Nothing in this section completes until that is resolved, and it is
the client's decision, not ours:

- **Reactivating restarts spend.** Campaigns left *enabled* begin running again
  the moment the account is reactivated; only paused ones stay off. Audit every
  campaign's status and pause anything that should not go live — **before**
  reactivating — or the client pays for ads pointing at landing pages whose
  tracking is still wrong.
- **It may not be recoverable.** Accounts dormant over 15 months are auto-canceled,
  and after an extended period reactivation is no longer offered at all. Establish
  whether this account can be recovered before planning around it.
- Reactivation requires **Admin** on the Ads account.

Section 7a additionally needs Administrator or Editor on the GA4 property.

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

Two prerequisites, and skipping either produces a screen that looks broken rather
than one that says what is missing:

1. **7a must be done and propagated.** Allow **24–48 hours** after linking. The
   Ads conversion screens *scan* for available data sources; with no GA4 link,
   no Analytics property can appear, whichever route you take through the UI.
2. `generate_lead` must be a key event **and counting** — section 6, check 8.

> **If you land on "Choose data sources to measure conversions"** — a two-step
> wizard listing website / app / phone calls / offline — you are in the account
> onboarding flow, not this one. It appears when the account has no conversion
> tracking configured, and it will not offer Google Analytics if 7a is incomplete.
> **Click Cancel.** Do not accept its defaults:
>
> - *Conversions on a website → via Google Tag* installs an **Ads-native tag**.
>   Combined with the GA4 import below, every lead is counted twice — the exact
>   thing 7c exists to prevent.
> - *Conversions offline (Zapier)* and *Conversions from phone calls* arrive
>   pre-checked. Find out what the Zapier connection already feeds before
>   enabling it. Phone-call conversions may be worth having on their own merits
>   (section 8 notes phone intent on the Mailchimp site is unmeasured), but that
>   is a separate decision.

Google is mid-rollout here and its own help pages disagree. Current flow:

1. Google Ads → **Goals → Summary**
2. **+ Create conversion action**
3. Select the **Google Analytics property** (the property, not a stream)
4. Select **`generate_lead`** → **Select events**
5. **Save and continue**

If the account is still on the older navigation, it looks like this instead —
same outcome:

1. **Goals → Conversions → Summary** (or **Tools and Settings → Measurement →
   Conversions**)
2. **+ New conversion action**
3. **Import** → **Google Analytics 4 properties** → pick **Web** → **Continue**
4. Tick **`generate_lead`** → **Import and continue** → **Done**

**Then set it to primary.** Conversion actions arriving from Analytics land as
**secondary**, which reports them but does not feed Smart Bidding. Open the
action and check **Action optimization** — do not assume the default is right.
This is the step most likely to silently cost the client money on an automated
bidding strategy.

Conversion data takes up to 24 hours to appear in Ads after import.

### 7c. Clean up

- Find the old Ads-native conversion action that the raw `AW-` tag fed and set it
  to secondary or remove it, so the same lead is not counted twice.
- Do not run GA4-imported and Ads-native tracking for the same action at once —
  that double-counts. One source per conversion.
- Expect a gap in Ads conversion data covering the period between the Mailchimp
  republish and this link being completed. Historical data is not lost;
  collection simply stopped.

---

## 8. Known gaps

Worth stating plainly rather than discovering later in a report.

- **Landing page tracking is per-page and easy to miss.** A landing page from an
  earlier campaign was confirmed to carry a tag, and landing pages resolve to
  `www.meconstructionrenovations.com` — so the domain is right, the `_ga` cookie
  is shared with the main site, and section 5's `hostname` condition holds.

  What is *not* settled: Mailchimp has no bulk action, so every landing page
  carries its own tracking tick-box, and a page tagged before the property change
  may still hold the **old** measurement ID. A page reporting into the abandoned
  property is indistinguishable in GA4 from a page with no traffic. Verify per
  page from the live page rather than the Mailchimp UI:

  ```js
  window.dataLayer.filter((a) => a[0] === "config")
  ```

  Confirm the `G-` ID is the new property's. Put this on the campaign checklist —
  a new landing page ships untracked unless someone ticks the box.

  **Confirmed on the existing pages:** landing pages from earlier campaigns carry
  a `config` for `AW-11277137176` — the **Ads** tag, not GA4. Mailchimp's field
  takes one ID only, so those pages report to Google Ads and are entirely
  invisible in GA4: absent from the hostname breakdown, and no lead from them ever
  becomes a `generate_lead`. Each needs the GA4 measurement ID pasted and the page
  republished, individually.
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
