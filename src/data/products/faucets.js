export const faucetsCategories = [
  {
    id: "faucets",
    label: "Faucets",
    zIndex: "80",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "f1",
        name: "Foundations - Delta",
        // image:
        //   "/configurator/products/faucets/display/foundations-display.webp",
        tiers: {
          basic: ["Chrome", "Stainless"],
          // standard: [],
        },
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/0377a656-7a4c-4570-aca2-440e3a266b81/65088340.png?size=pdhz",
            designDisplay:
              "/configurator/products/faucets/left/foundations-left-chrome.png",
          },
          Stainless: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/1a3c2775-7efd-4a19-918d-6b9170970f6f/65088348.png?size=pdhz",
            designDisplay:
              "/configurator/products/faucets/left/foundations-left-stainless.png",
          },
        },
      },
      {
        id: "f2",
        name: "Florez - Kohler",
        tiers: {
          basic: ["Brushed Nickel"],
          standard: ["Black"],
          premium: ["Polished Nickel"],
        },
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/65229ad1-2bcc-4fbb-b7bd-48127b1dbe17/66591679.jpeg?size=pdhz",
            designDisplay:
              "/configurator/products/faucets/left/florez-left-brushed-nickel.png",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/1632f398-c4e0-4062-85b2-f3860702bef6/66591675.jpeg?size=pdhz",
            designDisplay:
              "/configurator/products/faucets/left/florez-left-black.png",
          },

          "Polished Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/9486735c-f164-492e-8a30-c55dee7d6a1f/66574639.jpeg?size=pdhz",
            designDisplay:
              "/configurator/products/faucets/left/florez-left-chrome.png",
          },
        },
      },
      {
        id: "f3",
        name: "Premise - Kohler",
        tiers: {
          basic: ["Brushed Brass"],
          standard: ["Brushed Nickel"],
          premium: ["Black"],
        },
        displayByColor: {
          "Brushed Brass": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/bbcb3534-1a69-497c-81bc-63421063a484/65496028.jpg?size=pdhz",
            designDisplay:
              "/configurator/products/faucets/left/premise-left-brushed-brass.png",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/cfd394b9-57b1-4aab-aa5e-408ee5f99d1c/65496025.jpg?size=pdhz",
            designDisplay:
              "/configurator/products/faucets/left/premise-left-brushed-nickel.png",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/028810b7-cd59-4561-9b2e-187b0820a38d/67595340.jpeg?size=pdhz",
            designDisplay:
              "/configurator/products/faucets/left/premise-left-black.png",
          },
        },
      },
    ],
  },
];
