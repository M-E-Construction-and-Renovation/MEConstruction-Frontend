import Link from "next/link";
import { ArrowRight, Ruler, Palette, Wallet } from "lucide-react";
import { Button } from "../ui/button";
import Reveal from "../motion/reveal";

/**
 * Three things to settle before choosing fixtures.
 *
 * The copy was written out three times as near-identical blocks of JSX; it is a
 * list, so it is a list. The cards were bg-white with a border-l-4 accent stripe
 * — neither is on the system — and are ruled columns now.
 *
 * Link wrapping Button rendered an anchor around a button: invalid, and two
 * keyboard stops for one control. The target="_blank" is dropped too, matching
 * the rest of the reworked pages — /design is an internal route and opening it
 * in a new tab throws away the client-side router.
 */
const TIPS = [
  {
    icon: Ruler,
    title: "Measure your space",
    description:
      "Get accurate measurements of your bathroom before selecting fixtures. This ensures perfect fit and installation.",
  },
  {
    icon: Palette,
    title: "Choose your style",
    description:
      "Consider your existing décor and personal preferences. Mix textures and colours for a cohesive design.",
  },
  {
    icon: Wallet,
    title: "Plan your budget",
    description:
      "Set a realistic budget and prioritise must-haves. Our experts can help you maximise value and savings.",
  },
];

export const GalleryTips = () => {
  return (
    <section id="tips" className="bg-tinted py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-6 border-t pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary md:col-span-5"
          >
            Design tips
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-muted-foreground md:col-span-7"
          >
            Three things worth settling before you pick a single tile — they
            decide most of what follows.
          </Reveal>
        </div>

        <ul className="rule-hairline mt-12 grid border-t md:grid-cols-3">
          {TIPS.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Reveal
                as="li"
                key={tip.title}
                delay={Math.min(index * 70, 210)}
                className="rule-hairline flex flex-col border-b py-8 md:border-b-0 md:border-l md:py-10 md:pl-8 md:first:border-l-0 md:first:pl-0 md:pr-8"
              >
                <span className="type-eyebrow text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="mt-4 h-8 w-8 text-accent"
                />
                <h3 className="type-display mt-4 text-xl text-primary">
                  {tip.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tip.description}
                </p>
              </Reveal>
            );
          })}
        </ul>

        <Reveal
          delay={200}
          className="rule-hairline mt-12 flex flex-col gap-6 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="type-display text-xl text-primary">
            See it in your own bathroom before you commit.
          </p>
          <Button variant="cta" size="xl" asChild className="group shrink-0">
            <Link href="/design">
              Try our design tool
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
};
