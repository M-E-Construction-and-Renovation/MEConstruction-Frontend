import { Check } from "lucide-react";
import Reveal from "../motion/reveal";
import { PROCESS_STRENGTHS } from "@/data/installation-process";

/**
 * Four reasons the process holds up.
 *
 * These were four near-identical white cards with a left accent stripe, each
 * containing three hand-written list items with their own check icon — twelve
 * copies of the same three lines of markup. Rendered from data now, as ruled
 * columns on the navy ground.
 */
export const InstallationProcessWorks = () => {
  return (
    <section
      id="why"
      className="bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="grid gap-6 border-t border-white/20 pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-white md:col-span-5"
          >
            Why Our Process Works
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-white/70 md:col-span-7"
          >
            The parts of a renovation that usually go wrong are the parts we
            have made routine.
          </Reveal>
        </div>

        <ul className="mt-12 grid border-t border-white/20 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-12">
          {PROCESS_STRENGTHS.map((group, index) => (
            <Reveal
              as="li"
              key={group.title}
              delay={Math.min(index * 70, 210)}
              className="border-b border-white/20 py-8"
            >
              <h3 className="type-display text-lg text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-white/70"
                  >
                    <Check
                      aria-hidden="true"
                      strokeWidth={3}
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};
