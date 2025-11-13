import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title:
    "Basement Finishing & Renovation Solutions | M&E Construction and Renovations LLC",
  description:
    "Transform your basement with M&E Construction and Renovations LLC. From unfinished spaces to fully functional living areas, we offer custom basement finishing and renovation solutions — including family rooms, home offices, bars, and entertainment spaces designed for comfort and style.",
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
