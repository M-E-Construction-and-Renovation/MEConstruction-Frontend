"use client";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { contactNumber, secondaryEmail } from "@/data/contact-data";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import ContactLink from "../analytics/contact-link";
import Reveal from "../motion/reveal";

/**
 * The close. Every page ends here, so it carries the last action.
 *
 * One saturated button against the navy, with the phone and email as the
 * quieter alternatives beneath it — a visitor who will not fill in a form is
 * still a lead, and the old centred stack buried both under the button.
 */
export function CtaSection({ cta }) {
  const { headline, subtext, button, contact } = cta;
  const dispatch = useDispatch();

  return (
    <section id="cta" className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[15vw] -bottom-[35vw] h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,oklch(0.65_0.18_45_/_0.18),transparent_62%)]"
      />
      <div className="relative mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal
              as="h2"
              className="type-display text-[clamp(2.25rem,4.6vw,4rem)] text-white"
            >
              {headline}
            </Reveal>
            <Reveal
              as="p"
              delay={80}
              className="measure mt-6 text-base leading-relaxed text-white/70"
            >
              {subtext}
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={140}>
              <Button
                variant="cta"
                size="xl"
                onClick={() => dispatch(openModal("closing_cta"))}
                className="group w-full animate-cta-pulse"
              >
                {button}
                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </Button>
            </Reveal>

            <Reveal delay={200} className="mt-8 grid gap-px sm:grid-cols-2">
              <ContactLink
                method="phone"
                placement="closing_cta"
                href={`tel:${contactNumber.value}`}
                className="group block border-t border-white/15 py-4 transition-colors hover:border-accent focus-visible:border-accent focus-visible:outline-none sm:pr-6"
              >
                <span className="type-eyebrow block text-white/45">
                  {contact.phoneLabel}
                </span>
                <span className="mt-1.5 block text-base text-white transition-colors group-hover:text-accent">
                  {contactNumber.displayValue}
                </span>
              </ContactLink>

              <ContactLink
                method="email"
                placement="closing_cta"
                href={`mailto:${secondaryEmail}`}
                className="group block border-t border-white/15 py-4 transition-colors hover:border-accent focus-visible:border-accent focus-visible:outline-none sm:pl-6"
              >
                <span className="type-eyebrow block text-white/45">
                  {contact.emailLabel}
                </span>
                <span className="mt-1.5 block break-all text-base text-white transition-colors group-hover:text-accent">
                  {secondaryEmail}
                </span>
              </ContactLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
