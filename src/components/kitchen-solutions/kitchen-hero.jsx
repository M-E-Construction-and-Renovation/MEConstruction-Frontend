"use client";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import Reveal from "../motion/reveal";
import Parallax from "../motion/parallax";

/**
 * Page hero.
 *
 * A content bug first, shared with the shower and bathtub heroes because all
 * three components were byte-identical: the second highlight rendered
 * highlights.highlight1.description, so "Modern Design" was captioned
 * "Stress-Free Process" and its own "Stylish & Functional" never appeared on
 * the page, in either locale. Fixed.
 *
 * There is deliberately no design-tool button here, unlike the shower and
 * bathtub heroes. The configurator only supports bathrooms, and the kitchen
 * content carries no labels.link to put on one.
 *
 * The source is 2700x2250, so it can carry a full-bleed frame — the shower hero
 * has only a 1024px image and stays framed.
 *
 * Entrance was two setTimeout timers, which left the hero invisible until
 * JavaScript ran with no reduced-motion path. Reveal handles both.
 */
export function KitchenHero({ hero }) {
  const { sectionTitle, sectionSubtitle, badge, image, labels, highlights } =
    hero;
  const dispatch = useDispatch();

  const stats = [highlights.highlight1, highlights.highlight2];

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Parallax
          distance={60}
          className="absolute inset-0 -top-[5%] h-[110%] w-full"
        >
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 via-40% to-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 py-16 md:px-10 md:py-28">
        <div className="max-w-3xl">
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
            className="type-display mt-6 max-w-[14ch] text-[clamp(2.25rem,4.6vw,4.25rem)] text-white"
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
              onClick={() => dispatch(openModal("kitchen_hero"))}
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
      </div>
    </section>
  );
}
