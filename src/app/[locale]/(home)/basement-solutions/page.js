import { BasementHero } from "@/components/basement-solutions/basement-hero";
import { BasementTypes } from "@/components/basement-solutions/basement-types";
import { BasementFeatures } from "@/components/basement-solutions/basement-features";
import { BasementBeforeAfter } from "@/components/basement-solutions/basement-before-and-after";
import { BasementPersonalization } from "@/components/basement-solutions/basement-personalization";
import { BasementProcess } from "@/components/basement-solutions/basement-process";
import { BasementInspiration } from "@/components/basement-solutions/basement-inspiration";
import { FaqSection } from "@/components/shared/faq-section";

export const metadata = {
  title:
    "Basement Finishing & Renovation Solutions | M&E Construction and Renovations LLC",
  description:
    "Transform your basement with M&E Construction and Renovations LLC. From unfinished spaces to fully functional living areas, we offer custom basement finishing and renovation solutions — including family rooms, home offices, bars, and entertainment spaces designed for comfort and style.",
};

const page = async ({ params }) => {
  const { locale } = await params;

  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;

  const {
    basementSolutions: {
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

  /**
   * Grounds alternate so no two adjacent sections share one: navy, page, navy,
   * tinted, page, navy, page, tinted.
   */
  return (
    <div className="min-h-screen">
      <BasementHero hero={hero} />
      <BasementTypes types={types} />
      <BasementFeatures features={features} />
      <BasementBeforeAfter beforeAfter={beforeAfter} />
      <BasementPersonalization personalization={personalization} />
      <BasementProcess process={process} />
      <BasementInspiration inspiration={inspiration} />
      <FaqSection faq={faq} />
    </div>
  );
};

export default page;
