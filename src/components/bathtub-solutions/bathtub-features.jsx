import { Bath, CheckCircle2, Gem, HelpCircle, Palette, Sparkles, Star } from "lucide-react";
import Reveal from "../motion/reveal";

/**
 * Six reasons the tubs are worth it, on the navy ground.
 *
 * The icons were emoji rendered as text at text-4xl. Two problems with that:
 * emoji are drawn by the operating system, so the set looked different on
 * Windows, macOS and Android and matched none of the line icons used everywhere
 * else on the site; and they sat in a bare span, so a screen reader read them
 * out ("bathtub", "star", "gem") as if they were content. They are mapped to
 * the site's icon set here and hidden from assistive tech.
 *
 * The map is keyed on the emoji actually in the content file, so the content
 * stays the source of truth and a value nobody mapped falls back visibly rather
 * than rendering a stray glyph.
 */
const ICONS = {
  "🛁": Bath,
  "⭐": Star,
  "🧼": Sparkles,
  "🎨": Palette,
  "✓": CheckCircle2,
  "💎": Gem,
};

export function BathtubFeatures({ features }) {
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
            const Icon = ICONS[feature.icon] ?? HelpCircle;

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
