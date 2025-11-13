"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import * as LucideIcons from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function AdvantagesCarousel({ carousel }) {
  const { sectionTitle, items } = carousel;

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetTimer(); // reset after user action
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetTimer();
  };

  const getVisibleAdvantages = () => {
    const startIndex = currentSlide * 3;
    return items.slice(startIndex, startIndex + 3);
  };

  return (
    <section id="carousel" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src="/images/professional-bathroom-renovation-team-working.jpg"
              alt="M&E Construction and Renovation advantages"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {sectionTitle}
            </h2>

            <div className="space-y-6 mb-8">
              {getVisibleAdvantages().map((advantage, index) => {
                const Icon =
                  LucideIcons[advantage.icon] || LucideIcons.HelpCircle;
                return (
                  <div
                    key={`${currentSlide}-${index}`}
                    className="flex gap-4 p-4 rounded-lg bg-background border hover:border-accent/50 transition-all duration-300 animate-in fade-in slide-in-from-right-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full bg-transparent"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? "w-8 bg-accent"
                        : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full bg-transparent"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
