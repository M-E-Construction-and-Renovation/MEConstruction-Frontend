import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, readGateToken } from "@/lib/design-gate";

/**
 * Returns the email the visitor passed the gate with.
 *
 * The gate cookie is httpOnly, so the configurator cannot read it directly --
 * which is the point. Previously a saved design was reloaded by putting the
 * address in the URL as `?email=`, which parks a real email address in browser
 * history, in the back button, and in anything that logs referrers. This route
 * replaces that: the address travels in a signed cookie and is handed to the
 * page only when the page asks.
 *
 * Returns `{ email: null }` rather than a 401 when there is no session. The
 * caller uses it to decide whether to attempt a load, and a missing session is
 * an ordinary state, not an error.
 */
export async function GET() {
  const store = await cookies();
  const token = await readGateToken(store.get(COOKIE_NAME)?.value);

  return NextResponse.json(
    { email: token?.email ?? null },
    // The answer is per-visitor and must never be cached by a CDN or the
    // browser, or one visitor's address is served to the next.
    { headers: { "Cache-Control": "no-store, private" } },
  );
}
