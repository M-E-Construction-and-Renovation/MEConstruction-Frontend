export const wallsCategories = [
  {
    id: "walls",
    label: "Walls",
    zIndex: "10",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "w1",
        name: "Staggered",
        tiers: {
          premium: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/walls/display/staggered-display.PNG",
            designDisplay: "/configurator/products/walls/genova-white.png",
          },
        },
      },
      {
        id: "w2",
        name: "Small Grid",
        tiers: {
          standard: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/walls/display/small-grid-display.PNG",
            designDisplay: "/configurator/products/walls/napoli-white.png",
          },
        },
      },
      {
        id: "w3",
        name: "Grid",
        tiers: {
          standard: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/walls/display/grid-display.PNG",
            designDisplay: "/configurator/products/walls/palermo-white.png",
          },
        },
      },
      {
        id: "w4",
        name: "Stacked",
        tiers: {
          premium: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/walls/display/stacked-display.PNG",
            designDisplay: "/configurator/products/walls/stackered-white.jpg",
          },
        },
      },
    ],
  },
];
