import { NextResponse } from "next/server";
import { z } from "zod";
import supabase from "../../client";
import { upsertSubscriber } from "@/lib/mailchimp";
import { checkRateLimit, clientIp, tooManyRequests } from "@/lib/rate-limit";

// A saved design is one row per email, and selectedProducts was an unbounded
// `record(string, any)` — so the route accepted arbitrarily large JSON straight
// into the client's database. Bounded here instead.
const MAX_SELECTED_PRODUCTS = 60;
const MAX_PAYLOAD_BYTES = 128 * 1024;

const saveProjectSchema = z.object({
  email: z.email("Email not valid").max(254),
  plumbing: z.string().trim().min(1, "Plumbing is required").max(64),
  selectedProducts: z
    .record(z.string().max(120), z.any())
    .refine((obj) => Object.keys(obj).length > 0, {
      message: "You must select at least one product",
    })
    .refine((obj) => Object.keys(obj).length <= MAX_SELECTED_PRODUCTS, {
      message: "Too many products selected",
    }),
  firstName: z.string().trim().max(100).optional(),
  lastName: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(32).optional(),
  zip: z.string().trim().max(16).optional(),
});

export async function POST(req) {
  const { allowed, retryAfter } = checkRateLimit(`save-project:${clientIp(req)}`, {
    limit: 20,
    windowMs: 60_000,
  });
  if (!allowed) return tooManyRequests(retryAfter);

  try {
    const raw = await req.text();

    if (raw.length > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { success: false, message: "Design is too large to save." },
        { status: 413 }
      );
    }

    const parsed = saveProjectSchema.safeParse(JSON.parse(raw));

    if (!parsed.success) {
      const formattedErrors = parsed.error.issues.map((issue) => ({
        message: issue.message,
      }));

      return NextResponse.json(
        { success: false, errors: formattedErrors },
        { status: 400 }
      );
    }

    const validatedData = parsed.data;

    const { data, error } = await supabase
      .from("projects")
      .upsert(validatedData, { onConflict: "email" })
      .select("email, plumbing, selectedProducts");

    if (error) throw error;

    // A failed subscribe must not fail the save — the visitor's design is the
    // thing they asked us to keep.
    const mailchimp = await upsertSubscriber(validatedData);
    if (!mailchimp.ok) {
      console.warn("Mailchimp subscription failed during design save");
    }

    return NextResponse.json({ success: true, project: data?.[0] ?? null });
  } catch (error) {
    console.error("save-project route error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save. Something went wrong" },
      { status: 500 }
    );
  }
}
