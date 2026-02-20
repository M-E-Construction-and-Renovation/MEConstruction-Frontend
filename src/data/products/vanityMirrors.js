export const mirrorCategories = [
  {
    id: "mirrors",
    // initialAngle: "side",
    label: "Vanity Mirror",
    // zIndex: "10",
    // shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    isMirror: true,
    products: [
      {
        id: "vm1",
        name: "Vanity Mirror 1",
        tiers: {
          premium: ["Orange"],
        },
        glb: "/models/mirrors/mirror 1.glb",
        position: [-1.19, 1.8, -3.5],
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
        position: [-1.19, 1.8, -3.5],
        rotation: [0, Math.PI / 2, 0],
        scale: [0.023, 0.023, 0.023],
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
        position: [-1.08, 1.8, -3.5],
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
        position: [-1.11, 1.8, -3.5],
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
          },
        },
      },
      // {
      //   id: "vm6",
      //   name: "Vanity Mirror 6",
      //   tiers: {
      //     basic: ["Wood"],
      //   },
      //   glb: "/models/mirrors/mirror 6.glb",
      //   position: [1.15, 2, -4],
      //   rotation: [0, -Math.PI / 2, 0],
      //   scale: [0.025, 0.025, 0.025],
      //   roughness: 0.8, // glossy ceramic
      //   metalness: 0.2, // not metal
      //   clearcoat: 0.0, // glazed surface
      //   clearcoatRoughness: 0.0,
      //   envMapIntensity: 0.0, // reflections
      //   displayByColor: {
      //     Wood: {
      //       productDisplay:
      //         "/configurator/products/vanity-mirrors/design/premium-1.png",
      //       color: "",
      //     },
      //   },
      // },
    ],
  },
];
