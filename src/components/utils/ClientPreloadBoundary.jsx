"use client";

import GLTFPreloader from "./GLTFpreloader";

export default function ClientPreloadBoundary({ children }) {
  return (
    <>
      <GLTFPreloader />
      {children}
    </>
  );
}
