"use client";

import { Button } from "../ui/button";
import { ArrowRight, Check, Palette } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import Image from "next/image";
import Reveal from "../motion/reveal";
import Parallax from "../motion/parallax";

/**
 * Page hero, rebuilt on the same grammar as the homepage and advantages: the
 * photograph plays full-bleed behind the copy rather than sitting in a rounded
 * card beside it, with an eyebrow and rule, an Archivo headline at display
 * scale, one measured paragraph, and the promises as a ruled index.
 *
 * The old version drove its entrance from two setTimeout timers, so the whole
 * hero was invisible until JavaScript ran and there was no reduced-motion path
 * out of it. Reveal handles both.
 *
 * The source is 5000x3750, so it carries a full-bleed frame at any viewport
 * without upscaling — which is why it can leave the card it was in.
 */
export function BathroomHero({ hero }) {
  const { sectionTitle, sectionSubtitle, tagline, features, labels, image } =
    hero;
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
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </Parallax>
        {/* Weighted to the copy column and gone before the right edge, so the
            room stays visible where there are no words over it. Black rather
            than navy: a neutral scrim lowers luminance without tinting tile. */}
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
            {tagline}
          </Reveal>

          <Reveal
            as="h1"
            delay={70}
            className="type-display mt-6 max-w-[15ch] text-[clamp(2.25rem,4.6vw,4.25rem)] text-white"
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

          {/* The three promises, as a ruled index rather than a stack of
              checkmarks — same device as the homepage discipline row. */}
          <Reveal
            as="ul"
            delay={200}
            className="mt-9 grid border-t border-white/20 sm:grid-cols-3"
          >
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 border-b border-white/20 py-4 sm:border-b-0 sm:border-l sm:border-white/20 sm:pl-5 sm:first:border-l-0 sm:first:pl-0 sm:pr-4"
              >
                <Check
                  aria-hidden="true"
                  strokeWidth={3}
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                />
                <span className="text-sm leading-snug text-white/90">
                  {feature}
                </span>
              </li>
            ))}
          </Reveal>

          <Reveal delay={260} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="cta"
              size="xl"
              onClick={() => dispatch(openModal("bathroom_hero"))}
              className="group animate-cta-pulse"
            >
              {labels.button}
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Button>

            <Button variant="ctaQuiet" size="xl" asChild>
              <Link href="/design">
                <Palette aria-hidden="true" className="mr-2 h-5 w-5" />
                {labels.link}
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
