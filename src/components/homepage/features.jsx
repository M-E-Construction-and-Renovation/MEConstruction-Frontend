import * as LucideIcons from "lucide-react";
import Reveal from "../motion/reveal";

/**
 * Capabilities band — what the company does, stated plainly.
 *
 * Deliberately not cards. This section and Advantages carried the same shape in
 * the old design (four boxes of icon + title + paragraph), so the page said the
 * same thing twice in the same voice. Here the items sit in one hairline-ruled
 * row with the rules doing the separating; Advantages answers "why us" in a
 * different register entirely.
 */
export function Features({ features }) {
  const { title, items } = features;

  return (
    <section id="features" className="relative bg-background py-14 md:py-20">
      <div className="relative mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <Reveal
          as="h2"
          className="type-display text-[clamp(1.75rem,3vw,2.75rem)] text-primary"
        >
          {title}
        </Reveal>

        <div className="rule-hairline mt-10 grid border-t sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = LucideIcons[item.icon] ?? LucideIcons.Hammer;

            return (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="rule-hairline border-b px-0 py-8 sm:px-7 sm:first:pl-0 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:py-10"
              >
                <Icon
                  aria-hidden="true"
                  className="h-6 w-6 text-accent"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-primary">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
