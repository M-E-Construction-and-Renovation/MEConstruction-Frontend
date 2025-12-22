import { NextResponse } from "next/server";
import { z } from "zod";
import supabase from "../../client";

// Zod validation schema
const QuerySchema = z.object({
  email: z.email("Valid email required"),
});

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate email
    const { email } = QuerySchema.parse(body);

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("email", email)
      .single(); // will return a single object

    if (error) {
      return NextResponse.json(
        {
          error:
            error.code === "PGRST116"
              ? "No project found with this email"
              : // : error.message,
                "Failed to load project. Something went wrong",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ projects: data }, { status: 200 });
  } catch (err) {
    // Handle Zod errors cleanly
    if (err.issues?.[0]?.message) {
      return NextResponse.json(
        { error: err.issues[0].message },
        { status: 400 }
      );
    }

    // Other errors
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
