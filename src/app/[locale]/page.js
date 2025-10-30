import { Hero } from "../../components/homepage/hero";
import { Features } from "../../components/homepage/features";
import { Solutions } from "../../components/homepage/solutions";
import { Advantages } from "../../components/homepage/advantages";
import { Gallery } from "../../components/homepage/gallery";
import { Reviews } from "../../components/homepage/reviews";
import { CtaSection } from "../../components/homepage/cta-section";
import { UpperHeader } from "../../components/upperHeader";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default async function Home({ params }) {
  const { locale } = await params;

  return (
    <div>
      <div className="sticky top-0 z-50 w-full">
        <UpperHeader locale={locale} />
        <Header />
      </div>
      <Hero />
      <Features />
      <Solutions />
      <Advantages />
      <Gallery />
      <Reviews />
      <CtaSection />
      <Footer />
    </div>
  );
}
