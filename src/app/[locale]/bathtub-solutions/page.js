import React from "react";
import { BathtubHero } from "@/components/bathtub-solutions/bathtub-hero";
import { BathtubTypes } from "@/components/bathtub-solutions/bathtub-types";
import { BathtubFeatures } from "@/components/bathtub-solutions/bathtub-features";
import { BathtubBeforeAfter } from "@/components/bathtub-solutions/bathtub-before-and-after";
import { BathtubPersonalization } from "@/components/bathtub-solutions/bathtub-personalization";
import { BathtubProcessCarousel } from "@/components/bathtub-solutions/bathtub-process-carousel";
import { BathtubInspiration } from "@/components/bathtub-solutions/bathtub-inspiration";
import { FaqSection } from "@/components/advantages/faq-section";
import { CtaSection } from "@/components/homepage/cta-section";

const page = () => {
  return (
    <div className="min-h-screen">
      <BathtubHero />
      <BathtubTypes />
      <BathtubFeatures />
      <BathtubBeforeAfter />
      <BathtubPersonalization />
      <BathtubProcessCarousel />
      <BathtubInspiration />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default page;
