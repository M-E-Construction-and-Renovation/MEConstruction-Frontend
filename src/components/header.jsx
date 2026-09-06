"use client";

import { Button } from "./ui/button";
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import {
  aboutMenuItems,
  solutionsMenuItems,
  inspirationMenuItems,
  resourcesMenuItems,
} from "@/data/navigation-data";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/data/contact-data";

import LanguageSwitcher from "./utils/language-switcher";

// Single source of truth for both the desktop dropdowns and the mobile
// accordion. They used to be written out twice, which is how the design tool
// ended up with two different labels and how the mobile menu drifted a
// breakpoint away from the button that opens it.
export const desktopNavItems = [
  {
    id: "about",
    label: "About",
    items: aboutMenuItems,
    images: [
      { src: "/images/modern-bathroom-renovation.png", alt: "About" },
      { src: "/images/bathroom-installation-team.jpg", alt: "Our Team" },
    ],
  },
  {
    id: "design",
    label: "Try Our Design Tool",
    href: "/design",
  },
  {
    id: "solutions",
    label: "Solutions",
    items: solutionsMenuItems,
    images: [
      { src: "/images/luxury-bathtub.png", alt: "Bathtub" },
      { src: "/images/walk-in-shower.jpg", alt: "Shower" },
    ],
  },
  {
    id: "inspiration",
    label: "Inspiration",
    items: inspirationMenuItems,
    images: [
      { src: "/images/bathroom-design-inspiration.jpg", alt: "Design" },
      { src: "/images/modern-bathroom-colors.jpg", alt: "Colors" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    items: resourcesMenuItems,
    images: [
      { src: "/images/bathroom-guide-book.jpg", alt: "Guide" },
      { src: "/images/bathroom-consultation.jpg", alt: "Consultation" },
    ],
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm";

export function Header({ locale }) {
  const dispatch = useDispatch();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  const navRef = useRef(null);

  // Safety net for anything that navigates without going through closeMobileMenu
  // — a locale switch, a browser back button, a link added later.
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedMobileMenu(null);
  }, [pathname]);

  // Escape closes an open dropdown, and a click outside the nav dismisses it.
  // Without these the only way to close a hover-opened panel is to find it with
  // the pointer again, which keyboard users cannot do at all.
  useEffect(() => {
    if (!activeDropdown && !mobileMenuOpen) return;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      // The mobile panel is an overlay, so Escape has to dismiss it too —
      // otherwise a keyboard user is stuck behind it.
      setActiveDropdown(null);
      setMobileMenuOpen(false);
      setExpandedMobileMenu(null);
    };
    const onPointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setActiveDropdown(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [activeDropdown, mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  return (
    <header className="relative text-primary-foreground">
      {/*
        The bar's glass: tint and blur on the same element, so the blur's
        backdrop is the page rather than its own parent's background. Split
        across two elements as it was before, it cost a compositing layer and
        frosted almost nothing.

        No interactive children: backdrop-filter makes an element a containing
        block for fixed descendants, which would strand the dropdown panels and
        shrink the mobile scrim. Keeping it out here is why every fixed element
        in this component can simply say top-[var(--nav-h)].
      */}
      <div
        aria-hidden="true"
        className="nav-glass pointer-events-none absolute inset-0 -z-10"
      >
        {/* Lit top edge. One hairline is the difference between a panel that
            sits on the page and one that sits above it. */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
        {/* The bar's own lower edge, picked up where the plate stops. */}
        <div className="absolute right-0 bottom-0 left-[var(--bar-plate-w)] h-px bg-white/12" />
      </div>

      {/*
        The plate under the logo. It sits below the bar rather than being cut
        out of it, which is what lets the corner round.

        z-20 puts it above the dropdown panels. They are full-bleed and open at
        the bar's bottom edge, so without this they slid across the lower half
        of the logo; now the plate reads as a tab the panel passes behind.
      */}
      <div
        aria-hidden="true"
        /* Above the mobile menu (z-50) and its scrim (z-40) as well as the
           desktop panels, so the plate stays a tab that everything opens
           behind — on a phone the menu was covering it outright. */
        className="nav-glass nav-glass-drop pointer-events-none absolute top-full left-0 z-60 border-r border-b border-white/12"
      />

      <div className="relative">
        <div className="relative mx-auto px-4 md:px-10">
          {/*
            The row is only as tall as the nav and the button need. Below lg it
            keeps its old height, because there is no desktop nav to keep short
            and no plate to sit on.
          */}
          <div className="relative flex h-15 items-center gap-4 sm:h-17 xl:h-19">
            {/*
              The logo is taken out of the flex flow at lg and centred on the
              plate instead, which is what lets it grow without the nav row
              growing with it — the whole point of the shape. Below lg it is a
              normal flex child again.

              shrink-0 remains the fix for the logo measuring 237px everywhere
              but 1024px, where flex was quietly compressing it to 211px.
            */}
            <Link
              href="/"
              aria-label="M&E Construction and Renovations, home"
              /* Absolute at every width: it is what lets the logo be tall
                 without the row being tall, which is the whole point of the
                 shape. The z-index puts it above the plate, which is itself
                 above the mobile menu, its scrim and the desktop panels — the
                 logo crosses the bar's bottom edge, so without this its lower
                 half was covered whenever any of them opened. */
              className={`absolute top-0 left-0 z-70 flex h-[calc(100%+var(--bar-plate-drop))] shrink-0 items-center ${focusRing}`}
            >
              <Image
                src="/images/transparent-logo2.png"
                alt="M&E Construction & Renovation LLC"
                width={785}
                height={318}
                priority
                className="h-18 w-auto object-contain sm:h-20 xl:h-24"
              />
            </Link>

            {/*
              At lg the nav is still a flex child, and the logo is not — so
              without this the nav would start at the left edge and run under
              the plate. At xl the nav is centred absolutely and needs no
              reservation.
            */}
            <div
              aria-hidden="true"
              className="hidden w-[calc(var(--bar-plate-w)-2.5rem)] shrink-0 lg:block xl:hidden"
            />

            {/* Desktop navigation */}
            <nav
              ref={navRef}
              aria-label="Main"
              /*
                From xl the nav is centred on the bar itself rather than in the
                gap between the logo and the button, so its midpoint does not
                drift with the width of either. At lg there is not room for that
                — see the note in globals.css — so it centres in the space it
                actually has.

                Centred by spanning the row and justifying, NOT by
                left-1/2 + -translate-x-1/2. A transform makes an element a
                containing block for fixed descendants, and the dropdown panels
                are fixed children of this nav: with the translate on, they
                inherited the nav's 615px width and its offset instead of the
                viewport's.

                Spanning the row means the nav's empty halves sit over the logo
                and the button, so it passes pointer events through and the
                items switch them back on.
              */
              className="pointer-events-none hidden h-full min-w-0 items-center gap-3 lg:mx-auto lg:flex xl:absolute xl:inset-x-0 xl:mx-0 xl:justify-center xl:gap-7"
            >
              {desktopNavItems.map((nav) => {
                if (nav.href) {
                  return (
                    <Link
                      key={nav.id}
                      href={nav.href}
                      className={`type-nav pointer-events-auto flex h-full items-center whitespace-nowrap text-sm transition-colors hover:text-accent xl:text-base ${focusRing} py-6`}
                    >
                      {nav.label}
                    </Link>
                  );
                }

                const isOpen = activeDropdown === nav.id;
                const panelId = `nav-panel-${nav.id}`;

                return (
                  <div
                    key={nav.id}
                    className="pointer-events-auto relative h-full"
                    onMouseEnter={() => setActiveDropdown(nav.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setActiveDropdown(isOpen ? null : nav.id)}
                      onFocus={() => setActiveDropdown(nav.id)}
                      className={`type-nav flex h-full items-center gap-1 whitespace-nowrap text-sm transition-colors hover:text-accent xl:text-base ${focusRing} py-6`}
                    >
                      {nav.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mounted only while open. Previously all four panels sat
                        in the DOM permanently, which meant every page shipped
                        four dropdowns' worth of links and images, and a
                        half-finished opacity transition could leave one
                        translucent over the hero. */}
                    {isOpen && (
                      <div
                        id={panelId}
                        /*
                          Now that the blur lives on a decorative layer instead
                          of an ancestor, this fixed panel is positioned against
                          the viewport, so it can name the one number that
                          matters: the bottom of the nav block. Left to its
                          static position it would follow whatever padding the
                          nav row happens to have.
                        */
                        /*
                          Capped to what is left of the viewport and scrollable.
                          There was no cap before, so on a short window — a
                          laptop at 1280x700, or any tablet in landscape — the
                          foot of the panel fell off the bottom of the screen
                          with no way to reach it. overscroll-contain stops the
                          page behind from scrolling once the panel hits its
                          end.
                        */
                        className="animate-dropdown fixed inset-x-0 top-[var(--nav-h)] max-h-[calc(100dvh-var(--nav-h))] overflow-x-hidden overflow-y-auto overscroll-contain"
                      >
                        <div className="rule-hairline border-b bg-background shadow-[0_24px_48px_-24px_rgb(0_0_0/0.45)]">
                          {/* Same container as every section on the site, so the
                              panel's content lines up with the page beneath it
                              instead of sitting on its own narrower grid. */}
                          {/*
                            The plate hangs over the top-left of this panel, so
                            the content starts below it rather than behind it.
                            The panel's background still meets the bar, so the
                            two read as one surface with the logo sitting on
                            top.
                          */}
                          <div className="mx-auto w-full max-w-[1400px] px-4 pt-[calc(var(--bar-plate-drop)+1.5rem)] pb-10 md:px-10">
                            <p className="type-eyebrow flex items-center gap-3 text-accent">
                              <span
                                aria-hidden="true"
                                className="h-px w-8 bg-accent"
                              />
                              {nav.label}
                            </p>

                            <div className="mt-6 flex gap-10">
                              {/* Hairline-ruled rows with the arrow affordance —
                                  the same list grammar as the hero's discipline
                                  index and the solutions feature lists. */}
                              <ul className="rule-hairline min-w-0 flex-1 border-t">
                                {nav.items.map((item) => (
                                  <li
                                    key={item.label}
                                    className="rule-hairline border-b"
                                  >
                                    <Link
                                      href={item.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="group flex items-baseline justify-between gap-6 py-3.5 focus-visible:outline-none"
                                    >
                                      <span className="min-w-0">
                                        <span className="type-display block text-[1.0625rem] text-primary transition-colors group-hover:text-accent group-focus-visible:text-accent">
                                          {item.label}
                                        </span>
                                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                                          {item.detail}
                                        </span>
                                      </span>
                                      <ArrowRight
                                        aria-hidden="true"
                                        className="h-4 w-4 shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                                      />
                                    </Link>
                                  </li>
                                ))}
                              </ul>

                              {/* Square corners, matching the solutions index and
                                  gallery — the site has no rounded imagery. */}
                              <div className="hidden shrink-0 gap-4 xl:flex">
                                {nav.images.map((img) => (
                                  <div
                                    key={img.src}
                                    className="h-56 w-56 shrink-0 overflow-hidden bg-muted"
                                  >
                                    <Image
                                      src={img.src}
                                      alt=""
                                      width={300}
                                      height={300}
                                      loading="lazy"
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA — appears with the desktop nav, not 256px later */}
            <Button
              variant="cta"
              onClick={() => dispatch(openModal("header_desktop"))}
              /* At lg the nav's own auto margins already push this right; at
                 xl the nav is out of flow, so it needs its own. */
              className="type-action hidden h-10 shrink-0 px-5 text-[0.6875rem] whitespace-nowrap lg:inline-flex xl:ml-auto xl:px-7 xl:text-xs"
            >
              Get a free quote
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto lg:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X
                  key="close"
                  aria-hidden="true"
                  className="icon-swap-enter h-6 w-6"
                />
              ) : (
                <Menu
                  key="open"
                  aria-hidden="true"
                  className="icon-swap-enter h-6 w-6"
                />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          {/* Dismiss layer. The panel used to sit in normal flow, so opening it
              pushed the whole page down and closing it snapped everything back;
              as an overlay the content beneath simply stays put. */}
          <div
            aria-hidden="true"
            onClick={closeMobileMenu}
            className="animate-mobile-scrim fixed inset-0 top-[var(--nav-h)] z-40 bg-black/40 lg:hidden"
          />

          <div
            id="mobile-menu"
            /* The cap was a hardcoded 8.5rem — the nav's height at the time
               it was written, and wrong the moment the bar changed. It reads
               the token now, so the menu always ends exactly at the bottom of
               the screen. */
            className="animate-mobile-menu absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-var(--nav-h))] origin-top overflow-y-auto overscroll-contain border-t bg-background text-primary shadow-[0_24px_48px_-24px_rgb(0_0_0/0.45)] lg:hidden"
          >
            {/* Cleared past the plate for the same reason as the desktop
                panels. */}
            <div className="container mx-auto px-4 pt-[calc(var(--bar-plate-drop)+0.75rem)] pb-4">
              <nav aria-label="Mobile" className="flex flex-col gap-2">
                {desktopNavItems.map((nav, rowIndex) => {
                  if (nav.href) {
                    return (
                      <Link
                        key={nav.id}
                        href={nav.href}
                        onClick={closeMobileMenu}
                        style={{ "--row": rowIndex }}
                        className="animate-mobile-row flex min-h-11 items-center border-b py-2 text-base font-medium tracking-tight transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {nav.label}
                      </Link>
                    );
                  }

                  const isExpanded = expandedMobileMenu === nav.id;
                  const sectionId = `mobile-section-${nav.id}`;

                  return (
                    <div
                      key={nav.id}
                      style={{ "--row": rowIndex }}
                      className="animate-mobile-row border-b pb-2"
                    >
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={sectionId}
                        onClick={() =>
                          setExpandedMobileMenu(isExpanded ? null : nav.id)
                        }
                        className="flex min-h-11 w-full items-center justify-between py-2 text-base font-medium tracking-tight transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {nav.label}
                        <ChevronRight
                          aria-hidden="true"
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <ul id={sectionId} className="pl-4 mt-1 space-y-1">
                          {nav.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="flex min-h-11 items-center py-2 text-sm text-muted-foreground transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}

                <Button
                  variant="cta"
                  size="lg"
                  style={{ "--row": desktopNavItems.length }}
                  className="animate-mobile-row mt-4 w-full"
                  onClick={() => {
                    closeMobileMenu();
                    dispatch(openModal("header_mobile"));
                  }}
                >
                  GET A FREE QUOTE
                </Button>

                <div
                  style={{ "--row": desktopNavItems.length + 1 }}
                  className="animate-mobile-row mt-4 flex flex-col gap-3 border-t pt-4 lg:hidden"
                >
                  <LanguageSwitcher currentLocale={locale} />

                  <div className="flex gap-2 justify-center">
                    {socials.map((social) => (
                      <Button
                        key={social.id}
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:bg-primary/10"
                      >
                        <Link
                          href={social.link}
                          target={social.target}
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          onClick={closeMobileMenu}
                        >
                          <social.icon aria-hidden="true" className="h-5 w-5" />
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
