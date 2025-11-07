import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title: "Our Installation Process | M&E Construction and Renovations LLC",
  description:
    "Discover M&E Construction and Renovations LLC’s efficient installation process for bathroom, shower, and bathtub remodels. We ensure a seamless, clean, and timely renovation experience from start to finish.",
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
