"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";

export function BathroomBeforeAfter({ beforeAfter }) {
  const {
    sectionTitle,
    sectionSubtitle,
    descriptions,
    button,
    labels,
    beforeAfterImages,
  } = beforeAfter;

  const dispatch = useDispatch();

  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="before-after" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div>
          {/* Header */}
          <div className="mb-12 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {sectionTitle}
              </h2>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                {sectionSubtitle}
              </h3>

              {descriptions.map((description, index) => (
                <p
                  key={index}
                  className="text-lg text-muted-foreground mb-6 leading-relaxed"
                >
                  {description}
                </p>
              ))}

              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base w-fit"
                onClick={() => dispatch(openModal())}
              >
                {button}
              </Button>
            </div>

            {/* Before/After Slider */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-xl">
              <div className="absolute inset-0">
                <img
                  src={beforeAfterImages.after.src}
                  alt={beforeAfterImages.after.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={beforeAfterImages.before.src}
                  alt={beforeAfterImages.before.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white">
                {labels.before}
              </div>
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white">
                {labels.after}
              </div>

              <div
                className="absolute top-0 bottom-0 w-1.5 bg-accent cursor-ew-resize shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full shadow-xl flex items-center justify-center border-4 border-white">
                  <div className="flex gap-1.5">
                    <div className="w-0.5 h-5 bg-white" />
                    <div className="w-0.5 h-5 bg-white" />
                  </div>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
