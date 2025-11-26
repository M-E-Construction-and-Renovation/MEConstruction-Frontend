export const wainscotingsCategories = [
  {
    id: "wainscotings",
    label: "Wainscotings",
    zIndex: "70",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
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
];
