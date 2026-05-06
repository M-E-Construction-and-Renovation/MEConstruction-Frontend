export const mirrorCategories = [
  {
    id: "mirrors",
    label: "Vanity Mirror",
    isMirror: true,
    products: [
      {
        id: "vm1",
        name: "Vanity Mirror 1",
        tiers: {
          premium: ["Orange"],
        },
        glb: "/models/mirrors/mirror 1.glb",
        position: [-1.18, 1.7, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [0.025, 0.025, 0.025],
        roughness: 0.2, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Orange: {
            productDisplay:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0QdqbpFo98W4BQjpDaeAIoJK0nHOjvuSv-lIpUJdH6z5Blqru",
            color: "",
            displayColor: "#CD7F32",
          },
        },
      },
      {
        id: "vm2",
        name: "Vanity Mirror 2",
        tiers: {
          premium: ["Black"],
        },
        glb: "/models/mirrors/mirror 2.glb",
        position: [-1.15, 1.7, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [0.018, 0.023, 0.023],
        roughness: 0.2, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://m.media-amazon.com/images/I/81x34f1LLJL._AC_UF350,350_QL80_.jpg",
            color: "",
            displayColor: "#808080",
          },
        },
      },
      {
        id: "vm3",
        name: "Vanity Mirror 3",
        tiers: {
          standard: ["Gold"],
        },
        glb: "/models/mirrors/mirror 3.glb",
        position: [-1.08, 1.7, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [0.02, 0.02, 0.02],
        roughness: 0.2, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Gold: {
            productDisplay:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTi_DoehfkxRqtCc-rY5jSRrulkz1tA9R_rsLRSS0rJedfVYYSr",
            color: "",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "vm4",
        name: "Vanity Mirror 4",
        tiers: {
          standard: ["White"],
        },
        glb: "/models/mirrors/mirror 4.glb",
        position: [-1.11, 1.7, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [0.02, 0.02, 0.02],
        roughness: 0.8, // glossy ceramic
        metalness: 0.2, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://ak1.ostkcdn.com/images/products/is/images/direct/39f8c9dad69c9b5aa8609c1aeb1facd88403e70d/Medicine-Cabinet%2C-Six-External-Shelves-Mirror%2C-White-Finish.jpg",
            color: "#ffffff",
            displayColor: "#ffffff",
          },
        },
      },
      {
        id: "vm5",
        name: "Vanity Mirror 5",
        tiers: {
          basic: ["Wood"],
        },
        glb: "/models/mirrors/mirror 5.glb",
        position: [-1.15, 1.7, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [0.025, 0.025, 0.025],
        roughness: 0.8, // glossy ceramic
        metalness: 0.2, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Wood: {
            productDisplay:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4VXk027VggI4U8krgiZ1yQwwa4gYRxhXCOmvvO5tQvoclgOb3",
            color: "",
            displayColor: "#D2A683",
          },
        },
      },
      {
        id: "vm6",
        name: "Kohler - Embark 20in x 26in Medicine Cabinet",
        tiers: {
          basic: ["Black", "Brushed Nickel"],
        },
        glb: "/models/mirrors/kohler-embark-20in-26in-med-cabinet.glb",
        position: [-1.04, 1.7, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [1, 1, 0.7],
        roughness: 0.8, // glossy ceramic
        metalness: 0.2, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/1f86e654-efba-4cda-b76d-75bf49c1f7bb/77501526.jpeg?size=pdhism",
            color: "#7D7D7D",
            displayColor: "#808080",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/7c76d89a-71cc-4ccc-8a10-691f80c78b7e/77501529.jpeg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
        },
      },
      {
        id: "vm7",
        name: "Wellfor - MS 25in x 38in Medicine Cabinet",
        tiers: {
          basic: ["White"],
        },
        glb: "/models/mirrors/wellfor-ms-25in-38in-med-cabinet.glb",
        position: [-1.045, 1.7, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [1, 1, 0.7],
        roughness: 0.1, // glossy ceramic
        metalness: 0.2, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/57511ad2-9503-4ae7-82df-1a58f36dab4c/68320219.jpeg?size=pdhism",
            color: "#ffffff",
            displayColor: "#ffffff",
          },
        },
      },
      {
        id: "vm8",
        name: "Style Selections - 35.25in x 45.25in Rectangle",
        tiers: {
          basic: ["Black"],
        },
        glb: "/models/mirrors/style-selections-35.25in- 45.25in-rectangle-mirror.glb",
        position: [-1.182, 1.7, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [1, 1, 0.7],
        roughness: 0.1, // glossy ceramic
        metalness: 0.2, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/acd519d0-73c8-4a98-afd7-1d16616966f0/16187956.jpg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "vm9",
        name: "Delta - Knoxville 22.51in x 23.62in Rectangle",
        tiers: {
          standard: ["Chrome"],
        },
        glb: "/models/mirrors/delta-knoxville- 22.51in-23.62in-rectangle-mirror.glb",
        position: [-1.1, 1.7, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [1, 1, 0.5],
        roughness: 0.1, // glossy ceramic
        metalness: 0.2, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/8c51281e-ad4f-44e1-a43a-a1e53d39bc64/67821901.jpeg?size=pdhz",
            color: "#D8DBDE",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "vm10",
        name: "Wellfor - Bella 30in x 36in Rectangle",
        tiers: {
          standard: ["Black"],
        },
        glb: "/models/mirrors/wellfor-bella-30in-36in-rectangle-mirror.glb",
        position: [-1.197, 1.7, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [1, 1, 0.5],
        roughness: 0.1, // glossy ceramic
        metalness: 0.2, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/184f2ff5-5616-4891-8a56-032a8c93bad6/65427078.jpg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "vm11",
        name: "Design House - Concord 24in x 31in Rectangle",
        tiers: {
          premium: ["White"],
        },
        glb: "/models/mirrors/design-house-concord-24in-31in-rectangle-mirror.glb",
        position: [-1.185, 1.7, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [1, 1, 0.5],
        roughness: 0.1, // glossy ceramic
        metalness: 0.2, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/ccdf6650-63cb-4016-a997-09912e6b6a0b/64949600.jpg?size=pdhz",
            color: "#ffffff",
            displayColor: "#ffffff",
          },
        },
      },
    ],
  },
];
