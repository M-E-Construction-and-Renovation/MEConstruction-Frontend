export const wallsCategories = [
  {
    id: "wallTexture",
    label: "Bathroom Wall",
    isTexture: true,
    products: [
      {
        id: "w1",
        name: "Marble Wall Tile",
        tiers: {
          basic: ["White"],
        },
        normalMap: "/textures/walls/wall_tile_2/Marble012_2K-JPG_NormalGL.jpg",
        roughnessMap:
          "/textures/walls/wall_tile_2/Marble012_2K-JPG_Roughness.jpg",
        displayByColor: {
          White: {
            productDisplay:
              "/textures/walls/wall_tile_2/Marble012_2K-JPG_Color.jpg",
            color: "/textures/walls/wall_tile_2/Marble012_2K-JPG_Color.jpg",
          },
        },
      },
      {
        id: "w2",
        name: "Travertine Wall Tile",
        tiers: {
          standard: ["Sand"],
        },
        normalMap:
          "/textures/walls/wall_tile_3/Travertine009_2K-JPG_NormalGL.jpg",
        roughnessMap:
          "/textures/walls/wall_tile_3/Travertine009_2K-JPG_Roughness.jpg",
        displayByColor: {
          Sand: {
            productDisplay:
              "/textures/walls/wall_tile_3/Travertine009_2K-JPG_Color.jpg",
            color: "/textures/walls/wall_tile_3/Travertine009_2K-JPG_Color.jpg",
          },
        },
      },
      {
        id: "w3",
        name: "Marble Wall Tile",
        tiers: {
          premium: ["Black"],
        },
        normalMap: "/textures/walls/wall_tile_4/Marble016_2K-JPG_NormalGL.jpg",
        roughnessMap:
          "/textures/walls/wall_tile_4/Marble016_2K-JPG_Roughness.jpg",
        displayByColor: {
          Black: {
            productDisplay:
              "/textures/walls/wall_tile_4/Marble016_2K-JPG_Color.jpg",
            color: "/textures/walls/wall_tile_4/Marble016_2K-JPG_Color.jpg",
          },
        },
      },
      {
        id: "w4",
        name: "Onyx  Wall Tile",
        tiers: {
          premium: ["Cream"],
        },
        normalMap: "/textures/walls/wall_tile_5/Onyx001_2K-JPG_NormalGL.jpg",
        roughnessMap:
          "/textures/walls/wall_tile_5/Onyx001_2K-JPG_Roughness.jpg",
        displayByColor: {
          Cream: {
            productDisplay:
              "/textures/walls/wall_tile_5/Onyx001_2K-JPG_Color.jpg",
            color: "/textures/walls/wall_tile_5/Onyx001_2K-JPG_Color.jpg",
          },
        },
      },
    ],
  },
];
