import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title:
    "Bathroom Remodeling Buying Guide | M&E Construction and Renovations LLC",
  description:
    "Discover expert tips and advice in our Bathroom Remodeling Buying Guide by M&E Construction and Renovations LLC. Learn how to choose the right bathtub, shower, and materials to make your renovation a success.",
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
