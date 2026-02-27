export const nicheCategories = [
  {
    id: "niche",
    // initialAngle: "front",
    label: "Wall Niche",
    // zIndex: "50",
    // shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "wn1",
        name: "MAAX - Nextile",
        tiers: {
          premium: ["White"],
        },
        glb: "/models/wall-niche/maax-nextile.glb",
        position: [0, 1.5, -6.35],
        rotation: [0, 0, 0],
        scale: [1.3, 1, 1],
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
        name: "Square Niche",
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
    ],
  },
];
