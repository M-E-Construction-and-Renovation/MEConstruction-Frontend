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
      // product?.nicheCoords ??
      product?.position ? [product.position] : [[0, 1.2, 0]];
    return {
      positions,
      rotation: product?.rotation ?? [0, 0, 0],
      scale: product?.scale ?? [1, 1, 1], // ← add scale to return
      sinkCoords: product?.sinkCoords ?? null, // ← add this
      mirrorCoords: product?.mirrorCoords ?? null, // ← add this
      lightCoords: product?.lightCoords ?? null, // ← add this
      shouldFlip: flipped,
    };
  }

  // Resolve positions: named coords array OR single offset
  const positions = opt.coords ?? (opt.offset ? [opt.offset] : [[0, 1.2, 0]]);

  // Rotation: use placement-specific or fall back to product base
  const rotation = opt.rotation ?? product?.rotation ?? [0, 0, 0];

  // const flipRotation = shouldFlip ? rotation.map((rot) => -rot) : rotation

  // Per-placement scale override, falls back to product base scale
  const scale = opt.scale ?? product?.scale ?? [1, 1, 1];

  // for sink faucets
  const sinkCoords = opt.sinkCoords ?? product?.sinkCoords ?? null;
  // for mirrors
  const mirrorCoords = opt.mirrorCoords ?? product?.mirrorCoords ?? null;
  // for lights
  const lightCoords = opt.lightCoords ?? product?.lightCoords ?? null;

  // Apply flip ONLY on products that don't use rotation-per-placement
  // (side-wall niches rotate instead of flipping)
  // const shouldFlip = flipped && !opt.rotation;
  const shouldFlip = flipped;

  return {
    positions,
    rotation,
    scale,
    sinkCoords,
    mirrorCoords,
    lightCoords,
    shouldFlip,
  };
}

/**
 * Categories that compete for the same physical placement slots.
 * Only products with positionOptions participate in conflict resolution.
 */
const CONFLICTING_GROUPS = [["toilets", "vanityShelves"]];

const OPPOSITE_PLACEMENT = {
  front: "back",
  back: "front",
  left: "right",
  right: "left",
};

/**
 * Checks if a selected product in a category actually has positionOptions.
 * Products without positionOptions don't participate in conflict resolution.
 */
function hasPositionOptions(categoryId, productId, allCategories) {
  const category = allCategories.find((c) => c.id === categoryId);
  const product = category?.products.find((p) => p.id === productId);
  return !!product?.positionOptions;
}

export function resolvePositionConflicts(
  selectedProducts,
  lastUpdatedId,
  allCategories,
) {
  const resolved = { ...selectedProducts };

  for (const group of CONFLICTING_GROUPS) {
    const activeMembers = group.filter((id) => resolved[id]);
    if (activeMembers.length < 2) continue;

    for (let i = 0; i < activeMembers.length; i++) {
      for (let j = i + 1; j < activeMembers.length; j++) {
        const idA = activeMembers[i];
        const idB = activeMembers[j];

        const a = resolved[idA];
        const b = resolved[idB];

        // Skip if either product doesn't have positionOptions — they can't conflict
        if (!hasPositionOptions(idA, a.productId, allCategories)) continue;
        if (!hasPositionOptions(idB, b.productId, allCategories)) continue;

        const sameFlip = a.flipped === b.flipped;
        const samePlacement = a.placement === b.placement;

        if (!sameFlip || !samePlacement) continue;

        // Bump the one that was NOT just updated
        const bumpId = lastUpdatedId === idA ? idB : idA;
        const newPlacement = OPPOSITE_PLACEMENT[resolved[bumpId].placement];

        if (!newPlacement) continue;

        resolved[bumpId] = {
          ...resolved[bumpId],
          placement: newPlacement,
        };
      }
    }
  }

  return resolved;
}

/**
 * Gets the first valid placement key for a product, or falls back to the given default.
 * Prevents products with positionOptions from sitting on "center" indefinitely.
 */
export function resolveInitialPlacement(
  categoryId,
  productId,
  currentPlacement,
  allCategories,
) {
  const category = allCategories.find((c) => c.id === categoryId);
  const product = category?.products.find((p) => p.id === productId);

  if (!product?.positionOptions) return currentPlacement;

  // If current placement is a valid key, keep it
  if (product.positionOptions[currentPlacement]) return currentPlacement;

  // Otherwise snap to first available placement key (e.g. "front")
  return Object.keys(product.positionOptions)[0];
}
