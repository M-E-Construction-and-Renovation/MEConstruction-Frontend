import Image from "next/image";
import Reveal from "../motion/reveal";

/**
 * The five stages of a bathtub install.
 *
 * This was an autoplaying carousel: a 3s interval advancing through the steps,
 * with no pause control and no reduced-motion path. Content that starts moving
 * on its own and runs longer than five seconds needs a way to stop it (WCAG
 * 2.2.2) — the only thing that halted it here was clicking a step, and nothing
 * told a visitor that. It also hid four of the five stages at any moment, which
 * is the wrong trade for content whose entire point is that it is a sequence.
 *
 * All five are on the page now, numbered, in order, with no timer.
 *
 * The step images were width 600 by height 400 and then forced to
 * "h-80 md:h-full aspect-[4/3]" — three competing sizes on one element, over
 * square 1024x1024 sources. Square frames with a sizes hint now, lazy instead
 * of priority.
 *
 * Note for the client: step 5 ("Enjoy") reuses step 1's consultation
 * photograph, and the four source files are PNGs of photographs at 1.2-1.5 MB
 * each. next/image re-encodes them for delivery, so visitors are fine, but they
 * are heavy to store and slow to optimise; JPEG or WebP originals would be
 * better.
 */
export function BathtubProcess({ process }) {
  const { sectionTitle, sectionSubtitle, badge, steps } = process;

  return (
    <section
      id="process"
      className="bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="border-t border-white/20 pt-8">
          <Reveal
            as="p"
            className="type-eyebrow flex items-center gap-3 text-accent"
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {badge}
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-12">
            <Reveal
              as="h2"
              delay={70}
              className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-white md:col-span-6"
            >
              {sectionTitle}
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="measure self-end text-base leading-relaxed text-white/70 md:col-span-6"
            >
              {sectionSubtitle}
            </Reveal>
          </div>
        </div>

        <ol className="mt-12 border-t border-white/20">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={Math.min(index * 60, 240)}
              className="flex flex-col gap-5 border-b border-white/20 py-8 sm:flex-row sm:items-start sm:gap-8"
            >
              <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-primary/50 sm:w-40 md:w-48">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 192px, (min-width: 640px) 160px, 100vw"
                  quality={85}
                  className="object-cover"
                />
              </div>

              <div className="sm:pt-1">
                <span className="type-eyebrow text-accent">
                  {String(step.number).padStart(2, "0")}
                </span>
                <h3 className="type-display mt-3 text-2xl text-white">
                  {step.title}
                </h3>
                <p className="measure mt-3 text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
