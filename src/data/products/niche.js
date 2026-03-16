export const nicheCategories = [
  {
    id: "niche",
    label: "Wall Niche",
    products: [
      {
        id: "wn1",
        name: "MAAX - Nextile",
        allowPosition: true,
        positionOptions: {
          left: {
            offset: [-1.25, 1.8, -5.7], // absolute world position on left side wall
            rotation: [0, Math.PI / 2, 0], // facing inward (toward center)
            scale: [1, 1, 1],
          },
          "mid left": {
            offset: [-0.7, 1.5, -6.35], // absolute world position on left side wall
            rotation: [0, 0, 0], // facing inward (toward center)
            scale: [1, 1, 1],
          },
          center: {
            offset: [0, 1.5, -6.35], // back wall center
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          "mid right": {
            offset: [0.7, 1.5, -6.35], // absolute world position on right side wall
            rotation: [0, 0, 0], // facing inward
            scale: [1, 1, 1],
          },
          right: {
            offset: [1.25, 1.8, -5.7], // absolute world position on right side wall
            rotation: [0, -Math.PI / 2, 0], // facing inward
            scale: [1, 1, 1],
          },
        },
        tiers: {
          premium: ["White"],
        },
        glb: "/models/wall-niche/maax-nextile-square.glb",
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/88694e7e-9eb5-452c-b5d2-e2cb15f0f20f/44106351.jpg",
            color: "",
            displayColor: "#ffffff",
          },
        },
      },
      {
        id: "wn2",
        name: "Double - MAAX - Nextile",
        allowPosition: true,
        positionOptions: {
          left: {
            coords: [
              [-1.25, 1.8, -5.4],
              [-1.25, 1.8, -5.9],
            ],
            rotation: [0, Math.PI / 2, 0],
            scale: [1, 1, 1],
          },
          "mid left": {
            // Two niches stacked vertically on side wall
            coords: [
              [-0.4, 1.5, -6.35],
              [-0.85, 1.5, -6.35],
            ],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          center: {
            // Two niches spread horizontally on back wall
            coords: [
              [0.22, 1.5, -6.35],
              [-0.22, 1.5, -6.35],
            ],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          "mid right": {
            coords: [
              [0.4, 1.5, -6.35],
              [0.85, 1.5, -6.35],
            ],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          right: {
            coords: [
              [1.25, 1.8, -5.4],
              [1.25, 1.8, -5.9],
            ],
            rotation: [0, -Math.PI / 2, 0],
            scale: [1, 1, 1],
          },
        },
        tiers: {
          premium: ["White"],
        },
        glb: "/models/wall-niche/maax-nextile-square.glb",
        rotation: [0, 0, 0],
        scale: [1, 1, 2],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/88694e7e-9eb5-452c-b5d2-e2cb15f0f20f/44106351.jpg",
            color: "",
            displayColor: "#ffffff",
          },
        },
      },
      {
        id: "wn3",
        name: "Square Niche",
        allowPosition: true,
        positionOptions: {
          left: {
            offset: [-1.28, 1.8, -5.7], // absolute world position on left side wall
            rotation: [0, Math.PI / 2, 0], // facing inward (toward center)
            scale: [1, 1, 1],
          },
          "mid left": {
            offset: [-0.7, 1.5, -6.35], // absolute world position on left side wall
            rotation: [0, 0, 0], // facing inward (toward center)
            scale: [1, 1, 1],
          },
          center: {
            offset: [0, 1.5, -6.35], // back wall center
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          "mid right": {
            offset: [0.7, 1.5, -6.35], // absolute world position on right side wall
            rotation: [0, 0, 0], // facing inward
            scale: [1, 1, 1],
          },
          right: {
            offset: [1.28, 1.8, -5.7], // absolute world position on left side wall
            rotation: [0, -Math.PI / 2, 0], // facing inward (toward center)
            scale: [1, 1, 1],
          },
        },
        tiers: {
          standard: ["Gray"],
        },
        glb: "/models/wall-niche/wall-niche.glb",
        position: [0, 1.5, -6.38],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Gray: {
            productDisplay:
              "https://s.alicdn.com/@sc04/kf/Hb85d20bce89a40cbabe9ec49348f2d64n.jpg?avif=close&webp=close",
            color: "",
            displayColor: "#808080",
          },
        },
      },
      {
        id: "wn4",
        name: "Double - Square Niche",
        allowPosition: true,
        positionOptions: {
          left: {
            coords: [
              [-1.28, 1.8, -5.4],
              [-1.28, 1.8, -5.9],
            ],
            rotation: [0, Math.PI / 2, 0],
            scale: [1, 1, 1],
          },
          "mid left": {
            // Two niches stacked vertically on side wall
            coords: [
              [-0.4, 1.5, -6.35],
              [-0.8, 1.5, -6.35],
            ],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          center: {
            // Two niches spread horizontally on back wall
            coords: [
              [0.2, 1.5, -6.38],
              [-0.2, 1.5, -6.38],
            ],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          "mid right": {
            coords: [
              [0.4, 1.5, -6.35],
              [0.8, 1.5, -6.35],
            ],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          right: {
            coords: [
              [1.28, 1.8, -5.4],
              [1.28, 1.8, -5.9],
            ],
            rotation: [0, -Math.PI / 2, 0],
            scale: [1, 1, 1],
          },
        },
        tiers: {
          standard: ["Gray"],
        },
        glb: "/models/wall-niche/wall-niche.glb",
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Gray: {
            productDisplay:
              "https://s.alicdn.com/@sc04/kf/Hb85d20bce89a40cbabe9ec49348f2d64n.jpg?avif=close&webp=close",
            color: "",
            displayColor: "#808080",
          },
        },
      },
    ],
  },
];
