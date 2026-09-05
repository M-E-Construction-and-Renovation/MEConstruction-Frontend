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

export function UpperHeader({ locale, upperHeader }) {
  return (
    <div className="bg-primary/95 backdrop-blur-md text-primary-foreground">
      <div className=" mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-12 gap-2">
          {/* Sized down at mobile: at 375px the number used to wrap onto two
              lines inside a 48px bar, and so did the appointment link. */}
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <ContactLink
              method="phone"
              placement="upper_header"
              href={`tel:${contactNumber.value}`}
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base whitespace-nowrap hover:opacity-80 transition-opacity hover:underline"
            >
              <Phone
                aria-hidden="true"
                className="h-5 w-5 sm:h-7 sm:w-7 shrink-0"
              />
              {contactNumber.displayValue}
            </ContactLink>

            {/* Decorative separator between two independent actions; it costs
                more horizontal room than it earns on a phone. */}
            <span aria-hidden="true" className="hidden sm:inline">
              OR
            </span>

            <ContactLink
              method="calendly"
              placement="upper_header"
              href={calendly.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base whitespace-nowrap hover:opacity-80 transition-opacity hover:underline"
            >
              <Calendar
                aria-hidden="true"
                className="h-5 w-5 sm:h-7 sm:w-7 shrink-0"
              />
              {upperHeader.calendlyText}
            </ContactLink>
            <div className="hidden md:flex gap-2 justify-center items-center">
              {socials.map((social) => (
                <Button key={social.id} variant="outline" size="icon" asChild>
                  <Link
                    href={social.link}
                    target={social.target}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon aria-hidden="true" className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="flex items-center gap-2 sm:gap-6 text-sm shrink-0">
            <div className="hidden md:flex">
              <LanguageSwitcher currentLocale={locale} />
            </div>

            <SiteSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
