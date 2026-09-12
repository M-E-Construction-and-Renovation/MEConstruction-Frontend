import { NextResponse } from "next/server";
import { z } from "zod";
import supabase from "../../client";
import { upsertSubscriber } from "@/lib/mailchimp";
import { checkRateLimit, clientIp, tooManyRequests } from "@/lib/rate-limit";
import { COOKIE_NAME, createGateToken, gateCookieOptions } from "@/lib/design-gate";
import { emailField } from "@/lib/email";

/**
 * The design tool's lead gate.
 *
 * Takes an email before the configurator opens, records it as a lead, optionally
 * subscribes it, and hands back a signed cookie so the visitor is asked once and
 * not again.
 *
 * Consent is explicit: `subscribe` arrives false unless the visitor ticked the
 * box. Handing an address over to open a tool is not the same as asking for
 * marketing email, and quietly subscribing people generates spam complaints that
 * damage deliverability for every campaign, not just this one.
 */

// Disposable domains are the bulk of the junk a front gate attracts. A short
// list catches most of it; a long one is a maintenance burden that a determined
// visitor routes around anyway, and this is a lead gate, not a bouncer.
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "temp-mail.org",
  "throwawaymail.com",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
  "dispostable.com",
  "maildrop.cc",
  "fakeinbox.com",
  "mailnesia.com",
  "spamgourmet.com",
]);

const AccessSchema = z.object({
  email: emailField("Please enter a valid email address."),
  firstName: z.string().trim().max(100).optional(),
  subscribe: z.boolean().optional(),
});

export async function POST(req) {
  // Looser than the subscribe route's five: a visitor who mistypes their address
  // twice and then resumes a saved design is doing nothing wrong.
  const { allowed, retryAfter } = checkRateLimit(`design-access:${clientIp(req)}`, {
    limit: 10,
    windowMs: 60_000,
  });
  if (!allowed) return tooManyRequests(retryAfter);

  try {
    const parsed = AccessSchema.safeParse(await req.json());

    if (!parsed.success) {
      return NextResponse.json(
        { error: { title: parsed.error.issues[0]?.message ?? "Please check your email address." } },
        { status: 400 },
      );
    }

    // Already trimmed and lowercased by `emailField`.
    const { email, firstName, subscribe } = parsed.data;

    const domain = email.split("@")[1] ?? "";
    if (DISPOSABLE_DOMAINS.has(domain)) {
      return NextResponse.json(
        { error: { title: "Please use a permanent email address." } },
        { status: 400 },
      );
    }

    // Does this address already have a design? Drives the "resume" offer on the
    // gate. A failure here must not block entry -- worst case we do not offer
    // the resume and the visitor starts fresh, which is the normal path anyway.
    let hasSavedDesign = false;
    try {
      const { data } = await supabase
        .from("projects")
        .select("email")
        .eq("email", email)
        .maybeSingle();
      hasSavedDesign = Boolean(data);
    } catch (err) {
      console.warn("design-access: saved-design lookup failed", err);
    }

    // Record the lead. This is the point of the gate: a visitor who opens the
    // configurator and never saves is still someone who raised their hand, and
    // without this row that address is lost the moment they close the tab.
    try {
      const { error } = await supabase.from("design_leads").upsert(
        {
          email,
          firstName: firstName || null,
          subscribed: Boolean(subscribe),
          lastSeenAt: new Date().toISOString(),
        },
        { onConflict: "email" },
      );
      if (error) throw error;
    } catch (err) {
      // Logged, not fatal. Losing a lead row is bad; refusing a visitor entry to
      // the tool because a table is missing is worse.
      console.error("design-access: lead upsert failed", err);
    }

    if (subscribe) {
      const result = await upsertSubscriber({ email, firstName });
      if (!result.ok) {
        console.warn("design-access: Mailchimp subscribe failed", result.status);
      }
    }

    const response = NextResponse.json({ ok: true, hasSavedDesign });

    const token = await createGateToken({ email, subscribed: Boolean(subscribe) });
    if (token) {
      response.cookies.set(COOKIE_NAME, token, gateCookieOptions());
    }

    return response;
  } catch (err) {
    console.error("design-access route error:", err);
    return NextResponse.json(
      { error: { title: "Something went wrong. Please try again." } },
      { status: 500 },
    );
  }
}
