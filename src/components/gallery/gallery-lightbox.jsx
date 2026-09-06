"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * Full-size viewer for one design.
 *
 * The version this replaces was a div with an onClick and a raw <img>. That
 * meant: it could not be opened from the keyboard at all (the twenty grid cards
 * were divs too), it had no dialog role or label, Escape did nothing, focus
 * stayed behind it on the page, the page underneath kept scrolling, and there
 * was no way out except clicking the backdrop — which a keyboard user could not
 * reach either. It also had no way to move between designs, so seeing eleven
 * bathrooms meant opening and closing eleven times.
 *
 * The raw <img> also bypassed next/image, so opening a design downloaded the
 * full original — up to 1.6 MB — rather than something sized for the viewport.
 *
 * Framer Motion drove the old fade. It is not used here: this is the only place
 * on the route that wanted it, and an entrance transition in CSS costs nothing
 * to ship. The trade is no exit animation, since CSS cannot animate an
 * unmount — worth it to keep an animation runtime off this route.
 */
export default function GalleryLightbox({
  designs,
  index,
  onClose,
  onNavigate,
}) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const design = designs[index];

  const go = useCallback(
    (delta) => onNavigate((index + delta + designs.length) % designs.length),
    [index, designs.length, onNavigate]
  );

  // Keyboard: Escape closes, arrows move, Tab is trapped inside the dialog.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [go, onClose]);

  // Stop the page behind from scrolling while the dialog is up.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  if (!design) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${design.title}, design ${index + 1} of ${designs.length}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="animate-fade-in fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-black/85 p-4 backdrop-blur-sm md:p-8"
    >
      <div className="flex w-full max-w-[1400px] items-center justify-end">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>

      <div className="flex min-h-0 w-full max-w-[1400px] flex-1 items-center justify-center gap-3 md:gap-6">
        {designs.length > 1 && (
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous design"
            className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
        )}

        {/*
          The image sits in its own flex-1 box so the arrows are positioned by
          the container, not by the picture. They used to be flex siblings of
          the image itself, which meant their position depended on its width —
          and an image being swapped has no width, so both arrows slid to the
          middle of the screen and back out again on every click.

          There is also no key on the Image any more. A changing key remounts
          it, which guarantees that zero-width gap; without one, React updates
          the src on the same element and the browser holds the previous frame
          until the next is ready.
        */}
        <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center">
          <Image
            src={design.image}
            alt={design.title}
            width={1400}
            height={1400}
            sizes="(min-width: 768px) 80vw, 90vw"
            quality={88}
            className="h-auto max-h-full w-auto max-w-full object-contain"
          />
        </div>

        {designs.length > 1 && (
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next design"
            className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="w-full max-w-3xl shrink-0 text-center">
        <p className="type-eyebrow text-accent">
          {index + 1} / {designs.length}
        </p>
        <h2 className="type-display mt-2 text-lg text-white md:text-xl">
          {design.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          {design.description}
        </p>
      </div>
    </div>
  );
}
