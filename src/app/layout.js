import { Geist, Geist_Mono, Archivo } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";
import GoogleAnalytics from "@/components/analytics/google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Display voice for the redesign. A grotesque with squared terminals and a
// tight, structural rhythm — closer to architectural drawing lettering and
// signage than Geist's neutral UI face, which had no point of view at 7rem.
// Body copy stays on Geist Sans, so this is one extra subset, not a swap.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://home.meconstructionrenovations.com"),
  title: "M&E Construction and Renovations LLC | Home Renovation Experts",
  description:
    "M&E Construction and Renovations LLC specializes in complete home renovations, including bathroom remodeling, kitchen upgrades, and basement finishing. Transform your home with expert craftsmanship, modern design, and quality you can trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} antialiased`}
      >
        {/*
          THESIS: A renovation firm is judged on rooms it has actually finished,
          so the page is a portfolio with a quote form in it — not a services
          brochure. Refuses the contractor-site default: stacked icon-and-blurb
          feature cards over a stock hero.
          OWN-WORLD: Deep navy ground, single orange accent carrying every
          action, hairline rules, Archivo display at architectural scale,
          monospace metadata labels. Full-bleed photography; no card shells
          around content that is already a picture.
          STORY: This company finishes rooms like these, near me, and I can
          start in one click or design my own bathroom first.
          FIRST VIEWPORT: Headline set left at display scale against a
          full-bleed project photograph; meta rule beneath; primary orange
          quote button and secondary design-tool button on the same line; a
          vertical index of disciplines at the right edge.
          FORM: Architectural editorial, pinned by the user from three offered
          directions; no concept roll — an established world, pinned palette.
          FINISH: unreviewed and undocumented is unfinished; this build ends
          with the finish review, the verdict, and DESIGN.md
        */}
        {/*
          Scroll-reveal start states are plain CSS, so they need no script and
          cause no hydration mismatch. This restores visibility for visitors
          without JavaScript, who would otherwise never get the IntersectionObserver
          that reveals the content.
        */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <main>
          <ReduxProvider>{children}</ReduxProvider>
        </main>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
