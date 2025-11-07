import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title: "Bathroom Remodeling by M&E Construction and Renovations LLC",
  description:
    "Transform your outdated bathroom into a modern, functional space with M&E Construction and Renovations LLC. Our expert team delivers customized bathroom remodels that combine style, comfort, and efficiency.",
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
