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

  const kitchenDesigns = [
    {
      id: 1,
      title: "Modern Minimalist Kitchen",
      description:
        "Sleek white cabinetry with matte black hardware and quartz countertops",
      image: "/images/kitchen-modern-minimalist.jpg",
    },
    {
      id: 2,
      title: "Modern Stone-Finish Kitchen",
      description:
        "A sleek minimalist kitchen featuring matching stone-textured countertops, open shelving, and a built-in sink area",
      image: "/images/kitchen-contemporary-grey.jpg",
    },
    {
      id: 3,
      title: "Sleek Navy Shaker Kitchen with White Quartz",
      description:
        "Experience the perfect blend of classic and contemporary with this stunning U-shaped kitchen featuring deep Navy Blue Shaker Cabinets and pristine White Quartz Countertops",
      image: "/images/kitchen-white-quartz.jpg",
    },
    {
      id: 4,
      title: "Compact Modern Navy Kitchen",
      description:
        "This efficient corner kitchen showcases Navy Shaker Cabinets paired with a classic white subway tile backsplash and sleek white countertops",
      image: "/images/kitchen-compact-modern.jpg",
    },
    {
      id: 5,
      title: "Crisp White Quartz Kitchen Remodel",
      description:
        "A bright and open design featuring floor-to-ceiling white shaker cabinets and luxurious white quartz countertops with subtle veining",
      image: "/images/kitchen-crisp-white.jpg",
    },
    {
      id: 6,
      title: "Modern Contrast Sink Corner",
      description:
        "This detailed look highlights a sleek contrast design featuring crisp white shaker cabinets and quartz countertops",
      image: "/images/kitchen-contrast-sink.jpg",
    },
    {
      id: 7,
      title: "Two-Tone Farmhouse Kitchen with Island",
      description:
        "A bright, open-concept kitchen featuring two-tone cabinetry—white uppers and warm gray lowers—for a modern look",
      image: "/images/kitchen-farmhouse.jpg",
    },
    {
      id: 8,
      title: "Natural Wood Contemporary Kitchen",
      description:
        "A warm, sophisticated kitchen featuring light natural wood flat-panel cabinets for a minimalist, organic modern feel",
      image: "/images/kitchen-wood-contemporary.jpg",
    },
  ];

  const basementDesigns = [
    {
      id: 1,
      title: "Contemporary Open-Concept Basement Finish",
      description:
        "Transform your basement into a stylish living area with this contemporary open-concept design",
      image: "/images/basement-open-concept.jpg",
    },
    {
      id: 2,
      title: "Basement Transformation: From Utility to Luxury",
      description:
        "Witness a complete basement overhaul from an unfinished space (metal framing, concrete floor) to a sophisticated, high-end living area",
      image: "/images/basement-luxury.jpg",
    },
    {
      id: 3,
      title: "Warm Modern Basement Entertainment",
      description:
        "A luxurious basement remodel centered around a stunning custom built-in media center with backlighting and natural wood cabinets",
      image: "/images/basement-modern.png",
    },
    {
      id: 4,
      title: "Fun & Functional Basement Playroom",
      description:
        "This basement area is finished as a bright, multi-purpose playroom with a vibrant geometric accent wall and cozy neutral carpet",
      image: "/images/basement-playroom.png",
    },
    {
      id: 5,
      title: "Minimalist Basement Corridor & Flex Space",
      description:
        "This finished basement area features a minimalist design with textured, neutral walls and ceiling, contrasting natural wood doors and flooring",
      image: "/images/basement-office.png",
    },
    {
      id: 6,
      title: "Bright Basement Office and Storage",
      description:
        "A clean and contemporary basement finish transforming the space into a functional home office and storage solution",
      image: "/images/basement-bright-office.jpg",
    },
    {
      id: 7,
      title: "Mid-Century Modern Basement Nook",
      description:
        "A warmly finished basement space featuring rich wood paneling on the staircase and dark, exposed ceiling beams for a rustic-modern feel",
      image: "/images/basement-mid-century.jpg",
    },
    {
      id: 8,
      title: "Modern Basement with Bar and Fireplace",
      description:
        "A bright and comprehensive basement finish featuring an open-concept living area",
      image: "/images/basement-bar-fireplace.jpeg",
    },
  ];

  const designs =
    activeTab === "showers"
      ? showerDesigns
      : activeTab === "bathtubs"
      ? bathtubDesigns
      : activeTab === "kitchens"
      ? kitchenDesigns
      : basementDesigns;

  return (
    <>
      <div className="py-4 text-xl md:text-2xl font-bold text-center">
        Select a Category from our Inspiration Gallery
      </div>
      <section className="sticky top-[8.5rem] md:top-[9.5rem] z-40 bg-white/90 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto px-4">
          {/* Scrollable Tabs */}
          <div className="flex gap-2 justify-start md:justify-center overflow-x-auto scrollbar-hide">
            {["showers", "bathtubs", "kitchens", "basements"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap flex-shrink-0 py-2 px-4 rounded-md font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
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
