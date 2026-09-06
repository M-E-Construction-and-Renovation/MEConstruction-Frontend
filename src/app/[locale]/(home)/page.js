import { Hero } from "@/components/homepage/hero";
import { Features } from "@/components/homepage/features";
import { Solutions } from "@/components/homepage/solutions";
import { DesignTool } from "@/components/homepage/design-tool";
import { LocationSection } from "@/components/homepage/location-section";
import { Advantages } from "@/components/homepage/advantages";
import { Gallery } from "@/components/homepage/gallery";
import { Reviews } from "@/components/homepage/reviews";
import { ProjectBand } from "@/components/homepage/project-band";

export default async function Home({ params }) {
  const { locale } = await params;

  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;

  const {
    home: { hero, features, solutions, advantages, gallery, reviews },
  } = messages;

  /*
   * Order is a scroll argument, alternating dense and quiet, light and navy:
   *   thesis → what we do → the work itself → the tool only we have →
   *   why us → proof in photographs → proof in words → where we work → act.
   *
   * The design tool sits directly after the solutions index because that is the
   * moment a visitor is picturing their own room; it used to be a single link
   * buried inside one of those cards.
   */
  return (
    <div className="min-h-screen">
      <Hero hero={hero} />
      <Features features={features} />
      <Solutions solutions={solutions} />
      <DesignTool />
      <Advantages advantages={advantages} />
      <ProjectBand />
      <Gallery gallery={gallery} />
      <Reviews reviews={reviews} />
      <LocationSection />
    </div>
  );
}
