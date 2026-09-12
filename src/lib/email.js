import { z } from "zod";

/**
 * One definition of what an email address looks like on the way in.
 *
 * Addresses are the join key across this app: the `projects` row holding a saved
 * design, the `design_leads` row, and the Mailchimp contact are all addressed by
 * email, with no account or id tying them together. So the normalisation has to
 * be identical everywhere, or the same person becomes two people.
 *
 * That is not hypothetical. The design tool's lead gate lowercased before
 * looking for a saved design while `save-project` stored whatever casing the
 * visitor typed, so anyone who saved as `Jordan.Test@Example.com` and came back
 * through the gate was told they had no saved design. The resume offer failed
 * silently for everyone who used a capital letter.
 *
 * Normalising inside the schema rather than at each call site is the point:
 * every route validating through this gets it, and a new route cannot forget.
 */
export function normalizeEmail(value) {
  return value.trim().toLowerCase();
}

/**
 * Validated, length-capped, normalised email field.
 *
 * @param {string} message Shown to the visitor when the address is not valid.
 */
export function emailField(message = "Please enter a valid email address.") {
  return z.email(message).max(254).transform(normalizeEmail);
}
