"use client";

import { Fragment } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/reveal";
import Parallax from "../motion/parallax";

/**
 * Page hero.
 *
 * Two things were wrong beyond styling.
 *
 * The background was a CSS `background-image` pointing at a 7857x5240, 7.9MB
 * JPEG — served raw to every visitor, because a CSS background never passes
 * through next/image.
 *
 * And the photograph itself was the problem behind "blurry on large screens":
 * it was shot at shallow depth of field, so its edges are genuinely out of
 * focus, and `object-cover` cropped it to a band of featureless grey concrete.
 * No amount of resolution fixes a soft source. It was also a gutted demolition
 * site with rubble and cement bags — an odd argument for a page about trust and
 * craftsmanship. Replaced with a sharp, deep-focus photograph of finished work.
 */

// Sourced facts, not invented ones: the service-area list holds 17 towns, the
// rating comes from the reviews content, and "residential and commercial" is
// the description's own phrase. Deliberately does not repeat the 2022 / 500+ /
// 100% figures, which the Foundation section below states in full.
const META = [
  "Northbrook, Illinois",
  "17 communities served",
  "Residential & commercial",
];

const OurStoryHero = ({ hero }) => {
  const { headline, title, description, button } = hero;
  const dispatch = useDispatch();
  const words = headline.split(" ");

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[72vh] items-center overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Parallax
          distance={60}
          className="absolute inset-0 -top-[5%] h-[110%] w-full"
        >
          <Image
            src="/images/kitchen-consultation.jpg"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={85}
            className="animate-hero-drift object-cover object-center"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 via-38% to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/75 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <Reveal
            as="p"
            className="type-eyebrow flex items-center gap-3 text-accent"
          >
            <span
              className="animate-rule-draw h-px w-8 bg-accent"
              aria-hidden="true"
            />
            {title}
          </Reveal>

          {/* Built a word at a time, like the homepage headline. */}
          <h1 className="type-display mt-6 text-[clamp(3rem,7vw,6.5rem)] text-white">
            {words.map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <span className="animate-hero-word" style={{ "--w": i }}>
                  {word}
                </span>
                {i < words.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </h1>

          <Reveal
            as="p"
            delay={140}
            className="measure mt-7 text-base leading-relaxed text-white/90 md:text-lg"
          >
            {description}
          </Reveal>

          <Reveal delay={200} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="cta"
              size="xl"
              onClick={() => dispatch(openModal("our_story_hero"))}
              className="group animate-cta-pulse"
            >
              {button}
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Button>

            <Button variant="ctaQuiet" size="xl" asChild>
              <Link href="/gallery" className="group">
                See our work
                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </Reveal>
        </div>

        {/* Gives the hero something to stand on. "Our Story" is two words at
            display scale, so without this the section was a headline and a
            paragraph floating in a large photograph. */}
        <Reveal
          delay={280}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/25 pt-6"
        >
          <span className="flex items-center gap-2">
            <span className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-accent text-accent"
                  strokeWidth={0}
                />
              ))}
            </span>
            <span className="text-sm text-white/90">5.0 from 120+ reviews</span>
          </span>

          {META.map((item) => (
            <Fragment key={item}>
              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-white/30 sm:block"
              />
              <span className="type-eyebrow text-white/75">{item}</span>
            </Fragment>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default OurStoryHero;
