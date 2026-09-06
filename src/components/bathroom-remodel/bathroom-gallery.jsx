import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Reveal from "../motion/reveal";

/**
 * Three finished projects, and the way through to the rest.
 *
 * The frames were `aspect-video` over sources that are portrait or square
 * (750x1000, 1200x1600, 1600x1200), so two of the three were cropped to a
 * letterbox strip through the middle of the room. A 4:3 frame keeps far more of
 * each photograph and still lines the three up.
 *
 * The content carries an `alt` for every project and the component ignored it,
 * using the title instead — so a screen reader heard the caption twice and
 * never heard what was in the picture.
 *
 * All three also had `priority`, which is three below-the-fold preloads
 * competing with the hero.
 */
export function BathroomGallery({ gallery }) {
  const { sectionTitle, sectionSubtitle, projects, link } = gallery;

  return (
    <section id="gallery" className="bg-background py-16 md:py-24">
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

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              as="li"
              key={project.title}
              delay={Math.min(index * 80, 160)}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.alt ?? project.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 31vw, 100vw"
                  quality={85}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="type-display mt-4 text-lg text-primary">
                {project.title}
              </h3>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="mt-12">
          <Button variant="cta" size="xl" asChild className="group">
            <Link href="/before-after">
              {link}
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
