"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function BathroomProcessCarousel({ process }) {
  const { sectionTitle, sectionSubtitle, description, steps } = process;

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section
      id="process"
      className="py-20 md:py-32 bg-gradient-to-br from-primary/80 via-primary/100 to-primary/80"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              {sectionTitle}
            </h2>
            <p className="text-accent text-lg mb-8 leading-relaxed">
              {sectionSubtitle}
            </p>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            {/* Current Step Display */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-2xl">
              <img
                src={steps[currentStep].image || "/placeholder.svg"}
                alt={steps[currentStep].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent" />

              {/* Step Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-accent/10 to-transparent">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {steps[currentStep].title}
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>

            {/* Navigation Dots and Arrows */}
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevStep}
                className="text-white hover:bg-accent/50 border border-accent/50"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentStep
                        ? "bg-accent w-8"
                        : "bg-white/30 w-2"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextStep}
                className="text-white hover:bg-accent/50 border border-accent/50"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
