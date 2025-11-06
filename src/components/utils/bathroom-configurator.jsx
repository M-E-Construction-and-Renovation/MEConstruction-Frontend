"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const bathroomOptions = {
  base: "/configurator/base.png",
  showers: {
    none: null,
    modern: "/configurator/shower.png",
  },
  tiles: {
    blue: "/configurator/tiles-blue.png",
    gray: "/configurator/tiles-gray.png",
  },
};

export default function BathroomConfigurator({
  selectedProducts = [],
  plumbing = "",
  shape = "",
}) {
  const [selectedShower, setSelectedShower] = useState("none");
  const [selectedTiles, setSelectedTiles] = useState("blue");

  return (
    <section className="flex flex-col md:flex-row items-center justify-center">
      {/* 🖼️ Configurator Preview */}
      <div className="">
        {/* Base */}
        <img
          src={`/configurator/bathroom-${shape}-${plumbing}.png`}
          alt="Base bathroom"
          className="absolute inset-0 w-full h-full"
        />

        {/* Tiles Layer */}
        {selectedProducts?.tubFronts && (
          <motion.img
            key={selectedProducts.tubFronts.productId}
            src={`/configurator/tub-fronts-${selectedProducts.tubFronts.productId}-${selectedProducts.tubFronts.color}.png`}
            alt="Tub front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full"
          />
        )}

        {/* Shower Layer */}
        {selectedProducts?.faucets && (
          <motion.img
            key={selectedProducts.faucets.productId}
            src={`/configurator/faucets-${selectedProducts.faucets.productId}-${selectedProducts.faucets.color}.png`}
            alt="Faucet"
            // // initial={{ opacity: 0, y: 10 }}
            // initial={{ opacity: 0 }}
            // // animate={{ opacity: 1, y: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>

      {/* ⚙️ Controls
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Tile Color</h3>
          <div className="flex gap-2">
            {Object.keys(bathroomOptions.tiles).map((color) => (
              <button
                key={color}
                onClick={() => setSelectedTiles(color)}
                className={`px-3 py-1 rounded border ${
                  selectedTiles === color
                    ? "bg-accent text-white"
                    : "bg-background"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Shower</h3>
          <div className="flex gap-2">
            {Object.keys(bathroomOptions.showers).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedShower(type)}
                className={`px-3 py-1 rounded border ${
                  selectedShower === type
                    ? "bg-accent text-white"
                    : "bg-background"
                }`}
              >
                {type === "none" ? "None" : type}
              </button>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
