import "../../globals.css";
import { Header } from "@/components/header";
import { UpperHeader } from "@/components/upperHeader";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/homepage/cta-section";

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Load all raw JSON data
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;

  const { cta, upperHeader } = messages;

  return (
    <div>
      <div className="sticky top-0 z-50 w-full">
        <UpperHeader locale={locale} upperHeader={upperHeader} />
        <Header locale={locale} />
      </div>
      {children}
      <CtaSection cta={cta} />
      <Footer />
    </div>
  );
}
