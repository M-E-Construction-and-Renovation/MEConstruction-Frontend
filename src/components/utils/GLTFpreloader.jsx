"use client";

import { useEffect } from "react";
import {
  preloadFromCategories,
  preloadGLB,
} from "@/lib/3d-assets-preload-func";
import allCategories from "@/data/products";

export default function GLTFPreloader() {
  useEffect(() => {
    preloadGLB("/models/bathroom.glb");
    preloadFromCategories(allCategories);
  }, []);

  return null;
}
