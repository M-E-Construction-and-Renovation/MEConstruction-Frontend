import React from "react";
import { MaintenanceTipsHero } from "@/components/maintenance-tips/maintenance-tips-hero";
import { MaintenanceTipsMain } from "@/components/maintenance-tips/maintenance-tips-main";
import { CtaSection } from "@/components/homepage/cta-section";

const page = () => {
  return (
    <div className="min-h-screen">
      <MaintenanceTipsHero />
      <MaintenanceTipsMain />
      <CtaSection />
    </div>
  );
};

export default page;
