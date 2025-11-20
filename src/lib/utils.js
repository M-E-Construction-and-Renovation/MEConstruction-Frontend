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
  maxDepth = 3
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
        flattenMessages(value, newKey, currentSectionData, depth + 1, maxDepth)
      );
    }
  }

  return result;
}
