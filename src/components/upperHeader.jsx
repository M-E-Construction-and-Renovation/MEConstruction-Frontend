import React from "react";
import { Phone, Calendar } from "lucide-react";
import { contactNumber } from "@/data/contact-data";
import LanguageSwitcher from "./utils/language-switcher";
import SiteSearch from "./utils/site-search";
import Link from "next/link";
import { Button } from "./ui/button";
import { socials } from "@/data/contact-data";
import { calendly } from "@/data/contact-data";
import ContactLink from "./analytics/contact-link";

/**
 * Utility bar above the main navigation.
 *
 * Rebuilt around a priority ladder rather than a single row that everything
 * crowds into. Previously the socials and the language switcher both appeared
 * at `md`, while the type stepped up at the same breakpoint — so at 768px the
 * bar's contents ran 45px wider than the bar and "Set An Appointment!" printed
 * straight through the language switcher.
 *
 * Order of appearance, most important first:
 *   always   phone, search        — the two things a visitor comes here to do
 *   sm+      book an appointment
 *   lg+      language, socials    — only once the row is genuinely wide
 *
 * Everything hidden below lg is reachable in the mobile menu, so nothing is
 * lost; it is only deferred until there is room for it.
 */
export function UpperHeader({ locale, upperHeader }) {
  return (
    /*
      A shade darker than the bar below, so the block reads as a utility strip
      above the navigation rather than one tall slab. No bottom border — the
      main bar's lit top edge is the divider.

      Opaque, for the same reason the bar is: translucency over a blur made this
      strip take its colour from whatever happened to be behind it, which at the
      top of the page is the page's own background and further down is the
      content. It changed shade as you scrolled.
    */
    <div className="relative bg-[oklch(0.228_0.08_250)] text-primary-foreground">
      <div className="mx-auto px-4 md:px-10">
        <div className="flex h-12 items-center justify-between gap-3">
          {/* Primary actions */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-5">
            <ContactLink
              method="phone"
              placement="upper_header"
              href={`tel:${contactNumber.value}`}
              className="flex shrink-0 items-center gap-2 py-3 text-xs whitespace-nowrap transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none sm:text-sm xl:text-base"
            >
              <Phone
                aria-hidden="true"
                className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
              />
              {contactNumber.displayValue}
            </ContactLink>

            {/* Hairline divider, in the same grammar as the section rules —
                replaces the word "OR", which cost real width to say nothing. */}
            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-white/25 sm:block"
            />

            <ContactLink
              method="calendly"
              placement="upper_header"
              href={calendly.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 items-center gap-2 py-3 text-xs whitespace-nowrap transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none sm:flex sm:text-sm xl:text-base"
            >
              <Calendar
                aria-hidden="true"
                className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
              />
              {upperHeader.calendlyText}
            </ContactLink>
          </div>

          {/* Secondary: appears only once the bar is wide enough to hold it */}
          <div className="flex shrink-0 items-center gap-2 lg:gap-4">
            <div className="hidden lg:flex">
              <LanguageSwitcher currentLocale={locale} />
            </div>

            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-white/25 lg:block"
            />

            <div className="hidden items-center gap-1.5 lg:flex">
              {socials.map((social) => (
                <Button
                  key={social.id}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-9 w-9 hover:bg-white/10"
                >
                  <Link
                    href={social.link}
                    target={social.target}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>

            <SiteSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
