import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../motion/reveal";

/**
 * Two ways further in: the finished-work gallery, and the design tool.
 *
 * The first card's image 404'd in production — the content pointed at
 * `modern-luxury-bathroom-renovation-before-and-after.jpg`, which is not in
 * `public/images`. Repointed in both locale files to the elegant-fixtures shot,
 * the nearest thing on disk by name and by subject.
 *
 * The markup was broken too: `fill` was used inside an `aspect-video` div that
 * had no `position`, so each photograph escaped its frame and stretched across
 * the whole card, and the aspect box did nothing at all. Frames are positioned
 * now, so the ratio is the one written down.
 *
 * `<Link><Button>` rendered an `<a>` wrapping a `<button>`, which is invalid
 * and gives keyboard users two stops for one control. `asChild` renders one
 * anchor styled as the button instead.
 */
export function BathroomInspiration({ inspiration }) {
  const { sectionTitle, sectionSubtitle, cards } = inspiration;

  return (
    <section id="inspiration" className="bg-tinted py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-6 border-t pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary md:col-span-6"
          >
            {sectionTitle}
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-muted-foreground md:col-span-6"
          >
            {sectionSubtitle}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={Math.min(index * 90, 180)}
              className="group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden bg-primary p-8 md:min-h-[480px]"
            >
              <Image
                src={card.image.src}
                alt={card.image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 50vw, 100vw"
                quality={85}
                className="-z-10 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/55 to-black/10"
              />

              <h3 className="type-display text-2xl text-white md:text-3xl">
                {card.title}
              </h3>
              <p className="measure mt-4 text-sm leading-relaxed text-white/80">
                {card.description}
              </p>

              <div className="mt-7">
                <Button variant="cta" asChild>
                  <Link href={card.cta.href}>
                    {card.cta.text}
                    <ArrowRight
                      aria-hidden="true"
                      className="ml-2 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                    />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
