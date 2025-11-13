import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title: "Kitchen Renovation Solutions | M&E Construction and Renovations LLC",
  description:
    "Transform your kitchen with M&E Construction and Renovations LLC. Enjoy modern, stylish, and functional kitchen renovations tailored to your home, from countertops and cabinetry to custom storage and design solutions.",
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
