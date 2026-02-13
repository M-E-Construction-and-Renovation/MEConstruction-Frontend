"use client";

import * as THREE from "three";

export const faucetsCategories = [
  {
    id: "faucets",
    // initialAngle: "front",
    label: "Faucets",
    // zIndex: "80",
    // shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "f1",
        name: "Foundations - Delta",
        tiers: {
          basic: ["Chrome", "Stainless"],
        },
        glb: "/models/shower-tub-faucets/Delta foundation.glb",
        position: new THREE.Vector3(-1.2, 0.1, -5.6),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/0377a656-7a4c-4570-aca2-440e3a266b81/65088340.png?size=pdhz",
            color: "#ffffff",
          },
          Stainless: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/1a3c2775-7efd-4a19-918d-6b9170970f6f/65088348.png?size=pdhz",
            color: "#FFFFF0",
          },
        },
      },
      {
        id: "f2",
        name: "Florez - Kohler",
        tiers: {
          basic: ["Brushed Nickel"],
          standard: ["Black"],
          premium: ["Polished Nickel"],
        },
        glb: "/models/shower-tub-faucets/kohler florez.glb",
        position: new THREE.Vector3(-1.2, 0.1, -5.6),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/65229ad1-2bcc-4fbb-b7bd-48127b1dbe17/66591679.jpeg?size=pdhz",
            color: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/1632f398-c4e0-4062-85b2-f3860702bef6/66591675.jpeg?size=pdhz",
            color: "#7D7D7D",
          },
          "Polished Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/9486735c-f164-492e-8a30-c55dee7d6a1f/66574639.jpeg?size=pdhz",
            color: "#FFFFF0",
          },
        },
      },
      {
        id: "f3",
        name: "Premise - Kohler",
        tiers: {
          standard: ["Brushed Nickel"],
          premium: ["Black"],
        },
        glb: "/models/shower-tub-faucets/kohler premise.glb",
        position: new THREE.Vector3(-1.2, 0.1, -5.6),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/cfd394b9-57b1-4aab-aa5e-408ee5f99d1c/65496025.jpg?size=pdhz",
            color: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/028810b7-cd59-4561-9b2e-187b0820a38d/67595340.jpeg?size=pdhz",
            color: "#7D7D7D",
          },
        },
      },
    ],
  },
];
