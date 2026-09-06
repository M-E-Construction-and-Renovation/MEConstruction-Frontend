import QuoteButton from "../ui/quote-button";
import Reveal from "../motion/reveal";
import BeforeAfterSlider from "../shared/before-after-slider";

/**
 * Before/after comparison.
 *
 * The drag-to-reveal is kept — for a renovation firm it is the most persuasive
 * thing on the page — but the frame itself now comes from the shared slider
 * rather than a third hand-rolled copy of the same clip-path and range input.
 *
 * The frame was the other problem here. Both photographs are 1440x1795 — 4:5
 * portrait — and were being poured into an aspect-[4/3] landscape box, so
 * object-cover matched the width and threw away roughly two fifths of the
 * height, cropping through the middle of the room.
 *
 * Both images also carried priority, which competes with the hero for the
 * preload budget on a section below the fold. The shared slider loads lazily.
 *
 * With the quote button isolated as its own client component, this section is
 * server-rendered.
 */
export function BathroomBeforeAfter({ beforeAfter }) {
  const {
    sectionTitle,
    sectionSubtitle,
    descriptions,
    button,
    labels,
    beforeAfterImages,
  } = beforeAfter;

  return (
    <section
      id="before-after"
      className="bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="grid gap-6 border-t border-white/20 pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-white md:col-span-6"
          >
            {sectionTitle}
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-white/70 md:col-span-6"
          >
            {sectionSubtitle}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6 lg:self-center">
            {descriptions.map((description, index) => (
              <Reveal
                as="p"
                key={description.slice(0, 40)}
                delay={Math.min(index * 60, 180)}
                className="measure mb-5 text-sm leading-relaxed text-white/70 md:text-base"
              >
                {description}
              </Reveal>
            ))}

            <Reveal delay={220} className="mt-8">
              <QuoteButton source="bathroom_before_after" label={button} />
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:col-span-6">
            <BeforeAfterSlider
              before={beforeAfterImages.before}
              after={beforeAfterImages.after}
              labels={labels}
              subject="bathroom"
              className="mx-auto aspect-[4/5] max-w-[520px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
