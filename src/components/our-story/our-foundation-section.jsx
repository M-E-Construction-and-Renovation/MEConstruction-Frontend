import Reveal from "../motion/reveal";

/**
 * The three numbers the company is built on.
 *
 * These were set at 3xl inside small rounded cards on an accent gradient — the
 * most quotable content on the page, rendered at the scale of a caption. Here
 * they run at display size across a hairline-ruled row, which is what a figure
 * is for.
 */
const OurFoundationSetcion = ({ foundation }) => {
  const { sectionTitle, sectionSubtitle, items } = foundation;

  return (
    <section id="foundation" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="grid gap-6 border-t border-white/20 pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-white md:col-span-5"
          >
            {sectionTitle}
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-white/75 md:col-span-7"
          >
            {sectionSubtitle}
          </Reveal>
        </div>

        <dl className="mt-14 grid border-t border-white/20 sm:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 90}
              className="border-b border-white/20 py-8 sm:border-b-0 sm:border-l sm:border-white/20 sm:px-8 sm:first:border-l-0 sm:first:pl-0 md:py-10"
            >
              <dt className="type-display text-[clamp(2.75rem,5vw,4.25rem)] text-accent">
                {item.title}
              </dt>
              <dd className="type-eyebrow mt-3 text-white/75">
                {item.description}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default OurFoundationSetcion;
