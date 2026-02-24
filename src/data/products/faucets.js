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
      {
        id: "f4",
        name: "allen + roth - Veda",
        tiers: {
          premium: ["Black"],
        },
        glb: "/models/shower-tub-faucets/Allen Roth Veda 1 handle.glb",
        position: new THREE.Vector3(-1.245, 0.1, -5.6),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/55e030f3-157d-4535-96dc-0f8878e46c34/68633324.jpeg?size=pdhz",
            color: "#7D7D7D",
          },
        },
      },
      {
        id: "f5",
        name: "Delta - Classic",
        tiers: {
          standard: ["Chrome"],
        },
        glb: "/models/shower-tub-faucets/Delta Classic.glb",
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
              "https://mobileimages.lowes.com/productimages/504690a5-144c-4cf9-aa39-a7c5fe4da64c/65090597.png?size=pdhz",
            color: "",
          },
        },
      },
      {
        id: "f6",
        name: "Kohler - Desette",
        tiers: {
          basic: ["Chrome"],
          standard: ["Brushed Nickel"],
          premium: ["Black"],
        },
        glb: "/models/shower-tub-faucets/kohler desette 1 handle.glb",
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
              "https://mobileimages.lowes.com/productimages/f6e6cd95-046d-4e20-8ff8-afb322223d8f/50302300.jpg?size=pdhz",
            color: "#ffffff",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/5cbeb9e0-8815-4179-85b8-4a060ac284f5/48562393.jpg?size=pdhz",
            color: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/70cef8b4-fc42-4303-8a09-af0521c960e4/50302301.jpg?size=pdhz",
            color: "#7D7D7D",
          },
        },
      },
      {
        id: "f7",
        name: "Moen - Adler",
        tiers: {
          premium: ["Chrome"],
        },
        glb: "/models/shower-tub-faucets/Moen adler 3-handle.glb",
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
              "https://mobileimages.lowes.com/productimages/500c5a2a-cffa-4462-b8a4-3f84066a98d7/07700282.jpg?size=pdhz",
            color: "#ffffff",
          },
        },
      },
      {
        id: "f8",
        name: "Moen - Lindor",
        tiers: {
          premium: ["Black"],
        },
        glb: "/models/shower-tub-faucets/moen lindor 1 handle.glb",
        position: new THREE.Vector3(-1.2, 0.1, -5.6),
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/04f7ca33-8f47-4825-a27e-adbec903c56c/16021108.jpg?size=pdhz",
            color: "#7D7D7D",
          },
        },
      },
    ],
  },
];
