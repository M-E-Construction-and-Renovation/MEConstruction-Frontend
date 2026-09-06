import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../motion/reveal";

/**
 * The design tool, pitched.
 *
 * The photograph is 1200x1600 — 3:4 portrait — and was being rendered in an
 * `aspect-square` frame, so a quarter of its height was cropped away for no
 * reason. The frame matches the source now.
 *
 * `<Link><Button>` again produced an `<a>` around a `<button>`; `asChild`
 * renders a single anchor.
 */
export function BathroomCustomizationTool({ customization }) {
  const {
    badge,
    sectionTitle,
    sectionSubtitle,
    description,
    highlight,
    image,
    link,
  } = customization;

  return (
    <section id="customization" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-10 border-t pt-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                quality={85}
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:self-center">
            <Reveal
              as="p"
              className="type-eyebrow flex items-center gap-3 text-accent"
            >
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {badge}
            </Reveal>

            <Reveal
              as="h2"
              delay={70}
              className="type-display mt-6 text-[clamp(2rem,3.6vw,3.25rem)] text-primary"
            >
              {sectionTitle}
            </Reveal>

            <Reveal
              as="p"
              delay={120}
              className="measure mt-6 text-base leading-relaxed text-muted-foreground"
            >
              {sectionSubtitle}
            </Reveal>

            <Reveal
              as="p"
              delay={160}
              className="measure mt-5 text-base leading-relaxed text-muted-foreground"
            >
              {description}
            </Reveal>

            <Reveal
              as="p"
              delay={200}
              className="type-display mt-8 text-xl text-primary"
            >
              {highlight}
            </Reveal>

            <Reveal delay={240} className="mt-8">
              <Button variant="cta" size="xl" asChild className="group">
                <Link href="/design">
                  {link}
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
