import React from "react";
import { BuyingGuideHero } from "@/components/buying-guide/buying-guide-hero";
import { BuyingGuideMain } from "@/components/buying-guide/buying-guide-main";
import { CtaSection } from "@/components/homepage/cta-section";

const page = () => {
  return (
    <div className="min-h-screen">
      <BuyingGuideHero />
      <BuyingGuideMain />
      <CtaSection />
    </div>
  );
};

export default page;
