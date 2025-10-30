import "../../globals.css";
import { Header } from "../../../components/header";

export const metadata = {
  title: "M&E Construction and Renovation LLC",
  description:
    "Construction and Renovation company that provides best and fast construction and renovations.",
};

export default function RootLayout({ children }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="sticky top-0 z-50 w-full">
        <Header />
      </div>
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
