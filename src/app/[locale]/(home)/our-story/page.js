import React from "react";
import OurStoryHero from "@/components/our-story/hero";
import MissionSection from "@/components/our-story/mission-section";
import OurFoundationSetcion from "@/components/our-story/our-foundation-section";
import AwardsSection from "@/components/our-story/awards-section";
import CoreValuesSection from "@/components/our-story/core-values-section";

export const metadata = {
  title: "Our Story | M&E Construction and Renovations LLC",
  description:
    "Discover the story behind M&E Construction and Renovations LLC — our passion for transforming bathrooms, showers, and bathtubs with quality craftsmanship, integrity, and customer-focused service.",
};

const page = async ({ params }) => {
  const { locale } = await params;

  // Load all raw JSON data
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;

  const {
    ourStory: { hero, mission, foundation, awards, coreValues },
  } = messages;

  return (
    <div className="min-h-screen">
      <OurStoryHero hero={hero} />
      <MissionSection mission={mission} />
      <OurFoundationSetcion foundation={foundation} />
      <AwardsSection awards={awards} />
      <CoreValuesSection coreValues={coreValues} />
    </div>
  );
};

export default page;
