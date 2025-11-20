import React from "react";
import { Phone } from "lucide-react";
import { contactNumber } from "@/data/contact-data";
import LanguageSwitcher from "./utils/language-switcher";
import SiteSearch from "./utils/site-search";

export function UpperHeader({ locale, upperHeader }) {
  return (
    <div className="bg-primary/95 backdrop-blur-md text-primary-foreground">
      <div className=" mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-12">
          <a
            href={`tel:${contactNumber.value}`}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            {upperHeader.subtext} {contactNumber.displayValue}
          </a>

          {/* Right: Contact Info */}
          <div className="flex items-center gap-6 text-sm">
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
