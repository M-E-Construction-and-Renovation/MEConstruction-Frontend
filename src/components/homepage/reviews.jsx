"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import { reviewsPlatforms } from "@/data/contact-data";
import Reveal from "../motion/reveal";

/**
 * Testimonials as an editorial column, not a carousel of equal cards.
 *
 * These reviews are wildly different lengths — two sentences against a full
 * paragraph — so a uniform grid either truncates the substantial ones or leaves
 * the short ones stranded in whitespace. A masonry column lets each quote be
 * the length it actually is, and the longest ones are the persuasive ones.
 */
export function Reviews({ reviews }) {
  const { sectionTitle, rating, items } = reviews;

  return (
    <section id="reviews" className="bg-tinted py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-6 border-t pt-8 md:grid-cols-12 md:items-end">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,4vw,3.5rem)] text-primary md:col-span-7"
          >
            {sectionTitle}
          </Reveal>

          <Reveal delay={80} className="md:col-span-5 md:text-right">
            <p className="flex items-baseline gap-3 md:justify-end">
              <span className="type-display text-5xl text-accent">
                {rating.score}
              </span>
              <span className="flex gap-0.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    strokeWidth={0}
                  />
                ))}
              </span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {rating.summary}
            </p>
          </Reveal>
        </div>

        {/* CSS columns give a true masonry flow without a layout library. */}
        <div className="mt-14 gap-6 md:mt-16 md:columns-2 lg:columns-3">
          {items.map((review, index) => (
            <Reveal
              key={`${review.name}-${index}`}
              delay={(index % 3) * 70}
              className="mb-6 break-inside-avoid bg-background p-7"
            >
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-accent text-accent"
                    strokeWidth={0}
                  />
                ))}
              </span>

              <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-primary/85">
                {review.text}
              </blockquote>

              <footer className="rule-hairline mt-5 flex items-baseline justify-between border-t pt-4">
                <cite className="text-sm font-semibold not-italic tracking-tight text-primary">
                  {review.name}
                </cite>
                <span className="type-eyebrow text-muted-foreground">
                  {review.location} · {review.date}
                </span>
              </footer>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={160}
          className="rule-hairline mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t pt-6"
        >
          <span className="type-eyebrow text-muted-foreground">
            Verified elsewhere
          </span>
          {reviewsPlatforms.map((platform) => (
            <Link
              key={platform.id}
              href={platform.link}
              target={platform.target}
              rel="noopener noreferrer"
              className="text-sm text-primary underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:text-accent focus-visible:outline-none"
            >
              {platform.text}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
