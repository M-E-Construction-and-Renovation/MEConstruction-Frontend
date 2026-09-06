import Reveal from "../motion/reveal";

/**
 * Service areas.
 *
 * The old version sat on a blurred background photo with two decorative
 * blue/indigo blur blobs and red map pins — three colours the design system
 * does not contain, plus glass panels used as decoration. Renovation is a local
 * purchase, so what matters is whether a visitor finds their own town fast:
 * a plain, dense, alphabetical index does that better than seventeen frosted
 * cards.
 */
const LOCATIONS = [
  ["Arlington Heights", "60005"],
  ["Barrington Hills", "60010"],
  ["Buffalo Grove", "60089"],
  ["Deerfield", "60015"],
  ["Glenview", "60026"],
  ["Grayslake", "60030"],
  ["Gurnee", "60031"],
  ["Highland Park", "60035"],
  ["Libertyville", "60048"],
  ["Lincolnwood", "60712"],
  ["Mount Prospect", "60056"],
  ["Mundelein", "60060"],
  ["Niles", "60714"],
  ["Northbrook", "60062"],
  ["Park Ridge", "60068"],
  ["Vernon Hills", "60061"],
  ["Wheeling", "60090"],
];

export function LocationSection() {
  return (
    <section id="service-areas" className="relative bg-background py-16 md:py-24">
      <div className="relative mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-6 border-t pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary md:col-span-6"
          >
            We proudly serve these areas in Illinois
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-muted-foreground md:col-span-6"
          >
            Targeted local support for your construction and renovation needs
            across {LOCATIONS.length} communities on Chicago&rsquo;s North Shore
            and northwest suburbs.
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {LOCATIONS.map(([name, zip], index) => (
            <Reveal
              as="li"
              key={zip}
              delay={Math.min(index * 25, 250)}
              className="rule-hairline flex items-baseline justify-between gap-4 border-b py-3.5"
            >
              <span className="text-[0.95rem] text-primary">{name}</span>
              <span className="type-eyebrow text-muted-foreground">{zip}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
