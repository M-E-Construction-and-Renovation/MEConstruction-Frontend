import React from "react";
import { KitchenHero } from "@/components/kitchen-solutions/kitchen-hero";
import { KitchenTypes } from "@/components/kitchen-solutions/kitchen-types";
import { KitchenFeatures } from "@/components/kitchen-solutions/kitchen-features";
import { KitchenBeforeAfter } from "@/components/kitchen-solutions/kitchen-before-and-after";
import { KitchenPersonalization } from "@/components/kitchen-solutions/kitchen-personalization";
import { KitchenProcessCarousel } from "@/components/kitchen-solutions/kitchen-process-carousel";
import { KitchenInspiration } from "@/components/kitchen-solutions/kitchen-inspiration";
import { FaqSection } from "@/components/kitchen-solutions/kitchen-faq";
import { CtaSection } from "@/components/homepage/cta-section";

const page = () => {
  return (
    <div className="min-h-screen">
      <KitchenHero />
      <KitchenTypes />
      <KitchenFeatures />
      <KitchenBeforeAfter />
      <KitchenPersonalization />
      <KitchenProcessCarousel />
      <KitchenInspiration />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default page;
