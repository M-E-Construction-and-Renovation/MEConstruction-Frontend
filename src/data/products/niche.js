export const nicheCategories = [
  {
    id: "niche",
    initialAngle: "front",
    label: "Wall Niche",
    zIndex: "50",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "wn1",
        name: "Middle Wall Niche - Square",
        tiers: {
          basic: ["Textured Gray"],
        },
        displayByColor: {
          "Textured Gray": {
            productDisplay:
              "/configurator/products/niche/display/niche-square-display.PNG",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/niche/design/niche-square-middle.png",
              },
            },
          },
        },
      },
      {
        id: "wn2",
        name: "Side Wall Niche - Square",
        tiers: {
          basic: ["Textured Gray"],
        },
        displayByColor: {
          "Textured Gray": {
            productDisplay:
              "/configurator/products/niche/display/niche-square-display.PNG",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/niche/design/niche-square-side.png",
              },
            },
          },
        },
      },
    ],
  },
];
