import {
  Briefcase,
  Clapperboard,
  Gem,
  HelpCircle,
  Home,
  Ruler,
  Wrench,
} from "lucide-react";
import Reveal from "../motion/reveal";

/**
 * Six reasons to finish the basement, on the navy ground.
 *
 * The icons were emoji rendered as text at text-4xl. Emoji are drawn by the
 * operating system, so the set looked different on Windows, macOS and Android
 * and matched none of the line icons used everywhere else; and in a bare span a
 * screen reader read them out as content.
 *
 * Keys are written as explicit codepoints rather than pasted glyphs, because
 * one of them ("hammer and wrench") carries a U+FE0F variation selector in the
 * content file and one that does not would look identical in this source while
 * failing to match. The lookup strips variation selectors so both forms hit.
 */
const ICONS = {
  "\u{1F3E0}": Home, // house
  "\u{1F6E0}": Wrench, // hammer and wrench
  "\u{1F4D0}": Ruler, // triangular ruler
  "\u{1F3AC}": Clapperboard, // clapper board
  "\u{1F4BC}": Briefcase, // briefcase
  "\u{1F48E}": Gem, // gem stone
};

const iconFor = (value) =>
  ICONS[String(value ?? "").replace(/\uFE0F/g, "")] ?? HelpCircle;

export function BasementFeatures({ features }) {
  const { sectionTitle, sectionSubtitle, cards } = features;

  return (
    <section
      id="features"
      className="bg-primary py-16 text-primary-foreground md:py-24"
    >
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
            className="measure self-end text-base leading-relaxed text-white/70 md:col-span-7"
          >
            {sectionSubtitle}
          </Reveal>
        </div>

        <ul className="mt-12 grid border-t border-white/20 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-12">
          {cards.map((feature, index) => {
            const Icon = iconFor(feature.icon);

            return (
              <Reveal
                as="li"
                key={feature.title}
                delay={Math.min(index * 55, 240)}
                className="flex flex-col border-b border-white/20 py-8"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="h-8 w-8 text-accent"
                />
                <h3 className="type-display mt-4 text-xl text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
