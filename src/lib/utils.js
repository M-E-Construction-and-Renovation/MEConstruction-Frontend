import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function flattenMessages(
  obj,
  prefix = "",
  sectionData = { path: null, id: null },
  depth = 0,
  maxDepth = 3,
) {
  let result = [];

  const searchableKeys = [
    "title",
    "description",
    "headline",
    "subtext",
    "sectionTitle",
    "sectionSubtitle",
  ];

  if (depth > maxDepth) return result;

  // If the object has path or id at this level, update sectionData
  const currentSectionData = {
    path: typeof obj.path === "string" ? obj.path : sectionData.path,
    id: typeof obj.id === "string" ? obj.id : sectionData.id,
  };

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      if (searchableKeys.some((term) => newKey.endsWith(term))) {
        // 🧹 Remove simple HTML-like tags such as <accent>, <b>, <i>, etc.
        const cleanText = value.replace(/<\/?[^>]+(>|$)/g, "");

        result.push({
          key: newKey,
          text: cleanText.trim(),
          path: currentSectionData.path,
          id: currentSectionData.id,
        });
      }
    } else if (typeof value === "object" && value !== null) {
      result = result.concat(
        flattenMessages(value, newKey, currentSectionData, depth + 1, maxDepth),
      );
    }
  }

  return result;
}

export function resolvePlacement(product, placement, flipped) {
  const opt = product?.positionOptions?.[placement];

  if (!opt) {
    // Product has no positionOptions — use raw position/rotation
    const positions =
      product?.nicheCoords ??
      (product?.position ? [product.position] : [[0, 1.2, 0]]);
    return {
      positions,
      rotation: product?.rotation ?? [0, 0, 0],
      scale: product?.scale ?? [1, 1, 1], // ← add scale to return
      shouldFlip: flipped,
    };
  }

  // Resolve positions: named coords array OR single offset
  const positions = opt.coords ?? (opt.offset ? [opt.offset] : [[0, 1.2, 0]]);

  // Rotation: use placement-specific or fall back to product base
  const rotation = opt.rotation ?? product?.rotation ?? [0, 0, 0];

  // Per-placement scale override, falls back to product base scale
  const scale = opt.scale ?? product?.scale ?? [1, 1, 1];

  // Apply flip ONLY on products that don't use rotation-per-placement
  // (side-wall niches rotate instead of flipping)
  const shouldFlip = flipped && !opt.rotation;

  return { positions, rotation, scale, shouldFlip };
}
