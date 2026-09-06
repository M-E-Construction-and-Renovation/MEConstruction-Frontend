"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "../motion/reveal";
import GalleryLightbox from "./gallery-lightbox";
import { GALLERY_CATEGORIES, GALLERY_DESIGNS } from "@/data/gallery";

/**
 * Category tabs and the grid.
 *
 * The tabs were plain buttons with no relationship to the grid they filter, so
 * assistive tech had no way to know they were a tab set or which one was
 * current; and the grid cards were divs with onClick, which put all twenty
 * designs out of reach of the keyboard entirely. Both are real controls now.
 *
 * Category selection was a nested ternary with a commented-out branch for a
 * "bathtubs" tab that no longer exists, and its final else meant any unknown
 * tab silently showed basements. It is a lookup now.
 *
 * The thumbnails used `fill` with no `sizes`, so next/image assumed 100vw and
 * every one of them downloaded an image sized for the whole viewport — four
 * times wider than the column it lands in at desktop.
 *
 * The frames were a fixed h-48 over sources that are mostly 3:4 portrait, which
 * cropped them to a letterbox strip. A 3:4 frame matches the majority.
 *
 * The sticky offset was `top-[8.5rem] md:top-[9.5rem]`, a copy of the nav
 * height with the wrong breakpoint on it: the nav grows at sm (640px) and this
 * grew at md (768px), so between those widths the nav sat over the top 16px of
 * the tabs. It reads the tokens now — and adds the plate's drop, because the
 * logo plate hangs below the bar and would otherwise cover the first tab or two
 * whenever the page is scrolled.
 */
export const GalleryMain = () => {
  const [activeTab, setActiveTab] = useState(GALLERY_CATEGORIES[0].id);
  const [openIndex, setOpenIndex] = useState(null);

  // Focus has to go back where it came from when the dialog closes, or a
  // keyboard user is returned to the top of the document.
  const triggerRefs = useRef({});
  const restoreRef = useRef(null);

  const designs = GALLERY_DESIGNS[activeTab] ?? [];

  const closeLightbox = useCallback(() => {
    restoreRef.current = triggerRefs.current[`${activeTab}-${openIndex}`] ?? null;
    setOpenIndex(null);
  }, [activeTab, openIndex]);

  /**
   * Restoring focus has to wait for the dialog to actually be gone. Doing it in
   * the close handler — even inside requestAnimationFrame — runs before React
   * commits the unmount, so the dialog still holds focus and the call is lost;
   * measured, focus ended up on <body>. An effect keyed on openIndex runs after
   * the commit, which is late enough.
   */
  useEffect(() => {
    if (openIndex !== null) return;
    const target = restoreRef.current;
    restoreRef.current = null;
    target?.focus();
  }, [openIndex]);

  return (
    <>
      <section
        aria-label="Gallery categories"
        className="rule-hairline sticky top-[calc(var(--nav-h)+var(--bar-plate-drop))] z-40 border-b bg-background/95 backdrop-blur-sm"
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
          <div
            role="tablist"
            aria-label="Room type"
            className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="gallery-grid"
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
                    {GALLERY_DESIGNS[category.id].length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery-grid" className="bg-background py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {designs.map((design, index) => (
              <Reveal
                as="li"
                key={`${activeTab}-${design.id}`}
                delay={Math.min(index * 40, 200)}
              >
                <button
                  type="button"
                  ref={(node) => {
                    triggerRefs.current[`${activeTab}-${index}`] = node;
                  }}
                  onClick={() => setOpenIndex(index)}
                  aria-haspopup="dialog"
                  className="group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="relative block aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={design.image}
                      alt={design.title}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      quality={82}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </span>

                  <span className="type-display mt-4 block text-base text-primary group-hover:text-accent">
                    {design.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                    {design.description}
                  </span>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {openIndex !== null && (
        <GalleryLightbox
          designs={designs}
          index={openIndex}
          onClose={closeLightbox}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
};
