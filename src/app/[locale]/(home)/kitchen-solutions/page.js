import { KitchenHero } from "@/components/kitchen-solutions/kitchen-hero";
import { KitchenTypes } from "@/components/kitchen-solutions/kitchen-types";
import { KitchenFeatures } from "@/components/kitchen-solutions/kitchen-features";
import { KitchenBeforeAfter } from "@/components/kitchen-solutions/kitchen-before-and-after";
import { KitchenPersonalization } from "@/components/kitchen-solutions/kitchen-personalization";
import { KitchenProcess } from "@/components/kitchen-solutions/kitchen-process";
import { KitchenInspiration } from "@/components/kitchen-solutions/kitchen-inspiration";
import { FaqSection } from "@/components/shared/faq-section";

export const metadata = {
  title: "Kitchen Renovation Solutions | M&E Construction and Renovations LLC",
  description:
    "Transform your kitchen with M&E Construction and Renovations LLC. Enjoy modern, stylish, and functional kitchen renovations tailored to your home, from countertops and cabinetry to custom storage and design solutions.",
};

const page = async ({ params }) => {
  const { locale } = await params;

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

  /**
   * Grounds alternate so no two adjacent sections share one: photograph, page,
   * navy, tinted, page, navy, page, tinted.
   */
  return (
    <div className="min-h-screen">
      <KitchenHero hero={hero} />
      <KitchenTypes types={types} />
      <KitchenFeatures features={features} />
      <KitchenBeforeAfter beforeAfter={beforeAfter} />
      <KitchenPersonalization personalization={personalization} />
      <KitchenProcess process={process} />
      <KitchenInspiration inspiration={inspiration} />
      <FaqSection faq={faq} />
    </div>
  );
};

export default page;
