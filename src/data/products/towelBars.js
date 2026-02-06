"use client";

import * as THREE from "three";

export const towelBars = [
  {
    id: "towelBars",
    // initialAngle: "front",
    label: "Towel Bars",
    // zIndex: "50",
    // shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    isDraggable: true,
    products: [
      {
        id: "tb1",
        name: "Square Towel Bar",
        tiers: {
          basic: ["Chrome"],
          standard: ["Brass"],
          premium: ["Black", "Champagne Gold"],
        },
        glb: "/models/towel-bars/towel bar model 1 - 24in.glb",
        position: new THREE.Vector3(-1.12, -0.3, 0),
        rotation: new THREE.Euler(0, 1.55, 0),
        roughness: 1, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/23285-CP_ISO_d2c0076888_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#ffffff",
          },
          Brass: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/23285-2MB_ISO_d2c0076824_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#B5A642",
          },
          Black: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/23285-BL_ISO_d2c0076851_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#000000",
          },
          "Champagne Gold": {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/23285-2MB_ISO_d2c0076824_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#F7E7CE",
          },
        },
      },
      {
        id: "tb2",
        name: "Round Towel Bar",
        tiers: {
          basic: ["Chrome"],
          standard: ["Brass"],
          premium: ["Black", "Champagne Gold"],
        },
        glb: "/models/towel-bars/towel bar model 2 - 24in.glb",
        position: new THREE.Vector3(-1.12, -0.3, 0),
        rotation: new THREE.Euler(0, 1.55, 0),
        roughness: 1, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/14437-CP_ISO_d2c0086585_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#ffffff",
          },
          Brass: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/14437-2MB_ISO_d2c0086156_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#B5A642",
          },
          Black: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/14437-BL_ISO_d2c0086613_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#000000",
          },
          "Champagne Gold": {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/zaa82112_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#F7E7CE",
          },
        },
      },
    ],
  },
];
