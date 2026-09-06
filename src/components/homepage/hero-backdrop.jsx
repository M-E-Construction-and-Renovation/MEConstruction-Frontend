"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Full-bleed rotating backdrop for the hero: bathroom, kitchen, basement.
 *
 * Crossfades rather than slides. A background that slides drags the eye
 * sideways while someone is reading the headline on top of it; a fade changes
 * the room without asking for attention.
 *
 * LCP protection: only the first room is rendered on the server and marked
 * priority. The other two mount after hydration, because three full-bleed
 * photographs competing on first paint is exactly what makes a slider hero
 * slow — and there are seconds to spare before the second one is needed.
 */
export default function HeroBackdrop({ images, activeIndex }) {
  const [mountRest, setMountRest] = useState(false);

  useEffect(() => {
    // requestIdleCallback where available, so the extra decodes wait for a gap.
    // The timeout matters: without it an idle callback can be deferred
    // indefinitely on a busy page, and rooms two and three would never mount —
    // the slider would rotate to nothing.
    const id =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(() => setMountRest(true), { timeout: 1500 })
        : setTimeout(() => setMountRest(true), 900);
    return () => {
      if (typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(id);
      } else {
        clearTimeout(id);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {images.map((image, i) => {
        if (i > 0 && !mountRest) return null;
        const isActive = i === activeIndex;

        return (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "low"}
              sizes="100vw"
              quality={80}
              className="animate-hero-drift object-cover object-center"
            />
          </div>
        );
      })}

      {/* Scrim, weighted to the copy column and gone by two-thirds across, so
          the room stays visible where there are no words over it. Black rather
          than navy — a neutral scrim lowers the luminance without tinting the
          photograph, so each room keeps its own colour. */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 via-34% to-transparent to-68%" />
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  );
}
