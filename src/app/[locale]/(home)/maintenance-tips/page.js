import React from "react";
import { MaintenanceTipsHero } from "@/components/maintenance-tips/maintenance-tips-hero";
import { MaintenanceTipsMain } from "@/components/maintenance-tips/maintenance-tips-main";
import { CtaSection } from "@/components/homepage/cta-section";

export const metadata = {
  title: "Bathroom Maintenance Tips | M&E Construction and Renovations LLC",
  description:
    "Learn expert bathroom maintenance tips from M&E Construction and Renovations LLC. Keep your renovated bathroom, shower, or bathtub looking new and performing perfectly for years to come.",
};

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
