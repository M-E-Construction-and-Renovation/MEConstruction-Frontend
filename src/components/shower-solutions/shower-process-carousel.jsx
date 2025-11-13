"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function ShowerProcessCarousel() {
  const t = useTranslations("showerSolutions.process");
  const steps = t.raw("steps");

  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlay, steps.length]);

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    setIsAutoPlay(false);
  };

  return (
    <section
      id="process"
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <span className="text-sm font-semibold text-primary">
                {t("badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                {t("sectionTitle")}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground">
              {t("sectionSubtitle")}
            </p>

            <div className="space-y-3">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveStep(index);
                    setIsAutoPlay(false);
                  }}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                    index === activeStep
                      ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                      : "bg-slate-100 hover:bg-slate-200 text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all ${
                        index === activeStep
                          ? "bg-white text-primary scale-110"
                          : "bg-slate-300 text-slate-600 group-hover:bg-slate-400"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{step.title}</div>
                      {index === activeStep && (
                        <div className="text-xs opacity-90 mt-1">
                          {step.description}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="h-full order-1 md:order-2 flex flex-col gap-6">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-md group">
              <div
                key={activeStep}
                className="h-full animate-in fade-in duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].color} opacity-10`}
                />
                <Image
                  src={steps[activeStep].image || "/placeholder.svg"}
                  alt={steps[activeStep].title}
                  width={600}
                  height={400}
                  className="w-full h-80 md:h-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full bg-transparent hover:bg-primary/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full bg-transparent hover:bg-primary/10"
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
