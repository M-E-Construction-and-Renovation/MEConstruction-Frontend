export const tubFrontsCategories = [
  {
    id: "tubFronts",
    initialAngle: "front",
    label: "Tub Fronts",
    zIndex: "75",
    shapesAllowed: ["tub"],
    products: [
      {
        id: "tf1",
        name: "Princeton - American Standard",
        tiers: {
          basic: ["White"], // Your images were only White
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/tubfronts/design/princeton-white.png",
            designDisplay: {
              front:
                "/configurator/products/tubfronts/design/princeton-white.png",
            },
          },
        },
      },

      {
        id: "tf2",
        name: "Pro Steel - MAAX",
        tiers: {
          standard: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/tubfronts/design/prosteel-white.png",
            designDisplay: {
              front:
                "/configurator/products/tubfronts/design/prosteel-white.png",
            },
          },
        },
      },
      {
        id: "tf3",
        name: "Villager - Kohler",
        tiers: {
          premium: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/tubfronts/design/villager-white.png",
            designDisplay: {
              front:
                "/configurator/products/tubfronts/design/villager-white.png",
            },
          },
        },
      },
    ],
  },
];
