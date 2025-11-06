import React from "react";
import { BeforeAfterHero } from "@/components/before-after/before-after-hero";
import { BeforeAfterMain } from "@/components/before-after/before-after-main";
import { CtaSection } from "@/components/homepage/cta-section";

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
