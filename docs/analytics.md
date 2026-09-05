# GA4 setup: keeping both sites consistent

Two sites sell the same business:

| Site | Host | Platform |
| --- | --- | --- |
| Marketing site + campaign landing pages | `www.meconstructionrenovations.com` (apex redirects here) | Mailchimp |
| Main website | `home.meconstructionrenovations.com` | This app, on Vercel |

They report into **one GA4 property and one web data stream**, so a visitor who
arrives on a Mailchimp campaign page and continues to this app is one user with
one session, and the campaign that brought them keeps the credit.

Mailchimp only accepts a pasted measurement ID — it cannot fire custom events,
and the free plan has no custom-code block — so it is the constraint that sets
the shape of everything below. Anything Mailchimp cannot send is either renamed
into our dictionary inside GA4, or accepted as a known gap.

## 1. One measurement ID, three places

Create (or reuse) a single GA4 property with one web data stream on
`meconstructionrenovations.com`. Take its `G-XXXXXXXXXX` measurement ID and put
it in all three places:

1. **This app** — `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env` for local work, and
   in Vercel under Project Settings → Environment Variables for Production,
   Preview and Development. It is inlined at build time, so a change needs a
   redeploy. Leave it unset and the tag is not rendered at all: that is how
   preview builds stay out of the client's data.
2. **Mailchimp website** — Website → Settings → Site tracking → Edit →
   *Track with Google Analytics* → paste the ID → Save, then **republish**.
   Tracking changes do not go live until the site is republished.
3. **Every Mailchimp landing page** — Campaigns → All campaigns → the landing
   page → Edit → Settings & Tracking → *Track with Google Analytics* → paste
   the ID → Save and publish. This is **per landing page**, and it is the step
   that gets forgotten: a new campaign page ships untracked unless someone ticks
   the box. Make it part of the campaign checklist.

Do not create a second data stream for the subdomain. Two streams split users
and sessions, which is exactly the inconsistency we are removing.

### Why no Google Tag Manager

GTM would be the better container, but Mailchimp's field takes a measurement ID
and the free plan cannot inject a container snippet. Running GTM here and a bare
ID there would mean two different configurations to keep in step. Direct gtag on
both sides is the version that stays consistent.

## 2. GA4 admin settings

Get to the stream: **Admin → (Data collection and modification) Data streams →
Web → click the stream**. Its detail page has two areas that matter, and they are
not nested in each other: the **Events** block near the top, and the **Configure
tag settings** panel at the bottom.

In **Configure tag settings** (bottom of the stream page):

- **Configure your domains** — add
  `meconstructionrenovations.com`. Both hostnames are subdomains of it, so the
  `_ga` cookie is already shared and no cross-domain linker is needed. This entry
  is what stops apex ↔ subdomain hops from being counted as new sessions.
- **List unwanted referrals** — **click "Show all" first**; this one is not in
  the short default list. Then add `meconstructionrenovations.com`. Without it,
  traffic arriving on this app from the Mailchimp site is attributed to
  "meconstructionrenovations.com / referral" instead of the campaign that
  actually earned it.
In the **Events** section of the same page (not under tag settings):

- **Enhanced measurement** — leave the master switch on, click its **gear icon**,
  expand **Page views**, and uncheck the advanced sub-option **"Page changes
  based on browser history events"**. It is a setting *inside* Page views, not a
  row of its own. This app sends its own `page_view` on client-side
  navigation (see `src/components/analytics/page-view-tracker.jsx`); leaving the
  history trigger on double-counts every in-app navigation. Turning it off costs
  the Mailchimp side nothing, because those pages are server-rendered and each
  navigation is a full load that fires `page_view` on its own.
- **Redact data** — confirm **Email** redaction is on (it defaults to on for
  properties created after mid-2023, but not for older ones), then add `email`
  to the **URL query parameter** list, which is never populated automatically.
  The design tool carries the visitor's address as `?email=` in the URL. This app
  already redacts it before sending (see `sanitizeUrl` in
  `src/lib/analytics.js`), but the stream-level setting is the backstop that also
  covers anything Mailchimp sends. Web streams only — the setting does not exist
  for app streams.

**Admin → (Data collection and modification) Data retention:** set *Event data
retention* to **14 months** and Save. Standard properties offer only 2 or 14
months; the 2-month default is too short to compare this year's campaign season
against last year's.

## 3. The shared event dictionary

Defined once in `src/lib/analytics.js` as `GA_EVENTS`. The Mailchimp column is
what the same user action produces on the other site.

