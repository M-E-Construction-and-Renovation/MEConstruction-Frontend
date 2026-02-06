import "../../../globals.css";
import { Header } from "../../../../components/header";
import ClientPreloadBoundary from "@/components/utils/ClientPreloadBoundary";

export const metadata = {
  title:
    "Interactive Bathroom Design Tool | M&E Construction and Renovations LLC",
  description:
    "Design your dream bathroom with M&E Construction and Renovations LLC’s interactive design tool. Customize showers, bathtubs, and layouts in real time before starting your renovation project.",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="sticky top-0 z-50 w-full">
        <Header locale={locale} />
      </div>
      <main className="flex-1 overflow-hidden">
        <ClientPreloadBoundary>{children}</ClientPreloadBoundary>
      </main>
    </div>
  );
}
