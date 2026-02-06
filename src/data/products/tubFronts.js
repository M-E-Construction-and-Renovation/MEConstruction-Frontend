"use client";

import * as THREE from "three";

export const tubFrontsCategories = [
  {
    id: "tubFronts",
    // initialAngle: "front",
    label: "Tub Fronts",
    // zIndex: "75",
    shapesAllowed: ["tub"],
    isDraggable: false,
    products: [
      {
        id: "tf1",
        name: "Princeton - American Standard",
        tiers: {
          basic: ["White"], // Your images were only White
        },
        glb: "/models/tub-fronts/princeton.glb",
        position: new THREE.Vector3(-1.45, -1.55, -1.8),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.5, // glossy ceramic
        metalness: 0.2, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/tubfronts/design/princeton-white.png",
            color: "#EFF2F3",
          },
        },
      },
      {
        id: "tf2",
        name: "Pro Steel - MAAX",
        tiers: {
          standard: ["White"],
        },
        glb: "/models/tub-fronts/prosteel.glb",
        position: new THREE.Vector3(-1.2, -1.55, -2.05),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.5, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/tubfronts/design/prosteel-white.png",
            color: "#EFF2F3",
          },
        },
      },
      {
        id: "tf3",
        name: "Villager - Kohler",
        tiers: {
          premium: ["White"],
        },
        glb: "/models/tub-fronts/villager.glb",
        position: new THREE.Vector3(-1.2, -1.55, -2.05),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.5, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/tubfronts/design/villager-white.png",
            color: "#EFF2F3",
          },
        },
      },
    ],
  },
];
