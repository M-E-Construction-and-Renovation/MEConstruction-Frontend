export const wallsCategories = [
  {
    id: "walls",
    initialAngle: "front",
    label: "Walls",
    zIndex: "10",
    shapesAllowed: ["tub", "tub-to-shower"],
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
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/walls/genova-white.png",
              },
            },
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
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/walls/napoli-white.png",
              },
            },
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
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/walls/palermo-white.png",
              },
            },
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
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/walls/stackered-white.jpg",
              },
            },
          },
        },
      },
      {
        id: "w5",
        name: "Tub Wall Kit",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay: "/configurator/products/walls/wall-kit-white.png",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/walls/wall-kit-white.png",
              },
            },
          },
        },
      },
    ],
  },
  {
    id: "showerWalls",
    initialAngel: "front",
    label: "Walls",
    zIndex: "10",
    shapesAllowed: ["curved", "neo-angle", "alcove"],
    products: [
      {
        id: "sw1",
        name: "Staggered",
        tiers: {
          premium: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/walls/display/staggered-display.PNG",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/walls/shower-staggered-white.png",
              },
            },
          },
        },
      },
      {
        id: "sw2",
        name: "Small Grid",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/walls/display/small-grid-display.PNG",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/walls/shower-napoli-white.png",
              },
            },
          },
        },
      },
      {
        id: "sw3",
        name: "Grid",
        tiers: {
          standard: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/walls/display/grid-display.PNG",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/walls/shower-palermo-white.png",
              },
            },
          },
        },
      },
      {
        id: "sw4",
        name: "Stacked",
        tiers: {
          premium: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/walls/display/stacked-display.PNG",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/walls/shower-stacked-white.png",
              },
            },
          },
        },
      },
    ],
  },
];
