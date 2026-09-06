import { CheckCircle2, HelpCircle, Shield, Sparkles, Zap } from "lucide-react";
import Reveal from "../motion/reveal";

/**
 * Four reasons the system works, on the navy ground.
 *
 * Icons were pulled from `import * as LucideIcons` indexed by a content string;
 * named explicitly now so the four this component can render are visible at the
 * top of the file and a typo in the content falls back predictably.
 *
 * The staggered entrance used `animate-in fade-in slide-in-from-bottom` from
 * tw-animate-css, which is not imported — the `animationDelay` styles were
 * pacing an animation that did not exist.
 */
const ICONS = { CheckCircle2, Shield, Sparkles, Zap };

export function ShowerFeatures({ features }) {
  const { sectionTitle, sectionSubtitle, features: items } = features;

  return (
    <section
      id="features"
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

        <ul className="mt-12 grid gap-px border-t border-white/20 md:grid-cols-2">
          {items.map((feature, index) => {
            const Icon = ICONS[feature.icon] ?? HelpCircle;

            return (
              <Reveal
                as="li"
                key={feature.title}
                delay={Math.min(index * 70, 210)}
                className="flex gap-5 border-b border-white/20 py-8 md:even:border-l md:even:border-white/20 md:even:pl-8 md:odd:pr-8"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="mt-1 h-7 w-7 shrink-0 text-accent"
                />
                <div>
                  <h3 className="type-display text-xl text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
