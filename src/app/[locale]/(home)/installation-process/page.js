import React from "react";
import { InstallationProcessHero } from "@/components/installation-process/installation-process-hero";
import { InstallationProcessTimeline } from "@/components/installation-process/installation-process-timeline";
import { InstallationProcessWorks } from "@/components/installation-process/installation-process-works";
import { CtaSection } from "@/components/homepage/cta-section";

export const metadata = {
  title: "Our Installation Process | M&E Construction and Renovations LLC",
  description:
    "Discover M&E Construction and Renovations LLC’s efficient installation process for bathroom, shower, and bathtub remodels. We ensure a seamless, clean, and timely renovation experience from start to finish.",
};
const page = () => {
  return (
    <div className="min-h-screen">
      <InstallationProcessHero />
      <InstallationProcessTimeline />
      <InstallationProcessWorks />
      <CtaSection />
    </div>
  );
};

export default page;
