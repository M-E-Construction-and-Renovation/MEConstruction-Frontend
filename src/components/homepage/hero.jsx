"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import Link from "next/link";
import Reveal from "../motion/reveal";
import HeroBackdrop from "./hero-backdrop";

// Disciplines index. Real routes, in the order the business leads with;
// doubles as a shortcut straight into the money pages.
const DISCIPLINES = [
  { label: "Bathrooms", href: "/bathroom-remodel" },
  { label: "Showers", href: "/shower-solutions" },
  { label: "Kitchens", href: "/kitchen-solutions" },
  { label: "Basements", href: "/basement-solutions" },
];

// Slower than a content carousel: this is a backdrop, so the room should change
// while you read rather than interrupt you.
const ROTATE_MS = 3000;

/**
 * The three services play full-bleed behind the copy — bathroom, kitchen,
 * basement — rather than in a card beside it.
 *
 * The foreground card stack this replaced showed the same three rooms, so
 * running both meant either two different rooms on screen at once or the same
 * room twice. One device, at full scale, says it better.
 */
export function Hero({ hero }) {
  const dispatch = useDispatch();
  const { badge, headline, subtext, buttons, images } = hero;

  const count = images.length;
  const [index, setIndex] = useState(0);
  const [tabHidden, setTabHidden] = useState(false);
  const [chosen, setChosen] = useState(false);
  const [onControls, setOnControls] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  /**
   * Rotation stops for several reasons, and hovering the hero is deliberately
   * not one of them any more.
   *
   * It used to be: mouseenter on the section paused it. But the section is
   * min-h-[78vh], so on a desktop the pointer rests somewhere inside it for
   * most of the time the page is on screen — the backdrop sat frozen on the
   * first room for nearly every visitor, and rotated only when the cursor
   * happened to be in the header or off the window entirely.
   *
   * Pausing is scoped to intent instead: the tab is hidden, the pointer is on
   * the room controls (so the target does not slide out from under you as you
   * aim at it), focus is inside the hero, or the visitor picked a room — which
   * stops it for good. That last one is also what WCAG 2.2.2 asks for: content
   * that starts moving on its own needs a way to stop it.
   */
  const paused =
    tabHidden || chosen || onControls || focusWithin || reduceMotion;

  // Read on the client only, so the server render is identical for everyone and
  // there is no hydration mismatch.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // A hidden tab should not burn timers or return the visitor to a room they
  // never chose.
  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const advance = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(advance, ROTATE_MS);
    return () => clearInterval(id);
  }, [advance, paused, count]);

  const words = headline.split(" ");

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[78vh] flex-col justify-center overflow-hidden bg-primary text-primary-foreground"
      onFocusCapture={() => setFocusWithin(true)}
      onBlurCapture={() => setFocusWithin(false)}
    >
      <HeroBackdrop images={images} activeIndex={index} />

      <div className="mx-auto w-full max-w-[1400px] px-4 py-16 md:px-10 md:py-20">
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

          {/* Set word by word so the sentence assembles itself. Not a Reveal:
              this sits above the fold, so it plays on load rather than waiting
              for an intersection that has already happened. */}
          <h1 className="type-display mt-6 max-w-[13ch] text-[clamp(2.5rem,5.2vw,4.75rem)] text-white">
            {words.map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                {/* The space is a sibling of the span, not a child of it:
                    animate-hero-word is display:inline-block, and trailing
                    whitespace inside an inline-block is collapsed away — which
                    ran the headline together as "Makeeveryinch". Kept as a
                    normal space rather than &nbsp; so the line still wraps. */}
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
            className="measure mt-7 text-base leading-relaxed text-white/90"
          >
            {subtext}
          </Reveal>

          <Reveal delay={200} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="cta"
              size="xl"
              onClick={() => dispatch(openModal("hero"))}
              className="group animate-cta-pulse"
            >
              {buttons.quote}
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Button>

            <Button variant="ctaQuiet" size="xl" asChild>
              <Link href="/design">{buttons.design}</Link>
            </Button>
          </Reveal>

          {/* Named controls. Real buttons with aria-current, so the backdrop is
              operable rather than a decoration that happens to move — and the
              label says which room you are looking at, without which a rotating
              background is just wallpaper. */}
          <Reveal
            delay={260}
            className="mt-10 flex items-center gap-4 border-t border-white/20 pt-6"
          >
            <div
              className="flex items-center gap-2"
              onMouseEnter={() => setOnControls(true)}
              onMouseLeave={() => setOnControls(false)}
            >
              {images.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => {
                    setIndex(i);
                    // Picking a room is a decision; stop rotating past it.
                    setChosen(true);
                  }}
                  aria-current={i === index}
                  aria-label={`Show ${image.title}`}
                  className="group py-2 focus-visible:outline-none"
                >
                  <span
                    className={`block h-0.5 w-10 transition-colors duration-300 ${
                      i === index
                        ? "bg-accent"
                        : "bg-white/35 group-hover:bg-white/70 group-focus-visible:bg-white"
                    }`}
                  />
                </button>
              ))}
            </div>

            <span className="type-display text-lg text-white">
              {images[index]?.title}
            </span>
          </Reveal>

          <Reveal
            delay={320}
            className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3"
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
              <span className="text-sm text-white/90">
                5.0 from 120+ reviews
              </span>
            </span>

            <span className="type-eyebrow text-white/75">
              Serving 17 Illinois communities
            </span>
          </Reveal>
        </div>

        {/* The ways in, as a full-width index */}
        <Reveal
          delay={380}
          as="nav"
          aria-label="Renovation disciplines"
          className="mt-14 block"
        >
          <ul className="grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {DISCIPLINES.map((d) => (
              <li
                key={d.href}
                className="border-b border-white/20 lg:border-b-0 lg:border-l lg:border-white/20 lg:first:border-l-0 lg:pl-6"
              >
                <Link
                  href={d.href}
                  className="group flex items-center justify-between py-4 text-base text-white/85 transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none lg:px-6 lg:first:pl-0"
                >
                  {d.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
