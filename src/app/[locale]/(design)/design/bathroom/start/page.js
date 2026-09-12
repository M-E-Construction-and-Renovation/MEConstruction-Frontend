"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import DesignStepHeader from "@/components/design/design-step-header";
import { Button } from "@/components/ui/button";
import { GA_EVENTS, trackEvent } from "@/lib/analytics";

/**
 * Step three: the lead gate.
 *
 * Sits between the plumbing choice and the configurator, which is the cheapest
 * place to ask. By here the visitor has spent two clicks saying what they want,
 * so the question is earned -- but they have not built anything yet, so being
 * turned away costs them nothing they would mourn. Asking on the landing page
 * would be asking before showing any value; asking at save time stops someone
 * ten minutes in, which is the most expensive moment to lose them.
 *
 * It is a LEAD GATE, NOT A LOCK. Enforcement lives in middleware so the
 * configurator never paints for an ungated visitor, but the assets are public
 * and the tool runs in the browser. See `src/lib/design-gate.js`.
 *
 * The same address doubles as the way back into a saved design, which is why
 * this is not purely a toll: for a returning visitor it is the resume screen.
 */
function StartForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plumbing = searchParams.get("plumbing") || "left";

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [resumeOffer, setResumeOffer] = useState(false);

  const viewTracked = useRef(false);

  useEffect(() => {
    if (viewTracked.current) return;
    viewTracked.current = true;
    trackEvent(GA_EVENTS.DESIGN_GATE_VIEW, { plumbing });
  }, [plumbing]);

  const goToConfigurator = (resume) => {
    // The email is NOT put in the URL. It travels in the gate cookie and the
    // configurator asks for it via /api/design/session -- a real address in a
    // query string ends up in browser history, the back button, and anything
    // that logs referrers.
    const params = new URLSearchParams({ plumbing });
    if (resume) params.set("resume", "1");
    router.push(`/design/bathroom/configure?${params.toString()}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/design/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, subscribe }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error?.title ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      trackEvent(GA_EVENTS.DESIGN_GATE_SUBMIT, {
        plumbing,
        subscribed: Boolean(subscribe),
        returning: Boolean(data.hasSavedDesign),
      });

      // A returning visitor gets the choice rather than having their previous
      // work either silently reopened or silently discarded.
      if (data.hasSavedDesign) {
        setResumeOffer(true);
        setSubmitting(false);
        return;
      }

      goToConfigurator(false);
    } catch (err) {
      console.error(err);
      setError("We could not reach the server. Please try again.");
      setSubmitting(false);
    }
  };

  if (resumeOffer) {
    return (
      <div className="mx-auto w-full max-w-[1400px] px-4 py-12 md:px-10 md:py-16">
        <p className="type-eyebrow flex items-center gap-3 text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          Welcome back
        </p>

        <h1 className="type-display mt-6 text-[clamp(2rem,4vw,3.25rem)] text-primary">
          You have a saved design
        </h1>
        <p className="measure mt-4 text-base leading-relaxed text-muted-foreground">
          We found a design saved against {email}. Pick up where you left off, or
          start a new one — starting fresh replaces the saved design only when
          you save again.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button
            variant="cta"
            size="xl"
            className="group"
            onClick={() => goToConfigurator(true)}
          >
            Resume my design
            <ArrowRight
              aria-hidden="true"
              className="animate-cta-arrow ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
            />
          </Button>

          <Button
            variant="outline"
            size="xl"
            onClick={() => goToConfigurator(false)}
          >
            Start a new design
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-12 md:px-10 md:py-16">
      <p className="type-eyebrow flex items-center gap-3 text-accent">
        <span className="animate-rule-draw h-px w-8 bg-accent" aria-hidden="true" />
        Step three
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end">
        <h1 className="type-display text-[clamp(2.25rem,4.4vw,3.75rem)] text-primary md:col-span-6">
          Where should we send your design?
        </h1>
        <p className="measure text-base leading-relaxed text-muted-foreground md:col-span-6">
          Your email lets you save this design and come back to it from any
          device. If you have designed with us before, enter the same address to
          pick up where you left off.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-12 max-w-xl">
        <div className="rule-hairline grid gap-6 border-t pt-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="gate-email"
              className="type-eyebrow block text-muted-foreground"
            >
              Email address
            </label>
            <input
              id="gate-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-describedby={error ? "gate-error" : undefined}
              aria-invalid={error ? "true" : undefined}
              className="rule-hairline mt-3 w-full border-b bg-transparent pb-3 text-lg text-primary outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="gate-name"
              className="type-eyebrow block text-muted-foreground"
            >
              First name <span className="normal-case">(optional)</span>
            </label>
            <input
              id="gate-name"
              type="text"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Jordan"
              className="rule-hairline mt-3 w-full border-b bg-transparent pb-3 text-lg text-primary outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
            />
          </div>
        </div>

        {/* Unticked by default and worded as what it is. Giving us an address to
            open a tool is not the same as asking for marketing email, and
            subscribing people who did not ask produces spam complaints that
            damage deliverability for every campaign the client sends. */}
        <label className="mt-8 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <input
            type="checkbox"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-accent"
          />
          <span>
            Email me renovation tips and occasional offers. You can unsubscribe
            at any time — see our{" "}
            <Link href="/privacy-policy" className="text-accent underline underline-offset-2">
              privacy policy
            </Link>
            .
          </span>
        </label>

        {error && (
          <p id="gate-error" role="alert" className="mt-6 text-sm text-destructive">
            {error}
          </p>
        )}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            type="submit"
            variant="cta"
            size="xl"
            className="group"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 aria-hidden="true" className="mr-2 h-5 w-5 animate-spin" />
                Opening your design
              </>
            ) : (
              <>
                Start designing
                <ArrowRight
                  aria-hidden="true"
                  className="animate-cta-arrow ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </>
            )}
          </Button>

          <p className="text-sm text-muted-foreground">
            We use your address to save your design. Nothing else without your
            say-so.
          </p>
        </div>
      </form>
    </div>
  );
}

export default function DesignStartPage() {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-background">
      <DesignStepHeader step={3} totalSteps={4} title="Save your design" />
      <div className="flex flex-1 items-center">
        <Suspense fallback={null}>
          <StartForm />
        </Suspense>
      </div>
    </div>
  );
}
