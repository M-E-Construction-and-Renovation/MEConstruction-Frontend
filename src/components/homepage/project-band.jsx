"use client";

import Image from "next/image";
import Parallax from "../motion/parallax";
import Reveal from "../motion/reveal";

/**
 * A full-bleed photographic band.
 *
 * Every other section on this page is a contained column of text and pictures.
 * This one runs edge to edge with nothing in it but the work and a single line,
 * which is what gives the scroll a moment of quiet between two dense passages —
 * and it is the only place a finished room appears at full width.
 *
 * The image drifts against the scroll at a slower rate than the band itself, so
 * the depth is real rather than a decorative overlay.
 */
export function ProjectBand() {
  return (
    <section
      aria-label="Recent work"
      className="relative h-[48vh] min-h-[340px] overflow-hidden bg-primary md:h-[58vh]"
    >
      <Parallax distance={110} className="absolute inset-0 -top-[10%] h-[120%] w-full">
        <Image
          src="/images/basement-gallery-2.jpg"
          alt="A finished basement renovation by M&E Construction"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>

      {/* Foot scrim only — the top of the photograph stays clear. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto w-full max-w-[1400px] px-4 pb-10 md:px-10 md:pb-14">
          <Reveal
            as="p"
            className="type-display max-w-[22ch] text-[clamp(1.5rem,3vw,2.5rem)] text-white"
          >
            Every room on this page was finished by the same crew.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
