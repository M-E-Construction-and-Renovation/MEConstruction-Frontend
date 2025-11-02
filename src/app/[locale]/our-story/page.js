import React from "react";
import OurStoryHero from "@/components/our-story/hero";
import MissionSection from "@/components/our-story/mission-section";
import OurFoundationSetcion from "@/components/our-story/our-foundation-section";
import AwardsSection from "@/components/our-story/awards-section";
import CoreValuesSection from "@/components/our-story/core-values-section";
import { CtaSection } from "@/components/homepage/cta-section";

const page = () => {
  return (
    <div className="min-h-screen">
      <OurStoryHero />
      <MissionSection />
      <OurFoundationSetcion />
      <AwardsSection />
      <CoreValuesSection />
      <CtaSection />
    </div>
  );
};

export default page;
