export const shelvesCategories = [
  {
    id: "shelves",
    label: "Shelves",
    zIndex: "50",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "s1",
        name: "Single Shelf",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/accessories/display/single-shelf-white-display.png",
            designDisplay:
              "/configurator/products/accessories/left/single-shelf-left-white.png",
          },
        },
      },
      {
        id: "s2",
        name: "Shelf",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/accessories/display/shelf-white-display.png",
            designDisplay:
              "/configurator/products/accessories/left/shelf-left-white.png",
          },
        },
      },
    ],
  },
];
