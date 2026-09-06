import Reveal from "../motion/reveal";
import {
  BEFORE_AFTER_CATEGORIES,
  BEFORE_AFTER_TRANSFORMATIONS,
} from "@/data/before-after";

/**
 * Page hero, on the same grammar as the gallery: no photograph, because the
 * page puts fourteen of them on screen immediately below and a hero image would
 * have to be one of them, repeated.
 *
 * The counts come from the data rather than being written down, so they cannot
 * drift as transformations are added.
 */
export const BeforeAfterHero = () => {
  const total = Object.values(BEFORE_AFTER_TRANSFORMATIONS).reduce(
    (sum, list) => sum + list.length,
    0
  );

  return (
    <section
      id="before-after-hero"
      className="bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="border-t border-white/20 pt-8">
          <Reveal
            as="p"
            className="type-eyebrow flex items-center gap-3 text-accent"
          >
            <span
              className="animate-rule-draw h-px w-8 bg-accent"
              aria-hidden="true"
            />
            Before &amp; After
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-12">
            <Reveal
              as="h1"
              delay={70}
              className="type-display text-[clamp(2.25rem,4.4vw,4rem)] text-white md:col-span-6"
            >
              The same room, twice
            </Reveal>

            <Reveal
              as="p"
              delay={140}
              className="measure self-end text-base leading-relaxed text-white/80 md:col-span-6"
            >
              Drag across any pair to wipe between what was there and what our
              crew left behind. Real projects, photographed from the same spot.
            </Reveal>
          </div>

          <Reveal
            as="dl"
            delay={200}
            className="mt-10 grid max-w-md grid-cols-2 border-t border-white/20"
          >
            <div className="py-5 pr-6">
              <dt className="type-display text-2xl text-white">{total}</dt>
              <dd className="mt-1 text-sm text-white/70">Transformations</dd>
            </div>
            <div className="border-l border-white/20 py-5 pl-6">
              <dt className="type-display text-2xl text-white">
                {BEFORE_AFTER_CATEGORIES.length}
              </dt>
              <dd className="mt-1 text-sm text-white/70">Room types</dd>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
