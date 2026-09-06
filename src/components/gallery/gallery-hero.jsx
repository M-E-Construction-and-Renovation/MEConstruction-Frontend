import Reveal from "../motion/reveal";
import { GALLERY_CATEGORIES, GALLERY_DESIGNS } from "@/data/gallery";

/**
 * Gallery hero.
 *
 * Deliberately without a photograph. Every other hero on the site carries one,
 * but this page puts twenty of them on screen immediately below — a full-bleed
 * image here would compete with the thing the page exists to show, and would
 * have to be one of the twenty, repeated.
 *
 * The counts are derived from the gallery data rather than written down, so
 * they cannot drift when designs are added.
 */
export const GalleryHero = () => {
  const total = Object.values(GALLERY_DESIGNS).reduce(
    (sum, list) => sum + list.length,
    0
  );

  return (
    <section
      id="gallery-hero"
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
            Inspiration Gallery
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-12">
            <Reveal
              as="h1"
              delay={70}
              className="type-display text-[clamp(2.25rem,4.4vw,4rem)] text-white md:col-span-6"
            >
              Finished work, room by room
            </Reveal>

            <Reveal
              as="p"
              delay={140}
              className="measure self-end text-base leading-relaxed text-white/80 md:col-span-6"
            >
              Every project here was completed by our own crew. Browse the
              bathrooms, kitchens and basements we have finished, and open any
              one of them full size.
            </Reveal>
          </div>

          <Reveal
            as="dl"
            delay={200}
            className="mt-10 grid max-w-md grid-cols-2 border-t border-white/20"
          >
            <div className="py-5 pr-6">
              <dt className="type-display text-2xl text-white">{total}</dt>
              <dd className="mt-1 text-sm text-white/70">Projects shown</dd>
            </div>
            <div className="border-l border-white/20 py-5 pl-6">
              <dt className="type-display text-2xl text-white">
                {GALLERY_CATEGORIES.length}
              </dt>
              <dd className="mt-1 text-sm text-white/70">Room types</dd>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
