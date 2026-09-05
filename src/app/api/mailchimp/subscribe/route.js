import { NextResponse } from "next/server";
import { z } from "zod";
import { upsertSubscriber } from "@/lib/mailchimp";
import { checkRateLimit, clientIp, tooManyRequests } from "@/lib/rate-limit";

// Lengths are capped so the route cannot be used to push arbitrary payloads into
// the client's Mailchimp audience.
const FormSchema = z.object({
  firstName: z.string().trim().max(100).optional(),
  lastName: z.string().trim().max(100).optional(),
  email: z.email("Valid email is required").max(254),
  phone: z.string().trim().max(32).optional(),
  zip: z.string().trim().max(16).optional(),
});

export async function POST(req) {
  // This endpoint writes to the client's audience, so it is the obvious target
  // for list poisoning. Five submissions a minute is far above what a real
  // visitor filling in a quote form ever needs.
  const { allowed, retryAfter } = checkRateLimit(
    `subscribe:${clientIp(req)}`,
    { limit: 5, windowMs: 60_000 }
  );
  if (!allowed) return tooManyRequests(retryAfter);

  try {
    const body = await req.json();

    const parsed = FormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: { title: "Please check the details you entered." } },
        { status: 400 }
      );
    }

    const result = await upsertSubscriber(parsed.data);

    if (!result.ok) {
      return NextResponse.json(
        { error: { title: "We could not save your details. Please try again." } },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed to the mailing list!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("subscribe route error:", err);
    return NextResponse.json(
      { error: { title: "Something went wrong. Please try again." } },
      { status: 500 }
    );
  }
}
