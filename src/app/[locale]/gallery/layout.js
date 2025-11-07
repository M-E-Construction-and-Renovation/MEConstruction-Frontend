import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title: "Inspiration Gallery | M&E Construction and Renovations LLC",
  description:
    "Explore M&E Construction and Renovations LLC’s gallery of stunning bathroom, shower, and bathtub remodels. Get inspired by our craftsmanship and modern renovation designs.",
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
