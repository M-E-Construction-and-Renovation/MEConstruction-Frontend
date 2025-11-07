"use client";

import { Button } from "../ui/button";
import { ArrowRight, Check, Palette } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";

export function BathroomHero() {
  const dispatch = useDispatch();

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setIsTextVisible(true), 100);
    const imageTimer = setTimeout(() => setIsImageVisible(true), 200);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent-5 via-primary/10 to-accent/5">
      <div className="container mx-auto px-4 py-16 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div
              className={`transition-all duration-700 ease-out ${
                isTextVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-6 opacity-0"
              }`}
            >
              <span className="text-accent font-semibold tracking-wide">
                PERSONALIZED BATHROOMS
              </span>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mt-3 mb-4">
                Custom Bathroom Renovation Made Simple
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Tired of your old, dated bathroom? We bring modern comfort and
                style to your space with a remodel made just for you.
              </p>
            </div>

            {/* Features */}
            <div
              className={`flex flex-col gap-4 transition-all duration-700 delay-100 ease-out ${
                isTextVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-6 opacity-0"
              }`}
            >
              {[
                "Tailored to You",
                "Designed for Every Need",
                "A Beautiful New Look Without the Mess",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-700 delay-200 ease-out ${
                isTextVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-6 opacity-0"
              }`}
            >
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
                  Get a free quote
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Link href="/design" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-base bg-transparent border-primary/20 hover:bg-primary"
                  >
                    <Palette className="h-5 w-5" />
                    Try our design tool
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div
              className={`aspect-[4/3] overflow-hidden rounded-2xl bg-muted transition-all duration-1000 ease-out shadow-lg ${
                isImageVisible
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-12 opacity-0 scale-95"
              }`}
            >
              <img
                src="/images/renovated-bathroom.jpg"
                alt="Beautiful renovated bathroom"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
