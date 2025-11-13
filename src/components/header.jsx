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

export function Header() {
  const dispatch = useDispatch();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  return (
    <header className="backdrop-blur-md bg-background/80 shadow-sm">
      {/* Main Navigation */}
      <div className="bg-background/90 backdrop-blur-md border-b">
        <div className="mx-auto px-4 md:px-10">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-4xl font-bold text-center flex flex-col text-accent"
              >
                <Image
                  src="/images/transparent-logo.png"
                  alt="M&E Construction & Renovation LLC Logo"
                  width={180}
                  height={80}
                  className="h-12 sm:h-16 w-auto object-contain"
                />
                {/* M&E
                <span className="text-xs text-primary">
                  Construction and Renovation LLC
                </span> */}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-6">
                  About
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`fixed left-0 right-0 pt-0 transition-all duration-300 ease-in-out ${
                    activeDropdown === "about"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-background border-b shadow-lg">
                    <div className="container mx-auto px-4 py-8">
                      <div className="flex gap-8 max-w-6xl mx-auto">
                        <div className="flex-1 grid grid-cols-1 gap-x-8 gap-y-4">
                          {aboutMenuItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="text-base hover:text-primary hover:underline transition-all duration-200 py-2 hover:translate-x-1"
                            >
                              <span className="font-bold text-lg">
                                {item.label}
                              </span>
                              : {item.detail}
                            </Link>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <div className="w-64 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/modern-bathroom-renovation.png"
                              alt="About"
                              width={400}
                              height={400}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="w-64 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/bathroom-installation-team.jpg"
                              alt="Our Team"
                              width={192}
                              height={192}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Your Own Bath */}
              <Link
                href="/design"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Design Your Own Bath
              </Link>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-6">
                  Solutions
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`fixed left-0 right-0 pt-0 transition-all duration-300 ease-in-out ${
                    activeDropdown === "solutions"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-background border-b shadow-lg">
                    <div className="container mx-auto px-4 py-8">
                      <div className="flex gap-8 max-w-6xl mx-auto">
                        <div className="flex-1 grid grid-cols-1 gap-x-8 gap-y-4">
                          {solutionsMenuItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="text-base hover:text-primary hover:underline transition-all duration-200 py-2 hover:translate-x-1"
                            >
                              <span className="text-lg font-bold">
                                {item.label}
                              </span>
                              : {item.detail}
                            </Link>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <div className="w-64 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/luxury-bathtub.png"
                              alt="Bathtub"
                              width={192}
                              height={192}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="w-64 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/walk-in-shower.jpg"
                              alt="Shower"
                              width={192}
                              height={192}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inspiration Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("inspiration")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-6">
                  Inspiration
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`fixed left-0 right-0 pt-0 transition-all duration-300 ease-in-out ${
                    activeDropdown === "inspiration"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-background border-b shadow-lg">
                    <div className="container mx-auto px-4 py-8">
                      <div className="flex gap-8 max-w-6xl mx-auto">
                        <div className="flex-1 grid grid-cols-1 gap-x-8 gap-y-4">
                          {inspirationMenuItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="text-base hover:text-primary hover:underline transition-all duration-200 py-2 hover:translate-x-1"
                            >
                              <span className="texl-lg font-bold">
                                {item.label}
                              </span>
                              : {item.detail}
                            </Link>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <div className="w-64 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/bathroom-design-inspiration.jpg"
                              alt="Design"
                              width={192}
                              height={192}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="w-64 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/modern-bathroom-colors.jpg"
                              alt="Colors"
                              width={192}
                              height={192}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-6">
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`fixed left-0 right-0 pt-0 transition-all duration-300 ease-in-out ${
                    activeDropdown === "resources"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-background border-b shadow-lg">
                    <div className="container mx-auto px-4 py-8">
                      <div className="flex gap-8 max-w-6xl mx-auto">
                        <div className="flex-1 grid grid-cols-1 gap-x-8 gap-y-4">
                          {resourcesMenuItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="text-base hover:text-primary hover:underline transition-all duration-200 py-2 hover:translate-x-1"
                            >
                              <span className="text-lg font-bold">
                                {item.label}
                              </span>
                              : {item.detail}
                            </Link>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <div className="w-64 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/bathroom-guide-book.jpg"
                              alt="Guide"
                              width={192}
                              height={192}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="w-64 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/bathroom-consultation.jpg"
                              alt="Consultation"
                              width={192}
                              height={192}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
        <div className="border-t lg:hidden bg-background max-h-[calc(100vh-8rem)] overflow-y-auto">
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
                  className="flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors py-2"
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
                        className="block text-sm text-muted-foreground hover:text-primary py-1"
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
                className="text-sm font-medium hover:text-primary transition-colors py-2 border-b"
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
                  className="flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors py-2"
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
                        className="block text-sm text-muted-foreground hover:text-primary py-1"
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
                  className="flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors py-2"
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
                        className="block text-sm text-muted-foreground hover:text-primary py-1"
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
                  className="flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors py-2"
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
                        className="block text-sm text-muted-foreground hover:text-primary py-1"
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
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t text-sm">
                <Link
                  href="#location"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <MapPin className="h-4 w-4" />
                  Find a location near you
                </Link>
                <Link
                  href="tel:18008922847"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  Call us today 1 (800) 892-2847
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
