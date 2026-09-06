"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Reveal from "../motion/reveal";
import Parallax from "../motion/parallax";

/**
 * The 3D bathroom configurator, given a section of its own.
 *
 * It was previously buried as one CTA inside the solutions list, which is a
 * strange place for the only thing on this site a competitor cannot copy in an
 * afternoon. Every claim here describes behaviour that exists in
 * /design/bathroom/configure — fixtures and finishes are real product data, and
 * saving by email is the real save/load flow.
 *
 * The screenshot runs full-bleed behind the copy rather than sitting in a frame
 * beside it: the tool fills the visitor's screen when they open it, so showing
 * it at section scale is the honest impression. The scrim is weighted to the
 * left, where the text sits, and clears to the right so the control panel — the
 * part that proves this is a real configurator, not a rendering — stays
 * readable behind the copy.
 */
const STEPS = [
  {
    title: "Pick your layout",
    body: "Start from a tub or a walk-in shower and set which side the plumbing runs.",
  },
  {
    title: "Choose fixtures and finishes",
    body: "Swap vanities, faucets, tile, doors and hardware and watch the room update as you go.",
  },
  {
    title: "Save it with your email",
    body: "Come back whenever you like, reopen the design, and bring it to your consultation.",
  },
];

export function DesignTool() {
  return (
    <section
      id="design-tool"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Overscan trimmed to 108%: the drift is only +/-30px, and every extra
            percent of height forces more upscale on a 2:1 source. */}
        <Parallax
          distance={50}
          className="absolute inset-0 -top-[4%] h-[108%] w-full"
        >
          <Image
            src="/images/design-tool-image.PNG"
            alt=""
            fill
            loading="lazy"
            sizes="100vw"
            /* Default is 75. The source is a UI screenshot with fine text and
               hard edges, which is exactly what aggressive compression smears;
               90 keeps the panel labels crisp on a wide display. */
            quality={90}
            className="object-cover object-center"
          />
        </Parallax>

        {/* Black, not navy. A colour scrim tints the screenshot and makes it
            read as an illustration; neutral black just lowers the luminance,
            so the tool still looks like the tool. Weighted left where the copy
            sits and clearing to the right, so the control panel stays visible.
            Same principle as the ProjectBand section. */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent via-50% to-black/30" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 py-14 md:px-10 md:py-16 lg:py-20">
        {/* No panel: the copy sits directly on the image, held legible by the
            overlay above and a soft text shadow, the way the ProjectBand
            headline does. */}
        <div className="max-w-xl [text-shadow:0_1px_12px_rgb(0_0_0/0.55)]">
          <Reveal
            as="p"
            className="type-eyebrow flex items-center gap-3 text-accent"
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Design it yourself
          </Reveal>

          <Reveal
            as="h2"
            delay={70}
            className="type-display mt-6 text-[clamp(2rem,3.6vw,3.25rem)] text-white"
          >
            See your new bathroom before anyone picks up a tool.
          </Reveal>

          <ol className="mt-9 border-t border-white/25">
            {STEPS.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={140 + index * 70}
                className="flex gap-5 border-b border-white/25 py-5"
              >
                <span
                  aria-hidden="true"
                  className="type-eyebrow mt-1 text-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-semibold tracking-tight text-white">
                    {step.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-white/75">
                    {step.body}
                  </span>
                </span>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={360}>
            <Button variant="cta" size="xl" asChild className="group mt-9">
              <Link href="/design">
                Start designing — it&rsquo;s free
                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
