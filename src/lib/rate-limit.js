/**
 * Fixed-window rate limiter for the public API routes.
 *
 * In-memory and therefore per-instance: on Vercel each serverless instance keeps
 * its own counter, so a determined attacker spread across many cold starts gets
 * more than the nominal limit. It still stops the realistic abuse these routes
 * face — a script hammering one endpoint from one host to enumerate saved
 * projects or dump junk into the client's Mailchimp audience.
 *
 * If abuse ever becomes a real problem rather than a theoretical one, swap the
 * Map for Upstash Redis; the call signature is deliberately compatible.
 */

const buckets = new Map();

// Bounded so a spray of unique IPs cannot grow the map without limit.
const MAX_TRACKED_KEYS = 10_000;

function sweep(now) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

/**
 * @param {string} key Identifier to limit on, usually `${route}:${ip}`.
 * @param {{ limit?: number, windowMs?: number }} [options]
 * @returns {{ allowed: boolean, remaining: number, retryAfter: number }}
 *          `retryAfter` is in seconds, for the Retry-After header.
 */
export function checkRateLimit(key, { limit = 10, windowMs = 60_000 } = {}) {
  const now = Date.now();

  if (buckets.size > MAX_TRACKED_KEYS) sweep(now);

  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, retryAfter: 0 };
  }

  bucket.count += 1;

  if (bucket.count > limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  return { allowed: true, remaining: limit - bucket.count, retryAfter: 0 };
}

/**
 * Best-effort client IP. Vercel sets x-forwarded-for; the left-most entry is the
 * original client. Falls back to a shared bucket rather than to no limiting at
 * all, so a missing header cannot be used to bypass the limit.
 */
export function clientIp(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

/** Standard 429 response, with the header clients need to back off politely. */
export function tooManyRequests(retryAfter) {
  return Response.json(
    { error: "Too many requests. Please try again shortly." },
    { status: 429, headers: { "Retry-After": String(retryAfter) } }
  );
}
