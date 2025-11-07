import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title: "Why Choose M&E Construction and Renovations LLC",
  description:
    "Discover the advantages of working with M&E Construction and Renovations LLC. We deliver high-quality bathroom, shower, and bathtub renovations with expert craftsmanship, fast installations, and customer-first service.",
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
