import "../../globals.css";
import { Header } from "../../../components/header";
import { UpperHeader } from "../../../components/upperHeader";
import { Footer } from "../../../components/footer";

export const metadata = {
  title: "Privacy Policy | M&E Construction and Renovations LLC",
  description:
    "Read the Privacy Policy of M&E Construction and Renovations LLC to understand how we collect, use, and protect your personal information when you visit our website or use our renovation services.",
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
