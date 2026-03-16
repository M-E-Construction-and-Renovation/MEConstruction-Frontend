export const vanityShelvesCategories = [
  {
    id: "vanityShelves",
    label: "Vanity Shelves",
    products: [
      {
        id: "vs1",
        name: "Basic 1",
        allowFlip: true,
        allowPosition: true,
        positionOptions: {
          back: {
            offset: [-0.99, 0, -2.9], // absolute world position on right side wall
            rotation: [0, Math.PI / 2, 0], // facing inward
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -3.5]],
            mirrorCoords: [[-1.17, 1.7, -3.5]],
            lightCoords: [[-1.21, 2.3, -3.45]],
          },
          front: {
            offset: [-0.99, 0, -1.53], // absolute world position on left side wall
            rotation: [0, Math.PI / 2, 0], // facing inward (toward center)
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -2.15]],
            mirrorCoords: [[-1.17, 1.7, -2.1]],
            lightCoords: [[-1.21, 2.3, -2.05]],
          },
        },
        tiers: {
          basic: ["Black"],
        },
        sinkCoords: [[-1.15, 0.85, -3.5]],
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
        allowFlip: true,
        allowPosition: true,
        positionOptions: {
          back: {
            offset: [-0.64, 0, -3.05], // absolute world position on right side wall
            rotation: [0, Math.PI / 2, 0], // facing inward
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -3.53]],
            mirrorCoords: [[-1.17, 1.7, -3.5]],
            lightCoords: [[-1.21, 2.3, -3.45]],
          },
          front: {
            offset: [-0.64, 0, -1.65], // absolute world position on left side wall
            rotation: [0, Math.PI / 2, 0], // facing inward (toward center)
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -2.15]],
            mirrorCoords: [[-1.17, 1.7, -2.1]],
            lightCoords: [[-1.21, 2.3, -2.05]],
          },
        },
        tiers: {
          basic: ["Wood"],
        },
        sinkCoords: [[-1.15, 0.85, -3.49]],
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
        allowFlip: true,
        allowPosition: true,
        positionOptions: {
          back: {
            offset: [-0.64, 0, -3.05], // absolute world position on right side wall
            rotation: [0, Math.PI / 2, 0], // facing inward
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -3.53]],
            mirrorCoords: [[-1.17, 1.7, -3.5]],
            lightCoords: [[-1.21, 2.3, -3.45]],
          },
          front: {
            offset: [-0.64, 0, -1.65], // absolute world position on left side wall
            rotation: [0, Math.PI / 2, 0], // facing inward (toward center)
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -2.15]],
            mirrorCoords: [[-1.17, 1.7, -2.1]],
            lightCoords: [[-1.21, 2.3, -2.05]],
          },
        },
        tiers: {
          standard: ["White"],
        },
        sinkCoords: [[-1.15, 0.85, -3.53]],
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
        allowFlip: true,
        allowPosition: true,
        positionOptions: {
          back: {
            offset: [-0.64, 0, -3.05], // absolute world position on right side wall
            rotation: [0, Math.PI / 2, 0], // facing inward
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -3.54]],
            mirrorCoords: [[-1.17, 1.7, -3.5]],
            lightCoords: [[-1.21, 2.3, -3.45]],
          },
          front: {
            offset: [-0.64, 0, -1.65], // absolute world position on left side wall
            rotation: [0, Math.PI / 2, 0], // facing inward (toward center)
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -2.15]],
            mirrorCoords: [[-1.17, 1.7, -2.1]],
            lightCoords: [[-1.21, 2.3, -2.05]],
          },
        },
        tiers: {
          standard: ["Black/White"],
        },
        sinkCoords: [[-1.15, 0.85, -3.54]],
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
        allowFlip: true,
        allowPosition: true,
        positionOptions: {
          back: {
            offset: [-0.64, 0, -2.85], // absolute world position on right side wall
            rotation: [0, Math.PI / 2, 0], // facing inward
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -3.33]],
            mirrorCoords: [[-1.17, 1.7, -3.3]],
            lightCoords: [[-1.21, 2.3, -3.3]],
          },
          front: {
            offset: [-0.64, 0, -1.65], // absolute world position on left side wall
            rotation: [0, Math.PI / 2, 0], // facing inward (toward center)
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -2.15]],
            mirrorCoords: [[-1.17, 1.7, -2.1]],
            lightCoords: [[-1.21, 2.3, -2.05]],
          },
        },
        tiers: {
          premium: ["Black/Dirty White"],
        },
        sinkCoords: [[-1.15, 0.85, -3.55]],
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
        allowFlip: true,
        allowPosition: true,
        positionOptions: {
          back: {
            offset: [-0.64, 0, -3.05], // absolute world position on right side wall
            rotation: [0, Math.PI / 2, 0], // facing inward
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -3.55]],
            mirrorCoords: [[-1.17, 1.7, -3.5]],
            lightCoords: [[-1.21, 2.3, -3.5]],
          },
          front: {
            offset: [-0.64, 0, -2], // absolute world position on left side wall
            rotation: [0, Math.PI / 2, 0], // facing inward (toward center)
            // scale: [1, 1, 1],
            sinkCoords: [[-1.15, 0.85, -2.5]],
            mirrorCoords: [[-1.17, 1.7, -2.5]],
            lightCoords: [[-1.21, 2.3, -2.5]],
          },
        },
        tiers: {
          premium: ["Black/Gray"],
        },
        sinkCoords: [[-1.15, 0.85, -3.55]],
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
        allowFlip: true,
        allowPosition: true,
        positionOptions: {
          back: {
            offset: [-0.64, 0, -2.85], // absolute world position on right side wall
            rotation: [0, Math.PI / 2, 0], // facing inward
            // scale: [1, 1, 1],
            sinkCoords: [
              [-1.17, 0.85, -3.3],
              [-1.17, 0.85, -3.8],
            ],
            mirrorCoords: [[-1.17, 1.7, -3.5]],
            lightCoords: [[-1.21, 2.3, -3.55]],
          },
          front: {
            offset: [-0.64, 0, -1.65], // absolute world position on left side wall
            rotation: [0, Math.PI / 2, 0], // facing inward (toward center)
            // scale: [1, 1, 1],
            sinkCoords: [
              [-1.17, 0.85, -2.1],
              [-1.17, 0.85, -2.6],
            ],
            mirrorCoords: [[-1.17, 1.7, -2.3]],
            lightCoords: [[-1.21, 2.3, -2.35]],
          },
        },
        tiers: {
          premium: ["Blue"],
        },
        // ONLY FOR VANITY SHELVES THAT HAS MORE THAN ONE SINK FAUCETS
        sinkCoords: [
          [-1.17, 0.85, -3.3], // Left Faucet Position
          [-1.17, 0.85, -3.8], // Right Faucet Position
        ],
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
      {
        id: "vs9",
        name: "OVE Decors - Tahoe",
        allowFlip: true,
        allowPosition: true,
        positionOptions: {
          back: {
            offset: [-0.91, 0, -3.5], // absolute world position on right side wall
            rotation: [0, Math.PI / 2, 0], // facing inward
            // scale: [1, 1, 1],
            sinkCoords: [
              [-1.1, 0.87, -3.11],
              [-1.1, 0.87, -3.89],
            ],
            mirrorCoords: [[-1.17, 1.7, -3.5]],
            lightCoords: [[-1.21, 2.3, -3.4]],
          },
          front: {
            offset: [-0.91, 0, -2.3], // absolute world position on left side wall
            rotation: [0, Math.PI / 2, 0], // facing inward (toward center)
            // scale: [1, 1, 1],
            sinkCoords: [
              [-1.1, 0.87, -2.7],
              [-1.1, 0.87, -1.93],
            ],
            mirrorCoords: [[-1.17, 1.7, -2.3]],
            lightCoords: [[-1.21, 2.3, -2.3]],
          },
        },
        tiers: {
          premium: ["White"],
        },
        // ONLY FOR VANITY SHELVES THAT HAS MORE THAN ONE SINK FAUCETS
        sinkCoords: [
          [-1.1, 0.87, -3.11], // Left Faucet Position
          [-1.1, 0.87, -3.89], // Right Faucet Position
        ],
        glb: "/models/vanity-shelves/ove-decors-tahoe.glb",
        // position: [-0.91, 0, -2.5],
        position: [-0.91, 0, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [0.7, 1, 1],
        roughness: 1, // glossy ceramic
        metalness: 0, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/60e1feb5-1b00-49cf-a90f-9572c031569a/67968168.jpeg?size=pdhz",
            color: "",
            displayColor: "#ffffff",
          },
        },
      },
    ],
  },
];
