/**
 * Security headers.
 *
 * The site previously sent none, so it was framable by any origin, leaked full
 * URLs (including the design tool's `?email=`) as the Referer to third parties,
 * and let browsers MIME-sniff responses.
 *
 * Framing is no longer refused outright: the XU Tech Labs portfolio embeds this
 * build as client work, so that one origin is allowed and every other is not.
 * See `FRAME_ANCESTORS` below.
 *
 * No Content-Security-Policy yet: the app loads gtag from googletagmanager.com
 * and the design tool pulls GLB assets and blob/data URLs for Three.js, so a CSP
 * needs to be written against real traffic and shipped in report-only mode first.
 * Tracked in docs/analytics.md rather than guessed at here — a wrong CSP breaks
 * the 3D configurator silently.
 */
/**
 * Who may put this site in a frame.
 *
 * Everything except these origins is still refused, so the quote form cannot be
 * overlaid with invisible controls on a page we do not control -- which is the
 * attack the old blanket DENY existed to stop.
 *
 * `www.` is listed separately on purpose: `frame-ancestors` matches the host
 * exactly, so `xutechlabs.com` does not cover `www.xutechlabs.com`. Whichever
 * one the portfolio actually serves, both work.
 */
const FRAME_ANCESTORS = [
  "'self'",
  "https://xutechlabs.com",
  "https://www.xutechlabs.com",
].join(" ");

const securityHeaders = [
  // Framing is allowed for the XU Tech Labs portfolio, which showcases this
  // build, and refused everywhere else.
  //
  // Deliberately NO `X-Frame-Options`. It has no working allowlist -- the old
  // ALLOW-FROM value is dead in every current browser, leaving only DENY and
  // SAMEORIGIN -- so keeping it here would override the allowance above and
  // block the portfolio anyway. `frame-ancestors` supersedes it wherever both
  // are understood, so dropping it is the correct move, not an omission.
  // Re-adding it will silently break the embed.
  { key: "Content-Security-Policy", value: `frame-ancestors ${FRAME_ANCESTORS}` },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send the origin cross-site, the full URL same-origin. Keeps analytics
  // referrers useful without handing query strings to third parties.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Nothing here needs these; deny by default.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  images: {
    // Next 16 will reject any `quality` prop not declared here. These are the
    // values used across the redesign: photographic heroes sit at 80-85, the
    // before/after pairs and the configurator screenshot go higher because
    // they carry fine detail that compression smears.
    qualities: [75, 80, 82, 85, 88, 90],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
