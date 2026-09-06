"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Reveal from "../motion/reveal";
import Parallax from "../motion/parallax";

// Each column drifts at its own rate, which is what reads as depth. Uniform
// parallax across a grid just looks like the whole grid is sliding.
const COLUMN_DRIFT = [70, 30, 90, 45];
const COLUMN_OFFSET = ["lg:mt-0", "lg:mt-20", "lg:mt-8", "lg:mt-28"];

export function Gallery({ gallery }) {
  const { sectionTitle, sectionSubtitle, button, images } = gallery;

  return (
    <section id="gallery" className="relative bg-background py-16 md:py-24">
      <div className="relative mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-6 border-t pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,4vw,3.5rem)] text-primary md:col-span-6"
          >
            {sectionTitle}
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-muted-foreground md:col-span-6"
          >
            {sectionSubtitle}
          </Reveal>
        </div>
      </div>

      {/* Wider than the text column: the photographs are the argument here, so
          they get more of the page than the copy that introduces them. */}
      <div className="relative mx-auto mt-14 w-full max-w-[1600px] px-4 md:mt-20 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {images.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 80}
              className={COLUMN_OFFSET[index % COLUMN_OFFSET.length]}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Parallax
                  distance={COLUMN_DRIFT[index % COLUMN_DRIFT.length]}
                  className="absolute inset-0 -top-[10%] h-[120%] w-full"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="object-cover"
                  />
                </Parallax>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 flex justify-center">
          <Button variant="cta" size="xl" asChild className="group">
            <Link href="/gallery">
              {button}
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
