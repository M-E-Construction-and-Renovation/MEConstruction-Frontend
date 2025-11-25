"use client";

import { motion } from "framer-motion";
import { bathroomConfig } from "@/data/bathroom-data";

export default function BathroomConfigurator({
  selectedProducts = {},
  categories = [],
  plumbing = "",
  shape = "",
}) {
  const filteredBathroomConfig = bathroomConfig.find(
    (bathroom) => bathroom.plumbing === plumbing && bathroom.shape === shape
  );

  const filteredCategories = categories.filter(
    (category) => category.id in selectedProducts
  );

  return (
    <section className="flex flex-col md:flex-row items-center justify-center">
      {/* 🖼️ Configurator Preview */}
      <div className="">
        {/* Base */}

        {filteredBathroomConfig?.config?.map((config, index) => (
          <img
            key={index}
            src={config.src}
            alt={config.alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: config.zIndex }}
          />
        ))}

        {/* Products */}
        {filteredCategories.map((category, index) => {
          const specificProduct = category.products.find(
            (product) => product.id === selectedProducts[category.id].productId
          );

          let imageSrc =
            specificProduct.displayByColor?.[
              selectedProducts[category.id].color
            ].designDisplay || "/";
          let imageAlt = specificProduct.name;

          return (
            <motion.img
              key={specificProduct.id || index}
              src={imageSrc}
              alt={imageAlt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 w-full h-full object-cover transform ${
                plumbing === "right" ? "scale-x-[-1]" : ""
              }`}
              style={{ zIndex: category.zIndex }}
            />
          );
        })}
      </div>
    </section>
  );
}
