"use client";

import { Button } from "./ui/button";
import { Menu, ChevronDown, ChevronRight, X } from "lucide-react";
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
    if (!activeDropdown) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveDropdown(null);
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
  }, [activeDropdown]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  return (
    <header className="bg-gradient-to-b from-primary/90 to-primary/80 shadow-sm text-primary-foreground">
      <div className="backdrop-blur-md border-b-primary">
        <div className="mx-auto px-4 md:px-10">
          <div className="flex h-22 sm:h-26 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              aria-label="M&E Construction and Renovations, home"
              className={`flex items-center ${focusRing}`}
            >
              <Image
                src="/images/transparent-logo2.png"
                alt="M&E Construction & Renovation LLC"
                width={785}
                height={318}
                priority
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>

            {/* Desktop navigation */}
            <nav
              ref={navRef}
              aria-label="Main"
              className="hidden lg:flex items-center gap-6 xl:gap-8 h-full"
            >
              {desktopNavItems.map((nav) => {
                if (nav.href) {
                  return (
                    <Link
                      key={nav.id}
                      href={nav.href}
                      className={`flex items-center text-base xl:text-lg font-medium hover:text-accent transition-colors py-6 ${focusRing}`}
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
                    className="relative h-full"
                    onMouseEnter={() => setActiveDropdown(nav.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setActiveDropdown(isOpen ? null : nav.id)}
                      onFocus={() => setActiveDropdown(nav.id)}
                      className={`h-full flex items-center gap-1 text-base xl:text-lg font-medium hover:text-accent transition-colors py-6 ${focusRing}`}
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
                        className="fixed left-0 right-0 animate-dropdown"
                      >
                        <div className="bg-background border-b shadow-lg">
                          <div className="container mx-auto px-4 py-8">
                            <div className="flex gap-8 max-w-6xl mx-auto">
                              <ul className="flex-1 grid grid-cols-1 gap-x-8 gap-y-2">
                                {nav.items.map((item) => (
                                  <li key={item.label}>
                                    <Link
                                      href={item.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="block text-base text-primary hover:underline transition-all duration-200 py-2 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                                    >
                                      <span className="font-bold text-lg">
                                        {item.label}
                                      </span>
                                      : {item.detail}
                                    </Link>
                                  </li>
                                ))}
                              </ul>

                              <div className="hidden xl:flex gap-4">
                                {nav.images.map((img) => (
                                  <div
                                    key={img.src}
                                    className="w-64 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0"
                                  >
                                    <Image
                                      src={img.src}
                                      alt=""
                                      width={300}
                                      height={300}
                                      loading="lazy"
                                      className="object-cover w-full h-full"
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
              onClick={() => dispatch(openModal("header_desktop"))}
              className="hidden lg:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold animate-beat px-4 xl:px-6 h-11 text-sm xl:text-base whitespace-nowrap"
            >
              GET A FREE QUOTE
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X aria-hidden="true" className="h-6 w-6" />
              ) : (
                <Menu aria-hidden="true" className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t lg:hidden bg-background max-h-[calc(100dvh-8.5rem)] overflow-y-auto text-primary"
        >
          <div className="container mx-auto px-4 py-4">
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {desktopNavItems.map((nav) => {
                if (nav.href) {
                  return (
                    <Link
                      key={nav.id}
                      href={nav.href}
                      onClick={closeMobileMenu}
                      className="flex items-center min-h-11 text-base font-medium transition-colors py-2 border-b"
                    >
                      {nav.label}
                    </Link>
                  );
                }

                const isExpanded = expandedMobileMenu === nav.id;
                const sectionId = `mobile-section-${nav.id}`;

                return (
                  <div key={nav.id} className="border-b pb-2">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={sectionId}
                      onClick={() =>
                        setExpandedMobileMenu(isExpanded ? null : nav.id)
                      }
                      className="flex items-center justify-between w-full min-h-11 text-base font-medium transition-colors py-2"
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
                              className="flex items-center min-h-11 text-sm text-muted-foreground py-2"
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
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4 w-full"
                onClick={() => {
                  closeMobileMenu();
                  dispatch(openModal("header_mobile"));
                }}
              >
                GET A FREE QUOTE
              </Button>

              <div className="flex flex-col gap-3 mt-4 pt-4 border-t md:hidden">
                <LanguageSwitcher currentLocale={locale} />

                <div className="flex gap-2 justify-center">
                  {socials.map((social) => (
                    <Button
                      key={social.id}
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <Link
                        href={social.link}
                        target={social.target}
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        onClick={closeMobileMenu}
                      >
                        <social.icon aria-hidden="true" className="h-8 w-8" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
