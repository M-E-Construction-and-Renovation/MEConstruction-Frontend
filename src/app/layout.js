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
  title:
    "M&E Construction and Renovations LLC | Bathroom, Bathtub & Shower Remodeling",
  description:
    "M&E Construction and Renovations LLC specializes in modern bathroom, bathtub, and shower remodeling solutions. Transform your space with high-quality materials, expert craftsmanship, and a seamless installation process. Explore our interactive design tool to customize your perfect renovation today.",
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
