import GuideHero from "@/components/shared/guide-hero";
import { BuyingGuideMain } from "@/components/buying-guide/buying-guide-main";
import { GUIDE_SECTIONS } from "@/data/buying-guide";

export const metadata = {
  title:
    "Bathroom Remodeling Buying Guide | M&E Construction and Renovations LLC",
  description:
    "Discover expert tips and advice in our Bathroom Remodeling Buying Guide by M&E Construction and Renovations LLC. Learn how to choose the right bathtub, shower, and materials to make your renovation a success.",
};

/**
 * The closing CTA is rendered by the (home) layout for every page in the group,
 * so this page does not add one. The import that sat here commented out would
 * have produced a second copy of it.
 */
const page = () => {
  return (
    <div className="min-h-screen">
      <GuideHero
        eyebrow="Buying Guide"
        headline="What to decide, and what it costs"
        lead="Types, materials, budgets and the costs people forget — everything worth settling before you commit to a bathroom renovation."
        sections={GUIDE_SECTIONS}
      />
      <BuyingGuideMain />
    </div>
  );
};

export default page;
