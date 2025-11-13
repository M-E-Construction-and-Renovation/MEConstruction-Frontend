import React from "react";
import { BuyingGuideHero } from "@/components/buying-guide/buying-guide-hero";
import { BuyingGuideMain } from "@/components/buying-guide/buying-guide-main";
import { CtaSection } from "@/components/homepage/cta-section";

export const metadata = {
  title:
    "Bathroom Remodeling Buying Guide | M&E Construction and Renovations LLC",
  description:
    "Discover expert tips and advice in our Bathroom Remodeling Buying Guide by M&E Construction and Renovations LLC. Learn how to choose the right bathtub, shower, and materials to make your renovation a success.",
};
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
