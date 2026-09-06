"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * Design tool entry.
 *
 * The background video is 14.3MB and was set to `preload="auto"`, so every
 * visitor downloaded all of it before doing the one thing this page exists for
 * — pressing a button. It now preloads metadata only and starts playing when it
 * is ready, over a navy ground so the page is legible from the first frame
 * rather than blank while it buffers.
 *
 * It also carried a JavaScript `ended` handler that rewound and replayed the
 * video, alongside the `loop` attribute. With `loop` set, `ended` never fires —
 * the handler had never run.
 *
 * The file itself still wants re-encoding: 14.3MB is roughly ten times what a
 * looping background at this size should cost.
 */
export default function DesignToolLanding() {
  const videoRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Autoplay is a motion decision, so it waits on the preference rather than
  // running from an attribute that ignores it.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
      return;
    }
    video.play().catch(() => {
      // Autoplay refused (battery saver, data saver). The navy ground and the
      // copy over it are the real page; the video is decoration.
    });
  }, [reduceMotion]);

  return (
    <div className="relative isolate flex h-full flex-col overflow-hidden bg-primary text-primary-foreground">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      >
        <source src="/videos/design-bg-video2.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/70 via-40% to-black/35"
      />

      <div className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-12 md:px-10">
          <div className="max-w-2xl">
            <p className="type-eyebrow flex items-center gap-3 text-accent">
              <span
                className="animate-rule-draw h-px w-8 bg-accent"
                aria-hidden="true"
              />
              Interactive design tool
            </p>

            <h1 className="type-display mt-6 text-[clamp(2.25rem,4.8vw,4rem)] text-white">
              Design your bathroom before anyone lifts a tool.
            </h1>

            <p className="measure mt-6 text-base leading-relaxed text-white/90">
              Choose your layout, swap fixtures and finishes, and watch the room
              update as you go. Save it with your email and pick it back up
              whenever you like.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="cta" size="xl" asChild className="group">
                <Link href="/design/choose-project">
                  Start designing
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  />
                </Link>
              </Button>

              <Button variant="ctaQuiet" size="xl" asChild>
                <Link href="/" className="group">
                  <ArrowLeft
                    aria-hidden="true"
                    className="mr-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:-translate-x-1"
                  />
                  Back to site
                </Link>
              </Button>
            </div>

            <p className="type-eyebrow mt-10 border-t border-white/20 pt-6 text-white/70">
              Free · No account needed · Takes about two minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
