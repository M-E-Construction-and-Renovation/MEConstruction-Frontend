// utils/product-utils.js
export const normalizeColor = (color = "") =>
  color.toLowerCase().replace(/\s+/g, "-");

export function buildImageUrl(product, { plumbing, shape, color }) {
  if (!product?.imagePattern) return product?.staticSrc || "/placeholder.svg";

  return product.imagePattern
    .replace(/{product}/g, product.id)
    .replace(/{plumbing}/g, plumbing)
    .replace(/{shape}/g, shape)
    .replace(/{color}/g, normalizeColor(color));
}

export function getColors(product) {
  if (!product) return [];
  // tiers mapping -> flat unique array
  const colors = Object.values(product.tiers || {}).flat();
  return Array.from(new Set(colors));
}

export function supportsVariant(product, { plumbing, shape, color }) {
  if (!product) return false;
  if (product.staticSrc) return true; // static product (no variants)
  const supportsShape = product.supportedShapes?.includes(shape);
  const supportsPlumbing = product.supportedPlumbing?.includes(plumbing);
  const colors = getColors(product);
  const supportsColor = colors.includes(color);
  return !!(supportsShape && supportsPlumbing && supportsColor);
}
