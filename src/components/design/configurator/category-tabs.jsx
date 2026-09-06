"use client";

import { memo } from "react";
import { Check } from "lucide-react";

/**
 * Category picker.
 *
 * These were plain buttons with no relationship to the panel they control, so
 * assistive tech had no way to know they were a tab set or which one was
 * current. Now a real tablist with roving state.
 *
 * The "has a selection" dot was a hardcoded green, the one place on the site
 * that colour appears; it uses the accent now.
 */
function CategoryTabs({ categories, activeTab, selectedProducts, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Product categories"
      aria-orientation="horizontal"
      className="flex gap-2 overflow-x-auto p-3 [scrollbar-width:none] xl:grid xl:grid-cols-3 xl:gap-1.5 xl:overflow-x-visible xl:border-b xl:border-border xl:p-4 [&::-webkit-scrollbar]:hidden"
    >
      {categories.map((category) => {
        const isActive = activeTab === category.id;
        const hasSelection = Boolean(selectedProducts[category.id]);

        return (
          <button
            key={category.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls="configurator-panel"
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(category.id)}
            className={`relative flex-shrink-0 px-4 py-2 text-[11px] font-semibold tracking-tight whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:px-3 xl:text-xs ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-primary hover:bg-muted/70"
            }`}
          >
            {category.label}
            {hasSelection && (
              <span
                aria-hidden="true"
                className={`absolute top-1 right-1 flex h-3 w-3 items-center justify-center rounded-full ${
                  isActive ? "bg-accent-foreground" : "bg-accent"
                }`}
              >
                <Check
                  className={`h-2 w-2 ${isActive ? "text-primary" : "text-accent-foreground"}`}
                  strokeWidth={4}
                />
              </span>
            )}
            {hasSelection && <span className="sr-only">(selected)</span>}
          </button>
        );
      })}
    </div>
  );
}

export default memo(CategoryTabs);
