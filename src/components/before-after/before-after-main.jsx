"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../motion/reveal";
import BeforeAfterSlider from "../shared/before-after-slider";
import {
  BEFORE_AFTER_CATEGORIES,
  BEFORE_AFTER_TRANSFORMATIONS,
} from "@/data/before-after";

const LABELS = { before: "Before", after: "After" };

/**
 * Category tabs and the comparisons.
 *
 * The page used to show the same two or three transformations twice: a "main
 * viewer" with prev/next buttons and dots, and then an "All Transformations"
 * grid underneath listing every one of them — including the one already on
 * screen above. With two or three items per category, the carousel was hiding
 * content from a list that showed all of it anyway. Every pair is simply on the
 * page now, which also retires the prev/next controls, the dot row, and the
 * modal they opened.
 *
 * That modal is no loss. It had no dialog role, no label, no Escape handler, no
 * focus management and no scroll lock — and no close button either, despite the
 * X icon being imported for one that was never rendered. Its "See After" toggle
 * flipped between two photographs a beat apart, which is exactly the job the
 * shared slider does properly. It also used a raw img, so opening a pair
 * downloaded the full original.
 *
 * Comparisons use the drag-to-reveal where the pair is actually matched. One is
 * not — a portrait before against a landscape after — and a wipe between two
 * differently framed photographs reads as a mistake, so that one is shown as two
 * frames side by side, each in its own ratio.
 *
 * Category selection was a nested ternary with a commented-out branch for a
 * "bathtubs" tab that no longer exists, and its final else meant an unknown tab
 * silently showed basements. It is a lookup now.
 *
 * Framer Motion drove the old modal; nothing on the route needs an animation
 * runtime any more.
 */
export const BeforeAfterMain = () => {
  const [activeTab, setActiveTab] = useState(BEFORE_AFTER_CATEGORIES[0].id);
  const transformations = BEFORE_AFTER_TRANSFORMATIONS[activeTab] ?? [];

  return (
    <>
      <section
        aria-label="Transformation categories"
        className="rule-hairline sticky top-[calc(var(--nav-h)+var(--bar-plate-drop))] z-40 border-b bg-background/95 backdrop-blur-sm"
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
          <div
            role="tablist"
            aria-label="Room type"
            className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {BEFORE_AFTER_CATEGORIES.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="transformations"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(category.id)}
                  className={`shrink-0 border-b-2 px-5 py-4 text-sm font-semibold tracking-tight whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-transparent text-muted-foreground hover:text-primary"
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs font-normal opacity-70">
                    {BEFORE_AFTER_TRANSFORMATIONS[category.id].length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="transformations" className="bg-background py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
          <ol className="rule-hairline border-t">
            {transformations.map((item, index) => (
              <Reveal
                as="li"
                key={item.id}
                delay={Math.min(index * 60, 180)}
                className="rule-hairline grid gap-8 border-b py-12 lg:grid-cols-12 lg:gap-14"
              >
                <div className="lg:col-span-4 lg:self-center">
                  <p className="type-eyebrow text-muted-foreground">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(transformations.length).padStart(2, "0")}
                  </p>
                  <h2 className="type-display mt-4 text-[clamp(1.5rem,2.4vw,2.25rem)] text-primary">
                    {item.title}
                  </h2>
                  <p className="measure mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.matched
                      ? "Drag the handle across to wipe between before and after."
                      : "Shown side by side — these two were photographed from different positions."}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  {item.matched ? (
                    <BeforeAfterSlider
                      before={{
                        src: item.before,
                        alt: `${item.title}, before`,
                      }}
                      after={{ src: item.after, alt: `${item.title}, after` }}
                      labels={LABELS}
                      subject={item.title.toLowerCase()}
                      className="mx-auto max-w-[520px]"
                      style={{ aspectRatio: item.aspect }}
                      sizes="(min-width: 1024px) 520px, 100vw"
                    />
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          label: LABELS.before,
                          src: item.before,
                          aspect: item.beforeAspect,
                        },
                        {
                          label: LABELS.after,
                          src: item.after,
                          aspect: item.afterAspect,
                        },
                      ].map((shot) => (
                        <figure key={shot.label} className="relative">
                          <div
                            className="relative overflow-hidden bg-muted"
                            style={{ aspectRatio: shot.aspect }}
                          >
                            <Image
                              src={shot.src}
                              alt={`${item.title}, ${shot.label.toLowerCase()}`}
                              fill
                              loading="lazy"
                              sizes="(min-width: 1024px) 34vw, 45vw"
                              quality={85}
                              className="object-cover"
                            />
                          </div>
                          <figcaption className="type-eyebrow absolute top-3 left-3 bg-primary/85 px-3 py-1.5 text-white">
                            {shot.label}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};
