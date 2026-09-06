"use client";

import { memo, useState } from "react";
import { Check, ImageOff } from "lucide-react";

/**
 * One product in the picker.
 *
 * Rebuilt from a `<div onClick>`, which meant the entire catalogue — every
 * fixture, finish and fitting — was unreachable by keyboard and announced as
 * nothing by a screen reader. It is a real button now, with pressed state.
 *
 * The colour swatches were also bare buttons containing only a background
 * colour: no text, no label, so they announced as "button" and nothing else.
 *
 * Thumbnails stay on a plain `<img>` rather than next/image on purpose: 82% of
 * them are hotlinked from 25 third-party domains, and routing those through the
 * optimiser would mean whitelisting every one and paying to proxy other
 * people's assets. They are lazy and async-decoded instead, and a failed load
 * falls back to a placeholder rather than a broken-image icon — which matters
 * when the URLs belong to someone else and can vanish without notice.
 */
function ProductCard({
  product,
  activeTier,
  isSelected,
  selectedColor,
  onSelect,
  onUnselect,
  onSelectColor,
}) {
  const [imageFailed, setImageFailed] = useState(false);

  const colors = product.tiers?.[activeTier] ?? [];
  const displayColor = isSelected ? selectedColor : (colors[0] ?? "");
  const thumbnail = product.displayByColor?.[displayColor]?.productDisplay;

  return (
    <div
      className={`rule-hairline flex flex-shrink-0 snap-center flex-col border p-3 transition-colors xl:w-auto ${
        isSelected
          ? "border-accent bg-accent/5"
          : "hover:border-accent/40 xl:border-border"
      } w-32 xl:w-auto`}
    >
      <button
        type="button"
        aria-pressed={isSelected}
        onClick={() =>
          isSelected
            ? onUnselect(product.id)
            : onSelect(product.id, displayColor, product.shape)
        }
        className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="relative block aspect-square overflow-hidden bg-muted">
          {thumbnail && !imageFailed ? (
            <img
              src={thumbnail}
              alt=""
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-muted-foreground">
              <ImageOff aria-hidden="true" className="h-6 w-6" />
            </span>
          )}

          {isSelected && (
            <span className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent">
              <Check
                aria-hidden="true"
                className="h-3 w-3 text-accent-foreground"
                strokeWidth={3}
              />
            </span>
          )}
        </span>

        <span className="mt-2 block text-[11px] leading-tight font-semibold tracking-tight text-primary xl:text-xs">
          {product.name}
        </span>
      </button>

      {colors.length > 0 && (
        <div
          className="mt-2 flex flex-wrap gap-1.5"
          role="group"
          aria-label={`${product.name} finishes`}
        >
          {colors.map((color) => {
            const isActiveColor = isSelected && selectedColor === color;
            return (
              <button
                key={color}
                type="button"
                aria-pressed={isActiveColor}
                // The swatch is a colour with no text, so the name has to come
                // from the label — otherwise it announces as just "button".
                aria-label={`${product.name} in ${color}`}
                title={color}
                onClick={() => onSelectColor(product.id, color)}
                className={`h-4 w-4 rounded-full border border-border transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
                  isActiveColor
                    ? "ring-2 ring-accent ring-offset-1"
                    : "hover:scale-110"
                }`}
                style={{
                  backgroundColor:
                    product.displayByColor?.[color]?.displayColor ?? "#ffffff",
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default memo(ProductCard);
