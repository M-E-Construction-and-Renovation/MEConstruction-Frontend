import { ArrowRight, Coffee, HelpCircle, Layout, Users } from "lucide-react";
import Link from "next/link";
import Reveal from "../motion/reveal";

/**
 * The three basement jobs this firm takes on.
 *
 * All three CTAs pointed into a /basement-inspiration/* section that does not
 * exist in the app — /full-finishing, /entertainment and /flex-spaces each
 * returned 404, in both locales. Repointed in the content to the routes their
 * own copy promises: "Explore Designs" and "Discover More" to /gallery, "See
 * Before and After" to /before-after.
 *
 * The cards were headed by a 160px block of blue-to-cyan gradient carried in
 * the content file — the only place those hues appear on a navy-and-orange
 * site. The gradients do render (Tailwind v4 scans the message files), they are
 * simply off-system, so the icon sits on the page ground now and the "color"
 * keys go unused.
 *
 * Link wrapping Button rendered an anchor around a button: invalid, and two
 * keyboard stops for one control. Entrance came from tw-animate-css classes
 * whose import is commented out in globals.css, so the staggered animationDelay
 * paced an animation that never ran.
 *
 * Note for the client: two of the three cards now land on /gallery, so
 * "Explore Designs" and "Discover More" lead to the same page.
 */
const ICONS = { Layout, Users, Coffee };

export function BasementTypes({ types }) {
  const { sectionTitle, sectionSubtitle, cards } = types;

  return (
    <section id="types" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-6 border-t pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary md:col-span-6"
          >
            {sectionTitle}
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-muted-foreground md:col-span-6"
          >
            {sectionSubtitle}
          </Reveal>
        </div>

        <ul className="rule-hairline mt-12 grid border-t md:grid-cols-3">
          {cards.map((type, index) => {
            const Icon = ICONS[type.icon] ?? HelpCircle;

            return (
              <Reveal
                as="li"
                key={type.title}
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
                  {type.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {type.description}
                </p>

                <Link
                  href={type.href}
                  className="group/link mt-6 inline-flex items-center text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {type.cta}
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-2 h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover/link:translate-x-1"
                  />
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
