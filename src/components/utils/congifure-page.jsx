"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ChevronLeft, RotateCcw, Check } from "lucide-react";
import BathroomConfigurator from "./bathroom-configurator";
import EmailModal from "./email-modal";

const ConfigurePage = ({
  handleResetDesign = () => {},
  handleSaveDesign = () => {},
  categories = [],
  activeTab = "",
  selectedProducts = {},
  handleCategoryChange = () => {},
  currentCategory = "",
  activeTier = "",
  setActiveTier = () => {},
  handleProductSelect = () => {},
  handleUnselectProduct = () => {},
  plumbing = "",
  shape = "",
  projectEmail = "",
}) => {
  const router = useRouter();

  const [isSideAngle, setIsSideAngle] = useState(false);

  const [isInverted, setIsInverted] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Main Content */}

      <div className="flex-1 flex flex-col xl:flex-row overflow-auto xl:overflow-hidden">
        {/* Toolbar Mobile*/}
        <div className="flex xl:hidden flex-wrap items-center justify-between gap-2 p-1 border-b bg-background sticky top-0 z-10">
          <Button
            variant="ghost"
            className="gap-2 flex-shrink-0"
            onClick={() => router.back()}
          >
            <ChevronLeft className="h-4 w-4" />
            Back to previous page
          </Button>
          <div className="flex flex-wrap gap-2 justify-center ">
            <Button
              variant="outline"
              className="gap-2 bg-transparent"
              onClick={handleResetDesign}
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Reset</span>
            </Button>

            <EmailModal onSave={handleSaveDesign} projectEmail={projectEmail} />
          </div>
        </div>

        {/* Preview Section */}
        <div className="w-full xl:w-2/3 flex items-center justify-center bg-muted relative">
          <div className="relative w-full aspect-[4/3] xl:h-[calc(100vh-100px)] flex items-center justify-center">
            <BathroomConfigurator
              selectedProducts={selectedProducts}
              categories={categories}
              plumbing={plumbing}
              shape={shape}
              isSideAngle={isSideAngle}
              setIsSideAngle={setIsSideAngle}
              isInverted={isInverted}
              setIsInverted={setIsInverted}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full xl:w-1/3 flex flex-col border-t xl:border-t-0 xl:border-l bg-background">
          {/* Toolbar */}
          <div className="hidden xl:flex flex-wrap items-center justify-between gap-2 p-3 border-b bg-background sticky top-0 z-10">
            <Button
              variant="ghost"
              className="gap-2 flex-shrink-0"
              onClick={() => router.back()}
            >
              <ChevronLeft className="h-4 w-4" />
              Back to previous page
            </Button>
            <div className="flex flex-wrap gap-2 justify-center ">
              <Button
                variant="outline"
                className="gap-2 bg-transparent"
                onClick={handleResetDesign}
              >
                <RotateCcw className="h-4 w-4" />
                <span className="hidden sm:inline">Reset</span>
              </Button>

              <EmailModal
                onSave={handleSaveDesign}
                projectEmail={projectEmail}
              />
            </div>
          </div>

          {/* Tabs */}

          <div className="p-3 border-b grid grid-cols-3 gap-2 shrink-0 overflow-x-auto">
            {categories.map((category) => {
              const hasSelectedProduct = !!selectedProducts[category.id];

              const switchToSideAngle = category?.initialAngle === "side";

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    handleCategoryChange(category.id);
                    setIsSideAngle(switchToSideAngle);
                  }}
                  className={`relative px-3 py-2 rounded text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category.label}
                  {hasSelectedProduct && (
                    <span className="absolute -top-2 -right-2 text-xs font-bold p-0.5 rounded-full bg-success-background border-2 border-success-primary text-success-primary">
                      <Check className="h-4 w-4" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tier Tabs */}

          <div className="p-3 border-b grid grid-cols-3 gap-2 shrink-0 overflow-x-auto">
            {["basic", "standard", "premium"].map((tier) => {
              const tierProducts =
                currentCategory?.products.filter((p) => p.tiers[tier]) || [];

              const hasSelectedInTier =
                selectedProducts[activeTab]?.productId &&
                selectedProducts[activeTab]?.color &&
                tierProducts.some(
                  (p) =>
                    p.tiers[tier].includes(selectedProducts[activeTab].color) &&
                    p.id === selectedProducts[activeTab].productId
                );

              return (
                <button
                  key={tier}
                  onClick={() => setActiveTier(tier)}
                  className={`relative px-4 py-2 rounded text-sm font-medium transition-colors capitalize flex-1 ${
                    activeTier === tier
                      ? "bg-primary text-primary-foreground"
                      : hasSelectedInTier
                      ? "bg-success-background/20 border-2 border-success-primary text-success-primary"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {tier}
                  {hasSelectedInTier && (
                    <span className="absolute -top-2 -right-2 bg-success-background text-success-primary border-2 border-success-primary text-xs font-bold px-2 py-0.5 rounded-full">
                      Selected
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Product List */}

          <div className="flex xl:block overflow-x-auto xl:overflow-y-auto p-3">
            <div className="flex gap-3 xl:grid xl:grid-cols-3">
              {currentCategory?.products
                .filter((product) => {
                  if (product.tiers?.[activeTier]?.length > 0) return true;
                  return false;
                })
                .map((product) => {
                  const isSelected =
                    selectedProducts[activeTab]?.productId === product.id &&
                    product.tiers[activeTier]?.includes(
                      selectedProducts[activeTab]?.color
                    );

                  const defaultColor = product.tiers?.[activeTier]?.[0] ?? "";

                  let imgSrc = isSelected
                    ? product.displayByColor?.[
                        selectedProducts[activeTab]?.color
                      ]?.productDisplay
                    : product.displayByColor?.[defaultColor]?.productDisplay;

                  return (
                    <div
                      key={product.id}
                      onClick={() =>
                        isSelected
                          ? handleUnselectProduct(product.id)
                          : handleProductSelect(product.id, defaultColor)
                      }
                      className={`min-w-[160px] max-w-[160px] flex-shrink-0 xl:min-w-0 xl:max-w-none xl:w-auto p-3 rounded-lg cursor-pointer transition-all border-2 ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <div className="relative w-full aspect-square mb-2 rounded overflow-hidden bg-gradient-to-br from-transparent via-black/20 to-transparent">
                        <img
                          src={imgSrc}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h4 className="font-semibold text-sm mb-2">
                        {product.name}
                      </h4>

                      <div className="flex gap-1 flex-wrap">
                        {(
                          product.tiers?.[activeTier] ||
                          Object.keys(product.staticSrc || {})
                        ).map((color) => (
                          <button
                            key={color}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProductSelect(product.id, color);
                            }}
                            className={`px-2 py-1 text-xs rounded transition-colors ${
                              selectedProducts[activeTab]?.color === color &&
                              isSelected
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted hover:bg-muted/80"
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurePage;
