"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  ChevronLeft,
  RotateCcw,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import BathroomScene from "./bathroomScene";
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
  projectEmail = "",
}) => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    // Main Container: 100vh and overflow-hidden is crucial for both layouts
    <div className="flex flex-col xl:flex-row h-screen w-full overflow-hidden bg-background">
      {/* --- 1. TOOLBAR (Floating on Mobile, Integrated on Desktop) --- */}
      <div className="absolute xl:fixed top-4 left-4 right-4 xl:right-auto xl:w-[calc(66.66%-2rem)] z-30 flex justify-between items-center pointer-events-none">
        <Button
          variant="secondary"
          className="gap-2 shadow-lg pointer-events-auto backdrop-blur-md bg-white/70 border-none xl:bg-white"
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline font-bold">Back</span>
        </Button>

        <div className="flex gap-2 pointer-events-auto xl:hidden">
          <Button
            variant="secondary"
            className="shadow-lg backdrop-blur-md bg-white/70 border-none"
            onClick={handleResetDesign}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <EmailModal onSave={handleSaveDesign} projectEmail={projectEmail} />
        </div>
      </div>

      {/* --- 2. PREVIEW SECTION (3D Scene) --- */}
      {/* On Mobile: Full screen (absolute) | On Desktop: 2/3 width (relative) */}
      <div className="absolute inset-0 xl:relative xl:w-2/3 h-full z-0 bg-muted">
        <BathroomScene
          selectedProducts={selectedProducts}
          categories={categories}
          plumbing={plumbing}
        />
      </div>

      {/* --- 3. UI SECTION (Floating Drawer on Mobile, Sidebar on Desktop) --- */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 z-20 transition-transform duration-500 ease-in-out pointer-events-none pb-2
          xl:relative xl:w-1/3 xl:h-full xl:translate-y-0 xl:pointer-events-auto xl:pb-0 xl:border-l xl:bg-background xl:flex xl:flex-col
          ${isDrawerOpen ? "translate-y-0" : "translate-y-[calc(100%-35px)]"}
        `}
      >
        {/* DESKTOP HEADER (Only visible on XL) */}
        <div className="hidden xl:flex items-center justify-between p-4 border-b bg-background sticky top-0 z-10">
          <h2 className="font-bold text-lg">Configure Design</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleResetDesign}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
            <EmailModal onSave={handleSaveDesign} projectEmail={projectEmail} />
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-2 xl:px-0 xl:max-w-none flex flex-col items-center xl:items-stretch xl:h-full">
          {/* MOBILE TOGGLE ARROW (Hidden on XL) */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="xl:hidden pointer-events-auto flex items-center justify-center w-12 h-8 mb-1 bg-accent backdrop-blur-md rounded-t-xl shadow-md border-x border-t border-white/40 text-white"
          >
            {isDrawerOpen ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronUp className="h-5 w-5" />
            )}
          </button>

          {/* MAIN UI CONTENT */}
          <div className="pointer-events-auto w-full flex flex-col gap-2 xl:gap-0 xl:h-full xl:overflow-hidden bg-white/10 backdrop-blur-2xl xl:backdrop-blur-none xl:bg-background rounded-[2.5rem] xl:rounded-none p-4 xl:p-0 shadow-2xl xl:shadow-none border border-white/40 xl:border-none">
            {/* CATEGORIES (Pills on mobile, Tabs on desktop) */}
            <div className="flex xl:grid xl:grid-cols-3 gap-2 p-2 xl:p-4 overflow-x-auto xl:overflow-x-visible xl:border-b [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`cursor-pointer relative flex-shrink-0 px-5 py-2.5 xl:px-3 xl:py-2 rounded-full xl:rounded-md text-xs font-bold transition-all shadow-md xl:shadow-none ${
                      isActive
                        ? "bg-primary text-white scale-105 xl:scale-100"
                        : "bg-white/90 xl:bg-muted text-slate-700 hover:bg-muted/80"
                    }`}
                  >
                    {category.label}
                    {!!selectedProducts[category.id] && (
                      <span className="absolute -top-1 -right-1 xl:top-1 xl:right-1 bg-green-500 rounded-full p-0.5 border-2 border-white">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* TIER TOGGLE */}
            <div className="flex justify-center xl:p-4 xl:bg-slate-50 border-y">
              <div className="flex p-1 bg-slate-200/40 xl:bg-slate-200 rounded-full w-full max-w-[280px] xl:max-w-none">
                {["basic", "standard", "premium"].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setActiveTier(tier)}
                    className={`cursor-pointer flex-1 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeTier === tier
                        ? "bg-white shadow-sm text-primary"
                        : "text-slate-500"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* PRODUCT LIST (Horizontal on mobile, Vertical Grid on desktop) */}
            <div className="flex xl:grid xl:grid-cols-3 gap-4 xl:gap-3 p-1 xl:p-4 overflow-x-auto xl:overflow-y-auto snap-x xl:snap-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {currentCategory?.products
                .filter((p) => p.tiers?.[activeTier]?.length > 0)
                .map((product) => {
                  const isSelected =
                    selectedProducts[activeTab]?.productId === product.id &&
                    product.tiers[activeTier]?.includes(
                      selectedProducts[activeTab]?.color,
                    );
                  const currentSelectedColor = isSelected
                    ? selectedProducts[activeTab]?.color
                    : (product.tiers?.[activeTier]?.[0] ?? "");

                  return (
                    <div
                      key={product.id}
                      onClick={() => {
                        if (isSelected) {
                          handleUnselectProduct(product.id);
                        } else {
                          handleProductSelect(product.id, currentSelectedColor);
                          setIsDrawerOpen(false);
                        }
                      }}
                      className={`cursor-pointer flex-shrink-0 w-32 xl:w-auto snap-center p-3 rounded-2xl xl:rounded-lg transition-all border-2 ${
                        isSelected
                          ? "bg-white xl:bg-primary/5 border-primary shadow-xl xl:shadow-none"
                          : "bg-transparent border-transparent xl:border-muted hover:border-primary/30"
                      }`}
                    >
                      <div className="aspect-square rounded-xl xl:rounded-md overflow-hidden mb-2 bg-slate-100">
                        <img
                          src={
                            product.displayByColor?.[currentSelectedColor]
                              ?.productDisplay
                          }
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[10px] xl:text-xs font-bold text-slate-800 truncate leading-tight mb-2">
                        {product.name}
                      </p>

                      <div className="flex gap-1.5 flex-wrap">
                        {product.tiers?.[activeTier]?.map((color) => (
                          <button
                            key={color}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProductSelect(product.id, color);
                            }}
                            className={`cursor-pointer w-3.5 h-3.5 rounded-full border border-slate-300 transition-all ${
                              selectedProducts[activeTab]?.color === color &&
                              isSelected
                                ? "ring-2 ring-primary ring-offset-1 scale-110"
                                : "hover:scale-110"
                            }`}
                            style={{ backgroundColor: color.toLowerCase() }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              <div
                className="hidden xl:block xl:h-[60px] xl:col-span-3 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurePage;
