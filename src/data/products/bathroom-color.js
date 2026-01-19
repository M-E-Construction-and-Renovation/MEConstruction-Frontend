export const bathroomColorCategories = [
  // Bathroom Color for front angle cam
  {
    id: "bathroomColor",
    initialAngle: "front",
    label: "Bathroom Color",
    zIndex: "1",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "bc1",
        name: "Charcoal",
        tiers: {
          premium: ["Charcoal"],
        },
        displayByColor: {
          Charcoal: {
            productDisplay:
              "https://www.mandlpaints.com/wp-content/uploads/2018/09/Charcoal.jpg",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-charcoal.jpg",
              },
              side: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-charcoal-side.jpg",
              },
            },
          },
        },
      },
      {
        id: "bc2",
        name: "Desert Tan",
        tiers: {
          basic: ["Desert Tan"],
        },
        displayByColor: {
          "Desert Tan": {
            productDisplay:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVk_pCWoMCiHe9eOsc2ruC2J-FlrT79K-O9g&s",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-desert-tan.jpg",
              },
              side: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-desert-tan-side.jpg",
              },
            },
          },
        },
      },
      {
        id: "bc3",
        name: "Powder Pink",
        tiers: {
          standard: ["Powder Pink"],
        },
        displayByColor: {
          "Powder Pink": {
            productDisplay:
              "https://www.allpowderpaints.com/images/products/asgp373222.jpg",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-powder-pink.jpg",
              },
              side: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-powder-pink-side.jpg",
              },
            },
          },
        },
      },
      {
        id: "bc4",
        name: "Prussian Blue",
        tiers: {
          standard: ["Prussian Blue"],
        },
        displayByColor: {
          "Prussian Blue": {
            productDisplay:
              "https://i.etsystatic.com/5651657/r/il/be6343/2811199873/il_fullxfull.2811199873_d9ta.jpg",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-prussian-blue.jpg",
              },
              side: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-prussian-blue-side.jpg",
              },
            },
          },
        },
      },
      {
        id: "bc5",
        name: "Powder Blue",
        tiers: {
          basic: ["Powder Blue"],
        },
        displayByColor: {
          "Powder Blue": {
            productDisplay:
              "https://preview.colorkit.co/color/b0e0e6.png?size=vertical-wallpaper&static=true",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-powder-blue.jpg",
              },
              side: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-powder-blue-side.jpg",
              },
            },
          },
        },
      },
      {
        id: "bc6",
        name: "Pewrinkle",
        tiers: {
          premium: ["Pewrinkle"],
        },
        displayByColor: {
          Pewrinkle: {
            productDisplay:
              "https://img.freepik.com/premium-photo/normal-map-texture-concrete-dirty-seamless-normal-dirty-texture_220166-6508.jpg?semt=ais_hybrid&w=740&q=80",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-pewrinkle.jpg",
              },
              side: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-pewrinkle-side.jpg",
              },
            },
          },
        },
      },
      {
        id: "bc7",
        name: "Sage Green",
        tiers: {
          basic: ["Sage Green"],
        },
        displayByColor: {
          "Sage Green": {
            productDisplay:
              "https://vernice.it/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0560%2F8177%2F6714%2Fproducts%2Fwall-paint-color-vernice-rc-greens-002-B9D3B3.jpg%3Fv%3D1666960687&w=384&q=75",
            designDisplay: {
              front: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-sage-green.jpg",
              },
              side: {
                initialPosition:
                  "/configurator/products/bathroom-color/design/bathroom-color-sage-green-side.jpg",
              },
            },
          },
        },
      },
    ],
  },
];
