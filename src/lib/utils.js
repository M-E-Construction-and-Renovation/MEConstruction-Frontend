import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// utils/flattenMessages.js
// export function flattenMessages(
//   obj,
//   prefix = "",
//   // href = null,
//   depth = 0,
//   maxDepth = 3
// ) {
//   let result = [];

//   const searchableKeys = [
//     "title",
//     "headline",
//     "subtext",
//     "sectionTitle",
//     "sectionSubtitle",
//   ];

//   // Stop recursion if max depth reached
//   if (depth > maxDepth) return result;

//   // If the object itself has a href, use it for all nested strings
//   // const currentHref = typeof obj.href === "string" ? obj.href : href || null;

//   for (const [key, value] of Object.entries(obj)) {
//     const newKey = prefix ? `${prefix}.${key}` : key;

//     if (typeof value === "string") {
//       // Only include if key matches a searchable field
//       if (searchableKeys.some((term) => newKey.endsWith(term))) {
//         result.push({ key: newKey, text: value });
//       }
//     } else if (
//       typeof value === "object" &&
//       value !== null &&
//       !Array.isArray(value)
//     ) {
//       // Recurse into nested objects if not too deep
//       result = result.concat(
//         flattenMessages(value, newKey, depth + 1, maxDepth)
//       );
//     }
//   }

//   return result;
// }

//second option

// export function flattenMessages(
//   obj,
//   prefix = "",
//   href = null,
//   depth = 0,
//   maxDepth = 3
// ) {
//   let result = [];

//   const searchableKeys = [
//     "title",
//     "headline",
//     "subtext",
//     "sectionTitle",
//     "sectionSubtitle",
//   ];

//   if (depth > maxDepth) return result;

//   // Determine current href from the object itself or fallback to parent href
//   const currentHref = typeof obj.href === "string" ? obj.href : href;

//   for (const [key, value] of Object.entries(obj)) {
//     const newKey = prefix ? `${prefix}.${key}` : key;

//     if (typeof value === "string") {
//       // Only include strings that match searchable keys
//       if (searchableKeys.some((term) => newKey.endsWith(term))) {
//         result.push({ key: newKey, text: value, href: currentHref });
//       }
//     } else if (Array.isArray(value)) {
//       // If it's an array, flatten each item recursively
//       value.forEach((item, index) => {
//         if (typeof item === "object" && item !== null) {
//           result = result.concat(
//             flattenMessages(
//               item,
//               `${newKey}[${index}]`,
//               currentHref,
//               depth + 1,
//               maxDepth
//             )
//           );
//         }
//       });
//     } else if (typeof value === "object" && value !== null) {
//       // Recurse into nested objects
//       result = result.concat(
//         flattenMessages(value, newKey, currentHref, depth + 1, maxDepth)
//       );
//     }
//   }

//   return result;
// }
// option number 3
// export function flattenMessages(
//   obj,
//   prefix = "",
//   sectionPath = null,
//   depth = 0,
//   maxDepth = 3
// ) {
//   let result = [];

//   const searchableKeys = [
//     "title",
//     "headline",
//     "subtext",
//     "sectionTitle",
//     "sectionSubtitle",
//   ];

//   if (depth > maxDepth) return result;

//   // If the object has a section-level path, use it
//   const currentPath = typeof obj.path === "string" ? obj.path : sectionPath;

//   for (const [key, value] of Object.entries(obj)) {
//     const newKey = prefix ? `${prefix}.${key}` : key;

//     if (typeof value === "string") {
//       if (searchableKeys.some((term) => newKey.endsWith(term))) {
//         result.push({ key: newKey, text: value, path: currentPath });
//       }
//     } else if (typeof value === "object" && value !== null) {
//       result = result.concat(
//         flattenMessages(value, newKey, currentPath, depth + 1, maxDepth)
//       );
//     }
//   }

//   return result;
// }
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
