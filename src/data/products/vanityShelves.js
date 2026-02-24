export const vanityShelvesCategories = [
  {
    id: "vanitiyShelves",
    // initialAngle: "side",
    label: "Vanity Shelves",
    // zIndex: "10",
    // shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "vs1",
        name: "Basic 1",
        tiers: {
          basic: ["Black"],
        },
        glb: "/models/vanity-shelves/Basic_type_A.glb",
        position: [-0.99, 0, -2.9],
        rotation: [0, Math.PI / 2, 0],
        roughness: 1, // glossy ceramic
        metalness: 0, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Black: {
            productDisplay: "/images/display/vanity-shelves/vs1-gray.PNG",
            color: "",
            displayColor: "#7D7D7D",
          },
        },
      },
      {
        id: "vs2",
        name: "Basic 2",
        tiers: {
          basic: ["Wood"],
        },
        glb: "/models/vanity-shelves/Basic_type_B.glb",
        position: [-0.6, 0, -3],
        rotation: [0, Math.PI / 2, 0],
        roughness: 1, // glossy ceramic
        metalness: 0, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Wood: {
            productDisplay: "/images/display/vanity-shelves/vs2-wood.PNG",
            color: "",
            displayColor: "#D2A683",
          },
        },
      },
      {
        id: "vs3",
        name: "Standard 1",
        tiers: {
          standard: ["White"],
        },
        glb: "/models/vanity-shelves/Standard_type_A.glb",
        position: [-0.64, 0, -3.05],
        rotation: [0, Math.PI / 2, 0],
        roughness: 1, // glossy ceramic
        metalness: 0, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay: "/images/display/vanity-shelves/vs3-white.PNG",
            color: "",
            displayColor: "#ffffff",
          },
        },
      },
      {
        id: "vs4",
        name: "Standard 2",
        tiers: {
          standard: ["Black/White"],
        },
        glb: "/models/vanity-shelves/Standard_type_B.glb",
        position: [-0.64, 0, -3.05],
        rotation: [0, Math.PI / 2, 0],
        roughness: 1, // glossy ceramic
        metalness: 0, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          "Black/White": {
            productDisplay: "/images/display/vanity-shelves/vs4-white.PNG",
            color: "",
            displayColor: "#ffffff",
          },
        },
      },
      {
        id: "vs5",
        name: "Premium 1",
        tiers: {
          premium: ["Black/Dirty White"],
        },
        glb: "/models/vanity-shelves/Premium_type_A.glb",
        position: [-0.64, 0, -3.05],
        rotation: [0, Math.PI / 2, 0],
        roughness: 1, // glossy ceramic
        metalness: 0, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          "Black/Dirty White": {
            productDisplay: "/images/display/vanity-shelves/vs5-white.PNG",
            color: "",
            displayColor: "#ffffff",
          },
        },
      },
      {
        id: "vs6",
        name: "Premium 2",
        tiers: {
          premium: ["Black/Gray"],
        },
        glb: "/models/vanity-shelves/Premium_type_B.glb",
        position: [-0.64, 0, -3.05],
        rotation: [0, Math.PI / 2, 0],
        roughness: 1, // glossy ceramic
        metalness: 0, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          "Black/Gray": {
            productDisplay: "/images/display/vanity-shelves/vs6-gray.PNG",
            color: "",
            displayColor: "#808080",
          },
        },
      },
      {
        id: "vs8",
        name: "Premium 3",
        tiers: {
          premium: ["Blue"],
        },
        glb: "/models/vanity-shelves/Premium_type_C.glb",
        position: [-0.64, 0, -2.85],
        rotation: [0, Math.PI / 2, 0],
        roughness: 1, // glossy ceramic
        metalness: 0, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Blue: {
            productDisplay: "/images/display/vanity-shelves/vs7-blue.PNG",
            color: "",
            displayColor: "#0000FF",
          },
        },
      },
    ],
  },
];
