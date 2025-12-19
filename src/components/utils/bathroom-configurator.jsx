"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { bathroomConfig } from "@/data/bathroom-data";
import { Plus, Minus, Fullscreen, ArrowRightLeft } from "lucide-react";

export default function BathroomConfigurator({
  selectedProducts = {},
  categories = [],
  plumbing = "",
  shape = "",
  isSideAngle = false,
  setIsSideAngle = () => {},
}) {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const filteredBathroomConfig = bathroomConfig.find(
    (bathroom) => bathroom.shape === shape
  );

  const bathroomViewAngleConfig = isSideAngle
    ? filteredBathroomConfig?.config?.sideAngleCam
    : filteredBathroomConfig?.config?.frontAngleCam;

  bathroomViewAngleConfig?.forEach((config) => {
    const img = new Image();
    img.src = config.src;
  });

  const filteredCategories = categories.filter(
    (category) =>
      category.id in selectedProducts &&
      (isSideAngle ? category.angle === "side" : category.angle === "front")
  );

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setContainerSize({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setContainerSize({ width: offsetWidth, height: offsetHeight });
      }
    });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const wrapperStyles = {
    width: containerSize.width || "100%",
    height: containerSize.height || "100%",
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-full w-full relative">
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden"
      >
        {containerSize.width > 0 && containerSize.height > 0 && (
          <TransformWrapper
            minScale={1}
            maxScale={3}
            wheel={{ disabled: true }} // disable mouse wheel
            pinch={{ disabled: false }}
            centerOnInit={true}
            wrapperStyle={wrapperStyles}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                <TransformComponent contentStyle={wrapperStyles}>
                  {/* Base Images */}
                  {bathroomViewAngleConfig?.map((config, index) => (
                    <img
                      key={index}
                      src={config.src}
                      alt={config.alt}
                      className={`absolute inset-0 w-full h-full object-cover transform ${
                        plumbing === "right" ? "scale-x-[-1]" : ""
                      }`}
                      style={{ zIndex: config.zIndex }}
                    />
                  ))}

                  {/* Product Images */}
                  {filteredCategories.map((category, index) => {
                    const specificProduct = category.products.find(
                      (product) =>
                        product.id === selectedProducts[category.id].productId
                    );
                    let imageSrc =
                      specificProduct.displayByColor?.[
                        selectedProducts[category.id].color
                      ].designDisplay || "/";
                    return (
                      <motion.img
                        key={specificProduct.id || index}
                        src={imageSrc}
                        alt={specificProduct.name}
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
                </TransformComponent>

                {/* Zoom Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-5">
                  <button
                    onClick={() => zoomIn()}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 cursor-pointer"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => zoomOut()}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 cursor-pointer"
                  >
                    <Minus className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => resetTransform()}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 mt-1 cursor-pointer"
                  >
                    <Fullscreen className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setIsSideAngle(!isSideAngle)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 mt-1 cursor-pointer"
                  >
                    <ArrowRightLeft className="w-6 h-6" />
                  </button>
                </div>
              </>
            )}
          </TransformWrapper>
        )}
      </div>
    </section>
  );
}
