"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const GalleryMain = () => {
  const [activeTab, setActiveTab] = useState("bathrooms");
  const [selectedImage, setSelectedImage] = useState(null);

  const bathroomDesigns = [
    {
      id: 1,
      title: "Sleek Transitional Walk-In Shower",
      description:
        "A stunning shower remodel featuring high-gloss subway tile surrounds and integrated shelving",
      image: "/images/bathroom-gallery-1.jpg",
    },
    {
      id: 2,
      title: "Elegant Double Vanity Refresh",
      description:
        "This spacious bathroom features a rich espresso double vanity paired with a creamy stone countertop and warm gold fixtures",
      image: "/images/bathroom-gallery-2.jpg",
    },
    {
      id: 3,
      title: "Minimalist Shaker-Style Bath",
      description:
        "This design features a crisp white Shaker-style vanity paired with a seamless integrated countertop for a clean, streamlined look",
      image: "/images/bathroom-gallery-3.jpg",
    },
    {
      id: 4,
      title: "Modern Spa Retreat with Open Wet Room",
      description:
        "This high-end master bath features a contemporary open-concept wet room with a low-profile walk-in shower and a sculptural freestanding soaking tub",
      image: "/images/bathroom-gallery-4.jpg",
    },
    {
      id: 5,
      title: "Marble & Quartz Master Suite",
      description:
        "This master bathroom features a high-end marble-veined floor and a matching quartz vanity top that brings a cohesive, luxury feel to the space",
      image: "/images/bathroom-gallery-5.jpg",
    },
    {
      id: 6,
      title: "Marble-Inspired Alcove Tub",
      description:
        "This sophisticated tub-to-shower conversion features a classic alcove bathtub encased in large-format, high-gloss marble-patterned porcelain tiles",
      image: "/images/bathroom-gallery-6.jpg",
    },
    {
      id: 7,
      title: "Modern Industrial Luxe Wet Room",
      description:
        "This high-contrast bathroom showcases a bold industrial-modern aesthetic centered around a black-framed Crittall-style walk-in shower",
      image: "/images/bathroom-gallery-7.jpg",
    },
    {
      id: 8,
      title: "Monochrome High-Contrast Master Suite",
      description:
        "This striking bathroom remodel features a bold high-contrast aesthetic, pairing deep espresso-finished Shaker cabinetry with crisp white quartz countertops",
      image: "/images/bathroom-gallery-8.jpg",
    },
    {
      id: 9,
      title: "Organic Cycladic-Style Wet Room",
      description:
        "Inspired by Greek island architecture, this unique bathroom features a seamless, sculptural plaster design with flowing, organic curves and a brilliant white finish",
      image: "/images/bathroom-gallery-9.jpg",
    },
    {
      id: 10,
      title: "Industrial-Modern Geometric Wet Room",
      description:
        "This sleek, modern shower features a bold matte black frameless enclosure that creates a striking architectural focal point",
      image: "/images/bathroom-gallery-10.jpg",
    },
    {
      id: 11,
      title: "Modern Minimalism / Luxury Contemporary",
      description:
        "This high-end master bathroom features a seamless open-concept wet room with floor-to-ceiling marble-veined porcelain tiles",
      image: "/images/bathroom-gallery-11.jpg",
    },
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
      title: "Two-Tone Farmhouse Kitchen with Island",
      description:
        "A bright, open-concept kitchen featuring two-tone cabinetry—white uppers and warm gray lowers—for a modern look",
      image: "/images/kitchen-farmhouse.jpg",
    },
    {
      id: 7,
      title: "Natural Wood Contemporary Kitchen",
      description:
        "A warm, sophisticated kitchen featuring light natural wood flat-panel cabinets for a minimalist, organic modern feel",
      image: "/images/kitchen-wood-contemporary.jpg",
    },
  ];

  const basementDesigns = [
    {
      id: 1,
      title: "Basement Transformation: From Utility to Luxury",
      description:
        "Witness a complete basement overhaul from an unfinished space (metal framing, concrete floor) to a sophisticated, high-end living area",
      image: "/images/basement-luxury.jpg",
    },
    {
      id: 2,
      title: "Modern Open-Concept Basement Renovation",
      description:
        "This expansive basement remodel utilizes a clean, neutral palette of soft blue-grey walls and crisp white trim to maximize the feeling of space and light",
      image: "/images/basement-gallery-2.jpg",
    },
  ];

  const designs =
    activeTab === "bathrooms"
      ? bathroomDesigns
      : // : activeTab === "bathtubs"
        // ? bathtubDesigns
        activeTab === "kitchens"
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
            {["bathrooms", "kitchens", "basements"].map((tab) => (
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
                  <Image
                    src={design.image || "/placeholder.svg"}
                    alt={design.title}
                    fill
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
