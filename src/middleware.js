import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req) {
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
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
