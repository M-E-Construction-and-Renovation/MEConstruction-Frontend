export const wallsCategories = [
  {
    id: "wallTexture",
    label: "Bathroom Wall",
    isTexture: true,
    products: [
      {
        id: "w1",
        name: "Marble Wall Tile 1",
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
    ],
  },
];
