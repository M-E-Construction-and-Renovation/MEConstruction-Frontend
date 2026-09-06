"use client";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import Image from "next/image";
import Reveal from "../motion/reveal";
import Parallax from "../motion/parallax";

/**
 * Page hero, rebuilt on the same grammar as the homepage: eyebrow with a rule,
 * Archivo headline at display scale, one measured paragraph, one saturated
 * action.
 *
 * The old version drove its entrance from three setTimeout timers, which meant
 * the content was invisible until JavaScript ran and had no reduced-motion
 * path. Reveal handles both.
 */
export function AdvantagesHero({ hero }) {
  const { badge, headline, subtext, button, image } = hero;
  const dispatch = useDispatch();

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
            src="/images/advantages-hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6 lg:self-center">
          <Reveal
            as="p"
            className="type-eyebrow flex items-center gap-3 text-accent"
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {badge}
          </Reveal>

          <Reveal
            as="h1"
            delay={70}
            className="type-display mt-6 max-w-[15ch] text-[clamp(2.25rem,4.4vw,4rem)] text-white"
          >
            {headline}
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="measure mt-7 text-base leading-relaxed text-white/75"
          >
            {subtext}
          </Reveal>

          <Reveal delay={200} className="mt-9">
            <Button
              variant="cta"
              size="xl"
              onClick={() => dispatch(openModal("advantages_hero"))}
              className="group animate-cta-pulse"
            >
              {button}
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Button>
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
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
