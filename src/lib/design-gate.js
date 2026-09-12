/**
 * The design tool's lead gate.
 *
 * This is a LEAD GATE, NOT A LOCK. There is no login on this site, the 3D assets
 * are public files and the configurator runs in the browser, so anyone who reads
 * the page source gets in. That is accepted: the job is to collect an address
 * from the ordinary visitor, not to protect a secret. Do not describe it to the
 * client as protection.
 *
 * What the signature buys is narrower and still worth having: the email inside
 * the cookie is used server-side to load a saved design, so it must not be
 * something a visitor can retype to read somebody else's design.
 *
 * Built on **Web Crypto, not `node:crypto`**, and every function is async as a
 * result. The gate is enforced in middleware, middleware runs on the Edge
 * Runtime, and the Edge Runtime has no Node built-ins -- importing `node:crypto`
 * here builds without failing and then breaks at request time on production.
 * Web Crypto is available in both runtimes, so one module serves middleware and
 * the API routes alike.
 */

const COOKIE_NAME = "me_design_access";

// Long enough that a visitor coming back next week is not asked again, short
// enough that a shared or public machine forgets.
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

export { COOKIE_NAME, MAX_AGE_SECONDS };

/**
 * Missing secret disables the gate rather than sealing the tool shut.
 *
 * A lead gate that fails closed turns one unset environment variable into a
 * dead design tool on production -- losing the leads it exists to capture, and
 * looking like a broken site rather than a misconfigured one. Failing open
 * costs a few uncaptured addresses until someone reads the logs.
 */
function secret() {
  const value = process.env.DESIGN_GATE_SECRET;
  if (!value) {
    console.error(
      "DESIGN_GATE_SECRET is not set -- the design tool lead gate is DISABLED. " +
        "Visitors reach the configurator without giving an email.",
    );
    return null;
  }
  return value;
}

export function gateIsConfigured() {
  return Boolean(process.env.DESIGN_GATE_SECRET);
}

const encoder = new TextEncoder();

function toBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(value) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmacKey(rawSecret, usage) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(rawSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    usage,
  );
}

/**
 * Build the cookie value: `<base64url(json)>.<base64url(hmac)>`.
 * Returns null when the gate is unconfigured, so callers skip setting it.
 */
export async function createGateToken({ email, subscribed }) {
  const rawSecret = secret();
  if (!rawSecret) return null;

  const payload = toBase64Url(
    encoder.encode(
      JSON.stringify({
        email,
        subscribed: Boolean(subscribed),
        issuedAt: Date.now(),
      }),
    ),
  );

  const key = await hmacKey(rawSecret, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));

  return `${payload}.${toBase64Url(new Uint8Array(signature))}`;
}

/**
 * Verify and decode a cookie value.
 *
 * @returns {Promise<{ email: string, subscribed: boolean, issuedAt: number } | null>}
 *          null for anything not provably ours and unexpired.
 */
export async function readGateToken(value) {
  const rawSecret = secret();
  if (!rawSecret || typeof value !== "string") return null;

  const dot = value.lastIndexOf(".");
  if (dot <= 0) return null;

  const payload = value.slice(0, dot);
  const signature = value.slice(dot + 1);

  let valid = false;
  try {
    const key = await hmacKey(rawSecret, ["verify"]);
    // `subtle.verify` does the constant-time comparison itself, so there is no
    // hand-rolled equality check to get wrong.
    valid = await crypto.subtle.verify(
      "HMAC",
      key,
      fromBase64Url(signature),
      encoder.encode(payload),
    );
  } catch {
    return null;
  }

  if (!valid) return null;

  try {
    const json = new TextDecoder().decode(fromBase64Url(payload));
    const data = JSON.parse(json);
    if (!data?.email) return null;

    // The cookie's own Max-Age already expires it in the browser; this catches a
    // token replayed after that window by something that kept a copy.
    if (Date.now() - (data.issuedAt ?? 0) > MAX_AGE_SECONDS * 1000) return null;

    return data;
  } catch {
    return null;
  }
}

/** Options shared by every place that writes the cookie. */
export function gateCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  };
}
