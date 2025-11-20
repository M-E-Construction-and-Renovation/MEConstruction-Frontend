"use client";

import { Button } from "./ui/button";
import {
  Menu,
  Phone,
  MapPin,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";
import { useState } from "react";
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

import LanguageSwitcher from "./utils/language-switcher";

export const desktopNavItems = [
  {
    id: "about",
    label: "About",
    items: aboutMenuItems, // already imported in your header
    images: [
      {
        src: "/images/modern-bathroom-renovation.png",
        alt: "About",
      },
      {
        src: "/images/bathroom-installation-team.jpg",
        alt: "Our Team",
      },
    ],
  },
  {
    id: "design",
    label: "Try Our Design Tool",
  },
  {
    id: "solutions",
    label: "Solutions",
    items: solutionsMenuItems,
    images: [
      {
        src: "/images/luxury-bathtub.png",
        alt: "Bathtub",
      },
      {
        src: "/images/walk-in-shower.jpg",
        alt: "Shower",
      },
    ],
  },
  {
    id: "inspiration",
    label: "Inspiration",
    items: inspirationMenuItems,
    images: [
      {
        src: "/images/bathroom-design-inspiration.jpg",
        alt: "Design",
      },
      {
        src: "/images/modern-bathroom-colors.jpg",
        alt: "Colors",
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    items: resourcesMenuItems,
    images: [
      {
        src: "/images/bathroom-guide-book.jpg",
        alt: "Guide",
      },
      {
        src: "/images/bathroom-consultation.jpg",
        alt: "Consultation",
      },
    ],
  },
];

export function Header({ locale }) {
  const dispatch = useDispatch();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  return (
    <header className="bg-gradient-to-b from-primary/90 to-primary/80 shadow-sm text-primary-foreground">
      {/* <header className="shadow-sm"> */}
      {/* Main Navigation */}
      <div className="backdrop-blur-md border-b-primary">
        <div className="mx-auto px-4 md:px-10">
          <div className="flex h-22 sm:h-26 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-4xl font-bold text-center flex flex-col text-accent"
              >
                <Image
                  src="/images/transparent-logo2.png"
                  alt="M&E Construction & Renovation LLC Logo"
                  width={9999}
                  height={9999}
                  className="h-20 sm:h-24 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 h-full">
              {/* About Dropdown */}
              {desktopNavItems.map((nav) => {
                const isDesignPage = nav.id === "design";

                return isDesignPage ? (
                  <div key={nav.id} className="relative">
                    <Link href="/design" target="_blank">
                      <button className="flex items-center gap-1 text-sm md:text-lg font-medium hover:text-accent transition-colors py-6 hover:cursor-pointer">
                        {nav.label}
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div
                    key={nav.id}
                    className="relative h-full"
                    onMouseEnter={() => setActiveDropdown(nav.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="h-full flex items-center gap-1 text-sm md:text-lg font-medium hover:text-accent transition-colors py-6">
                      {nav.label}
                      <ChevronDown className="h-5 w-5" />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`fixed left-0 right-0 pt-0 transition-all duration-300 ease-in-out ${
                        activeDropdown === nav.id
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-0 pointer-events-none"
                      }`}
                    >
                      <div className="bg-background border-b shadow-lg">
                        <div className="container mx-auto px-4 py-8">
                          <div className="flex gap-8 max-w-6xl mx-auto">
                            {/* Left Menu Items */}
                            <div className="flex-1 grid grid-cols-1 gap-x-8 gap-y-4">
                              {nav.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="text-base text-primary hover:underline transition-all duration-200 py-2 hover:translate-x-1"
                                >
                                  <span className="font-bold text-lg">
                                    {item.label}
                                  </span>
                                  : {item.detail}
                                </Link>
                              ))}
                            </div>

                            {/* Right Images */}
                            <div className="flex gap-4">
                              {nav.images.map((img, index) => (
                                <div
                                  key={index}
                                  className="w-64 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0"
                                >
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={300}
                                    height={300}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => dispatch(openModal())}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                GET A FREE QUOTE
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t lg:hidden bg-background max-h-[calc(100vh-8rem)] overflow-y-auto text-primary">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              {/* About with Submenu */}
              <div className="border-b pb-2">
                <button
                  onClick={() =>
                    setExpandedMobileMenu(
                      expandedMobileMenu === "about" ? null : "about"
                    )
                  }
                  className="flex items-center justify-between w-full text-sm font-medium transition-colors py-2"
                >
                  About
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      expandedMobileMenu === "about" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {expandedMobileMenu === "about" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {aboutMenuItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block text-sm text-muted-foreground py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Design Your Own Bath */}
              <Link
                href="/design"
                className="text-sm font-medium transition-colors py-2 border-b"
              >
                Design Your Own Bath
              </Link>

              {/* Solutions with Submenu */}
              <div className="border-b pb-2">
                <button
                  onClick={() =>
                    setExpandedMobileMenu(
                      expandedMobileMenu === "solutions" ? null : "solutions"
                    )
                  }
                  className="flex items-center justify-between w-full text-sm font-medium transition-colors py-2"
                >
                  Solutions
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      expandedMobileMenu === "solutions" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {expandedMobileMenu === "solutions" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {solutionsMenuItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block text-sm text-muted-foreground py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Inspiration with Submenu */}
              <div className="border-b pb-2">
                <button
                  onClick={() =>
                    setExpandedMobileMenu(
                      expandedMobileMenu === "inspiration"
                        ? null
                        : "inspiration"
                    )
                  }
                  className="flex items-center justify-between w-full text-sm font-medium transition-colors py-2"
                >
                  Inspiration
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      expandedMobileMenu === "inspiration" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {expandedMobileMenu === "inspiration" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {inspirationMenuItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block text-sm text-muted-foreground py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources with Submenu */}
              <div className="border-b pb-2">
                <button
                  onClick={() =>
                    setExpandedMobileMenu(
                      expandedMobileMenu === "resources" ? null : "resources"
                    )
                  }
                  className="flex items-center justify-between w-full text-sm font-medium transition-colors py-2"
                >
                  Resources
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      expandedMobileMenu === "resources" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {expandedMobileMenu === "resources" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {resourcesMenuItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block text-sm text-muted-foreground py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile CTA Button */}
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4 w-full"
              >
                GET A FREE QUOTE
              </Button>

              {/* Mobile Contact Info */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t md:hidden">
                <LanguageSwitcher currentLocale={locale} />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
