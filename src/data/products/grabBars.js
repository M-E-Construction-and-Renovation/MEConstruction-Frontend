export const grabBarsCategories = [
  {
    id: "grabBars",
    angle: "front",
    label: "Grab Bars",
    zIndex: "50",
    shapesAllowed: ["tub", "tub-to-shower"],
    products: [
      {
        id: "gb1",
        name: "Flara - Moen",
        tiers: {
          basic: ["Chrome"],
          standard: ["Brushed Nickel"],
          premium: ["Polished Nickel"],
        },
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://embed.widencdn.net/img/moen/vpjoptoh0i/y400px@1x/yg0312ch.tif.jpg?q=100",
            designDisplay:
              "/configurator/products/accessories/flara-chrome.png",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://embed.widencdn.net/img/moen/vacgnik4i6/y400px@1x/yg0312bn.tif.jpg?q=100",
            designDisplay:
              "/configurator/products/accessories/flara-brushed-nickel.png",
          },
          "Polished Nickel": {
            productDisplay:
              "https://embed.widencdn.net/img/moen/uisofrc6rx/y400px@1x/yg0312nl.tif.jpg?q=100",
            designDisplay:
              "/configurator/products/accessories/flara-brushed-nickel.png",
          },
        },
      },
    ],
  },
];
