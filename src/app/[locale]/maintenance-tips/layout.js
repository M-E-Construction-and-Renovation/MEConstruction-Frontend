import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title: "Bathroom Maintenance Tips | M&E Construction and Renovations LLC",
  description:
    "Learn expert bathroom maintenance tips from M&E Construction and Renovations LLC. Keep your renovated bathroom, shower, or bathtub looking new and performing perfectly for years to come.",
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
