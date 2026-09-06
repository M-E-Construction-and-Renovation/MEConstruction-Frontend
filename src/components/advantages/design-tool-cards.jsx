import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../motion/reveal";

/**
 * Two ways further into the site.
 *
 * Both destinations are internal routes, but they were rendered as bare <a>
 * tags with target="_blank" — so following one threw away the client router and
 * did a full page reload, into a new tab. Next's Link keeps the navigation
 * client-side and in place.
 *
 * The decorative `bgGradient` from the message file is no longer read: the
 * photographs already carry the colour, and a gradient behind an opaque image
 * only ever showed through as a tint on the corners.
 */
export function DesignToolCards({ explore }) {
  const { sectionTitle, sectionSubtitle, cards } = explore;

  return (
    <section id="explore" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-6 border-t pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary md:col-span-6"
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map(({ title, description, image, alt, href }, index) => (
            <Reveal key={title} delay={index * 90}>
              <Link
                href={href}
                className="group block focus-visible:outline-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent"
                  />
                </div>

                <div className="rule-hairline mt-5 flex items-start justify-between gap-6 border-t pt-5">
                  <span>
                    <span className="type-display block text-[1.35rem] text-primary transition-colors group-hover:text-accent group-focus-visible:text-accent">
                      {title}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
