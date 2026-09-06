"use client";

import { Suspense, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  PackageOpen,
  RotateCcw,
  SwitchCamera,
} from "lucide-react";
import BathroomScene from "./bathroomScene";
import EmailModal from "./email-modal";
import CategoryTabs from "../design/configurator/category-tabs";
import SegmentedControl from "../design/configurator/segmented-control";
import ProductCard from "../design/configurator/product-card";

const TIERS = [
  { label: "Basic", value: "basic" },
  { label: "Standard", value: "standard" },
  { label: "Premium", value: "premium" },
];

const FLIP_OPTIONS = [
  { label: "Left", value: false },
  { label: "Right", value: true },
];

function LoadingPanel({ message }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div
        aria-hidden="true"
        className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-border border-t-accent"
      />
      <p className="text-base text-muted-foreground">{message}</p>
    </div>
  );
}

/**
 * Configurator shell.
 *
 * Was a single 341-line component rendering the toolbar, the 3D scene, the
 * drawer, the category tabs, the tier switch, the flip/placement switches and
 * the product grid — with the variant controls built inside an inline IIFE in
 * the middle of the JSX. Split into named pieces so each one can be read, and
 * so the grid can be memoised independently of the scene.
 *
 * The palette here was almost entirely off-system: slate-200/500/700/800,
 * gray-700, green-500, blue-600 and raw white, none of which exist in the
 * design tokens. Now on the same tokens as the rest of the site.
 */
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
  handleFlipProduct = () => {},
  handlePlacementChange = () => {},
  plumbing = "",
  projectEmail = "",
}) => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [mode, setMode] = useState("orbit"); // 'orbit' | 'fpv'

  const selectedShape = selectedProducts["tubFronts/showerPans"]?.shape ?? null;
  const selection = selectedProducts[activeTab];

  const activeProduct = useMemo(
    () =>
      currentCategory?.products?.find((p) => p.id === selection?.productId) ??
      null,
    [currentCategory, selection?.productId]
  );

  /**
   * Filtering used to run inside the render map with a bare `return;` for
   * non-matching products, so the list iterated everything and emitted
   * undefined holes. Computed once here instead, which also gives the empty
   * state something real to test.
   */
  const visibleProducts = useMemo(() => {
    const products = currentCategory?.products ?? [];

    return products.filter((product) => {
      if (!(product.tiers?.[activeTier]?.length > 0)) return false;

      const shapeConstrained =
        currentCategory.id !== "tubFronts/showerPans" &&
        selectedShape &&
        product.shape?.length > 0;

      if (shapeConstrained && !product.shape.includes(selectedShape)) {
        return false;
      }
      return true;
    });
  }, [currentCategory, activeTier, selectedShape]);

  const selectedCount = Object.keys(selectedProducts).length;

  // Stable identities so the memoised cards do not re-render on every change.
  const onSelect = useCallback(
    (productId, color, shape) => {
      handleProductSelect(productId, color, shape);
      setIsDrawerOpen(false);
    },
    [handleProductSelect]
  );

  const onSelectColor = useCallback(
    (productId, color) => {
      handleProductSelect(productId, color);
      setIsDrawerOpen(false);
    },
    [handleProductSelect]
  );

  const onUnselect = useCallback(
    (productId) => handleUnselectProduct(productId),
    [handleUnselectProduct]
  );

  /**
   * Rebuilt inline in the JSX on every render, which handed SegmentedControl a
   * new array and a new callback each time and made its memo() useless.
   */
  const placementOptions = useMemo(
    () =>
      Object.keys(activeProduct?.positionOptions ?? {}).map((opt) => ({
        label: opt,
        value: opt,
      })),
    [activeProduct]
  );

  /**
   * 240px suits the two- and three-option products (toilets, vanity shelves,
   * grab bars) and is what shipped. Wall niches offer five placements, which do
   * not fit 240px at any density, so those take the full row instead.
   */
  const placementClass =
    placementOptions.length > 3 ? "w-full" : "w-full max-w-[240px]";

  const onFlip = useCallback(
    (v) => {
      handleFlipProduct(v);
      setIsDrawerOpen(false);
    },
    [handleFlipProduct]
  );

  const onPlacement = useCallback(
    (v) => {
      handlePlacementChange(v);
      setIsDrawerOpen(false);
    },
    [handlePlacementChange]
  );

  return (
    <Suspense fallback={<LoadingPanel message="Loading design tool…" />}>
      <div className="flex h-dvh w-full flex-col overflow-hidden bg-background xl:flex-row">
        {/* --- Scene toolbar --- */}
        <div className="pointer-events-none absolute top-4 right-4 left-4 z-30 flex items-center justify-between gap-2 xl:fixed xl:right-auto xl:w-[calc(66.66%-2rem)]">
          <Button
            variant="secondary"
            className="pointer-events-auto gap-2 border border-border bg-background/85 backdrop-blur-md"
            onClick={() => router.back()}
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
            <span className="hidden font-semibold sm:inline">Back</span>
          </Button>

          <div className="pointer-events-auto flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              aria-label={
                mode === "orbit"
                  ? "Switch to walk-through view"
                  : "Switch to orbit view"
              }
              aria-pressed={mode === "fpv"}
              className="border border-border bg-background/85 backdrop-blur-md"
              onClick={() => setMode(mode === "orbit" ? "fpv" : "orbit")}
            >
              <SwitchCamera aria-hidden="true" className="h-5 w-5" />
            </Button>

            <div className="flex gap-2 xl:hidden">
              <Button
                variant="secondary"
                size="icon"
                aria-label="Reset design"
                className="border border-border bg-background/85 backdrop-blur-md"
                onClick={handleResetDesign}
              >
                <RotateCcw aria-hidden="true" className="h-4 w-4" />
              </Button>
              <EmailModal
                onSave={handleSaveDesign}
                projectEmail={projectEmail}
              />
            </div>
          </div>
        </div>

        {/* --- 3D scene --- */}
        <div className="absolute inset-0 z-0 h-full bg-muted xl:relative xl:w-2/3">
          <BathroomScene
            selectedProducts={selectedProducts}
            categories={categories}
            plumbing={plumbing}
            mode={mode}
          />
        </div>

        {/* --- Picker: drawer on mobile, sidebar on desktop --- */}
        <div
          className={`pointer-events-none absolute right-0 bottom-0 left-0 z-20 pb-[env(safe-area-inset-bottom,0.5rem)] transition-transform duration-500 ease-in-out xl:pointer-events-auto xl:relative xl:flex xl:h-full xl:w-1/3 xl:translate-y-0 xl:flex-col xl:border-l xl:border-border xl:bg-background xl:pb-0 ${
            isDrawerOpen ? "translate-y-0" : "translate-y-[calc(100%-45px)]"
          }`}
        >
          {/* Desktop header */}
          <div className="rule-hairline sticky top-0 z-10 hidden items-center justify-between gap-3 border-b bg-background p-4 xl:flex">
            <div className="min-w-0">
              <h2 className="type-display text-lg text-primary">
                Design your bathroom
              </h2>
              <p className="type-eyebrow mt-1 text-muted-foreground">
                {selectedCount === 0
                  ? "Nothing selected yet"
                  : `${selectedCount} item${selectedCount === 1 ? "" : "s"} selected`}
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetDesign}
                className="gap-2"
              >
                <RotateCcw aria-hidden="true" className="h-4 w-4" /> Reset
              </Button>
              <EmailModal
                onSave={handleSaveDesign}
                projectEmail={projectEmail}
              />
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-2 xl:h-full xl:max-w-none xl:items-stretch xl:px-0">
            {/* Mobile drawer handle */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              aria-expanded={isDrawerOpen}
              aria-controls="configurator-panel"
              aria-label={isDrawerOpen ? "Collapse options" : "Expand options"}
              className="pointer-events-auto mb-1 flex h-8 w-12 items-center justify-center rounded-t-xl bg-accent text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:hidden"
            >
              {isDrawerOpen ? (
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
              ) : (
                <ChevronUp aria-hidden="true" className="h-5 w-5" />
              )}
            </button>

            <div
              id="configurator-panel"
              className="pointer-events-auto flex w-full flex-col gap-2 rounded-t-2xl border border-border bg-background/95 backdrop-blur-xl xl:h-full xl:gap-0 xl:overflow-hidden xl:rounded-none xl:border-none xl:bg-background xl:backdrop-blur-none"
            >
              <CategoryTabs
                categories={categories}
                activeTab={activeTab}
                selectedProducts={selectedProducts}
                onChange={handleCategoryChange}
              />

              <div className="rule-hairline border-y px-3 py-3 xl:px-4">
                <SegmentedControl
                  label="Product tier"
                  options={TIERS}
                  value={activeTier}
                  onChange={setActiveTier}
                />
              </div>

              {/* Variant controls, only when the selected product supports them */}
              {(activeProduct?.allowFlip || activeProduct?.allowPosition) && (
                <div className="rule-hairline flex flex-wrap justify-center gap-3 border-b px-3 py-3 xl:px-4">
                  {activeProduct?.allowFlip && (
                    <SegmentedControl
                      label="Orientation"
                      options={FLIP_OPTIONS}
                      value={selection?.flipped ?? false}
                      onChange={onFlip}
                      className="w-full max-w-[200px]"
                    />
                  )}

                  {activeProduct?.allowPosition && (
                    <SegmentedControl
                      label="Placement"
                      options={placementOptions}
                      value={selection?.placement ?? "center"}
                      onChange={onPlacement}
                      className={placementClass}
                    />
                  )}
                </div>
              )}

              {/* Products */}
              {visibleProducts.length === 0 ? (
                <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
                  <PackageOpen
                    aria-hidden="true"
                    className="h-7 w-7 text-muted-foreground"
                    strokeWidth={1.5}
                  />
                  <p className="text-sm text-muted-foreground">
                    Nothing in this category at the{" "}
                    <span className="font-semibold text-primary">
                      {activeTier}
                    </span>{" "}
                    tier
                    {selectedShape ? " for the layout you picked" : ""}. Try
                    another tier.
                  </p>
                </div>
              ) : (
                <div className="flex snap-x gap-3 overflow-x-auto p-2 [scrollbar-width:none] xl:grid xl:grid-cols-3 xl:snap-none xl:overflow-y-auto xl:p-4 [&::-webkit-scrollbar]:hidden">
                  {visibleProducts.map((product) => {
                    const isSelected =
                      selection?.productId === product.id &&
                      product.tiers[activeTier]?.includes(selection?.color);

                    return (
                      <ProductCard
                        key={product.id}
                        product={product}
                        activeTier={activeTier}
                        isSelected={isSelected}
                        selectedColor={selection?.color}
                        onSelect={onSelect}
                        onUnselect={onUnselect}
                        onSelectColor={onSelectColor}
                      />
                    );
                  })}
                  <div
                    className="pointer-events-none hidden xl:col-span-3 xl:block xl:h-[60px]"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ConfigurePage;
