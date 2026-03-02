export const sinkFaucetCategories = [
  {
    id: "sinkFaucets",
    label: "Sink Faucets",
    products: [
      {
        id: "sf1",
        name: "Peerless - Widespread",
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
          premium: ["Black"],
        },
        glb: "/models/sink-faucets/sink-faucet-1.glb",
        position: [-1.15, 0.85, -3.5],
        rotation: [0, Math.PI / 2, 0],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://media.peerlessfaucet.com/elvis/OnWhite/md/P3573LF-B1.png",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Black: {
            productDisplay:
              "https://media.peerlessfaucet.com/elvis/InContext/md/P3573LF-BL_PACKAGING_WEB.jpg",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "sf2",
        name: "Kohler - Tempered",
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
          standard: ["Brushed Nickel"],
          premium: ["Black"],
        },
        glb: "/models/sink-faucets/sink-faucet-2.glb",
        position: [-1.15, 0.85, -3.5],
        rotation: [0, Math.PI / 2, 0],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/aag09609_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Black: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/aag09629_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/aag09619_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#EADDCA",
            displayColor: "#EADDCA",
          },
        },
      },
      {
        id: "sf3",
        name: "Delta - Centerset",
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
          standard: ["Champagne Bronze"],
          premium: ["Black"],
        },
        glb: "/models/sink-faucets/sink-faucet-3.glb",
        position: [-1.15, 0.85, -3.5],
        rotation: [0, Math.PI / 2, 0],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://www.deltafaucet.com/dw/image/v2/BFJJ_PRD/on/demandware.static/-/Sites-delta-master-catalog/default/dwb9114ca6/images/large/2533LF-MPU-B1.png?sw=100&sh=100&sm=fit",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Black: {
            productDisplay:
              "https://www.deltafaucet.com/dw/image/v2/BFJJ_PRD/on/demandware.static/-/Sites-delta-master-catalog/default/dwa2e645eb/images/large/2533LF-BLMPU-B1.png?sw=100&sh=100&sm=fit",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          "Champagne Bronze": {
            productDisplay:
              "https://www.deltafaucet.com/dw/image/v2/BFJJ_PRD/on/demandware.static/-/Sites-delta-master-catalog/default/dwfcd1e190/images/large/2533LF-CZMPU-B1.png?sw=100&sh=100&sm=fit",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "sf4",
        name: "Kohler - Simplice",
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
          standard: ["Brushed Nickel"],
          premium: ["Black"],
        },
        glb: "/models/sink-faucets/sink-faucet-4.glb",
        position: [-1.15, 0.85, -3.5],
        rotation: [0, Math.PI / 2, 0],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dw3bd76b5c/images/007/59/7592068-1.jpg?sw=1000&sh=1000&sm=fit",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Black: {
            productDisplay:
              "https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dw5b87e5f2/images/007/59/7592076-1.jpg?sw=1000&sh=1000&sm=fit",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dw78cfff54/images/007/59/7592084-1.jpg?sw=1000&sh=1000&sm=fit",
            color: "#EADDCA",
            displayColor: "#EADDCA",
          },
        },
      },
      {
        id: "sf5",
        name: "Kohler - Devonshire",
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
          premium: ["Brushed Nickel"],
        },
        glb: "/models/sink-faucets/sink-faucet-5.glb",
        position: [-1.15, 0.85, -3.5],
        rotation: [0, Math.PI / 2, 0],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/a2884905-3908-42fe-9aa4-139f4235e186/80391585.jpeg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/b7db8805-3c44-4593-a2af-2293a5ed6548/80391598.jpeg?size=pdhz",
            color: "#EADDCA",
            displayColor: "#EADDCA",
          },
        },
      },
      {
        id: "sf6",
        name: "Delta - Tetra",
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
          standard: ["Black"],
          premium: ["Champagne Bronze"],
        },
        glb: "/models/sink-faucets/sink-faucet-6.glb",
        position: [-1.15, 0.85, -3.5],
        rotation: [0, Math.PI / 2, 0],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://m.media-amazon.com/images/I/61eBZj7e-XL._AC_SX679_.jpg",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Black: {
            productDisplay:
              "https://m.media-amazon.com/images/I/51gUTzIuWdL._AC_SX679_.jpg",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          "Champagne Bronze": {
            productDisplay:
              "https://m.media-amazon.com/images/I/61ATB1YL8FL._AC_SX679_.jpg",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "sf7",
        name: "Kingston - Sona",
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
          standard: ["Black"],
          premium: ["Brushed Nickel"],
        },
        glb: "/models/sink-faucets/sink-faucet-7.glb",
        position: [-1.15, 0.85, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [-1, 1, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://www.kingstonbrass.com/cdn/shop/files/FSC8931CML.jpg?v=1768326950",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Black: {
            productDisplay:
              "https://www.kingstonbrass.com/cdn/shop/files/FSC8930CML.jpg?v=1768326948",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://www.kingstonbrass.com/cdn/shop/files/FSC8938CML.jpg?v=1768326944",
            color: "#EADDCA",
            displayColor: "#EADDCA",
          },
        },
      },
    ],
  },
];
