import React from "react";
import { BathroomHero } from "@/components/bathroom-remodel/bathroom-hero";
import { BathroomFeatures } from "@/components/bathroom-remodel/bathroom-features";
import { BathroomBeforeAfter } from "@/components/bathroom-remodel/bathroom-before-and-after";
import { BathroomInspiration } from "@/components/bathroom-remodel/bathroom-inspiration";
import { BathroomCustomizationTool } from "@/components/bathroom-remodel/bathroom-customization-tool";
import { BathroomProcessCarousel } from "@/components/bathroom-remodel/bathroom-process-carousel";
import { BathroomGallery } from "@/components/bathroom-remodel/bathroom-gallery";
import { FaqSection } from "@/components/bathroom-remodel/bathroom-faq";

export const metadata = {
  title: "Bathroom Remodeling by M&E Construction and Renovations LLC",
  description:
    "Transform your outdated bathroom into a modern, functional space with M&E Construction and Renovations LLC. Our expert team delivers customized bathroom remodels that combine style, comfort, and efficiency.",
};
const page = async ({ params }) => {
  const { locale } = await params;

  // Load all raw JSON data
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;

  const {
    bathroomRemodel: {
      hero,
      features,
      beforeAfter,
      inspiration,
      customization,
      process,
      gallery,
      faq,
    },
  } = messages;

  return (
    <div className="min-h-screen">
      <BathroomHero hero={hero} />
      <BathroomFeatures features={features} />
      <BathroomBeforeAfter beforeAfter={beforeAfter} />
      <BathroomInspiration inspiration={inspiration} />
      <BathroomCustomizationTool customization={customization} />
      <BathroomProcessCarousel process={process} />
      <BathroomGallery gallery={gallery} />
      <FaqSection faq={faq} />
    </div>
  );
};

export default page;
