import { NextResponse } from "next/server";
import { z } from "zod";

// Define schema for input validation
const FormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.email("Valid email is required"),
  phone: z.string().optional(),
  zip: z.string().optional(),
  //   recaptchaToken: z.string().optional(),
});

// Helper: Verify reCAPTCHA --STAND BY
async function verifyRecaptcha(token) {
  if (!token) return false;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    const data = await res.json();
    return data.success && data.score >= 0.5;
  } catch {
    return false;
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate input
    const parsed = FormSchema.safeParse(body);
    if (!parsed.success) {
      const errorTree = z.treeifyError(parsed.error);

      return NextResponse.json({ error: errorTree }, { status: 400 });
    }

    const { email, firstName, lastName, phone, zip } = parsed.data;

    // Verify reCAPTCHA --STAND BY
    // const isHuman = await verifyRecaptcha(recaptchaToken);
    // if (!isHuman) {
    //   return NextResponse.json({ error: "Failed human verification" }, { status: 400 });
    // }

    // Prepare Mailchimp payload
    const data = {
      email_address: email,
      status_if_new: "subscribed", // handles duplicates gracefully
      status: "subscribed",
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
        PHONE: phone || "",
        ZIP: zip || "",
      },
    };

    // Upsert subscriber (add/update if exists)
    const subscriberHash = email.trim().toLowerCase();
    const subscriberUrl = `https://${
      process.env.MAILCHIMP_SERVER_PREFIX
    }.api.mailchimp.com/3.0/lists/${
      process.env.MAILCHIMP_LIST_ID
    }/members/${btoa(subscriberHash)}`;

    const response = await fetch(subscriberUrl, {
      method: "PUT", // PUT lets us add or update existing member
      headers: {
        Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Mailchimp error:", result);
      return NextResponse.json({ error: result }, { status: response.status });
    }

    return NextResponse.json(
      { message: "Successfully subscribed to the mailing list!" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
