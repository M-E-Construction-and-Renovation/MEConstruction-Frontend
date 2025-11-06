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

  const transformations =
    activeTab === "showers" ? showerTransformations : bathtubTransformations;
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
      <section className="py-8 bg-white border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 justify-center max-w-md mx-auto">
            <button
              onClick={() => {
                setActiveTab("showers");
                setCurrentIndex(0);
              }}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "showers"
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Showers
            </button>
            <button
              onClick={() => {
                setActiveTab("bathtubs");
                setCurrentIndex(0);
              }}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "bathtubs"
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Bathtubs
            </button>
          </div>
        </div>
      </section>
      {/* Main Transformation Viewer */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              {current.title}
            </h2>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Before */}
                <div className="relative">
                  <div className="relative h-96 md:h-full overflow-hidden bg-gray-200">
                    <img
                      src={current.before || "/images/luxury-bathtub.png"}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg font-bold">
                      BEFORE
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="relative h-96 md:h-full overflow-hidden bg-gray-200">
                    <img
                      src={current.after || "/images/luxury-bathtub.png"}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
                Previous
              </button>

              <div className="text-center">
                <p className="text-lg font-semibold text-primary">
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
                className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold cursor-pointer"
              >
                Next
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Transformation Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            All Transformations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformations.map((transformation, i) => (
              <div
                key={transformation.id}
                onClick={() => openModal(i)}
                className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
              >
                <div className="grid grid-cols-2 gap-0">
                  <div className="h-auto overflow-hidden bg-gray-200">
                    <img
                      src={transformation.before || "/placeholder.svg"}
                      alt="Before"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-auto overflow-hidden bg-gray-200">
                    <img
                      src={transformation.after || "/placeholder.svg"}
                      alt="After"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-primary group-hover:text-accent transition-colors">
                    {transformation.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
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
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-5xl px-6"
            >
              <img
                src={showingAfter ? current.after : current.before}
                alt={showingAfter ? "After" : "Before"}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                {!showingAfter && (
                  <button
                    onClick={() => setShowingAfter(true)}
                    className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition"
                  >
                    See After
                  </button>
                )}
                {showingAfter && (
                  <button
                    onClick={() => setShowingAfter(false)}
                    className="px-6 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
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
