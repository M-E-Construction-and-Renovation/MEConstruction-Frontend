import React from "react";
import { BathroomHero } from "@/components/bathroom-remodel/bathroom-hero";
import { BathroomFeatures } from "@/components/bathroom-remodel/bathroom-features";
import { BathroomBeforeAfter } from "@/components/bathroom-remodel/bathroom-before-and-after";
import { BathroomInspiration } from "@/components/bathroom-remodel/bathroom-inspiration";
import { BathroomCustomizationTool } from "@/components/bathroom-remodel/bathroom-customization-tool";
import { BathroomProcessCarousel } from "@/components/bathroom-remodel/bathroom-process-carousel";
import { BathroomGallery } from "@/components/bathroom-remodel/bathroom-gallery";
import { FaqSection } from "@/components/bathroom-remodel/bathroom-faq";
import { CtaSection } from "@/components/homepage/cta-section";

const page = () => {
  return (
    <div className="min-h-screen">
      <BathroomHero />
      <BathroomFeatures />
      <BathroomBeforeAfter />
      <BathroomInspiration />
      <BathroomCustomizationTool />
      <BathroomProcessCarousel />
      <BathroomGallery />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default page;
