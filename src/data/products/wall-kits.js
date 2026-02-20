export const wallKitsCategories = [
  {
    id: "wallsKits",
    // initialAngle: "front",
    label: "Wall Kits",
    // zIndex: "10",
    // shapesAllowed: ["tub", "tub-to-shower"],
    products: [
      {
        id: "wk1",
        name: "MAAX - Harnett",
        tiers: {
          basic: ["White"],
        },
        glb: "/models/wall-kits/maax-harnett.glb",
        position: [0, 0.59, -5.71],
        rotation: [0, 0, 0],
        scale: [1.55, 1, 1.46],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/49c20936-35f0-442b-8822-e37b93fa990f/65294717.jpg?size=pdhism",
            color: "#EDEDED",
          },
        },
      },
      {
        id: "wk2",
        name: "MAAX - Iredell",
        tiers: {
          premium: ["White"],
        },
        glb: "/models/wall-kits/maax-iredell.glb",
        position: [0, 0.59, -5.7],
        rotation: [0, 0, 0],
        scale: [1.58, 1, 1.53],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/f43d50bc-958e-493b-947f-9b4907622f25/65294714.jpg?size=pdhism",
            color: "#ffffff",
          },
        },
      },
      {
        id: "wk3",
        name: "MAAX - Lenoir",
        tiers: {
          standard: ["White"],
        },
        glb: "/models/wall-kits/maax-lenoir.glb",
        position: [0, 0.59, -5.7],
        rotation: [0, 0, 0],
        scale: [1.55, 0.75, 1.41],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/1bdc16f3-9823-4c1f-a8e0-9b9abc9d1210/44058354.jpg?size=pdhism",
            color: "#EDEDED",
          },
        },
      },
      {
        id: "wk4",
        name: "Sterling - Ensemble",
        tiers: {
          premium: ["White"],
        },
        glb: "/models/wall-kits/sterling-ensemble.glb",
        position: [0, 0.59, -5.73],
        rotation: [0, 0, 0],
        scale: [1.735, 1.1, 1.75],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/f55f4266-4319-46ec-a4f4-7f15b558b6ec/03944876.jpg?size=pdhism",
            color: "#EDEDED",
          },
        },
      },
    ],
  },
];
