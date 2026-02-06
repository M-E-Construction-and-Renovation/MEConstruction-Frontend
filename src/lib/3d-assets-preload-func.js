"use client";

import { useGLTF } from "@react-three/drei";

export function preloadFromCategories(categories) {
  categories.forEach((category) => {
    category.products.forEach((product) => {
      if (product.glb) {
        useGLTF.preload(product.glb);
      }
    });
  });
}

export function preloadGLB(glb) {
  if (glb) {
    useGLTF.preload(glb);
  }
}
