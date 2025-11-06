import React from "react";
import { InstallationProcessHero } from "@/components/installation-process/installation-process-hero";
import { InstallationProcessTimeline } from "@/components/installation-process/installation-process-timeline";
import { InstallationProcessWorks } from "@/components/installation-process/installation-process-works";
import { CtaSection } from "@/components/homepage/cta-section";

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
