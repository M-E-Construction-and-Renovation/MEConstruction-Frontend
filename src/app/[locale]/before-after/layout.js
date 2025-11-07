import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title: "Before & After Gallery | M&E Construction and Renovations LLC",
  description:
    "Explore our Before & After gallery to see real bathroom, bathtub, and shower transformations by M&E Construction and Renovations LLC. Get inspired by stunning renovation results and envision your own remodel.",
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
