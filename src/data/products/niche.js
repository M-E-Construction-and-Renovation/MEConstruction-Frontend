export const nicheCategories = [
  {
    id: "niche",
    angle: "front",
    label: "Wall Niche",
    zIndex: "50",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "wn1",
        name: "Wall Niche - Square",
        tiers: {
          basic: ["Textured Gray"],
        },
        displayByColor: {
          "Textured Gray": {
            productDisplay:
              "/configurator/products/niche/display/niche-square-display.PNG",
            designDisplay:
              "/configurator/products/niche/design/niche-square.png",
          },
        },
      },
    ],
  },
];
