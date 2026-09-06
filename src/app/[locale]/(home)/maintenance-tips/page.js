import GuideHero from "@/components/shared/guide-hero";
import { MaintenanceTipsMain } from "@/components/maintenance-tips/maintenance-tips-main";
import { MAINTENANCE_NAV } from "@/data/maintenance-tips";

export const metadata = {
  title: "Bathroom Maintenance Tips | M&E Construction and Renovations LLC",
  description:
    "Learn expert bathroom maintenance tips from M&E Construction and Renovations LLC. Keep your renovated bathroom, shower, or bathtub looking new and performing perfectly for years to come.",
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
        eyebrow="Maintenance Guide"
        headline="Keep it looking like the day it went in"
        lead="What to do daily, weekly, monthly and once a year — and what to do about the five things that go wrong most often."
        sections={MAINTENANCE_NAV}
      />
      <MaintenanceTipsMain />
    </div>
  );
};

export default page;
