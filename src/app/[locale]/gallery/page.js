import React from "react";
import { GalleryHero } from "@/components/gallery/gallery-hero";
import { GalleryMain } from "@/components/gallery/gallery-main";
import { GalleryTips } from "@/components/gallery/gallery-tips";
import { CtaSection } from "@/components/homepage/cta-section";

const page = () => {
  return (
    <div className="min-h-screen">
      <GalleryHero />
      <GalleryMain />
      <GalleryTips />
      <CtaSection />
    </div>
  );
};

export default page;
