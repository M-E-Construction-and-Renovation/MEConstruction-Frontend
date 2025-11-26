"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import allCategories from "@/data/products";
import ConfigurePage from "@/components/utils/congifure-page";

function DesignTool() {
  const searchParams = useSearchParams();
  const plumbing = searchParams.get("plumbing") || "left";

  const shape = "tub";

  const [activeTab, setActiveTab] = useState("tubFronts");
  const [activeTier, setActiveTier] = useState("basic");
  const [selectedProducts, setSelectedProducts] = useState({});

  const handleResetDesign = () => setSelectedProducts({});
  const handleSaveDesign = () => alert("Design saved successfully!");
  const handleShareDesign = () =>
    alert("Design shared! Link copied to clipboard.");

  const categories = allCategories.filter((category) =>
    category.shapesAllowed.includes(shape)
  );

  const currentCategory =
    categories.find((c) => c.id === activeTab) || "tubFronts";

  const handleCategoryChange = (categoryId) => {
    setActiveTab(categoryId);
    const selectedInCategory = selectedProducts[categoryId];

    if (selectedInCategory) {
      const category = categories.find((c) => c.id === categoryId);
      const product = category?.products.find(
        (p) => p.id === selectedInCategory.productId
      );

      if (product) {
        // Determine the tier based on the selected color
        const selectedColor = selectedInCategory.color;
        let tierFound = "basic"; // fallback

        for (const [tierName, colors] of Object.entries(product.tiers || {})) {
          if (colors.includes(selectedColor)) {
            tierFound = tierName;
            break;
          }
        }

        setActiveTier(tierFound);
      }
    } else {
      setActiveTier("basic");
    }
  };

  const handleProductSelect = (productId, color) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [activeTab]: { productId, color },
    }));
  };

  const handleUnselectProduct = (productId) => {
    setSelectedProducts((prev) => {
      const selected = prev[activeTab];

      // If no selected product for this tab, do nothing
      if (!selected) return prev;

      // If the product matches, remove the key from object
      if (selected.productId === productId) {
        const { [activeTab]: _, ...rest } = prev;
        return rest;
      }

      // If it doesn't match, return previous state
      return prev;
    });
  };

  return (
    <ConfigurePage
      handleResetDesign={handleResetDesign}
      handleSaveDesign={handleSaveDesign}
      handleShareDesign={handleShareDesign}
      categories={categories}
      activeTab={activeTab}
      selectedProducts={selectedProducts}
      handleCategoryChange={handleCategoryChange}
      currentCategory={currentCategory}
      activeTier={activeTier}
      setActiveTier={setActiveTier}
      handleProductSelect={handleProductSelect}
      handleUnselectProduct={handleUnselectProduct}
      plumbing={plumbing}
      shape={shape}
    />
  );
}

export default function DesignToolWrapper() {
  return (
    <Suspense fallback={<div>Loading configurator...</div>}>
      <DesignTool />
    </Suspense>
  );
}
