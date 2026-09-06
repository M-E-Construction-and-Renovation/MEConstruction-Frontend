import Reveal from "../motion/reveal";

/**
 * The three principles, as a numbered register.
 *
 * The sequence is real here — customer, then integrity, then craft — so the
 * numerals carry information rather than decorating. Boxed cards with a solid
 * navy header bar were doing the separating before; hairlines do it without the
 * chrome, and give the values the same voice as the rest of the site.
 */
const CoreValuesSection = ({ coreValues }) => {
  const { sectionTitle, sectionSubtitle, values } = coreValues;

  return (
    <section id="core-values" className="bg-tinted py-16 md:py-24">
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

        <ol className="rule-hairline mt-12 grid border-t md:grid-cols-3">
          {values.map(({ title, description }, index) => (
            <Reveal
              as="li"
              key={title}
              delay={index * 90}
              className="rule-hairline border-b py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 md:py-10"
            >
              <span aria-hidden="true" className="type-eyebrow text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="type-display mt-4 text-[1.35rem] text-primary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CoreValuesSection;
