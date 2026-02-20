export const shelvesCategories = [
  {
    id: "shelves",
    // initialAngle: "front",
    label: "Shelves",
    // zIndex: "50",
    // shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "s1",
        name: "Long Shelf",
        tiers: {
          basic: ["White"],
        },
        glb: "/models/shelves/long shelf.glb",
        position: [-1.2, 1.5, -6.08],
        rotation: [0, 0, 0],
        scale: [0.8, 0.8, 1],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHWYLxyCKT_vHMwr-oslcE1h_9rz6bIBGCTtJ1Os1TA&s",
            color: "#ffffff",
          },
        },
      },
      {
        id: "s2",
        name: "Single Shelf",
        tiers: {
          basic: ["White"],
        },
        glb: "/models/shelves/Short shelf.glb",
        position: [-1.2, 1.3, -6.08],
        rotation: [0, 0, 0],
        scale: [0.8, 0.8, 1],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/904bd32c-0b11-4d6c-bd6a-25d13607ea6b/44308435.jpg?size=pdhism",
            color: "#ffffff",
          },
        },
      },
    ],
  },
];
