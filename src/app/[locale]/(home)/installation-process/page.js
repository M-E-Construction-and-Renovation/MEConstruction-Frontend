import GuideHero from "@/components/shared/guide-hero";
import { InstallationProcessTimeline } from "@/components/installation-process/installation-process-timeline";
import { InstallationProcessWorks } from "@/components/installation-process/installation-process-works";
import { INSTALLATION_SECTIONS } from "@/data/installation-process";

export const metadata = {
  title: "Our Installation Process | M&E Construction and Renovations LLC",
  description:
    "Discover M&E Construction and Renovations LLC’s efficient installation process for bathroom, shower, and bathtub remodels. We ensure a seamless, clean, and timely renovation experience from start to finish.",
};

/**
 * The closing CTA is rendered by the (home) layout for every page in the group,
 * so this page does not add one. The import that sat here commented out would
 * have produced a second copy of it — the last of the three that carried it.
 */
const page = () => {
  return (
    <div className="min-h-screen">
      <GuideHero
        eyebrow="Installation Process"
        headline="From the first visit to the last wipe-down"
        lead="Six stages, what each one involves, and how long it actually takes. No demolition, and the bathroom is usable the same day it goes in."
        sections={INSTALLATION_SECTIONS}
      />
      <InstallationProcessTimeline />
      <InstallationProcessWorks />
    </div>
  );
};

export default page;
