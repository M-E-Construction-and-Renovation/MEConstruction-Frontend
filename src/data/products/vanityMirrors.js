export const mirrorCategories = [
  {
    id: "mirrors",
    angle: "side",
    label: "Vanity Mirror",
    zIndex: "10",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "vm1",
        name: "Vanity Mirror 1",
        tiers: {
          basic: ["Brown"],
        },
        displayByColor: {
          Brown: {
            productDisplay:
              "/configurator/products/vanity-mirrors/design/mirror-1.png",
            designDisplay:
              "/configurator/products/vanity-mirrors/design/mirror-1.png",
          },
        },
      },
      {
        id: "vm2",
        name: "Vanity Mirror 2",
        tiers: {
          standard: ["Brown"],
        },
        displayByColor: {
          Brown: {
            productDisplay:
              "/configurator/products/vanity-mirrors/design/mirror-2.png",
            designDisplay:
              "/configurator/products/vanity-mirrors/design/mirror-2.png",
          },
        },
      },
    ],
  },
];
