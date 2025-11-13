import React from "react";
import { BasementHero } from "@/components/basement-solutions/basement-hero";
import { BasementTypes } from "@/components/basement-solutions/basement-types";
import { BasementFeatures } from "@/components/basement-solutions/basement-features";
import { BasementBeforeAfter } from "@/components/basement-solutions/basement-before-and-after";
import { BasementPersonalization } from "@/components/basement-solutions/basement-personalization";
import { BasementProcessCarousel } from "@/components/basement-solutions/basement-process-carousel";
import { BasementInspiration } from "@/components/basement-solutions/basement-inspiration";
import { FaqSection } from "@/components/basement-solutions/basement-faq";
import { CtaSection } from "@/components/homepage/cta-section";

const page = () => {
  return (
    <div className="min-h-screen">
      <BasementHero />
      <BasementTypes />
      <BasementFeatures />
      <BasementBeforeAfter />
      <BasementPersonalization />
      <BasementProcessCarousel />
      <BasementInspiration />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default page;
