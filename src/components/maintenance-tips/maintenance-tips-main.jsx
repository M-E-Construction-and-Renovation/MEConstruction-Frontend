import { AlertTriangle, Clock, HelpCircle, Shield, Sparkles, Wrench } from "lucide-react";
import Reveal from "../motion/reveal";
import {
  COMMON_ISSUES,
  MAINTENANCE_SECTIONS,
} from "@/data/maintenance-tips";

/**
 * The checklists.
 *
 * Forty-one list items were each written out as their own markup. They are
 * rendered from data now, which is also what let the three competing bullet
 * styles go: a "dot" character in its own span, a dot inlined at the start of
 * the text, and a check character. Each of those is read aloud on top of the
 * list semantics the element already has.
 *
 * A heading level was being skipped too. The monthly section headed its two
 * groups with h4 while every other section used h3 for the same thing, so the
 * document outline went h2 straight to h4 in one place and h2 to h3 everywhere
 * else. All group headings are h3.
 *
 * Section grounds alternate, and the ids match the contents links in the hero.
 */
const ICONS = { Sparkles, Shield, Wrench, Clock, AlertTriangle };

function SectionHeader({ title, lead, icon, dark }) {
  const Icon = ICONS[icon] ?? HelpCircle;

  return (
    <div
      className={`grid gap-6 border-t pt-8 md:grid-cols-12 ${
        dark ? "border-white/20" : "rule-hairline"
      }`}
    >
      <div className="md:col-span-5">
        <Reveal>
          <Icon
            aria-hidden="true"
            strokeWidth={1.5}
            className="h-8 w-8 text-accent"
          />
        </Reveal>
        <Reveal
          as="h2"
          delay={40}
          className={`type-display mt-4 text-[clamp(2rem,3.6vw,3.25rem)] ${
            dark ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </Reveal>
      </div>
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

function Checklist({ groups, dark }) {
  return (
    <div
      className={`mt-12 grid border-t md:grid-cols-2 lg:grid-cols-3 ${
        dark ? "border-white/20" : "rule-hairline"
      }`}
    >
      {groups.map((group, index) => (
        <Reveal
          key={group.title}
          delay={Math.min(index * 70, 210)}
          className={`border-b py-8 md:pr-8 ${
            dark ? "border-white/20" : "rule-hairline"
          }`}
        >
          <h3
            className={`type-display text-lg ${dark ? "text-white" : "text-primary"}`}
          >
            {group.title}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {group.items.map((item) => (
              <li
                key={item}
                className={`flex gap-3 text-sm leading-relaxed ${
                  dark ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-3 shrink-0 bg-accent"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

export const MaintenanceTipsMain = () => {
  return (
    <>
      {MAINTENANCE_SECTIONS.map((section, index) => {
        const dark = index % 2 === 1;
        return (
          <section
            key={section.id}
            id={section.id}
            className={
              dark
                ? "bg-primary py-16 text-primary-foreground md:py-24"
                : "bg-background py-16 md:py-24"
            }
          >
            <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
              <SectionHeader
                title={section.title}
                lead={section.lead}
                icon={section.icon}
                dark={dark}
              />
              <Checklist groups={section.groups} dark={dark} />
            </div>
          </section>
        );
      })}

      <section id={COMMON_ISSUES.id} className="bg-tinted py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
          <SectionHeader
            title={COMMON_ISSUES.title}
            lead={COMMON_ISSUES.lead}
            icon={COMMON_ISSUES.icon}
          />

          <ol className="rule-hairline mt-12 border-t">
            {COMMON_ISSUES.items.map((issue, index) => (
              <Reveal
                as="li"
                key={issue.title}
                delay={Math.min(index * 55, 220)}
                className="rule-hairline grid gap-4 border-b py-8 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-4">
                  <span className="type-eyebrow text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="type-display mt-3 text-lg text-primary">
                    {issue.title}
                  </h3>
                </div>

                <dl className="md:col-span-8">
                  <dt className="type-eyebrow text-muted-foreground">
                    Problem
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-primary">
                    {issue.problem}
                  </dd>
                  <dt className="type-eyebrow mt-5 text-accent">Solution</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {issue.solution}
                  </dd>
                </dl>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};
