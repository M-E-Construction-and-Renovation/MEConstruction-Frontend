export const lightsCategories = [
  {
    id: "lights",
    angle: "side",
    label: "Vanity Light",
    zIndex: "10",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "vl1",
        name: "Vanity Light 1",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/vanity-lights/design/basic-1.png",
            designDisplay:
              "/configurator/products/vanity-lights/design/basic-1.png",
          },
        },
      },
      {
        id: "vl2",
        name: "Vanity Light 2",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/vanity-lights/design/basic-2.png",
            designDisplay:
              "/configurator/products/vanity-lights/design/basic-2.png",
          },
        },
      },
      {
        id: "vl3",
        name: "Vanity Light 3",
        tiers: {
          standard: ["Brown"],
        },
        displayByColor: {
          Brown: {
            productDisplay:
              "/configurator/products/vanity-lights/design/standard-1.png",
            designDisplay:
              "/configurator/products/vanity-lights/design/standard-1.png",
          },
        },
      },
      {
        id: "vl4",
        name: "Vanity Light 4",
        tiers: {
          premium: ["Brown"],
        },
        displayByColor: {
          Brown: {
            productDisplay:
              "/configurator/products/vanity-lights/design/premium-1.png",
            designDisplay:
              "/configurator/products/vanity-lights/design/premium-1.png",
          },
        },
      },
      {
        id: "vl5",
        name: "Vanity Light 5",
        tiers: {
          premium: ["Brown"],
        },
        displayByColor: {
          Brown: {
            productDisplay:
              "/configurator/products/vanity-lights/design/premium-2.png",
            designDisplay:
              "/configurator/products/vanity-lights/design/premium-2.png",
          },
        },
      },
    ],
  },
];
