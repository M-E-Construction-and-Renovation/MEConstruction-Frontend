import { NextResponse } from "next/server";
import { COOKIE_NAME, gateIsConfigured, readGateToken } from "@/lib/design-gate";

const PUBLIC_FILE = /\.(.*)$/;

// Pages behind the design tool's lead gate, without the locale prefix.
const GATED_PATHS = ["/design/bathroom/configure"];

// Where an ungated visitor is sent instead.
const GATE_PATH = "/design/bathroom/start";

export async function middleware(req) {
  // Make sure req.nextUrl exists
  if (!req.nextUrl) return;

  const { pathname } = req.nextUrl;

  // Skip API, Next internals, and static files
  if (
    !pathname || // safety check
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const locales = ["en", "es"];
  const defaultLocale = "en";

  // Detect if pathname starts with a valid locale
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!hasLocale) {
    // Check for cookie first
    const localeCookie = req.cookies.get("NEXT_LOCALE")?.value;
    const redirectLocale = localeCookie || defaultLocale;

    const url = req.nextUrl.clone();
    url.pathname = `/${redirectLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return await designGate(req, pathname, locales);
}

/**
 * Lead gate for the design tool.
 *
 * Enforced here rather than inside the page so the configurator never renders
 * for an ungated visitor -- a client-side check would paint the tool and then
 * snatch it away, which reads as a bug and shows the thing we are gating.
 *
 * It is a lead gate, not a lock: the assets are public and the configurator runs
 * in the browser, so this stops the ordinary visitor, not a determined one. See
 * `src/lib/design-gate.js`.
 */
async function designGate(req, pathname, locales) {
  // Unconfigured means OFF, not shut. With no signing key no cookie can be
  // issued, so gating here would bounce the visitor between the gate and the
  // configurator forever -- one unset environment variable turning the design
  // tool into an infinite redirect on production.
  if (!gateIsConfigured()) return;

  const locale = locales.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (!locale) return;

  const withoutLocale = pathname.slice(`/${locale}`.length) || "/";
  if (!GATED_PATHS.some((p) => withoutLocale === p || withoutLocale.startsWith(`${p}/`))) {
    return;
  }

  if (await readGateToken(req.cookies.get(COOKIE_NAME)?.value)) return;

  // Carry the whole query string across, so the plumbing choice the visitor
  // already made survives the detour and they are not asked for it twice.
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${GATE_PATH}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
