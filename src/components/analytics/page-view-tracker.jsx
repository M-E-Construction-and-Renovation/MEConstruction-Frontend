"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

// <title> is swapped by Next's head manager after this effect runs, so the send
// is delayed a beat -- otherwise page_title reports the page we just left. A
// timer rather than requestAnimationFrame, which is throttled to a standstill in
// a background tab.
const TITLE_SETTLE_MS = 100;

function PageViewReporter() {
  const pathname = usePathname();
  // useSearchParams returns a fresh object on every render, so the effect keys off
  // the serialized string. Depending on the object re-runs the effect on every
  // render, and the cleanup then cancels the pending send before it ever fires.
  const query = useSearchParams().toString();

  // The first page_view comes from gtag.js itself (see GoogleAnalytics), so the
  // initial URL is seeded here rather than reported.
  const previousUrl = useRef(null);

  useEffect(() => {
    const url = `${window.location.origin}${pathname}${query ? `?${query}` : ""}`;

    if (previousUrl.current === null) {
      previousUrl.current = url;
      return;
    }
    if (previousUrl.current === url) return;

    const referrer = previousUrl.current;
    previousUrl.current = url;

    const timer = setTimeout(() => {
      trackPageView({ url, title: document.title, referrer });
    }, TITLE_SETTLE_MS);

    return () => clearTimeout(timer);
  }, [pathname, query]);

  return null;
}

/**
 * Sends page_view on App Router client navigations.
 *
 * useSearchParams opts the subtree into client-side rendering, so it is isolated
 * behind Suspense to keep the rest of the page statically rendered. Campaign
 * traffic from Mailchimp arrives with utm_* and mc_cid on the URL, so query
 * strings are part of the reported page_location.
 */
export default function PageViewTracker() {
  return (
    <Suspense fallback={null}>
      <PageViewReporter />
    </Suspense>
  );
}
