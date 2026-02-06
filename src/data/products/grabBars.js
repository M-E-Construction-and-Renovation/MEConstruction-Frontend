"use client";

import * as THREE from "three";

export const grabBarsCategories = [
  {
    id: "grabBars",
    // initialAngle: "front",
    label: "Grab Bars",
    // zIndex: "50",
    // shapesAllowed: ["tub", "tub-to-shower"],
    isDraggable: true,
    products: [
      {
        id: "gb1",
        name: "Flara - Moen",
        tiers: {
          basic: ["Chrome"],
          // standard: ["Brushed Nickel"],
          // premium: ["Polished Nickel"],
        },
        glb: "/models/grab-bar.glb",
        position: new THREE.Vector3(-1.45, -1.55, -1.8),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.2, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.12, // glazed surface
        clearcoatRoughness: 0.5,
        envMapIntensity: 1, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://embed.widencdn.net/img/moen/vpjoptoh0i/y400px@1x/yg0312ch.tif.jpg?q=100",
            color: "#DBE2E9",
            // designDisplay: {
            //   front: {
            //     initialPosition:
            //       "/configurator/products/accessories/flara-chrome.png",
            //   },
            // },
          },
          // "Brushed Nickel": {
          //   productDisplay:
          //     "https://embed.widencdn.net/img/moen/vacgnik4i6/y400px@1x/yg0312bn.tif.jpg?q=100",
          //   designDisplay: {
          //     front: {
          //       initialPosition:
          //         "/configurator/products/accessories/flara-brushed-nickel.png",
          //     },
          //   },
          // },
          // "Polished Nickel": {
          //   productDisplay:
          //     "https://embed.widencdn.net/img/moen/uisofrc6rx/y400px@1x/yg0312nl.tif.jpg?q=100",
          //   designDisplay: {
          //     front: {
          //       initialPosition:
          //         "/configurator/products/accessories/flara-brushed-nickel.png",
          //     },
          //   },
          // },
        },
      },
    ],
  },
];
