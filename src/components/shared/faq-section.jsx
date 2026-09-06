"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "../motion/reveal";

/**
 * FAQ accordion, shared.
 *
 * There were five byte-identical copies of this — one per solutions page —
 * which meant a fix had to be made five times and never was. The version they
 * all carried relied on `animate-in slide-in-from-top-2` for its open
 * transition: classes from tw-animate-css, whose import is commented out in
 * globals.css, so they resolved to nothing and the panel snapped open. It also
 * unmounted the answer when closed, so there was nothing to animate anyway, and
 * the trigger carried no `aria-expanded`, no `aria-controls` and no heading —
 * a screen reader met ten unlabelled buttons with no way to know what they
 * opened or whether it had worked.
 *
 * Rows are hairline-ruled rather than boxed cards, matching the site's list
 * grammar. The advantages page and bathroom-remodel use this; the other four
 * solutions pages still hold their own copies and should adopt it as they are
 * reworked.
 */
export function FaqSection({ faq, id = "faq" }) {
  const { sectionTitle, sectionSubtitle, faqs } = faq;
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id={id} className="bg-tinted py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="rule-hairline grid gap-6 border-t pt-8 md:grid-cols-12">
          <Reveal
            as="h2"
            className="type-display text-[clamp(2rem,3.6vw,3.25rem)] text-primary md:col-span-5"
          >
            {sectionTitle}
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="measure self-end text-base leading-relaxed text-muted-foreground md:col-span-7"
          >
            {sectionSubtitle}
          </Reveal>
        </div>

        <div className="rule-hairline mt-12 border-t">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${id}-panel-${index}`;

            return (
              <Reveal
                key={item.question}
                delay={Math.min(index * 35, 250)}
                className="rule-hairline border-b"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span
                      className={`type-display text-[1.0625rem] transition-colors md:text-[1.15rem] ${
                        isOpen ? "text-accent" : "text-primary"
                      }`}
                    >
                      {item.question}
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={`mt-0.5 h-5 w-5 shrink-0 text-accent transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </h3>

                {/* Animated with max-height. The cap is deliberately far above
                    the longest answer in the content so nothing is ever clipped;
                    revisit it only if the answers get substantially longer. */}
                <div
                  id={panelId}
                  role="region"
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                    isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="measure pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.answer}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
