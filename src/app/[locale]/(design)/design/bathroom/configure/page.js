"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import allCategories from "@/data/products";
import ConfigurePage from "@/components/utils/congifure-page";
import { useToast } from "@/components/ui/use-toast";

function DesignTool() {
  const { toast } = useToast();

  const searchParams = useSearchParams();
  const plumbing = searchParams.get("plumbing") || "left";
  const email = searchParams.get("email") || "";

  // const shape = "tub";

  const [activeTab, setActiveTab] = useState("tubFronts/showerPans");
  const [activeTier, setActiveTier] = useState("premium");
  const [selectedProducts, setSelectedProducts] = useState({});
  const [loadingProject, setLoadingProject] = useState(!!email); // only fetch if email is present

  // Fetch existing design if email exists
  useEffect(() => {
    if (!email) return;

    const fetchProject = async () => {
      setLoadingProject(true);

      try {
        const res = await fetch("/api/design/load-project", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (res.ok && data.projects) {
          // Set selectedProducts from fetched project
          setSelectedProducts(data.projects.selectedProducts || {});
        } else {
          toast.error(data.error || "No saved project found for this email.");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load saved project.");
      } finally {
        setLoadingProject(false);
      }
    };

    fetchProject();
  }, [email, toast]);

  const handleResetDesign = () => setSelectedProducts({});

  //SAVE DESIGN
  const handleSaveDesign = async (email) => {
    try {
      // Ensure all fields are defined
      const payload = {
        email,
        // shape: shape || "",
        plumbing: plumbing || "",
        selectedProducts: selectedProducts || {},
      };

      const response = await fetch("/api/design/save-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Design saved successfully!");
      } else {
        // data.errors guaranteed to be array of { message } from API
        toast.error(
          data.errors
            ? data.errors.map((e) => e.message).join(", ")
            : data.message,
        );
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to save design.");
    }
  };

  const handleShareDesign = () =>
    alert("Design shared! Link copied to clipboard.");

  // const categories = allCategories.filter((category) =>
  //   category.shapesAllowed.includes(shape)
  // );

  const currentCategory =
    allCategories.find((c) => c.id === activeTab) || "tubFronts/showerPans";

  const handleCategoryChange = (categoryId) => {
    setActiveTab(categoryId);
    const selectedInCategory = selectedProducts[categoryId];

    if (selectedInCategory) {
      const category = allCategories.find((c) => c.id === categoryId);
      const product = category?.products.find(
        (p) => p.id === selectedInCategory.productId,
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

  if (loadingProject) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
        <p className="text-lg font-medium text-gray-700">
          Loading saved project...
        </p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      <ConfigurePage
        handleResetDesign={handleResetDesign}
        handleSaveDesign={handleSaveDesign}
        handleShareDesign={handleShareDesign}
        categories={allCategories}
        activeTab={activeTab}
        selectedProducts={selectedProducts}
        handleCategoryChange={handleCategoryChange}
        currentCategory={currentCategory}
        activeTier={activeTier}
        setActiveTier={setActiveTier}
        handleProductSelect={handleProductSelect}
        handleUnselectProduct={handleUnselectProduct}
        plumbing={plumbing}
        // shape={shape}
        projectEmail={email}
      />
    </div>
  );
}

export default function DesignToolWrapper() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
          <p className="text-lg font-medium text-gray-700">
            Loading Design Tool...
          </p>
        </div>
      }
    >
      <DesignTool />
    </Suspense>
  );
}
