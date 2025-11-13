"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const BeforeAfterMain = () => {
  const [activeTab, setActiveTab] = useState("showers");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showingAfter, setShowingAfter] = useState(false);

  const showerTransformations = [
    {
      id: 1,
      title: "Outdated Tile to Modern Glass",
      before: "/images/old-bathroom-shower-before.jpg",
      after: "/images/modern-luxury-shower-after.jpg",
    },
    {
      id: 2,
      title: "Cramped to Spacious",
      before: "/images/bathtub-before-conversion.jpg",
      after: "/images/spacious-shower-after-conversion.jpg",
    },
    {
      id: 3,
      title: "Worn Out to Elegant",
      before: "/images/standard-shower-before.jpg",
      after: "/images/accessible-walk-in-shower-after.jpg",
    },
  ];

  const bathtubTransformations = [
    {
      id: 1,
      title: "Stained Tub to Pristine White",
      before: "/images/bathroom-remodel-before.jpg",
      after: "/images/bathroom-remodel-after.jpg",
    },
    {
      id: 2,
      title: "Cracked to Elegant Soaker",
      before: "/images/bathtub-solutions-before-1.jpg",
      after: "/images/bathtub-solutions-after-1.png",
    },
  ];

  const kitchenTransformations = [
    {
      id: 1,
      title: "Modern Kitchen Upgrade",
      before: "/images/kitchen-solutions-before.jpg",
      after: "/images/kitchen-solutions-after.jpg",
    },
    {
      id: 2,
      title: "Functional Layout Transformation",
      before: "/images/kitchen-actual-before.jpg",
      after: "/images/kitchen-actual-after.jpg",
    },
  ];

  const basementTransformations = [
    {
      id: 1,
      title: "From Raw Space to Elegant Living",
      before: "/images/basement-actual-before.jpg",
      after: "/images/basement-actual-after.png",
    },
    {
      id: 2,
      title: "Functional Layout Transformation",
      before: "/images/basement-actual-before1.jpg",
      after: "/images/basement-actual-after1.jpg",
    },
  ];

  const transformations =
    activeTab === "showers"
      ? showerTransformations
      : activeTab === "bathtubs"
      ? bathtubTransformations
      : activeTab === "kitchens"
      ? kitchenTransformations
      : basementTransformations;

  const current = transformations[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + transformations.length) % transformations.length
    );
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowingAfter(false);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="py-4 text-2xl font-bold text-center">
        Select a Category from our Before & After Gallery
      </div>
      {/* ---- TAB SECTION ---- */}
      <section className="sticky top-[7rem] md:top-[8rem] z-40 bg-white/90 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 justify-start md:justify-center overflow-x-auto scrollbar-hide">
            {["showers", "bathtubs", "kitchens", "basements"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentIndex(0);
                }}
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

      {/* ---- MAIN TRANSFORMATION VIEWER ---- */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-primary mb-4">
              {current.title}
            </h2>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={current.before || "/placeholder.svg"}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-gray-800 text-white px-3 py-1 rounded-md font-bold text-sm">
                    BEFORE
                  </div>
                </div>

                {/* After */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={current.after || "/placeholder.svg"}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-md font-bold text-sm">
                    AFTER
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition font-semibold"
              >
                <ChevronLeft className="h-5 w-5" /> Previous
              </button>

              <div className="text-center flex-1">
                <p className="text-base font-semibold text-primary">
                  {currentIndex + 1} of {transformations.length}
                </p>
                <div className="flex gap-2 mt-2 justify-center">
                  {transformations.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? "bg-accent w-8"
                          : "bg-gray-300 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition font-semibold"
              >
                Next <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- TRANSFORMATION GRID ---- */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary mb-10">
            All Transformations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {transformations.map((t, i) => (
              <div
                key={t.id}
                onClick={() => openModal(i)}
                className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
              >
                <div className="grid grid-cols-2">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                    <img
                      src={t.before || "/placeholder.svg"}
                      alt="Before"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                    <img
                      src={t.after || "/placeholder.svg"}
                      alt="After"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-primary text-sm sm:text-base group-hover:text-accent transition-colors">
                    {t.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- MODAL ---- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-accent transition"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              key={showingAfter ? current.after : current.before}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-5xl"
            >
              <img
                src={showingAfter ? current.after : current.before}
                alt={showingAfter ? "After" : "Before"}
                className="w-full h-auto max-h-[85vh] object-cover rounded-lg"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                {!showingAfter ? (
                  <button
                    onClick={() => setShowingAfter(true)}
                    className="px-6 py-2 bg-accent text-accent-foreground rounded-md font-semibold hover:bg-accent/90 transition"
                  >
                    See After
                  </button>
                ) : (
                  <button
                    onClick={() => setShowingAfter(false)}
                    className="px-6 py-2 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 transition"
                  >
                    Back to Before
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
