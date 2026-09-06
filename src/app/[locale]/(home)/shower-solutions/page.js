import { ShowerHero } from "@/components/shower-solutions/shower-hero";
import { ShowerTypes } from "@/components/shower-solutions/shower-types";
import { ShowerFeatures } from "@/components/shower-solutions/shower-features";
import { ShowerBeforeAfter } from "@/components/shower-solutions/shower-before-and-after";
import { ShowerPersonalization } from "@/components/shower-solutions/shower-personalization";
import { ShowerProcess } from "@/components/shower-solutions/shower-process";
import { ShowerInspiration } from "@/components/shower-solutions/shower-inspiration";
import { FaqSection } from "@/components/shared/faq-section";

export const metadata = {
  title: "Shower Solutions | M&E Construction and Renovations LLC",
  description:
    "Explore premium shower renovation solutions by M&E Construction and Renovations LLC. Enjoy modern, luxurious, and durable shower designs installed quickly and efficiently for your home.",
};

const page = async ({ params }) => {
  const { locale } = await params;

  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;

  const {
    showerSolutions: {
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
      <ShowerHero hero={hero} />
      <ShowerTypes types={types} />
      <ShowerFeatures features={features} />
      <ShowerBeforeAfter beforeAfter={beforeAfter} />
      <ShowerPersonalization personalization={personalization} />
      <ShowerProcess process={process} />
      <ShowerInspiration inspiration={inspiration} />
      <FaqSection faq={faq} />
    </div>
  );
};

export default page;
