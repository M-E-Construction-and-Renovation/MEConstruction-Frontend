import { Hero } from "../../../components/homepage/hero";
import { Features } from "../../../components/homepage/features";
import { Solutions } from "../../../components/homepage/solutions";
import { Advantages } from "../../../components/homepage/advantages";
import { Gallery } from "../../../components/homepage/gallery";
import { Reviews } from "../../../components/homepage/reviews";

export default async function Home({ params }) {
  const { locale } = await params;

  // Load all raw JSON data
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;

  const {
    home: { hero, features, solutions, advantages, gallery, reviews },
  } = messages;

  return (
    <div className="min-h-screen">
      <Hero hero={hero} />
      <Features features={features} />
      <Solutions solutions={solutions} />
      <Advantages advantages={advantages} />
      <Gallery gallery={gallery} />
      <Reviews reviews={reviews} />
    </div>
  );
}
