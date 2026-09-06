import Image from "next/image";
import Reveal from "../motion/reveal";

/**
 * The three stages of a fit-out: make, prepare, install.
 *
 * This was a carousel showing one step at a time behind two arrows. A process
 * is the one kind of content a carousel is worst at — the whole point is that
 * it is a sequence, and hiding two thirds of it means nobody ever sees the
 * shape of the job. All three are on the page now, numbered, in order. Same
 * decision as the advantages carousel.
 *
 * The controls it lost were not doing much anyway: the dots were unlabelled
 * buttons with no `aria-current` and no accessible name, so the only way to
 * know where you were was to look.
 *
 * Every step image is square (1024 up to 3664), so the frames are square and
 * nothing is cropped.
 */
export function BathroomProcess({ process }) {
  const { sectionTitle, sectionSubtitle, description, steps } = process;

  return (
    <section
      id="process"
      className="bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="grid gap-6 border-t border-white/20 pt-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal
              as="h2"
              className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-white"
            >
              {sectionTitle}
            </Reveal>
            <Reveal as="p" delay={70} className="type-eyebrow mt-4 text-accent">
              {sectionSubtitle}
            </Reveal>
          </div>

          <Reveal
            as="p"
            delay={120}
            className="measure self-end text-base leading-relaxed text-white/70 md:col-span-6"
          >
            {description}
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={Math.min(index * 90, 180)}
              className="flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-primary/50">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 30vw, 100vw"
                  quality={85}
                  className="object-cover"
                />
                <span
                  aria-hidden="true"
                  className="type-display absolute top-0 left-0 flex h-14 w-14 items-center justify-center bg-accent text-xl text-accent-foreground"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="type-display mt-6 text-2xl text-white">
                <span className="sr-only">{`Step ${index + 1}: `}</span>
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
