import Reveal from "../motion/reveal";

/**
 * Hero for the long-form guide pages, with their contents.
 *
 * The buying guide and the maintenance guide are the same kind of page — a long
 * read in numbered sections — and were about to grow the same hero twice, so it
 * lives here. The installation-process page is the third of that shape and can
 * adopt it too.
 *
 * `sections` is the same array the page renders its sections from, so a link
 * here cannot point at a heading that is not there.
 *
 * The links are plain anchors: no JavaScript, no scroll-spy, nothing to
 * hydrate. Landing under the sticky nav is handled site-wide by the `:target`
 * scroll-margin rule in globals.css.
 */
/**
 * Tailwind needs the class to exist in the source, so the column count is a
 * lookup rather than an interpolated string. Pages in this shape run from two
 * sections (installation process) to five (maintenance).
 */
const NAV_COLUMNS = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export default function GuideHero({ eyebrow, headline, lead, sections }) {
  const columns = NAV_COLUMNS[sections.length] ?? "lg:grid-cols-4";

  return (
    <section
      id="guide-hero"
      className="bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="border-t border-white/20 pt-8">
          <Reveal
            as="p"
            className="type-eyebrow flex items-center gap-3 text-accent"
          >
            <span
              className="animate-rule-draw h-px w-8 bg-accent"
              aria-hidden="true"
            />
            {eyebrow}
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-12">
            <Reveal
              as="h1"
              delay={70}
              className="type-display text-[clamp(2.25rem,4.4vw,4rem)] text-white md:col-span-6"
            >
              {headline}
            </Reveal>

            <Reveal
              as="p"
              delay={140}
              className="measure self-end text-base leading-relaxed text-white/80 md:col-span-6"
            >
              {lead}
            </Reveal>
          </div>

          <Reveal
            as="nav"
            delay={200}
            aria-label="Guide contents"
            className="mt-10 border-t border-white/20"
          >
            <ol className={`grid sm:grid-cols-2 ${columns}`}>
              {sections.map((section, index) => (
                <li
                  key={section.id}
                  className="border-b border-white/20 lg:border-b-0 lg:border-l lg:border-white/20 lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
                >
                  <a
                    href={`#${section.id}`}
                    className="flex items-baseline gap-3 py-4 text-white/85 transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                  >
                    <span className="type-eyebrow shrink-0 text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base">{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
