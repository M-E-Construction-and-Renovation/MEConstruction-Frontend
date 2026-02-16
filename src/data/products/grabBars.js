export const grabBarsCategories = [
  {
    id: "grabBars",
    // initialAngle: "front",
    label: "Grab Bars",
    // zIndex: "50",
    // shapesAllowed: ["tub", "tub-to-shower"],
    // isDraggable: true,
    products: [
      {
        id: "gb1",
        name: "Flara - Moen",
        tiers: {
          basic: ["Chrome"],
          standard: ["Brushed Nickel"],
          premium: ["Polished Nickel"],
        },
        glb: "/models/grab-bars/grab_bar_1.glb",
        position: [-0.35, 0.7, -6.21],
        rotation: [0, 0, 0],
        roughness: 0.35, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.12, // glazed surface
        clearcoatRoughness: 0.5,
        envMapIntensity: 1, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://embed.widencdn.net/img/moen/vpjoptoh0i/y400px@1x/yg0312ch.tif.jpg?q=100",
            color: "#ffffff",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://embed.widencdn.net/img/moen/vacgnik4i6/y400px@1x/yg0312bn.tif.jpg?q=100",
            color: "#EADDCA",
          },
          "Polished Nickel": {
            productDisplay:
              "https://embed.widencdn.net/img/moen/uisofrc6rx/y400px@1x/yg0312nl.tif.jpg?q=100",
            color: "#FFFFF0",
          },
        },
      },
      {
        id: "gb2",
        name: "Align Designer - Moen",
        tiers: {
          basic: ["Chrome"],
          standard: ["Brushed Nickel"],
          premium: ["Gold", "Black"],
        },
        glb: "/models/grab-bars/grab_bar_2.glb",
        position: [-0.35, 0.7, -6.15],
        rotation: [0, 0, 0],
        roughness: 0.35, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.12, // glazed surface
        clearcoatRoughness: 0.5,
        envMapIntensity: 1, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://embed.widencdn.net/img/moen/x52u9ul1v6/515x515px/YG0424CH.tif.jpg?q=90",
            color: "#ffffff",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://embed.widencdn.net/img/moen/zqeyacruup/515x515px/YG0424BN.tif.jpg?q=90",
            color: "#EADDCA",
          },
          Gold: {
            productDisplay:
              "https://embed.widencdn.net/img/moen/hxj1aq22d7/515x515px/YG0424BG.tif.jpg?q=90",
            color: "#F7E7CE",
          },
          Black: {
            productDisplay:
              "https://embed.widencdn.net/img/moen/6sotd0avsg/515x515px/YG0424BL.tif.jpg?q=90",
            color: "#7D7D7D",
          },
        },
      },
      {
        id: "gb3",
        name: "Home Care Designer - Moen",
        tiers: {
          basic: ["Chrome"],
          standard: ["Brushed Nickel"],
          premium: ["Bronze"],
        },
        glb: "/models/grab-bars/grab_bar_3.glb",
        position: [-0.45, 0.7, -6.21],
        rotation: [0, 0, 0],
        scale: [0.7, 0.7, 0.7],
        roughness: 0.35, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.12, // glazed surface
        clearcoatRoughness: 0.5,
        envMapIntensity: 1, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://embed.widencdn.net/img/moen/xyamlbofsm/515x515px/LR8724D3GCH.tif.jpg?q=90",
            color: "#ffffff",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://embed.widencdn.net/img/moen/wkomcvtf2f/515x515px/LR8724D3GBN.tif.jpg?q=90",
            color: "#EADDCA",
          },
          Bronze: {
            productDisplay:
              "https://embed.widencdn.net/img/moen/z1djguttov/515x515px/LR8724D3GOWB.tif.jpg?q=90",
            color: "#C19A6B",
          },
        },
      },
    ],
  },
];
