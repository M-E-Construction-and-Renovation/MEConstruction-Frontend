"use client";

import Script from "next/script";
import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from "@/lib/analytics";
import PageViewTracker from "./page-view-tracker";

/**
 * Loads gtag.js with the same measurement ID that the Mailchimp apex site uses,
 * so both hostnames land in one GA4 property and one data stream.
 *
 * Deliberately left at gtag defaults:
 *   - cookie_domain "auto" resolves to .meconstructionrenovations.com on both
 *     sites, so the _ga client ID carries across apex <-> subdomain and the two
 *     visits are one user. Setting a custom cookie domain or prefix here would
 *     break that, because Mailchimp gives us no way to match it.
 *   - send_page_view stays on, so the first page_view is emitted by gtag.js
 *     itself, in order, right after config. PageViewTracker only handles the
 *     client-side navigations that follow.
 */
export default function GoogleAnalytics() {
  if (!isAnalyticsEnabled()) return null;

  return (
    <>
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_location: (function () {
              try {
                var url = new URL(window.location.href);
                if (url.searchParams.has('email')) {
                  url.searchParams.set('email', 'redacted');
                  return url.toString();
                }
              } catch (e) {}
              return window.location.href;
            })()
          });
        `}
      </Script>
      <PageViewTracker />
    </>
  );
}
