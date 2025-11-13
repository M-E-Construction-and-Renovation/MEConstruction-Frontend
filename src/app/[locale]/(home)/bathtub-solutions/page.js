import React from "react";
import { BathtubHero } from "@/components/bathtub-solutions/bathtub-hero";
import { BathtubTypes } from "@/components/bathtub-solutions/bathtub-types";
import { BathtubFeatures } from "@/components/bathtub-solutions/bathtub-features";
import { BathtubBeforeAfter } from "@/components/bathtub-solutions/bathtub-before-and-after";
import { BathtubPersonalization } from "@/components/bathtub-solutions/bathtub-personalization";
import { BathtubProcessCarousel } from "@/components/bathtub-solutions/bathtub-process-carousel";
import { BathtubInspiration } from "@/components/bathtub-solutions/bathtub-inspiration";
import { FaqSection } from "@/components/bathtub-solutions/bathtub-faq";

export const metadata = {
  title: "Bathtub Solutions | M&E Construction and Renovations LLC",
  description:
    "Discover premium bathtub solutions with M&E Construction and Renovations LLC. Enjoy spa-like comfort and elegance with expertly installed bathtubs designed for lasting luxury and functionality.",
};
const page = async ({ params }) => {
  const { locale } = await params;

  // Load all raw JSON data
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;

  const {
    bathtubSolutions: {
      hero,
      types,
      features,
      beforeAfter,
      personalization,
      process,
      inspiration,
      faq,
    },
  } = messages;

  return (
    <div className="min-h-screen">
      <BathtubHero hero={hero} />
      <BathtubTypes types={types} />
      <BathtubFeatures features={features} />
      <BathtubBeforeAfter beforeAfter={beforeAfter} />
      <BathtubPersonalization personalization={personalization} />
      <BathtubProcessCarousel process={process} />
      <BathtubInspiration inspiration={inspiration} />
      <FaqSection faq={faq} />
    </div>
  );
};

export default page;
