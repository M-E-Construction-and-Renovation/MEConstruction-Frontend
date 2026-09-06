"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Drag-to-reveal comparison of one matched pair of photographs.
 *
 * Pulled out of bathroom-remodel rather than copied a third time — the same
 * frame, the same clip-path trick and the same hidden range input already
 * existed there and on the advantages page. (Advantages keeps its own version:
 * it wraps this in category tabs and switches pairs, which is a different
 * component, not a variant of this one.)
 *
 * The range input is the interaction, not decoration: it makes the comparison
 * work from the keyboard for free, which a pointer-only drag handle does not.
 * It needs a name and a value text or a screen-reader user meets an unlabelled
 * slider reporting a bare number, which is how both earlier copies shipped.
 *
 * Both photographs must be the same aspect and framing for the reveal to read
 * as one image being wiped; a mismatched pair belongs in two frames side by
 * side instead.
 */
export default function BeforeAfterSlider({
  before,
  after,
  labels,
  subject = "",
  sizes = "(min-width: 1024px) 520px, 100vw",
  quality = 88,
  className = "",
  /**
   * The frame has to match the pair's own ratio or object-cover crops through
   * the room. Most callers can say so in a class, but the before-after page
   * carries a measured ratio per pair in its data, and Tailwind cannot generate
   * an arbitrary class from a runtime value — so it comes in as a style.
   */
  style,
}) {
  const [position, setPosition] = useState(50);

  return (
    <div
      className={`relative overflow-hidden bg-muted ${className}`}
      style={style}
    >
      <Image
        src={after.src}
        alt={after.alt}
        fill
        loading="lazy"
        sizes={sizes}
        quality={quality}
        className="object-cover"
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          loading="lazy"
          sizes={sizes}
          quality={quality}
          className="object-cover"
        />
      </div>

      <span className="type-eyebrow absolute top-4 left-4 bg-primary/85 px-3 py-1.5 text-white">
        {labels.before}
      </span>
      <span className="type-eyebrow absolute top-4 right-4 bg-primary/85 px-3 py-1.5 text-white">
        {labels.after}
      </span>

      {/* Handle. Decorative — the range input below owns the interaction and
          the accessible name. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white"
        style={{ left: `${position}%` }}
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
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Reveal the ${subject} before photograph`.replace("  ", " ")}
        aria-valuetext={`${position}% before, ${100 - position}% after`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
      />
    </div>
  );
}
