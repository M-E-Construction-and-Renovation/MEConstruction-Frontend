import {
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Droplet,
  Hammer,
  HelpCircle,
  Ruler,
  Users,
} from "lucide-react";
import Reveal from "../motion/reveal";
import { INSTALLATION_STEPS } from "@/data/installation-process";

/**
 * The six stages, in order.
 *
 * This was an alternating zig-zag: cards thrown left and right of a centred
 * spine, each anchored by an absolutely positioned circle at the midpoint. It
 * looked busy at every width and read badly on a narrow screen, where the
 * alternation collapses and the spine sits off to one side of content that no
 * longer relates to it.
 *
 * It is a numbered sequence now, which is the same shape the process sections
 * on every solutions page use — a visitor who has read one of those recognises
 * this immediately.
 *
 * It also carried genuinely dead markup: a connector line rendered for every
 * step but the last, carrying the `hidden` class, so the condition guarded
 * something that could never appear.
 *
 * Duration is the most useful thing here, so it sits beside the title rather
 * than at the end of the paragraph.
 */
const ICONS = {
  Users,
  Hammer,
  Ruler,
  ClipboardCheck,
  Droplet,
  CheckCircle2,
};

export const InstallationProcessTimeline = () => {
  return (
    <section id="timeline" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-6 border-t pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary md:col-span-5"
          >
            Complete Timeline
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-muted-foreground md:col-span-7"
          >
            From the first visit to the final walkthrough — typically three to
            four weeks, most of which is your fixtures being made.
          </Reveal>
        </div>

        <ol className="rule-hairline mt-12 border-t">
          {INSTALLATION_STEPS.map((step, index) => {
            const Icon = ICONS[step.icon] ?? HelpCircle;

            return (
              <Reveal
                as="li"
                key={step.number}
                delay={Math.min(index * 55, 220)}
                className="rule-hairline grid gap-4 border-b py-8 md:grid-cols-12 md:gap-8"
              >
                <div className="flex items-center gap-4 md:col-span-4 md:flex-col md:items-start md:gap-4">
                  <span className="type-display text-3xl text-accent">
                    {String(step.number).padStart(2, "0")}
                  </span>
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="h-7 w-7 text-primary md:h-8 md:w-8"
                  />
                </div>

                <div className="md:col-span-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="type-display text-xl text-primary">
                      {step.title}
                    </h3>
                    <p className="type-eyebrow flex items-center gap-2 text-accent">
                      <Clock
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0"
                      />
                      <span className="sr-only">Takes </span>
                      {step.duration}
                    </p>
                  </div>
                  <p className="measure mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
