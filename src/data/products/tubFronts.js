"use client";

import * as THREE from "three";

export const tubFrontsCategories = [
  {
    id: "tubFronts",
    // initialAngle: "front",
    label: "Tub Fronts",
    // zIndex: "75",
    shapesAllowed: ["tub"],
    products: [
      {
        id: "tf1",
        name: "Princeton - American Standard",
        tiers: {
          basic: ["White"], // Your images were only White
        },
        glb: "/models/bathtub.glb",
        position: new THREE.Vector3(-1.45, -1.55, -1.8),
        rotation: new THREE.Euler(0, 0, 0),
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/tubfronts/design/princeton-white.png",
            color: "#EFF2F3",
          },
        },
      },

      // {
      //   id: "tf2",
      //   name: "Pro Steel - MAAX",
      //   tiers: {
      //     standard: ["White"],
      //   },
      //   displayByColor: {
      //     White: {
      //       productDisplay:
      //         "/configurator/products/tubfronts/design/prosteel-white.png",
      //       designDisplay: {
      //         front: {
      //           initialPosition:
      //             "/configurator/products/tubfronts/design/prosteel-white.png",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: "tf3",
      //   name: "Villager - Kohler",
      //   tiers: {
      //     premium: ["White"],
      //   },
      //   displayByColor: {
      //     White: {
      //       productDisplay:
      //         "/configurator/products/tubfronts/design/villager-white.png",
      //       designDisplay: {
      //         front: {
      //           initialPosition:
      //             "/configurator/products/tubfronts/design/villager-white.png",
      //         },
      //       },
      //     },
      //   },
      // },
    ],
  },
];
