"use client";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import Reveal from "../motion/reveal";

/**
 * Page hero.
 *
 * The photograph was missing. The content pointed at basement-modern.png,
 * which is not in public/images — it returned 404, so the hero rendered with
 * no image behind it at all, in both locales. Repointed to basement-gallery-2,
 * the largest usable basement landscape on disk.
 *
 * That file is 2048x1536, which is why this hero stays framed rather than going
 * full-bleed like bathroom-remodel, bathtub and kitchen. Full-bleed at a 1440px
 * viewport wants ~2880px for a 2x display; 2048 would be stretched. In a
 * half-width column it is asked for ~660px, which it carries comfortably. A
 * larger basement photograph would let this page adopt the full-bleed
 * treatment. The frame is 4:3, matching the source, so nothing is cropped.
 *
 * The second highlight rendered highlights.highlight1.description on the
 * shower, bathtub and kitchen heroes, which were byte-identical to this one.
 * Both stats read from their own entry here.
 *
 * There is no design-tool button: the configurator only supports bathrooms, and
 * the content carries no labels.link for one.
 *
 * Entrance was two setTimeout timers, so the hero was invisible until
 * JavaScript ran, with no reduced-motion path. Reveal handles both.
 */
export function BasementHero({ hero }) {
  const { sectionTitle, sectionSubtitle, badge, image, labels, highlights } =
    hero;
  const dispatch = useDispatch();

  const stats = [highlights.highlight1, highlights.highlight2];

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6 lg:self-center">
          <Reveal
            as="p"
            className="type-eyebrow flex items-center gap-3 text-accent"
          >
            <span
              className="animate-rule-draw h-px w-8 bg-accent"
              aria-hidden="true"
            />
            {badge}
          </Reveal>

          <Reveal
            as="h1"
            delay={70}
            className="type-display mt-6 max-w-[14ch] text-[clamp(2.25rem,4.4vw,4rem)] text-white"
          >
            {sectionTitle}
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="measure mt-7 text-base leading-relaxed text-white/80"
          >
            {sectionSubtitle}
          </Reveal>

          <Reveal delay={200} className="mt-9">
            <Button
              variant="cta"
              size="xl"
              onClick={() => dispatch(openModal("basement_hero"))}
              className="group animate-cta-pulse"
            >
              {labels.button}
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Button>
          </Reveal>

          <Reveal
            as="dl"
            delay={260}
            className="mt-10 grid max-w-md grid-cols-2 border-t border-white/20"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className={`py-5 ${index === 0 ? "pr-6" : "border-l border-white/20 pl-6"}`}
              >
                <dt className="type-display text-2xl text-white">
                  {stat.title}
                </dt>
                <dd className="mt-1 text-sm text-white/70">
                  {stat.description}
                </dd>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={220} className="lg:col-span-6 lg:self-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-primary/50">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              quality={85}
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
