"use client";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";

export function AdvantagesHero() {
  const dispatch = useDispatch();

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isBadgeVisible, setIsBadgeVisible] = useState(false);

  useEffect(() => {
    const badgeTimer = setTimeout(() => setIsBadgeVisible(true), 100);
    const textTimer = setTimeout(() => setIsTextVisible(true), 200);
    const imageTimer = setTimeout(() => setIsImageVisible(true), 300);

    return () => {
      clearTimeout(badgeTimer);
      clearTimeout(textTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div
              className={`inline-flex items-center gap-2 rounded-full border bg-secondary px-3 py-1 text-sm w-fit transition-all duration-700 ease-out ${
                isBadgeVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="font-medium">
                Why Choose M&E Construction and Renovation
              </span>
            </div>

            <h1
              className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance transition-all duration-1000 ease-out ${
                isTextVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              The{" "}
              <span className="text-accent">
                M&E Construction and Renovation
              </span>{" "}
              Advantages
            </h1>

            <p
              className={`text-lg text-muted-foreground md:text-xl text-pretty max-w-2xl transition-all duration-1000 delay-100 ease-out ${
                isTextVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              Discover why thousands of homeowners trust M&E Construction and
              Renovation for their bathroom renovation needs. Quality, speed,
              and exceptional service guaranteed.
            </p>

            <div
              className={`flex flex-col gap-4 sm:flex-row sm:items-center transition-all duration-1000 delay-200 ease-out ${
                isTextVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <Button
                onClick={() => dispatch(openModal())}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              className={`aspect-[4/3] overflow-hidden rounded-2xl bg-muted transition-all duration-1000 ease-out ${
                isImageVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <img
                src="/images/modern-luxury-bathroom-with-elegant-fixtures.jpg"
                alt="Bath Fitter advantages showcase"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
