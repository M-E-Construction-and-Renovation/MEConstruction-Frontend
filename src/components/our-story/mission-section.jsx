import Image from "next/image";
import Reveal from "../motion/reveal";
import Parallax from "../motion/parallax";

/**
 * What the company is for.
 *
 * The two paragraphs used to sit under two competing `<h2>` elements, so the
 * section announced itself twice and the page's heading outline had a sibling
 * where a child belonged. The second is now an `<h3>`, which is what it always
 * was.
 */
const MissionSection = ({ mission }) => {
  const { sectionTitle, sectionSubtitle, title, description, image } = mission;

  return (
    <section id="mission" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal
              as="h2"
              className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary"
            >
              {sectionTitle}
            </Reveal>

            <Reveal
              as="p"
              delay={80}
              className="measure mt-6 text-base leading-relaxed text-muted-foreground"
            >
              {sectionSubtitle}
            </Reveal>

            <Reveal
              as="h3"
              delay={140}
              className="type-display rule-hairline mt-10 border-t pt-8 text-[clamp(1.35rem,2.2vw,1.9rem)] text-accent"
            >
              {title}
            </Reveal>

            <Reveal
              as="p"
              delay={200}
              className="measure mt-4 text-base leading-relaxed text-muted-foreground"
            >
              {description}
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Parallax
                distance={50}
                className="absolute inset-0 -top-[6%] h-[112%] w-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </Parallax>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
