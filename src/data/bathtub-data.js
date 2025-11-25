const bathtubCategories = [
  {
    id: "tubFronts",
    label: "Tub Fronts",
    zIndex: "75",
    products: [
      {
        id: "tf1",
        name: "Princeton - American Standard",
        tiers: {
          basic: ["White"], // Your images were only White
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/tubfronts/display/princeton-display.png",
            designDisplay:
              "/configurator/products/tubfronts/right/princeton-tub-right-white.png",
          },
        },
      },

      {
        id: "tf2",
        name: "Pro Steel - MAAX",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/tubfronts/display/prosteel-display.png",
            designDisplay:
              "/configurator/products/tubfronts/right/prosteel-tub-right-white.png",
          },
        },
      },
      {
        id: "tf3",
        name: "Villager - Kohler",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/tubfronts/display/villager-display.png",
            designDisplay:
              "/configurator/products/tubfronts/left/villager-tub-left-white.png",
          },
        },
      },
    ],
  },

  {
    id: "walls",
    label: "Walls",
    zIndex: "10",
    products: [
      {
        id: "w1",
        name: "Genova",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay: "/configurator/products/walls/genova-white.jpg",
            designDisplay: "/configurator/products/walls/genova-white.jpg",
          },
        },
      },
      {
        id: "w2",
        name: "Napoli",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay: "/configurator/products/walls/napoli-white.jpg",
            designDisplay: "/configurator/products/walls/napoli-white.jpg",
          },
        },
      },
      {
        id: "w3",
        name: "Palermo",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay: "/configurator/products/walls/palermo-white.jpg",
            designDisplay: "/configurator/products/walls/palermo-white.jpg",
          },
        },
      },
      {
        id: "w4",
        name: "Savona",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay: "/configurator/products/walls/savona-white.jpg",
            designDisplay: "/configurator/products/walls/savona-white.jpg",
          },
        },
      },
    ],
  },

  {
    id: "faucets",
    label: "Faucets",
    zIndex: "80",
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

  {
    id: "shelves",
    label: "Shelves",
    zIndex: "50",
    products: [
      {
        id: "s1",
        name: "Single Shelf",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/accessories/display/single-shelf-white-display.png",
            designDisplay:
              "/configurator/products/accessories/left/single-shelf-left-white.png",
          },
        },
      },
      {
        id: "s2",
        name: "Shelf",
        tiers: {
          basic: ["White"],
        },
        displayByColor: {
          White: {
            productDisplay:
              "/configurator/products/accessories/display/shelf-white-display.png",
            designDisplay:
              "/configurator/products/accessories/left/shelf-left-white.png",
          },
        },
      },
    ],
  },

  {
    id: "grabBars",
    label: "Grab Bars",
    zIndex: "50",
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

  {
    id: "doorsRods",
    label: "Doors / Rods",
    zIndex: "80",
    products: [
      {
        id: "d1",
        name: "Sliding Shower Door",
        tiers: {
          basic: ["Chrome"],
        },
        displayByColor: {
          Chrome: {
            productDisplay:
              "/configurator/products/doors-rods/left/sliding-left-tub-chrome.png",
            designDisplay:
              "/configurator/products/doors-rods/left/sliding-left-tub-chrome.png",
          },
        },
      },
    ],
  },

  {
    id: "wainscotings",
    label: "Wainscotings",
    zIndex: "70",
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
              "/configurator/products/wainscotings/wainscoting2.png",
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
              "/configurator/products/wainscotings/wainscoting1.png",
            designDisplay:
              "/configurator/products/wainscotings/wainscoting1.png",
          },
        },
      },
    ],
  },

  {
    id: "ceilings",
    label: "Ceilings",
    zIndex: "20",
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
            designDisplay: "/configurator/products/ceilings/ceiling1.png",
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
            designDisplay: "/configurator/products/ceilings/ceiling2.png",
          },
        },
      },
    ],
  },
];

export default bathtubCategories;
