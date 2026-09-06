import * as LucideIcons from "lucide-react";
import Image from "next/image";
import Reveal from "../motion/reveal";
import Parallax from "../motion/parallax";

/**
 * The nine advantages, all of them, at once.
 *
 * This replaced a carousel that paged them three at a time on a 4-second
 * auto-rotate with no pause on hover or focus. On the one page whose entire job
 * is to list why you should choose this company, two thirds of the argument was
 * hidden behind a timer most visitors would never wait out — and the slide count
 * was hardcoded to 3, so a tenth advantage would simply have disappeared.
 *
 * A hairline-ruled grid says the same thing in one glance, needs no controls, no
 * timer and no JavaScript, and reads as a specification sheet rather than a
 * slideshow — which suits a builder better anyway.
 */
export function AdvantagesList({ carousel }) {
  const { sectionTitle, items } = carousel;

  return (
    <section id="carousel" className="bg-tinted py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted lg:sticky lg:top-40">
              <Parallax
                distance={50}
                className="absolute inset-0 -top-[6%] h-[112%] w-full"
              >
                <Image
                  src="/images/bathroom-gallery-8.jpg"
                  alt="A finished bathroom renovation by M&E Construction"
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </Parallax>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal
              as="h2"
              className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary"
            >
              {sectionTitle}
            </Reveal>

            <ul className="rule-hairline mt-10 grid border-t sm:grid-cols-2">
              {items.map((item, index) => {
                const Icon = LucideIcons[item.icon] ?? LucideIcons.Check;
                // An odd count leaves the final item alone in the left column
                // with a hairline running under half the row; spanning it fixes
                // the ragged edge without hiding anything.
                const isLoneLast =
                  index === items.length - 1 && items.length % 2 === 1;

                return (
                  <Reveal
                    as="li"
                    key={item.title}
                    delay={Math.min(index * 45, 320)}
                    className={`rule-hairline border-b py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8 ${
                      isLoneLast ? "sm:col-span-2 sm:pr-0" : ""
                    }`}
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-accent"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-4 font-semibold tracking-tight text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
