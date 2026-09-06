import Image from "next/image";
import Reveal from "../motion/reveal";

/**
 * Third-party accreditations.
 *
 * These are credentials, so they should read as a register rather than as
 * decoration: hairline cells on a plain ground, each logo given room on white
 * so the badge art keeps its own colours. The previous version put every badge
 * on an accent gradient inside a rounded, shadowed card in a five-column
 * masonry — which tinted the logos and made six credentials look like an
 * advert.
 *
 * All six also carried `priority`, so six below-the-fold badges competed with
 * the hero for bandwidth.
 */
const AwardsSection = ({ awards }) => {
  const { sectionTitle, sectionSubtitle, items } = awards;

  return (
    <section id="awards" className="bg-background py-16 md:py-24">
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

        <ul className="rule-hairline mt-12 grid border-t sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={Math.min(index * 60, 300)}
              className="rule-hairline flex flex-col gap-5 border-b p-7 sm:[&:nth-child(2n)]:border-l lg:[&:nth-child(2n)]:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l"
            >
              {/* White plate: these badges are drawn for a light ground, and the
                  page's off-white would dull them. */}
              <span className="flex h-24 w-24 shrink-0 items-center justify-center bg-white p-3">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={96}
                  height={96}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </span>

              <span>
                <span className="block font-semibold tracking-tight text-primary">
                  {item.title}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AwardsSection;
