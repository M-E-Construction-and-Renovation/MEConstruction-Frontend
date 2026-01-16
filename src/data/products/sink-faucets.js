export const sinkFaucetCategories = [
  {
    id: "sinkFaucets",
    initialAngle: "side",
    label: "Sink Faucets",
    zIndex: "10",
    shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    products: [
      {
        id: "sf1",
        name: "Pfister Weller",
        tiers: {
          basic: ["Chrome"],
          standard: ["Nickel"],
          premium: ["Black"],
        },
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/5418f3c6-c311-4536-94b3-acf871b2e2b5/00418164.jpg?size=pdhz",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet1-chrome.png",
            },
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/183a5fab-c37c-4acf-9e71-d4c39af4e35b/69608672.jpeg?size=pdhz",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet1-black.png",
            },
          },
          Nickel: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/dd13b199-9432-4e16-a7dd-db736aae1f14/62087853.jpg?size=pdhz",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet1-nickel.png",
            },
          },
        },
      },
      {
        id: "sf2",
        name: "Gorency",
        tiers: {
          basic: ["Chrome"],
          standard: ["Nickel"],
          premium: ["Black"],
        },
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://s.alicdn.com/@sc04/kf/H73fe1c657227401aa625fceed940afe42/GORENCY-Smart-Water-Automatic-Tap-Auto-Sensors-Faucet-Bathroom-Infrared-Basin-Mixer-Faucet-Hot-Sale-Black-Laser-Cotton-Body-OEM.jpg_300x300.jpg",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet2-chrome.png",
            },
          },
          Black: {
            productDisplay:
              "https://s.alicdn.com/@sc04/kf/H73fe1c657227401aa625fceed940afe42/GORENCY-Smart-Water-Automatic-Tap-Auto-Sensors-Faucet-Bathroom-Infrared-Basin-Mixer-Faucet-Hot-Sale-Black-Laser-Cotton-Body-OEM.jpg_300x300.jpg",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet2-black.png",
            },
          },
          Nickel: {
            productDisplay:
              "https://s.alicdn.com/@sc04/kf/H73fe1c657227401aa625fceed940afe42/GORENCY-Smart-Water-Automatic-Tap-Auto-Sensors-Faucet-Bathroom-Infrared-Basin-Mixer-Faucet-Hot-Sale-Black-Laser-Cotton-Body-OEM.jpg_300x300.jpg",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet2-nickel.png",
            },
          },
        },
      },
      {
        id: "sf3",
        name: "Kierland",
        tiers: {
          basic: ["Chrome"],
          standard: ["Nickel"],
          premium: ["Black"],
        },
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://images.pfisterfaucets.com/is/image/WebAssets/pf_kierland_lf-049-kiegs_c1?wid=600&qlt=80&resMode=sharp&fmt=png-alpha",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet3-chrome.png",
            },
          },
          Black: {
            productDisplay:
              "https://images.pfisterfaucets.com/is/image/WebAssets/pf_kierland_lf-049-kiebb_c1?wid=600&qlt=80&resMode=sharp&fmt=png-alpha",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet3-black.png",
            },
          },
          Nickel: {
            productDisplay:
              "https://images.pfisterfaucets.com/is/image/WebAssets/pf_kierland_lf-049-kiegs_c1?wid=600&qlt=80&resMode=sharp&fmt=png-alpha",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet3-nickel.png",
            },
          },
        },
      },
      {
        id: "sf4",
        name: "Delta Eldren",
        tiers: {
          standard: ["Chrome", "Nickel"],
          premium: ["Black"],
        },
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/ffaebc20-d244-4b52-bbe5-eeff15a26a06/65453956.png?size=pdhz",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet4-chrome.png",
            },
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/bbaa271b-aef1-4e02-af30-323ebe7f1e51/65453755.png?size=pdhz",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet4-black.png",
            },
          },
          Nickel: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/926dc19f-3125-43f0-b0de-4f41eea9e536/65453700.png?size=pdhz",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet4-nickel.png",
            },
          },
        },
      },
      {
        id: "sf5",
        name: "Riobel Zendo",
        tiers: {
          premium: ["Black", "Chrome"],
        },
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://bathemp.ca/wp-content/uploads/2017/05/p-145035-0003371_riobel-zendo-8-lavatory-faucet-zo08-600x600.jpeg",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet5-chrome.png",
            },
          },
          Black: {
            productDisplay:
              "https://bathemp.ca/wp-content/uploads/2017/04/Riobel-Zendo-ZO08BK.jpg",
            designDisplay: {
              side: "/configurator/products/sink-faucets/design/sink-faucet5-black.png",
            },
          },
        },
      },
    ],
  },
];
