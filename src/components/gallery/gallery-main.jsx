"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const GalleryMain = () => {
  const [activeTab, setActiveTab] = useState("showers");
  const [selectedImage, setSelectedImage] = useState(null);

  const showerDesigns = [
    {
      id: 1,
      title: "Modern Glass Enclosure",
      description: "Sleek frameless glass shower with rainfall showerhead",
      image: "/images/modern-frameless-glass-shower-with-rainfall-shower.jpg",
    },
    {
      id: 2,
      title: "Marble Luxe Shower",
      description: "Elegant marble walls with chrome fixtures",
      image: "/images/luxurious-marble-shower-with-chrome-fixtures-and-e.jpg",
    },
    {
      id: 3,
      title: "Minimal White Shower",
      description: "Clean white tile design with minimalist aesthetic",
      image: "/images/minimalist-white-tile-shower-with-clean-modern-des.jpg",
    },
    {
      id: 4,
      title: "Dark Slate Shower",
      description: "Contemporary dark slate tiles with LED lighting",
      image: "/images/dark-slate-tile-shower-with-led-lighting-and-moder.jpg",
    },
    {
      id: 5,
      title: "Subway Tile Shower",
      description: "Classic subway tile with warm wood tones",
      image: "/images/classic-subway-tile-shower-with-warm-wood-accents-.jpg",
    },
    {
      id: 6,
      title: "Geometric Pattern Shower",
      description: "Bold geometric tiles with mixed patterns",
      image: "/images/geometric-pattern-tiles-in-shower-with-bold-design.jpg",
    },
    {
      id: 7,
      title: "Spa-Inspired Shower",
      description: "Rainfall showerhead with stone accent wall",
      image: "/images/spa-inspired-shower-with-rainfall-showerhead-and-s.jpg",
    },
    {
      id: 8,
      title: "Industrial Shower",
      description: "Black metal fixtures with cement-finish walls",
      image: "/images/industrial-style-shower-with-black-fixtures-and-co.jpg",
    },
  ];

  const bathtubDesigns = [
    {
      id: 1,
      title: "Freestanding Soaker",
      description: "Elegant white standalone bathtub with chrome feet",
      image: "/images/freestanding-white-soaker-bathtub-with-chrome-feet.jpg",
    },
    {
      id: 2,
      title: "Corner Jetted Bath",
      description: "Luxury corner whirlpool tub with jet system",
      image: "/images/luxury-corner-bathtub-with-jets-and-contemporary-d.jpg",
    },
    {
      id: 3,
      title: "Minimalist Rectangular",
      description: "Sleek rectangular bathtub with clean lines",
      image: "/images/minimalist-rectangular-bathtub-with-clean-lines-an.jpg",
    },
    {
      id: 4,
      title: "Deep Soaking Bath",
      description: "Deep-soaking tub with wooden surround",
      image: "/images/deep-soaking-bathtub-with-wooden-surround-and-spa-.jpg",
    },
    {
      id: 5,
      title: "Japanese Hinoki Bath",
      description: "Wooden soaking tub with natural wood finish",
      image: "/images/japanese-style-wooden-soaking-bathtub-with-natural.jpg",
    },
    {
      id: 6,
      title: "Built-in Soaker",
      description: "Tile-surround built-in bathtub with steps",
      image: "/images/built-in-bathtub-with-tile-surround-and-elegant-st.jpg",
    },
    {
      id: 7,
      title: "Modern Curved Bath",
      description: "Contemporary curved design with integrated heater",
      image: "/images/modern-curved-bathtub-with-integrated-heater-syste.jpg",
    },
    // {
    //   id: 8,
    //   title: "Double-Ended Bath",
    //   description: "Double-ended antique-style bathtub with vintage charm",
    //   image: "/placeholder.svg?height=400&width=500",
    // },
  ];

  const designs = activeTab === "showers" ? showerDesigns : bathtubDesigns;

  return (
    <>
      <section className="py-8 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 justify-center max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("showers")}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "showers"
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Shower Designs
            </button>
            <button
              onClick={() => setActiveTab("bathtubs")}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "bathtubs"
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Bathtub Designs
            </button>
          </div>
        </div>
      </section>
      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designs.map((design) => (
              <div
                key={design.id}
                onClick={() => setSelectedImage(design.image)}
                className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={design.image || "/placeholder.svg"}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {design.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {design.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Fullscreen Lightbox Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Expanded design"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
