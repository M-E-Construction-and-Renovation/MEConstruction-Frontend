import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title: "Bathtub Solutions | M&E Construction and Renovations LLC",
  description:
    "Discover premium bathtub solutions with M&E Construction and Renovations LLC. Enjoy spa-like comfort and elegance with expertly installed bathtubs designed for lasting luxury and functionality.",
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
