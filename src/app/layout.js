import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "M&E Construction and Renovations LLC | Home Renovation Experts",
  description:
    "M&E Construction and Renovations LLC specializes in complete home renovations, including bathroom remodeling, kitchen upgrades, and basement finishing. Transform your home with expert craftsmanship, modern design, and quality you can trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <ReduxProvider>{children}</ReduxProvider>
        </main>
      </body>
    </html>
  );
}
