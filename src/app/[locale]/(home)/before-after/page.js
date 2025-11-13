import React from "react";
import { BeforeAfterHero } from "@/components/before-after/before-after-hero";
import { BeforeAfterMain } from "@/components/before-after/before-after-main";
import { CtaSection } from "@/components/homepage/cta-section";

export const metadata = {
  title: "Before & After Gallery | M&E Construction and Renovations LLC",
  description:
    "Explore our Before & After gallery to see real bathroom, bathtub, and shower transformations by M&E Construction and Renovations LLC. Get inspired by stunning renovation results and envision your own remodel.",
};
const page = () => {
  return (
    <div className="min-h-screen">
      <BeforeAfterHero />
      <BeforeAfterMain />
      <CtaSection />
    </div>
  );
};

export default page;
