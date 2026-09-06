import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import QuoteButton from "../ui/quote-button";
import Reveal from "../motion/reveal";

/**
 * One shower, before and after.
 *
 * This was built as a carousel — dot navigation, `activeIndex` state, a
 * commented-out pair of prev/next arrows — over a `transformations` array with
 * exactly one entry. So it rendered a single dot that switched to the slide it
 * was already on, and shipped `useState`, two unused Chevron imports and
 * twenty lines of dead commented markup to do it. It is a pair of photographs,
 * so it is a pair of photographs now, and the section is a server component.
 *
 * The "Before"/"After" badges were absolutely positioned inside frames that had
 * no `position`, so they resolved against the outer card and both sat at the
 * bottom of the whole block rather than on their own image. Frames are
 * positioned now.
 *
 * The images were declared `width={300} height={400}` and then stretched with
 * `w-full h-full`, so next/image built its srcset for a 300px box and the
 * browser upscaled whatever it got. They use `fill` against a real frame with a
 * `sizes` hint instead, and are lazy rather than `priority` — this sits below
 * the fold and was competing with the hero for preload.
 *
 * Note for the client: the two photographs are not a matched pair. "Before" is
 * 1080x1433 (3:4 portrait) and "After" is 1600x1200 (4:3 landscape), and they
 * are not the same room. A square frame splits the cropping evenly between
 * them, but a genuine before/after shot from one fixed camera position would be
 * far more persuasive.
 */
export function ShowerBeforeAfter({ beforeAfter }) {
  const { sectionTitle, sectionSubtitle, description, labels, transformations } =
    beforeAfter;

  const pair = transformations[0];

  return (
    <section id="before-after" className="bg-tinted py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-10 border-t pt-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5 lg:self-center">
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
              <QuoteButton source="shower_before_after" label={labels.button} />
            </Reveal>

            <Reveal delay={230} className="mt-6">
              <Link
                href="/gallery"
                className="group inline-flex items-center text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {labels.link}
                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: labels.before, src: pair.beforeImage },
                { label: labels.after, src: pair.afterImage },
              ].map((shot) => (
                <figure key={shot.label} className="relative">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={shot.src}
                      alt={`${pair.title} — ${shot.label.toLowerCase()}`}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 28vw, 45vw"
                      quality={85}
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="type-eyebrow absolute top-3 left-3 bg-primary/85 px-3 py-1.5 text-white">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="type-eyebrow mt-4 text-muted-foreground">
              {pair.title}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
