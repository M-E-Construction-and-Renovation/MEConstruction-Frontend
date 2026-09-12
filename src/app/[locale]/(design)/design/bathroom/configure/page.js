"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect, Suspense } from "react";
import allCategories from "@/data/products";
import ConfigurePage from "@/components/utils/configure-page";
import { useToast } from "@/components/ui/use-toast";

import { resolvePositionConflicts, resolveInitialPlacement } from "@/lib/utils";
import { GA_EVENTS, trackEvent } from "@/lib/analytics";

export default function DesignTool() {
  const { toast } = useToast();

  const searchParams = useSearchParams();
  const plumbing = searchParams.get("plumbing") || "left";

  // `?email=` is still honoured for links shared before the lead gate existed,
  // but it is no longer how the tool learns who you are: a real address in a
  // query string lands in browser history, the back button and any referrer
  // log. The gate puts it in an httpOnly cookie instead, and this reads it back
  // through /api/design/session.
  const legacyEmail = searchParams.get("email") || "";
  const wantsResume = searchParams.get("resume") === "1";
  const [sessionEmail, setSessionEmail] = useState("");
  const email = legacyEmail || sessionEmail;

  useEffect(() => {
    if (legacyEmail) return;

    let cancelled = false;
    fetch("/api/design/session")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.email) setSessionEmail(data.email);
      })
      .catch(() => {
        // No session is an ordinary state -- the visitor simply starts fresh.
      });

    return () => {
      cancelled = true;
    };
  }, [legacyEmail]);

  const [activeTab, setActiveTab] = useState("tubFronts/showerPans");
  const [activeTier, setActiveTier] = useState("premium");
  const [selectedProducts, setSelectedProducts] = useState({});
  const [loadingProject, setLoadingProject] = useState(!!email); // only fetch if email is present

  // Fetch existing design if email exists
  useEffect(() => {
    if (!email) return;
    // A legacy `?email=` link is itself the request to load. Otherwise the
    // visitor must have picked "Resume my design" at the gate -- someone who
    // chose "Start a new design" should not have the old one reinstated.
    if (!legacyEmail && !wantsResume) return;

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
  }, [email, legacyEmail, wantsResume, toast]);

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

        // Saving requires an email address, so this is a lead in everything but
        // name. Counted separately from generate_lead because the visitor has not
        // asked to be contacted -- promote it to a key event only if the client
        // works these the way they work quote requests.
        trackEvent(GA_EVENTS.DESIGN_PROJECT_SAVE, {
          plumbing: plumbing || undefined,
          product_count: Object.keys(selectedProducts || {}).length,
        });
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

  const currentCategory =
    allCategories.find((c) => c.id === activeTab) || "tubFronts/showerPans";

  const handleCategoryChange = useCallback(
    (categoryId) => {
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

          for (const [tierName, colors] of Object.entries(
            product.tiers || {},
          )) {
            if (colors.includes(selectedColor)) {
              tierFound = tierName;
              break;
            }
          }

          setActiveTier(tierFound);
        }
      } else {
        setActiveTier("premium");
      }
    },
    [selectedProducts],
  );

  const handleProductSelect = useCallback(
    (productId, color, shape, flipped = false, placement = "center") => {
      setSelectedProducts((prev) => {
        const existing = prev[activeTab];
        const effectiveFlipped = existing?.flipped ?? flipped;

        // Normalize placement: if this product has positionOptions and current
        // placement isn't valid for it, snap to its first option
        const rawPlacement = existing?.placement ?? placement;
        const effectivePlacement = resolveInitialPlacement(
          activeTab,
          productId,
          rawPlacement,
          allCategories,
        );

        let newPrev = prev;

        if (activeTab === "tubFronts/showerPans") {
          // Keep shape-dependent products only if they support the newly selected shape
          newPrev = Object.fromEntries(
            Object.entries(prev).filter(([key, value]) => {
              if (key === "tubFronts/showerPans") return false; // always replace base

              const category = allCategories.find((c) => c.id === key);
              const product = category?.products.find(
                (p) => p.id === value.productId,
              );

              // No shape constraint = always keep (tiles, niches, etc.)
              if (!product?.shape || product.shape.length === 0) return true;

              // Has shape constraint = only keep if new shape is supported
              return product.shape.includes(shape);
            }),
          );
        }

        const updated = {
          ...newPrev,
          [activeTab]: {
            productId,
            color,
            shape,
            flipped: effectiveFlipped,
            placement: effectivePlacement,
          },
        };

        return resolvePositionConflicts(updated, activeTab, allCategories);
      });
    },
    [activeTab],
  );

  const handleUnselectProduct = useCallback(
    (productId) => {
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
    },
    [activeTab],
  );

  // Dedicated flip toggle handler (flipping position with rotation) (inverting)
  const handleFlipProduct = useCallback(
    (flipped) => {
      setSelectedProducts((prev) => {
        const updated = {
          ...prev,
          [activeTab]: { ...prev[activeTab], flipped },
        };
        return resolvePositionConflicts(updated, activeTab, allCategories);
      });
    },
    [activeTab],
  );

  // Dedicated placement handler (for moving products with position choices)
  const handlePlacementChange = useCallback(
    (placement) => {
      setSelectedProducts((prev) => {
        const updated = {
          ...prev,
          [activeTab]: { ...prev[activeTab], placement },
        };
        return resolvePositionConflicts(updated, activeTab, allCategories);
      });
    },
    [activeTab],
  );

  if (loadingProject) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      >
        <div
          aria-hidden="true"
          className="mb-4 h-16 w-16 animate-spin rounded-full border-4 border-border border-t-accent"
        />
        <p className="text-lg font-medium text-muted-foreground">
          Loading saved project...
        </p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 h-dvh w-screen overflow-hidden">
      <Suspense
        fallback={
          <div
            role="status"
            aria-live="polite"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          >
            <div
              aria-hidden="true"
              className="mb-4 h-16 w-16 animate-spin rounded-full border-4 border-border border-t-accent"
            />
            <p className="text-lg font-medium text-muted-foreground">
              Loading Design Tool...
            </p>
          </div>
        }
      >
        <ConfigurePage
          handleResetDesign={handleResetDesign}
          handleSaveDesign={handleSaveDesign}
          categories={allCategories}
          activeTab={activeTab}
          selectedProducts={selectedProducts}
          handleCategoryChange={handleCategoryChange}
          currentCategory={currentCategory}
          activeTier={activeTier}
          setActiveTier={setActiveTier}
          handleProductSelect={handleProductSelect}
          handleUnselectProduct={handleUnselectProduct}
          handleFlipProduct={handleFlipProduct}
          handlePlacementChange={handlePlacementChange}
          plumbing={plumbing}
          projectEmail={email}
        />
      </Suspense>
    </div>
  );
}