| Event | This app | Mailchimp |
| --- | --- | --- |
| `page_view` | manual, on every client navigation | automatic, on every page load |
| `quote_modal_open` | any of the ~17 "get a free quote" CTAs, with `cta_source` | no equivalent — forms are inline |
| `form_start` | first keystroke in the quote or contact form | `form_start` (enhanced measurement) |
| `generate_lead` | quote form or contact form submitted successfully | via the event-creation rule in section 4 |
| `form_error` | consent missing, API rejection, or network failure | not available |
| `contact_click` | `tel:`, `mailto:` and Calendly links, with `method` and `placement` | Calendly only, as an outbound `click` |
| `design_project_save` | design saved in the bathroom tool | n/a |
| `design_project_load` | saved design reopened by email | n/a |
| `language_switch` | EN/ES switcher, with `from_locale` and `to_locale` | n/a — English only |
| `search` | site search, debounced, with `search_term` and `result_count` | n/a |

Every event also carries `locale` and an explicitly-set, redacted
`page_location`.

Split the two platforms in any report with the built-in **hostname** dimension —
no custom parameter needed, and it works on the Mailchimp side where we cannot
set one.

## 4. Making Mailchimp's events match

Mailchimp cannot send `generate_lead`. GA4 can rename its automatic events
instead, which keeps one conversion definition across both sites.

**Admin → (Data display) Events → Create event → Create:**

- Custom event name: `generate_lead`
- Matching conditions:
  - `event_name` **equals** `form_submit`
  - `hostname` **equals** `www.meconstructionrenovations.com`
- Leave **Copy parameters from the source event** on.
- Switch **Mark as key event** on in the same form.

Key events are keyed by event *name* and apply property-wide, so that one toggle
also covers the `generate_lead` this app sends directly. Confirm it under
**Admin → (Data display) Key events**. One key event fed from both sites means
the conversion count in any report is the real total rather than half of it.

Register these as custom dimensions — **Admin → (Data display) Custom
definitions → Create custom dimensions**, Scope **Event**, with the parameter
name typed into *Event parameter* (it will not autocomplete until data has
flowed): `cta_source`, `form_id`, `method`, `placement`, `error_type`, `locale`,
`search_term`, `result_count`. A standard property allows 50.

## 5. Known gaps

Worth stating plainly rather than discovering later in a report:

- **Phone taps on the Mailchimp site are not measured.** Enhanced measurement
  only auto-tracks outbound `http(s)` clicks, so `tel:` links are invisible, and
  the free plan gives us no way to add a click handler. This app measures them
  via `contact_click`; the apex does not. Any comparison of phone intent between
  the two sites will understate Mailchimp. Fixing it means a paid Mailchimp plan
  with a custom-code block, or moving the landing pages onto this app.
- **The Google Ads tag `AW-11277137176` on the apex is not linked to GA4.** It
  currently fires on the Mailchimp site only, so conversions imported into Google
  Ads come from half the funnel. Link the GA4 property to the Ads account
  (Admin → Product links → Google Ads) and import `generate_lead` as the
  conversion, rather than maintaining a separate Ads-side conversion.
- **This app is not linked from the apex site.** The Mailchimp homepage has no
  link to `home.meconstructionrenovations.com`, so cross-site sessions are rare
  today and the shared-cookie setup will not show much until that link exists.
- **No consent banner on either site.** Consistent, and fine for Illinois today,
  but if the client starts advertising into states with opt-out privacy laws,
  Consent Mode v2 has to go on both sites at once or the data diverges again.

## 6. Verifying

With `NEXT_PUBLIC_GA_MEASUREMENT_ID` set, run `npm run build && npm run start`
and use GA4's **DebugView**, or read `window.dataLayer` in the console.

Check, in this order:

1. Load `/en` → one `config` with the measurement ID, no `page_view` event
   (gtag sends the first one itself).
2. Navigate to another page in-app → exactly one `page_view`, whose
   `page_title` is the **new** page's title and whose `page_referrer` is the
   previous in-app URL.
3. Click a header phone number → `contact_click` with `method: "phone"`.
4. Open a quote CTA → `quote_modal_open` with the right `cta_source`; type in
   the form → exactly one `form_start`, no matter how many keys are pressed.
5. Load `/en/design/bathroom/configure?email=someone@example.com` → the
   `page_location` reads `email=redacted`.
6. In GA4 Realtime, confirm both hostnames appear under the same property.
