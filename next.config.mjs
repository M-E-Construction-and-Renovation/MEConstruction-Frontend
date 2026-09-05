/**
 * Security headers.
 *
 * The site previously sent none, so it was framable by any origin, leaked full
 * URLs (including the design tool's `?email=`) as the Referer to third parties,
 * and let browsers MIME-sniff responses.
 *
 * No Content-Security-Policy yet: the app loads gtag from googletagmanager.com
 * and the design tool pulls GLB assets and blob/data URLs for Three.js, so a CSP
 * needs to be written against real traffic and shipped in report-only mode first.
 * Tracked in docs/analytics.md rather than guessed at here — a wrong CSP breaks
 * the 3D configurator silently.
 */
const securityHeaders = [
  // Deny framing outright; nothing on this site is meant to be embedded.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
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
