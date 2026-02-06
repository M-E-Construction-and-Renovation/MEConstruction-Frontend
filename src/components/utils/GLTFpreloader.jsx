"use client";

import { useEffect } from "react";
import { preloadFromCategories } from "@/lib/utils";
import allCategories from "@/data/products";

export default function GLTFPreloader() {
  useEffect(() => {
    preloadFromCategories(allCategories);
  }, []);

  return null;
}
