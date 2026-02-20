export const cabinWallsCategories = [
  {
    id: "cabinWallTexture",
    // initialAngle: "front",
    label: "Cabin Walls",
    isTexture: true,
    // zIndex: "10",
    // shapesAllowed: ["tub", "tub-to-shower"],
    products: [
      {
        id: "cw1",
        name: "Tile 1",
        tiers: {
          basic: ["Light Blue"],
        },
        normalMap:
          "/textures/cabin_walls/cabin_wall_2/Tiles030_2K-JPG_NormalGL.jpg",
        roughnessMap:
          "/textures/cabin_walls/cabin_wall_2/Tiles030_2K-JPG_Roughness.jpg",
        displayByColor: {
          "Light Blue": {
            productDisplay:
              "/textures/cabin_walls/cabin_wall_2/Tiles030_2K-JPG_Color.jpg",
            color:
              "/textures/cabin_walls/cabin_wall_2/Tiles030_2K-JPG_Color.jpg",
          },
        },
      },
      {
        id: "cw2",
        name: "Tile 2",
        tiers: {
          standard: ["Small Blue"],
        },
        normalMap:
          "/textures/cabin_walls/cabin_wall_3/Tiles035_2K-JPG_NormalGL.jpg",
        roughnessMap:
          "/textures/cabin_walls/cabin_wall_3/Tiles035_2K-JPG_Roughness.jpg",
        displayByColor: {
          "Small Blue": {
            productDisplay:
              "/textures/cabin_walls/cabin_wall_3/Tiles035_2K-JPG_Color.jpg",
            color:
              "/textures/cabin_walls/cabin_wall_3/Tiles035_2K-JPG_Color.jpg",
          },
        },
      },
      {
        id: "cw3",
        name: "Tile 3",
        tiers: {
          premium: ["Beige"],
        },
        normalMap:
          "/textures/cabin_walls/cabin_wall_4/Tiles109_2K-JPG_NormalGL.jpg",
        roughnessMap:
          "/textures/cabin_walls/cabin_wall_4/Tiles109_2K-JPG_Roughness.jpg",
        displayByColor: {
          Beige: {
            productDisplay:
              "/textures/cabin_walls/cabin_wall_4/Tiles109_2K-JPG_Color.jpg",
            color:
              "/textures/cabin_walls/cabin_wall_4/Tiles109_2K-JPG_Color.jpg",
          },
        },
      },
      {
        id: "cw4",
        name: "Tile 4",
        tiers: {
          premium: ["White"],
        },
        normalMap:
          "/textures/cabin_walls/cabin_wall_5/Tiles040_2K-JPG_NormalGL.jpg",
        roughnessMap:
          "/textures/cabin_walls/cabin_wall_5/Tiles040_2K-JPG_Roughness.jpg",
        displayByColor: {
          White: {
            productDisplay:
              "/textures/cabin_walls/cabin_wall_5/Tiles040_2K-JPG_Color.jpg",
            color:
              "/textures/cabin_walls/cabin_wall_5/Tiles040_2K-JPG_Color.jpg",
          },
        },
      },
    ],
  },
];
