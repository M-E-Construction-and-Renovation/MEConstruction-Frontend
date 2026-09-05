"use client";

import { GA_EVENTS, trackEvent } from "@/lib/analytics";

/**
 * Anchor that reports a contact_click before handing the click to the browser.
 *
 * `tel:` and `mailto:` links are invisible to GA4's enhanced measurement -- it
 * only auto-tracks outbound http(s) clicks -- so calls and emails would otherwise
 * go uncounted. gtag sends the event with sendBeacon, so it survives the
 * navigation the click triggers.
 *
 * Exists as a client component so server-rendered layouts (the sticky header, the
 * closing CTA) can use it without becoming client components themselves.
 *
 * @param {"phone"|"email"|"calendly"|"social"} method
 * @param {string} placement Where on the page the link sits, e.g. "upper_header".
 */
export default function ContactLink({
  method,
  placement,
  href,
  children,
  onClick,
  ...props
}) {
  const handleClick = (event) => {
    trackEvent(GA_EVENTS.CONTACT_CLICK, {
      method,
      placement,
      link_url: href,
    });
    onClick?.(event);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
