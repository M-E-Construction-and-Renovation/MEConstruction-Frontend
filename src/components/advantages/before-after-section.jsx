"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";
import { useTranslations } from "next-intl";

export function BeforeAfterSection() {
  const t = useTranslations("advantages.beforeAfter");
  const categories = t.raw("categories");
  const beforeAfterImages = t.raw("images");

  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("bathroom");
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  const currentImages = beforeAfterImages[selectedCategory];

  return (
    <section
      id="before-after"
      className="py-16 md:py-24 bg-secondary/20 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("sectionSubtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-accent hover:bg-accent/90"
                    : ""
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
            {/* AFTER Image */}
            <div className="absolute inset-0">
              <img
                src={currentImages.after || "/placeholder.svg"}
                alt="After renovation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BEFORE Image (masked by slider) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={currentImages.before || "/placeholder.svg"}
                alt="Before renovation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              {t("labels.before")}
            </div>
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              {t("labels.after")}
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-gray-600" />
                  <div className="w-0.5 h-4 bg-gray-600" />
                </div>
              </div>
            </div>

            {/* Invisible input for dragging */}
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

        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => dispatch(openModal())}
          >
            {t("button")}
          </Button>
        </div>
      </div>
    </section>
  );
}
