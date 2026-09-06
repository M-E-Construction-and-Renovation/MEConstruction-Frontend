"use client";

import { memo } from "react";

/**
 * The tier switch and the flip/placement switches were three separate
 * hand-rolled pill rows with the same markup and the same gap: no group name,
 * no pressed state, nothing telling assistive tech they were a choice between
 * options rather than three unrelated buttons.
 *
 * One control, used three times, with radiogroup semantics.
 *
 * Two things keep it from overflowing its box. `min-w-0` on the buttons is the
 * important one: `flex-1` is `flex: 1 1 0%`, but a flex item's default
 * `min-width: auto` refuses to shrink below min-content, so a row that does not
 * fit pushes its last button outside the container instead of compressing. That
 * is exactly what Wall Niche did — five placement options ("left", "mid left",
 * "center", "mid right", "right") measure ~347px on one line and ~293px even
 * fully wrapped, against a 240px cap.
 *
 * The second is density: past three options the generous `px-3` and
 * `tracking-widest` are what tip it over, so they tighten, and segments size to
 * their label (`flex-auto`) rather than splitting the row evenly. Equal split
 * would give "mid right" only a fifth of the row and wrap it onto two lines on
 * every phone; measured, proportional holds one line down to a 290px row.
 * Controls with three or fewer options render exactly as before.
 */
function SegmentedControl({ label, options, value, onChange, className = "" }) {
  const dense = options.length > 3;

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={`flex bg-muted p-1 ${className}`}
    >
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={String(option.value)}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(option.value)}
            className={`min-w-0 py-1.5 text-center text-[10px] leading-tight font-bold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              dense
                ? "flex-auto px-1.5 tracking-wide"
                : "flex-1 px-3 tracking-widest"
            } ${
              isActive
                ? "bg-background text-primary shadow-[0_1px_3px_-1px_rgb(0_0_0/0.25)]"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default memo(SegmentedControl);
