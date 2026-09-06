"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * Header for the design flow.
 *
 * The tool is three steps — choose a project, set the plumbing side, then
 * configure — but nothing on screen said which step you were on or how many
 * were left, and only one of the pages had a back control. There was also no
 * way out: the (design) layout renders no site chrome, so a visitor who landed
 * here could only leave with the browser's own back button.
 *
 * This gives every step the same three things: a way back, a way out, and a
 * position in the sequence.
 */
export default function DesignStepHeader({ step, totalSteps = 3, title }) {
  const router = useRouter();

  return (
    <header className="rule-hairline border-b bg-background">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="group flex shrink-0 items-center gap-2 py-2 text-sm tracking-tight text-primary transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-translate-x-1"
            />
            Back
          </button>

          <span
            aria-hidden="true"
            className="hidden h-4 w-px bg-border sm:block"
          />

          <p className="type-eyebrow hidden truncate text-muted-foreground sm:block">
            {title}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          {/* Progress, as a rule that fills — the same bar vocabulary the hero
              slider controls use. */}
          <div
            className="flex items-center gap-1.5"
            role="img"
            aria-label={`Step ${step} of ${totalSteps}`}
          >
            {Array.from({ length: totalSteps }).map((_, i) => (
              <span
                key={i}
                className={`block h-0.5 w-8 transition-colors duration-300 ${
                  i < step ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
            <span className="type-eyebrow ml-2 text-muted-foreground">
              {String(step).padStart(2, "0")}/
              {String(totalSteps).padStart(2, "0")}
            </span>
          </div>

          {/* <Link
            href="/"
            aria-label="M&E Construction and Renovations, home"
            className="hidden shrink-0 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:block"
          >
            <Image
              src="/images/transparent-logo2.png"
              alt="M&E Construction & Renovation LLC"
              width={785}
              height={318}
              className="h-9 w-auto object-contain"
            />
          </Link> */}
        </div>
      </div>
    </header>
  );
}
