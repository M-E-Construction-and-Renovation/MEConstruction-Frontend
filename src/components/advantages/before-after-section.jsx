"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import Image from "next/image";
import Reveal from "../motion/reveal";

/**
 * Before/after comparison.
 *
 * The drag-to-reveal interaction is kept — for a renovation firm it is the most
 * persuasive thing on the page, and a range input under the surface means it
 * already works from the keyboard. What it lacked was a name: the input had no
 * label and no value text, so a screen-reader user met an unlabelled slider
 * reporting a bare number.
 *
 * Also restyled onto the system: square corners, hairline category tabs, and
 * the navy ground instead of a background photograph competing with the two
 * photographs it framed.
 */
export function BeforeAfterSection({ beforeAfter }) {
  const { sectionTitle, sectionSubtitle, labels, button, categories, images } =
    beforeAfter;

  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.id ?? "bathroom"
  );
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentImages = images[selectedCategory];
  const activeLabel =
    categories.find((c) => c.id === selectedCategory)?.label ?? "";

  return (
    <section
      id="before-after"
      className="bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="grid gap-6 border-t border-white/20 pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-white md:col-span-6"
          >
            {sectionTitle}
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-white/70 md:col-span-6"
          >
            {sectionSubtitle}
          </Reveal>
        </div>

        {/* Category tabs as a hairline row, matching the hero's discipline index
            rather than a cluster of pill buttons. */}
        <Reveal
          delay={120}
          as="div"
          role="tablist"
          aria-label="Project type"
          className="mt-10 flex border-t border-white/20"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSliderPosition(50);
                }}
                className={`-mt-px border-t-2 px-5 py-4 text-sm tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-white/60 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </Reveal>

        {/* Frame sized to the sources rather than the layout. The pairs are
            mostly 3:4 portrait (960x1280 for kitchen, 1536x2048 for basement),
            so a full-width 16:10 frame upscaled the narrowest of them 1.375x
            and cropped away half the photograph. At 4:3 inside max-w-4xl every
            image downscales instead, which is what makes them sharp. */}
        <Reveal delay={160} className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-[4/3] overflow-hidden bg-primary/50">
            <Image
              key={`${selectedCategory}-after`}
              src={currentImages.after}
              alt={`${activeLabel} after renovation`}
              fill
              loading="lazy"
              sizes="(min-width: 896px) 896px, 100vw"
              quality={88}
              className="object-cover"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                key={`${selectedCategory}-before`}
                src={currentImages.before}
                alt={`${activeLabel} before renovation`}
                fill
                loading="lazy"
                sizes="(min-width: 896px) 896px, 100vw"
                quality={88}
                className="object-cover"
              />
            </div>

            <span className="type-eyebrow absolute top-4 left-4 bg-primary/85 px-3 py-1.5 text-white">
              {labels.before}
            </span>
            <span className="type-eyebrow absolute top-4 right-4 bg-primary/85 px-3 py-1.5 text-white">
              {labels.after}
            </span>

            {/* Handle. Purely decorative — the range input below owns the
                interaction and the accessible name. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-white"
              style={{ left: `${sliderPosition}%` }}
            >
              <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 rounded-full bg-white shadow-[0_4px_16px_-4px_rgb(0_0_0/0.6)]">
                <span className="h-4 w-0.5 bg-primary" />
                <span className="h-4 w-0.5 bg-primary" />
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label={`Reveal the ${activeLabel} before photograph`}
              aria-valuetext={`${sliderPosition}% before, ${100 - sliderPosition}% after`}
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
            />
          </div>
        </Reveal>

        <Reveal delay={200} className="mx-auto mt-10 max-w-4xl">
          <Button
            variant="cta"
            size="xl"
            onClick={() => dispatch(openModal("advantages_before_after"))}
            className="group"
          >
            {button}
            <ArrowRight
              aria-hidden="true"
              className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
            />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
