import React from "react";
import { AdvantagesHero } from "../../../components/advantages/advantages-hero";
import { AdvantagesCarousel } from "../../../components/advantages/advantages-carousel";
import { VideoSection } from "../../../components/advantages/video-section";
import { BeforeAfterSection } from "../../../components/advantages/before-after-section";
import { DesignToolCards } from "../../../components/advantages/design-tool-cards";
import { FaqSection } from "../../../components/advantages/faq-section";
import { CtaSection } from "../../../components/homepage/cta-section";

const page = () => {
  return (
    <div className="min-h-screen">
      <AdvantagesHero />
      <AdvantagesCarousel />
      {/* <VideoSection /> */}
      <BeforeAfterSection />
      <DesignToolCards />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default page;
