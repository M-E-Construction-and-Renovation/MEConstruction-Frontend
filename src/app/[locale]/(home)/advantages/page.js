import React from "react";
import { AdvantagesHero } from "../../../../components/advantages/advantages-hero";
import { AdvantagesCarousel } from "../../../../components/advantages/advantages-carousel";
import { BeforeAfterSection } from "../../../../components/advantages/before-after-section";
import { DesignToolCards } from "../../../../components/advantages/design-tool-cards";
import { FaqSection } from "../../../../components/advantages/faq-section";

export const metadata = {
  title: "Why Choose M&E Construction and Renovations LLC",
  description:
    "Discover the advantages of working with M&E Construction and Renovations LLC. We deliver high-quality bathroom, shower, and bathtub renovations with expert craftsmanship, fast installations, and customer-first service.",
};

const page = async ({ params }) => {
  const { locale } = await params;

  // Load all raw JSON data
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;

  const {
    advantages: { hero, carousel, beforeAfter, explore, faq },
  } = messages;

  return (
    <div className="min-h-screen">
      <AdvantagesHero hero={hero} />
      <AdvantagesCarousel carousel={carousel} />
      <BeforeAfterSection beforeAfter={beforeAfter} />
      <DesignToolCards explore={explore} />
      <FaqSection faq={faq} />
    </div>
  );
};

export default page;
