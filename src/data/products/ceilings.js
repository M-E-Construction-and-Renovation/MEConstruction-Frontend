export const ceilingsCategories = [
  {
    id: "ceilings",
    initialAngle: "front",
    label: "Ceilings",
    zIndex: "20",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "c1",
        name: "Smooth Tile Ceiling",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay: "/configurator/products/ceilings/ceiling1.png",
            designDisplay: {
              front: {
                initialPosition: "/configurator/products/ceilings/ceiling1.png",
              },
            },
          },
        },
      },

      {
        id: "c2",
        name: "Coffered Ceiling",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay: "/configurator/products/ceilings/ceiling2.png",
            designDisplay: {
              front: {
                initialPosition: "/configurator/products/ceilings/ceiling2.png",
              },
            },
          },
        },
      },
    ],
  },
];
