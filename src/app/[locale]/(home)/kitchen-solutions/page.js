import React from "react";
import { KitchenHero } from "@/components/kitchen-solutions/kitchen-hero";
import { KitchenTypes } from "@/components/kitchen-solutions/kitchen-types";
import { KitchenFeatures } from "@/components/kitchen-solutions/kitchen-features";
import { KitchenBeforeAfter } from "@/components/kitchen-solutions/kitchen-before-and-after";
import { KitchenPersonalization } from "@/components/kitchen-solutions/kitchen-personalization";
import { KitchenProcessCarousel } from "@/components/kitchen-solutions/kitchen-process-carousel";
import { KitchenInspiration } from "@/components/kitchen-solutions/kitchen-inspiration";
import { FaqSection } from "@/components/kitchen-solutions/kitchen-faq";

export const metadata = {
  title: "Kitchen Renovation Solutions | M&E Construction and Renovations LLC",
  description:
    "Transform your kitchen with M&E Construction and Renovations LLC. Enjoy modern, stylish, and functional kitchen renovations tailored to your home, from countertops and cabinetry to custom storage and design solutions.",
};
const page = async ({ params }) => {
  const { locale } = await params;

  // Load all raw JSON data
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;

  const {
    kitchenSolutions: {
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
      <KitchenHero hero={hero} />
      <KitchenTypes types={types} />
      <KitchenFeatures features={features} />
      <KitchenBeforeAfter beforeAfter={beforeAfter} />
      <KitchenPersonalization personalization={personalization} />
      <KitchenProcessCarousel process={process} />
      <KitchenInspiration inspiration={inspiration} />
      <FaqSection faq={faq} />
    </div>
  );
};

export default page;
