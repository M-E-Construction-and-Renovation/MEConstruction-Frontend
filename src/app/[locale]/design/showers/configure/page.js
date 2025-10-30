"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import categories from "@/data/shower-data";
import ConfigurePage from "@/components/utils/congifure-page";

function ShowerDesignTool() {
  const searchParams = useSearchParams();

  const plumbing = searchParams.get("plumbing") || "left";
  const shape = searchParams.get("shape") || "unknown";

  console.log(plumbing);
  console.log(shape);

  const [activeTab, setActiveTab] = useState("shower-enclosures");
  const [activeTier, setActiveTier] = useState("basic");
  const [selectedProducts, setSelectedProducts] = useState({});

  const handleResetDesign = () => setSelectedProducts({});
  const handleSaveDesign = () => alert("Design saved successfully!");
  const handleShareDesign = () =>
    alert("Design shared! Link copied to clipboard.");

  const currentCategory =
    categories.find((c) => c.id === activeTab) || "shower-enclosures";

  const handleCategoryChange = (categoryId) => {
    setActiveTab(categoryId);
    const selectedInCategory = selectedProducts[categoryId];

    if (selectedInCategory) {
      const category = categories.find((c) => c.id === categoryId);
      const product = category?.products.find(
        (p) => p.id === selectedInCategory.productId
      );

      if (product) {
        setActiveTier(product.tier);
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
    />
  );
}

export default function ShowerDesignToolWrapper() {
  return (
    <Suspense fallback={<div>Loading configurator...</div>}>
      <ShowerDesignTool />
    </Suspense>
  );
}
