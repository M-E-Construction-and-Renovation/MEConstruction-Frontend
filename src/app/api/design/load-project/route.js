import { NextResponse } from "next/server";
import { z } from "zod";
import supabase from "../../client";
import { checkRateLimit, clientIp, tooManyRequests } from "@/lib/rate-limit";

const QuerySchema = z.object({
  email: z.email("Valid email required").max(254),
});

// The saved-design flow deliberately has no login: a visitor types the email they
// saved with and gets their design back. That means this route must return the
// design and NOTHING else. The projects row also holds firstName, lastName,
// phone and zip, and selecting "*" handed all of it to anyone who could guess an
// email address.
const DESIGN_COLUMNS = "email, plumbing, selectedProducts";

export async function POST(req) {
  // Without a limit this route is an email-enumeration oracle: iterate addresses,
  // watch which ones return a project.
  const { allowed, retryAfter } = checkRateLimit(`load-project:${clientIp(req)}`, {
    limit: 10,
    windowMs: 60_000,
  });
  if (!allowed) return tooManyRequests(retryAfter);

  try {
    const body = await req.json();
    const parsed = QuerySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("projects")
      .select(DESIGN_COLUMNS)
      .eq("email", parsed.data.email)
      .maybeSingle();

    if (error) {
      console.error("load-project supabase error:", error);
      return NextResponse.json(
        { error: "Failed to load project. Something went wrong" },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: "No project found with this email" },
        { status: 404 }
      );
    }

    return NextResponse.json({ projects: data }, { status: 200 });
  } catch (err) {
    console.error("load-project route error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
