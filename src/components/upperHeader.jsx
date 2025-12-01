import React from "react";
import { Phone } from "lucide-react";
import { contactNumber } from "@/data/contact-data";
import LanguageSwitcher from "./utils/language-switcher";
import SiteSearch from "./utils/site-search";
import Link from "next/link";
import { Button } from "./ui/button";
import { socials } from "@/data/contact-data";

export function UpperHeader({ locale, upperHeader }) {
  return (
    <div className="bg-primary/95 backdrop-blur-md text-primary-foreground">
      <div className=" mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-12">
          <div className="flex gap-6">
            <a
              href={`tel:${contactNumber.value}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity animate-beat"
            >
              <Phone className="h-4 w-4" />
              {upperHeader.subtext} {contactNumber.displayValue}
            </a>
            <div className="hidden md:flex gap-2 justify-center items-center">
              {socials.map((social) => (
                <Link key={social.id} href={social.link} target={social.target}>
                  <Button variant="outline" size="icon">
                    <social.icon className="h-8 w-8" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>

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
