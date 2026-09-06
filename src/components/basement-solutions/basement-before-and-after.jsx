"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import QuoteButton from "../ui/quote-button";
import Reveal from "../motion/reveal";
import BeforeAfterSlider from "../shared/before-after-slider";

/**
 * Two basement transformations, compared.
 *
 * Like kitchen — and unlike shower and bathtub, whose "carousels" ran over an
 * array of exactly one — there really are two pairs here, so switching between
 * them is worth keeping. What it wore was not: unlabelled dot buttons with no
 * accessible name and no aria-current, plus an equally anonymous pair of arrow
 * buttons. It is a tablist now, named by the transformation titles that were
 * already in the content and previously shown only as a caption underneath.
 *
 * The two pairs are internally matched but not matched to each other: the first
 * is square (736x736 before, 1024x1024 after) and the second is 3:4 portrait
 * (1536x2048 both). A 4:5 frame splits the difference — it crops the sides of
 * the square pair a little and the top and bottom of the portrait pair a
 * little, rather than mangling either one. A consistent aspect across pairs
 * would be better.
 *
 * The key on the slider forces a remount when the pair changes, so the reveal
 * starts at the middle again rather than carrying the previous position onto a
 * different photograph.
 *
 * The images were declared width 300 by height 400 and then stretched with
 * w-full h-full, so next/image built its srcset for a 300px box. The badges
 * were absolutely positioned inside frames with no position of their own, so
 * they resolved against the outer card.
 */
export function BasementBeforeAfter({ beforeAfter }) {
  const { sectionTitle, sectionSubtitle, description, labels, transformations } =
    beforeAfter;

  const [active, setActive] = useState(0);
  const pair = transformations[active];

  return (
    <section id="before-after" className="bg-tinted py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-10 border-t pt-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6 lg:self-center">
            <Reveal
              as="h2"
              className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary"
            >
              {sectionTitle}
            </Reveal>

            <Reveal
              as="p"
              delay={80}
              className="measure mt-6 text-base leading-relaxed text-muted-foreground"
            >
              {sectionSubtitle}
            </Reveal>

            <Reveal
              as="p"
              delay={130}
              className="measure mt-5 text-sm leading-relaxed text-muted-foreground"
            >
              {description}
            </Reveal>

            <Reveal delay={190} className="mt-8">
              <QuoteButton
                source="basement_before_after"
                label={labels.button}
              />
            </Reveal>

            <Reveal delay={230} className="mt-6">
              <Link
                href="/gallery"
                className="group inline-flex items-center text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {labels.link}
                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:col-span-6">
            <div
              role="tablist"
              aria-label="Basement transformations"
              className="rule-hairline flex border-t"
            >
              {transformations.map((item, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="before-after-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(index)}
                    className={`-mt-px border-t-2 px-4 py-3 text-left text-xs font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-sm ${
                      isActive
                        ? "border-accent text-accent"
                        : "border-transparent text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>

            <div id="before-after-panel" className="mt-6">
              <BeforeAfterSlider
                key={pair.title}
                before={{ src: pair.beforeImage, alt: `${pair.title} before` }}
                after={{ src: pair.afterImage, alt: `${pair.title} after` }}
                labels={labels}
                subject="basement"
                className="mx-auto aspect-[4/5] max-w-[460px]"
                sizes="(min-width: 1024px) 460px, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
