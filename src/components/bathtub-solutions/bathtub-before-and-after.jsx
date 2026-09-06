import Link from "next/link";
import { ArrowRight } from "lucide-react";
import QuoteButton from "../ui/quote-button";
import Reveal from "../motion/reveal";
import BeforeAfterSlider from "../shared/before-after-slider";

/**
 * One bathtub, before and after.
 *
 * This was built as a carousel — dot navigation, activeIndex state, a
 * commented-out pair of prev/next arrows — over a transformations array with
 * exactly one entry. So it rendered a single dot that switched to the slide it
 * was already on, and shipped useState, two unused Chevron imports and twenty
 * lines of dead commented markup to do it.
 *
 * Unlike the shower page, this pair is genuinely matched: 1440x1795 before and
 * 1440x1800 after, the same aspect and the same framing. That is exactly what
 * the drag-to-reveal needs, so it uses the shared slider rather than two
 * frames side by side.
 *
 * The "Before"/"After" badges were absolutely positioned inside frames with no
 * position of their own, so they resolved against the outer card and both sat
 * at the bottom of the whole block. The shared slider positions them properly.
 *
 * The images were declared width 300 by height 400 and then stretched with
 * w-full h-full, so next/image built its srcset for a 300px box and the browser
 * upscaled whatever it got.
 *
 * The gallery link was a raw anchor to an internal route, which forces a full
 * page reload and throws away the client-side router. It is a Link now.
 */
export function BathtubBeforeAfter({ beforeAfter }) {
  const { sectionTitle, sectionSubtitle, description, labels, transformations } =
    beforeAfter;

  const pair = transformations[0];

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
              <QuoteButton source="bathtub_before_after" label={labels.button} />
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
            <BeforeAfterSlider
              before={{ src: pair.beforeImage, alt: `${pair.title} before` }}
              after={{ src: pair.afterImage, alt: `${pair.title} after` }}
              labels={labels}
              subject="bathtub"
              className="mx-auto aspect-[4/5] max-w-[500px]"
              sizes="(min-width: 1024px) 500px, 100vw"
            />
            <p className="type-eyebrow mt-4 text-center text-muted-foreground">
              {pair.title}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
