export const wainscotingsCategories = [
  {
    id: "wainscotings",
    label: "Wainscotings",
    zIndex: "70",
    shapesAllowed: ["tub", "tub-to-shower"],
    products: [
      {
        id: "wsc1",
        name: "Tile Wainscoting",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/walls/display/grid-display.PNG",
            designDisplay:
              "/configurator/products/wainscotings/wainscoting2.png",
          },
        },
      },

      {
        id: "wsc2",
        name: "Breadboard Wainscoting",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "https://www.cherokeewood.com/wp-content/uploads/2016/09/wainscoting-bead-board.jpg",
            designDisplay:
              "/configurator/products/wainscotings/wainscoting1.png",
          },
        },
      },
    ],
  },
  {
    id: "showerWainscotings",
    label: "Wainscotings",
    zIndex: "70",
    shapesAllowed: ["curved", "neo-angle", "alcove"],
    products: [
      {
        id: "swsc1",
        name: "Tile Wainscoting",
        tiers: {
          standard: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/walls/display/grid-display.PNG",
            designDisplay:
              "/configurator/products/wainscotings/shower-wainscoting-tile-white.png",
          },
        },
      },
    ],
  },
];
