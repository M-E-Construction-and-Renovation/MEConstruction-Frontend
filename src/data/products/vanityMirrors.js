export const mirrorCategories = [
  {
    id: "mirrors",
    initialAngle: "side",
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
            designDisplay: {
              side: {
                initialPosition:
                  "/configurator/products/vanity-mirrors/design/mirror-1.png",
                invertedPosition:
                  "/configurator/products/vanity-mirrors/design/mirror-1-inverted.png",
              },
            },
          },
        },
      },
      {
        id: "vm2",
        name: "Vanity Mirror 2",
        tiers: {
          basic: ["Brown"],
        },
        displayByColor: {
          Brown: {
            productDisplay:
              "/configurator/products/vanity-mirrors/design/basic-2.png",
            designDisplay: {
              side: {
                initialPosition:
                  "/configurator/products/vanity-mirrors/design/basic-2.png",
                invertedPosition:
                  "/configurator/products/vanity-mirrors/design/basic-2-inverted.png",
              },
            },
          },
        },
      },
      {
        id: "vm3",
        name: "Vanity Mirror 3",
        tiers: {
          basic: ["Brown"],
        },
        displayByColor: {
          Brown: {
            productDisplay:
              "/configurator/products/vanity-mirrors/design/basic-3.png",
            designDisplay: {
              side: {
                initialPosition:
                  "/configurator/products/vanity-mirrors/design/basic-3.png",
                invertedPosition:
                  "/configurator/products/vanity-mirrors/design/basic-3-inverted.png",
              },
            },
          },
        },
      },
      {
        id: "vm4",
        name: "Vanity Mirror 4",
        tiers: {
          standard: ["Brown"],
        },
        displayByColor: {
          Brown: {
            productDisplay:
              "/configurator/products/vanity-mirrors/design/mirror-2.png",
            designDisplay: {
              side: {
                initialPosition:
                  "/configurator/products/vanity-mirrors/design/mirror-2.png",
                invertedPosition:
                  "/configurator/products/vanity-mirrors/design/mirror-2-inverted.png",
              },
            },
          },
        },
      },
      {
        id: "vm5",
        name: "Vanity Mirror 5",
        tiers: {
          standard: ["Brown"],
        },
        displayByColor: {
          Brown: {
            productDisplay:
              "/configurator/products/vanity-mirrors/design/standard-2.png",
            designDisplay: {
              side: {
                initialPosition:
                  "/configurator/products/vanity-mirrors/design/standard-2.png",
                invertedPosition:
                  "/configurator/products/vanity-mirrors/design/standard-2-inverted.png",
              },
            },
          },
        },
      },
      {
        id: "vm6",
        name: "Vanity Mirror 6",
        tiers: {
          premium: ["Brown"],
        },
        displayByColor: {
          Brown: {
            productDisplay:
              "/configurator/products/vanity-mirrors/design/premium-1.png",
            designDisplay: {
              side: {
                initialPosition:
                  "/configurator/products/vanity-mirrors/design/premium-1.png",
                invertedPosition:
                  "/configurator/products/vanity-mirrors/design/premium-1-inverted.png",
              },
            },
          },
        },
      },
    ],
  },
];
