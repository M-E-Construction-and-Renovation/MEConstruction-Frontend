"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "../ui/button";
import Reveal from "../motion/reveal";
import Parallax from "../motion/parallax";

/**
 * The work, as an editorial index rather than a card grid.
 *
 * Each solution gets a full row with a large photograph — a renovation is
 * bought on the strength of finished rooms, so the picture is the argument and
 * the copy annotates it. Rows alternate sides to keep the scroll from settling
 * into a rhythm you stop reading.
 */
export function Solutions({ solutions }) {
  const { sectionTitle, sectionSubtitle, cards } = solutions;

  return (
    <section id="solutions" className="bg-tinted py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        {/* Section head */}
        <div className="rule-hairline grid gap-6 border-t pt-8 md:grid-cols-12">
          <Reveal as="h2" className="type-display text-[clamp(2rem,4vw,3.5rem)] text-primary md:col-span-7">
            {sectionTitle}
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-muted-foreground md:col-span-5"
          >
            {sectionSubtitle}
          </Reveal>
        </div>

        {/* Index */}
        <div className="mt-16 md:mt-24">
          {cards.map((card, index) => {
            const flipped = index % 2 === 1;

            return (
              <Reveal
                key={card.title}
                className="rule-hairline grid items-center gap-8 border-t py-12 md:grid-cols-12 md:gap-12 md:py-16 lg:gap-16"
              >
                {/* Photograph */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-muted md:col-span-7 ${
                    flipped ? "md:order-2" : ""
                  }`}
                >
                  <Parallax distance={48} className="absolute inset-0 -top-[8%] h-[116%] w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) 58vw, 100vw"
                      className="object-cover"
                    />
                  </Parallax>
                </div>

                {/* Annotation */}
                <div className={`md:col-span-5 ${flipped ? "md:order-1" : ""}`}>
                  <p className="type-eyebrow text-accent">{card.tag}</p>

                  <h3 className="type-display mt-4 text-[clamp(1.65rem,2.6vw,2.5rem)] text-primary">
                    {card.title}
                  </h3>

                  <p className="measure mt-4 text-base leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>

                  <ul className="rule-hairline mt-7 border-t">
                    {card.features.map((feature) => (
                      <li
                        key={feature}
                        className="rule-hairline flex items-start gap-3 border-b py-2.5 text-sm text-primary/85"
                      >
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="cta" size="lg" asChild className="group mt-8">
                    <Link href={card.href}>
                      {card.ctaText}
                      <ArrowRight
                        aria-hidden="true"
                        className="ml-2 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                      />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
