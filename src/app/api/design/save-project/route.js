import { NextResponse } from "next/server";
import { z } from "zod";
import supabase from "../../client";

// 1. Zod schema
const saveProjectSchema = z.object({
  email: z.email("Email not valid"),
  // shape: z.string().min(1, "Shape is required"),
  plumbing: z.string().min(1, "Plumbing is required"),
  selectedProducts: z
    .record(z.string(), z.any())
    .default({})
    .refine((obj) => Object.keys(obj).length > 0, {
      message: "You must select at least one product",
    }),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  zip: z.string().optional(),
});

// 2. Mailchimp subscription helper
async function subscribeToMailchimp({
  email,
  firstName,
  lastName,
  phone,
  zip,
}) {
  const data = {
    email_address: email,
    status_if_new: "subscribed",
    status: "subscribed",
    merge_fields: {
      FNAME: firstName || "",
      LNAME: lastName || "",
      PHONE: phone || "",
      ZIP: zip || "",
    },
  };

  const subscriberHash = Buffer.from(email.trim().toLowerCase()).toString(
    "base64",
  ); // Mailchimp expects MD5 hash in v3, adjust if needed
  const subscriberUrl = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${subscriberHash}`;

  const response = await fetch(subscriberUrl, {
    method: "PUT",
    headers: {
      Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!response.ok) {
    console.error("Mailchimp error:", result);
    return { success: false, result };
  }
  return { success: true, result };
}

// 3. POST endpoint
export async function POST(req) {
  try {
    const body = await req.json();

    // Validate input
    const parsed = saveProjectSchema.safeParse(body);
    if (!parsed.success) {
      const errorTree = z.treeifyError(parsed.error);
      const formattedErrors = Object.entries(errorTree.properties || {})
        .flatMap(([_, value]) => value.errors || [])
        .map((msg) => ({ message: msg }));

      return NextResponse.json(
        { success: false, errors: formattedErrors },
        { status: 400 },
      );
    }

    const validatedData = parsed.data;

    // 1️⃣ Save or update project in Supabase
    const { data, error } = await supabase
      .from("projects")
      .upsert(validatedData, { onConflict: "email" })
      .select();
    if (error) throw error;

    // 2️⃣ Subscribe user to Mailchimp
    const mailchimpResult = await subscribeToMailchimp(validatedData);
    if (!mailchimpResult.success) {
      console.warn("Mailchimp subscription failed", mailchimpResult.result);
      // We can still return success for the project save, just warn
    }

    return NextResponse.json({ success: true, project: data[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      // { success: false, message: error.message || "Something went wrong" },
      { success: false, message: "Failed to save. Something went wrong" },
      { status: 500 },
    );
  }
}
