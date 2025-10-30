import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// utils/flattenMessages.js
// utils/flattenMessages.js
export function flattenMessages(obj, prefix = "", depth = 0, maxDepth = 3) {
  let result = [];

  const searchableKeys = [
    "title",
    "headline",
    "subtext",
    "sectionTitle",
    "sectionSubtitle",
  ];

  // Stop recursion if max depth reached
  if (depth > maxDepth) return result;

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      // Only include if key matches a searchable field
      if (searchableKeys.some((term) => newKey.endsWith(term))) {
        result.push({ key: newKey, text: value });
      }
    } else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      // Recurse into nested objects if not too deep
      result = result.concat(
        flattenMessages(value, newKey, depth + 1, maxDepth)
      );
    }
  }

  return result;
}
