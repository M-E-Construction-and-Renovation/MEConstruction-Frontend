"use client";

import Reveal from "../motion/reveal";

/**
 * "Why us", in a different register from the capabilities band above.
 *
 * The heading column holds while the reasons scroll past it, so the question
 * stays on screen alongside each answer. No icons and no boxes here: Features
 * already owns that treatment, and repeating it made the old page read as one
 * module printed twice.
 */
export function Advantages({ advantages }) {
  const { sectionTitle, sectionSubtitle, items } = advantages;

  return (
    <section
      id="advantages"
      className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32"
    >
      {/* A single large accent wash anchored off-canvas, so the navy has a
          direction of light rather than sitting flat. Sized in vw so it scales
          with the viewport instead of becoming a small blob on wide screens. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[20vw] -top-[30vw] h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,oklch(0.65_0.18_45_/_0.16),transparent_62%)]"
      />
      <div className="relative mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-40">
              <Reveal
                as="h2"
                className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-white"
              >
                {sectionTitle}
              </Reveal>
              <Reveal
                as="p"
                delay={80}
                className="measure mt-6 text-base leading-relaxed text-white/65"
              >
                {sectionSubtitle}
              </Reveal>
            </div>
          </div>

          <ul className="lg:col-span-7">
            {items.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 60}
                className="border-b border-white/15 py-8 first:border-t first:border-white/15 md:py-10"
              >
                <h3 className="type-display text-[clamp(1.35rem,2.2vw,1.9rem)] text-accent">
                  {item.title}
                </h3>
                <p className="measure mt-3 text-base leading-relaxed text-white/70">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
