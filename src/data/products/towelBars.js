export const towelBars = [
  {
    id: "towelBars",
    label: "Towel Bars",
    zIndex: "50",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "tb1",
        name: "Square Towel Bar",
        tiers: {
          basic: ["Chrome"],
          standard: ["Brass"],
          premium: ["Black"],
        },
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/23285-CP_ISO_d2c0076888_rgb}&$PDPDesktopSQ$&fmt=webp",
            designDisplay:
              "/configurator/products/towel-bars/design/towel-bar-1-chrome.png",
          },
          Brass: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/23285-2MB_ISO_d2c0076824_rgb}&$PDPDesktopSQ$&fmt=webp",
            designDisplay:
              "/configurator/products/towel-bars/design/towel-bar-1-brass.png",
          },
          Black: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/23285-BL_ISO_d2c0076851_rgb}&$PDPDesktopSQ$&fmt=webp",
            designDisplay:
              "/configurator/products/towel-bars/design/towel-bar-1-black.png",
          },
        },
      },
    ],
  },
];
