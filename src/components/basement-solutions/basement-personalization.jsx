import { HelpCircle, Palette, Settings, Zap } from "lucide-react";
import QuoteButton from "../ui/quote-button";
import Reveal from "../motion/reveal";

/**
 * What can be personalised, and the way to ask for it.
 *
 * The call to action said "Get a Free Quote" and linked to /design — the
 * configurator, which only supports bathrooms. So the one button on this
 * section promised a quote and delivered a bathroom design tool. It opens the
 * quote modal now, which is what its own label says it does. Same fault as the
 * kitchen page.
 *
 * The section also carried two decorative blurred circles behind it — a 40x40
 * accent blob and a 40x40 primary blob at 10% opacity under blur-3xl — two
 * extra composited layers producing a smudge nobody can identify. Gone.
 *
 * The cards were white gradient panels floating on navy; they are ruled columns
 * on the ground itself now.
 */
const ICONS = { Palette, Settings, Zap };

export function BasementPersonalization({ personalization }) {
  const { badge, sectionTitle, sectionSubtitle, features, cta } =
    personalization;

  return (
    <section id="personalization" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline border-t pt-8">
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
              className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary md:col-span-5"
            >
              {sectionTitle}
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="measure self-end text-base leading-relaxed text-muted-foreground md:col-span-7"
            >
              {sectionSubtitle}
            </Reveal>
          </div>
        </div>

        <ul className="rule-hairline mt-12 grid border-t md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = ICONS[feature.icon] ?? HelpCircle;

            return (
              <Reveal
                as="li"
                key={feature.title}
                delay={Math.min(index * 70, 210)}
                className="rule-hairline flex flex-col border-b py-8 md:border-b-0 md:border-l md:py-10 md:pl-8 md:first:border-l-0 md:first:pl-0 md:pr-8"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="h-8 w-8 text-accent"
                />
                <h3 className="type-display mt-4 text-xl text-primary">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Reveal>
            );
          })}
        </ul>

        <Reveal
          delay={200}
          className="rule-hairline mt-12 flex flex-col gap-6 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="type-display text-xl text-primary">{cta.text}</p>
          <div className="shrink-0">
            <QuoteButton source="basement_personalization" label={cta.button} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
