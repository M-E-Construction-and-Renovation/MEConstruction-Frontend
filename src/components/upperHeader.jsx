"use client";

import React, { useState } from "react";
import { MapPin, Phone, Globe, Search } from "lucide-react";
import { contactNumber } from "@/data/contact-data";
import LanguageSwitcher from "./utils/language-switcher";
import { useTranslations } from "next-intl";
import SiteSearch from "./utils/site-search";

export function UpperHeader(params) {
  const { locale } = params;

  const t = useTranslations("upperHeader");

  console.log(locale);

  const [activeTab, setActiveTab] = useState("residential");

  return (
    <div className="bg-primary/95 backdrop-blur-sm text-primary-foreground">
      <div className=" mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-12">
          {/* Left: Toggle Buttons */}
          {/* <div className="flex items-center gap-0">
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === "residential"
                  ? "bg-background text-foreground"
                  : "bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === "commercial"
                  ? "bg-background text-foreground"
                  : "bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              Commercial
            </button>
          </div> */}

          {/* <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="h-4 w-4" />
            Call us today {contactNumber}
          </button> */}

          <a
            href={`tel:${contactNumber.value}`}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            {t("subtext")} {contactNumber.displayValue}
          </a>

          {/* Right: Contact Info */}
          <div className="flex items-center gap-6 text-sm">
            {/* <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <MapPin className="h-4 w-4" />
              Find a location near you
            </button> */}
            {/* 
            <button className="hidden lg:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Globe className="h-4 w-4" />
              US | English
         
            </button> */}

            <LanguageSwitcher currentLocale={locale} />
            {/* 
            <button className="hover:opacity-80 transition-opacity">
              <Search className="h-4 w-4" />
            </button> */}

            <SiteSearch />
          </div>
          {/* <button className="lg:hidden hover:opacity-80 transition-opacity">
            <Search className="h-4 w-4" />
          </button> */}
        </div>
      </div>
    </div>
  );
}
