// Central GA4 layer for home.meconstructionrenovations.com.
//
// This app and the Mailchimp-hosted apex site (www.meconstructionrenovations.com,
// plus its campaign landing pages) report into the SAME GA4 property and the SAME
// web data stream, so that a visitor who moves between the two is one user with
// one session.
//
// Mailchimp only lets us paste a measurement ID -- it cannot send custom events --
// so anything Mailchimp emits automatically is renamed into the dictionary below
// using GA4 Admin > Events > Create event. Keep the names here in sync with those
// rules; renaming an event on one side only is what makes the two sites disagree.
//
// Split by platform in reports with the built-in `hostname` dimension:
//   home.meconstructionrenovations.com -> this app
//   www.meconstructionrenovations.com  -> Mailchimp

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

/** Shared event dictionary. Mirrored by the GA4 event-creation rules for Mailchimp. */
export const GA_EVENTS = {
  PAGE_VIEW: "page_view",
  // Lead funnel
  QUOTE_MODAL_OPEN: "quote_modal_open",
  FORM_START: "form_start",
  GENERATE_LEAD: "generate_lead",
  FORM_ERROR: "form_error",
  // Direct contact
  CONTACT_CLICK: "contact_click",
  // Design tool (this app only -- no Mailchimp equivalent)
  DESIGN_PROJECT_SAVE: "design_project_save",
  DESIGN_PROJECT_LOAD: "design_project_load",
  // Site behaviour
  LANGUAGE_SWITCH: "language_switch",
  SITE_SEARCH: "search",
};

const LOCALES = ["en", "es"];

/**
 * Query parameters that must never reach GA4.
 *
 * The design tool carries the visitor's address as ?email= (see
 * /design/bathroom/configure), and GA4 auto-collects page_location on every
 * event -- so without this, saving a design would send a real email address to
 * Google, which its terms forbid. Redacted here as defense in depth; the data
 * stream's own "Redact data" setting is the backstop that also covers Mailchimp.
 */
const REDACTED_QUERY_PARAMS = ["email"];

export function sanitizeUrl(href) {
  try {
    const url = new URL(href);
    let changed = false;

    REDACTED_QUERY_PARAMS.forEach((param) => {
      if (url.searchParams.has(param)) {
        url.searchParams.set(param, "redacted");
        changed = true;
      }
    });

    return changed ? url.toString() : href;
  } catch {
    return href;
  }
}

export function isAnalyticsEnabled() {
  return Boolean(GA_MEASUREMENT_ID);
}

/**
 * Idempotent version of the official gtag bootstrap. Safe to call before
 * gtag.js has loaded -- calls queue on dataLayer and replay on load -- and safe
 * to call after, because it never clobbers an existing gtag.
 */
function ensureGtag() {
  if (typeof window === "undefined") return null;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      // gtag.js requires the raw `arguments` object, not an array.
      window.dataLayer.push(arguments);
    };
  }
  return window.gtag;
}

/** Locale of the current URL, so every event can be sliced by language. */
function currentLocale() {
  if (typeof window === "undefined") return undefined;
  const segment = window.location.pathname.split("/")[1];
  return LOCALES.includes(segment) ? segment : undefined;
}

/**
 * Send a GA4 event.
 * @param {string} name  One of GA_EVENTS.
 * @param {Record<string, unknown>} [params]
 */
export function trackEvent(name, params = {}) {
  if (!isAnalyticsEnabled()) return;

  const gtag = ensureGtag();
  if (!gtag) return;

  const payload = {
    locale: currentLocale(),
    // Pinned explicitly, because gtag would otherwise read the raw URL -- which
    // on the design tool contains the visitor's email.
    page_location: sanitizeUrl(window.location.href),
    ...params,
  };

  // Drop empty values so GA4 does not register "(not set)" for them.
  Object.keys(payload).forEach((key) => {
    if (payload[key] === undefined || payload[key] === null || payload[key] === "") {
      delete payload[key];
    }
  });

  gtag("event", name, payload);
}

/**
 * Manual page_view for App Router client navigations.
 *
 * Enhanced measurement's "page changes based on browser history events" must be
 * OFF for this stream, or every client navigation is counted twice. Turning it
 * off costs the Mailchimp side nothing: those pages are server-rendered, so each
 * navigation is a full load that fires page_view on its own.
 */
export function trackPageView({ url, title, referrer } = {}) {
  if (!isAnalyticsEnabled()) return;
  if (typeof window === "undefined") return;

  trackEvent(GA_EVENTS.PAGE_VIEW, {
    page_location: sanitizeUrl(url ?? window.location.href),
    page_title: title ?? document.title,
    // Only set on client navigations, where it is the previous in-app URL. On the
    // first load gtag.js reads document.referrer itself; re-sending that external
    // referrer on every navigation would re-attribute the session.
    page_referrer: referrer ? sanitizeUrl(referrer) : undefined,
  });
}

export { ensureGtag };
