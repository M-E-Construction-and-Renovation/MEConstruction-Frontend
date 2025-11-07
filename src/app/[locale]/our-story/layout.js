import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title: "Our Story | M&E Construction and Renovations LLC",
  description:
    "Discover the story behind M&E Construction and Renovations LLC — our passion for transforming bathrooms, showers, and bathtubs with quality craftsmanship, integrity, and customer-focused service.",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="sticky top-0 z-50 w-full">
        <UpperHeader />
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
}
