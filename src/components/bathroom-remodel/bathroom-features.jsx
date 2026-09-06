import { CheckCircle, HelpCircle, Package, Zap } from "lucide-react";
import Reveal from "../motion/reveal";

/**
 * Why this bathroom system, in three claims.
 *
 * Two things were wrong beyond the styling. `sectionTitle` and
 * `sectionSubtitle` are authored in both locales and were never rendered, so
 * the section arrived as three unexplained cards with no heading — and a page
 * whose only h1 is the hero and whose next heading is an h3.
 *
 * The icons came from `import * as LucideIcons` indexed by a string from the
 * content file. That is named explicitly now — not for bundle size: measured,
 * the route is identical either way and no unused icon reaches the chunks,
 * because Next optimises lucide-react package imports by default. It is for
 * legibility and for the fallback, which now has three known names to miss
 * rather than the whole library to hit by accident.
 */
const ICONS = { CheckCircle, Package, Zap };

export function BathroomFeatures({ features }) {
  const { sectionTitle, sectionSubtitle, features: items } = features;

  return (
    <section id="features" className="bg-background py-16 md:py-24">
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

        <ul className="rule-hairline mt-12 grid border-t md:grid-cols-3">
          {items.map((feature, index) => {
            const Icon = ICONS[feature.icon] ?? HelpCircle;

            return (
              <Reveal
                as="li"
                key={feature.title}
                delay={Math.min(index * 70, 210)}
                className="rule-hairline flex flex-col gap-4 border-b py-8 md:border-b-0 md:border-l md:py-10 md:pl-8 md:first:border-l-0 md:first:pl-0 md:pr-8"
              >
                <span className="type-eyebrow text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="h-8 w-8 text-accent"
                />
                <h3 className="type-display text-xl text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
