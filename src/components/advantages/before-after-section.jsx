"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";

const categories = [
  { id: "bathroom", label: "Bathroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "basement", label: "Basement" },
  { id: "patios", label: "Patios" },
  { id: "walkway", label: "Walkway" },
  { id: "driveways", label: "Concrete Driveways" },
];

const beforeAfterImages = {
  bathroom: {
    before: "/images/sdb-namur-avant.png",
    after: "/images/modern-renovated-bathroom-after.jpg",
  },
  kitchen: {
    before: "/images/old-kitchen-before-renovation.jpg",
    after: "/images/modern-renovated-kitchen.png",
  },
  basement: {
    before: "/images/unfinished-basement-before.jpg",
    after: "/images/finished-basement-after-renovation.jpg",
  },
  patios: {
    before: "/images/old-patio-before-renovation.jpg",
    after: "/images/beautiful-patio-after-renovation.jpg",
  },
  walkway: {
    before: "/images/cracked-walkway-before-repair.jpg",
    after: "/images/new-walkway-after-renovation.jpg",
  },
  driveways: {
    before: "/images/damaged-driveway-before.jpg",
    after: "/images/new-concrete-driveway-after.jpg",
  },
};

export function BeforeAfterSection() {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("bathroom");
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  const currentImages = beforeAfterImages[selectedCategory];

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Before & After Transformations
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            See the incredible transformations we've achieved for our customers.
            Select a category to explore.
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
              Before
            </div>
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              After
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
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
