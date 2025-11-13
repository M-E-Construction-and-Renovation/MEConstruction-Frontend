import React from "react";
import { ShowerHero } from "@/components/shower-solutions/shower-hero";
import { ShowerTypes } from "@/components/shower-solutions/shower-types";
import { ShowerFeatures } from "@/components/shower-solutions/shower-features";
import { ShowerBeforeAfter } from "@/components/shower-solutions/shower-before-and-after";
import { ShowerPersonalization } from "@/components/shower-solutions/shower-personalization";
import { ShowerProcessCarousel } from "@/components/shower-solutions/shower-process-carousel";
import { ShowerInspiration } from "@/components/shower-solutions/shower-inspiration";
import { FaqSection } from "@/components/shower-solutions/shower-faq";
import { CtaSection } from "@/components/homepage/cta-section";

const page = () => {
  return (
    <div className="min-h-screen">
      <ShowerHero />
      <ShowerTypes />
      <ShowerFeatures />
      <ShowerBeforeAfter />
      <ShowerPersonalization />
      <ShowerProcessCarousel />
      <ShowerInspiration />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default page;
