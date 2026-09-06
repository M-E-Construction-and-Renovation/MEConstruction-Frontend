import { AlertCircle, Check } from "lucide-react";
import Reveal from "../motion/reveal";
import {
  BATHTUB_GUIDE,
  BUDGET_GUIDE,
  BUYING_TIPS,
  SHOWER_GUIDE,
} from "@/data/buying-guide";

/**
 * The guide itself.
 *
 * Every entry used to be its own hand-written block of JSX inside one 305-line
 * component; they are rendered from data now, so the four sections share one
 * set of markup and a new fixture type is a line in a file rather than twelve
 * lines of nested divs.
 *
 * Two things were being read aloud that should not have been. Each tip was
 * headed with a literal check-mark character before its name, which a screen
 * reader announces ("check mark measure accurately"); the tick is an icon now,
 * hidden from assistive tech. The hidden-costs list typed its own bullet
 * characters into each item, so every line was announced as "bullet plumbing
 * upgrades or rerouting" on top of the list semantics it already had.
 *
 * Prices came at the end of a sentence. They are set apart now, which is both
 * easier to scan and the reason they could be lifted out of the prose.
 *
 * The section anchors match the ids the hero's contents links point at.
 */

function SectionHeader({ title, lead, tone = "light" }) {
  const dark = tone === "dark";

  return (
    <div
      className={`grid gap-6 border-t pt-8 md:grid-cols-12 ${
        dark ? "border-white/20" : "rule-hairline"
      }`}
    >
      <Reveal
        as="h2"
        className={`type-display text-[clamp(2rem,3.6vw,3.25rem)] md:col-span-5 ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </Reveal>
      <Reveal
        as="p"
        delay={80}
        className={`measure self-end text-base leading-relaxed md:col-span-7 ${
          dark ? "text-white/70" : "text-muted-foreground"
        }`}
      >
        {lead}
      </Reveal>
    </div>
  );
}

function EntryList({ items, showPrice = false }) {
  return (
    <ul className="rule-hairline grid border-t sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-12">
      {items.map((item, index) => (
        <Reveal
          as="li"
          key={item.name}
          delay={Math.min(index * 55, 240)}
          className="rule-hairline flex flex-col border-b py-7"
        >
          <h4 className="type-display text-lg text-primary">{item.name}</h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          {showPrice && item.priceFrom && (
            <p className="type-eyebrow mt-4 text-accent">
              From {item.priceFrom}
            </p>
          )}
        </Reveal>
      ))}
    </ul>
  );
}

function Subheading({ children }) {
  return (
    <h3 className="type-eyebrow mt-14 mb-6 text-muted-foreground">{children}</h3>
  );
}

export const BuyingGuideMain = () => {
  return (
    <>
      <section id={SHOWER_GUIDE.id} className="bg-background py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
          <SectionHeader
            title={SHOWER_GUIDE.title}
            lead="Four ways to build a shower, and what each one is good at. Prices are a starting point, not a quote."
          />
          <Subheading>Shower types</Subheading>
          <EntryList items={SHOWER_GUIDE.types} showPrice />
          <Subheading>Material options</Subheading>
          <EntryList items={SHOWER_GUIDE.materials} />
        </div>
      </section>

      <section id={BATHTUB_GUIDE.id} className="bg-tinted py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
          <SectionHeader
            title={BATHTUB_GUIDE.title}
            lead="Five shapes of tub, and the four materials they are made from. What you pick here drives most of the budget."
          />
          <Subheading>Bathtub types</Subheading>
          <EntryList items={BATHTUB_GUIDE.types} showPrice />
          <Subheading>Material options</Subheading>
          <EntryList items={BATHTUB_GUIDE.materials} />
        </div>
      </section>

      <section
        id={BUDGET_GUIDE.id}
        className="bg-primary py-16 text-primary-foreground md:py-24"
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
          <SectionHeader
            title={BUDGET_GUIDE.title}
            lead="Three broad tiers, and the costs that turn up after the quote is signed if nobody looked for them."
            tone="dark"
          />

          <ol className="mt-12 grid border-t border-white/20 md:grid-cols-3">
            {BUDGET_GUIDE.tiers.map((tier, index) => (
              <Reveal
                as="li"
                key={tier.name}
                delay={Math.min(index * 70, 210)}
                className="flex flex-col border-b border-white/20 py-8 md:border-b-0 md:border-l md:border-white/20 md:py-10 md:pl-8 md:pr-8 md:first:border-l-0 md:first:pl-0"
              >
                <span className="type-eyebrow text-white/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="type-display mt-4 text-xl text-white">
                  {tier.name}
                </h3>
                <p className="type-display mt-2 text-2xl text-accent">
                  {tier.range}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {tier.description}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={220} className="mt-14 border-t border-white/20 pt-8">
            <h3 className="type-display flex items-center gap-3 text-xl text-white">
              <AlertCircle
                aria-hidden="true"
                strokeWidth={1.5}
                className="h-6 w-6 shrink-0 text-accent"
              />
              Hidden costs to consider
            </h3>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {BUDGET_GUIDE.hiddenCosts.map((cost) => (
                <li
                  key={cost}
                  className="border-b border-white/20 py-4 text-sm text-white/70"
                >
                  {cost}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id={BUYING_TIPS.id} className="bg-background py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
          <SectionHeader
            title={BUYING_TIPS.title}
            lead="Six things our crews wish every homeowner had settled before the first quote."
          />

          <ul className="rule-hairline mt-12 grid border-t sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-12">
            {BUYING_TIPS.items.map((tip, index) => (
              <Reveal
                as="li"
                key={tip.name}
                delay={Math.min(index * 55, 240)}
                className="rule-hairline flex flex-col border-b py-7"
              >
                <h3 className="type-display flex items-start gap-2.5 text-lg text-primary">
                  <Check
                    aria-hidden="true"
                    strokeWidth={3}
                    className="mt-1 h-4 w-4 shrink-0 text-accent"
                  />
                  {tip.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tip.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
