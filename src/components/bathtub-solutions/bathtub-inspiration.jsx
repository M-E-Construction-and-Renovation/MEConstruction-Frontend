import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HelpCircle, ImageIcon, Pencil } from "lucide-react";
import { Button } from "../ui/button";
import Reveal from "../motion/reveal";

/**
 * Two ways further in: the finished-work gallery, and the design tool.
 *
 * The photographs were declared width 400 by height 300 — a 4:3 declaration
 * over square 1024x1024 sources — then stretched to fill an h-64 box, so
 * next/image built a srcset for a 400px box and the browser scaled up whatever
 * arrived. Real frames with sizes hints now, lazy rather than priority.
 *
 * A "color" gradient from the content file sat over each image at 20% opacity
 * and behind each icon: blue-to-cyan, on a navy-and-orange site. The scrim is
 * neutral now and the icons use the accent.
 *
 * Link wrapping Button produced an anchor around a button; asChild renders one
 * anchor instead.
 */
const ICONS = { ImageIcon, Pencil };

export function BathtubInspiration({ inspiration }) {
  const { sectionTitle, sectionSubtitle, cards } = inspiration;

  return (
    <section id="inspiration" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-6 border-t pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary md:col-span-5"
          >
            {sectionTitle}
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-muted-foreground md:col-span-7"
          >
            {sectionSubtitle}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((card, index) => {
            const Icon = ICONS[card.icon] ?? HelpCircle;

            return (
              <Reveal
                key={card.title}
                delay={Math.min(index * 90, 180)}
                className="group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden bg-primary p-8 md:min-h-[460px]"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={85}
                  className="-z-10 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/55 to-black/10"
                />

                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="h-8 w-8 text-accent"
                />
                <h3 className="type-display mt-4 text-2xl text-white md:text-3xl">
                  {card.title}
                </h3>
                <p className="measure mt-3 text-sm leading-relaxed text-white/80">
                  {card.description}
                </p>

                <div className="mt-7">
                  <Button variant="cta" asChild>
                    <Link href={card.href}>
                      {card.label}
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
