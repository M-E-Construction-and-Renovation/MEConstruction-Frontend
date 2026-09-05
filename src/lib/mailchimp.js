import { createHash } from "node:crypto";

/**
 * Shared Mailchimp audience upsert.
 *
 * Previously duplicated in the subscribe route and the design save route, and
 * both copies built the subscriber hash with base64. Mailchimp's Marketing API
 * v3 addresses a contact by the **MD5 hash of the lowercased email address** —
 * with any other value the PUT does not resolve to the intended contact, so
 * subscriptions were not landing where they should. One of the two copies even
 * carried a comment admitting the hash was wrong.
 *
 * @see https://mailchimp.com/developer/marketing/docs/methods-parameters/
 */
export function subscriberHash(email) {
  return createHash("md5").update(email.trim().toLowerCase()).digest("hex");
}

/**
 * Add or update a contact in the configured audience.
 *
 * @returns {Promise<{ ok: boolean, status: number, body: unknown }>}
 *          Never throws on an API-level failure; callers decide whether a failed
 *          subscribe should fail the whole request.
 */
export async function upsertSubscriber({
  email,
  firstName,
  lastName,
  phone,
  zip,
}) {
  const { MAILCHIMP_SERVER_PREFIX, MAILCHIMP_LIST_ID, MAILCHIMP_API_KEY } =
    process.env;

  if (!MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_LIST_ID || !MAILCHIMP_API_KEY) {
    console.error("Mailchimp environment variables are not configured");
    return { ok: false, status: 500, body: { detail: "Not configured" } };
  }

  const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${subscriberHash(email)}`;

  const response = await fetch(url, {
    method: "PUT", // upsert: adds the contact, or updates them if they exist
    headers: {
      Authorization: `apikey ${MAILCHIMP_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status_if_new: "subscribed",
      status: "subscribed",
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
        PHONE: phone || "",
        ZIP: zip || "",
      },
    }),
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    // Logged server-side only. The client gets a generic message, because
    // Mailchimp's errors leak audience details and member state.
    console.error("Mailchimp error:", response.status, body);
  }

  return { ok: response.ok, status: response.status, body };
}
