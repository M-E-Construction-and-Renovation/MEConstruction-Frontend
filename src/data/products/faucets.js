export const faucetsCategories = [
  {
    id: "faucets",
    label: "Shower Heads",
    products: [
      {
        id: "f1",
        name: "Delta - Foundations",
        shape: ["tub"],
        allowFlip: true,
        tiers: {
          basic: ["Chrome", "Stainless"],
        },
        glb: "/models/shower-tub-faucets/Delta foundation.glb",
        position: [-1.2, 0.1, -5.6],
        rotation: [0, 0, 0],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/0377a656-7a4c-4570-aca2-440e3a266b81/65088340.png?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Stainless: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/1a3c2775-7efd-4a19-918d-6b9170970f6f/65088348.png?size=pdhz",
            color: "#FFFFF0",
            displayColor: "#FFFFF0",
          },
        },
      },
      {
        id: "f2",
        name: "Florez - Kohler",
        shape: ["tub"],
        allowFlip: true,
        tiers: {
          basic: ["Brushed Nickel"],
          standard: ["Black"],
          premium: ["Polished Nickel"],
        },
        glb: "/models/shower-tub-faucets/kohler florez.glb",
        position: [-1.2, 0.1, -5.6],
        rotation: [0, 0, 0],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/65229ad1-2bcc-4fbb-b7bd-48127b1dbe17/66591679.jpeg?size=pdhz",
            color: "#EADDCA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/1632f398-c4e0-4062-85b2-f3860702bef6/66591675.jpeg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          "Polished Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/9486735c-f164-492e-8a30-c55dee7d6a1f/66574639.jpeg?size=pdhz",
            color: "#FFFFF0",
            displayColor: "#FFFFF0",
          },
        },
      },
      {
        id: "f3",
        name: "Premise - Kohler",
        shape: ["tub"],
        allowFlip: true,
        tiers: {
          standard: ["Brushed Nickel"],
          premium: ["Black"],
        },
        glb: "/models/shower-tub-faucets/kohler premise.glb",
        position: [-1.2, 0.1, -5.6],
        rotation: [0, 0, 0],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/cfd394b9-57b1-4aab-aa5e-408ee5f99d1c/65496025.jpg?size=pdhz",
            color: "#EADDCA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/028810b7-cd59-4561-9b2e-187b0820a38d/67595340.jpeg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "f4",
        name: "allen + roth - Veda",
        shape: ["tub"],
        allowFlip: true,
        tiers: {
          premium: ["Black"],
        },
        glb: "/models/shower-tub-faucets/Allen Roth Veda 1 handle.glb",
        position: [-1.245, 0.1, -5.6],
        rotation: [0, 0, 0],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/55e030f3-157d-4535-96dc-0f8878e46c34/68633324.jpeg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "f5",
        name: "Delta - Classic",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
        },
        glb: "/models/shower-tub-faucets/Delta Classic.glb",
        position: [-1.2, 0.1, -5.6],
        rotation: [0, 0, 0],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/504690a5-144c-4cf9-aa39-a7c5fe4da64c/65090597.png?size=pdhz",
            color: "",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "f6",
        name: "Kohler - Desette",
        shape: ["tub"],
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
          standard: ["Brushed Nickel"],
          premium: ["Black"],
        },
        glb: "/models/shower-tub-faucets/kohler desette 1 handle.glb",
        position: [-1.2, 0.1, -5.6],
        rotation: [0, 0, 0],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/f6e6cd95-046d-4e20-8ff8-afb322223d8f/50302300.jpg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/5cbeb9e0-8815-4179-85b8-4a060ac284f5/48562393.jpg?size=pdhz",
            color: "#EADDCA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/70cef8b4-fc42-4303-8a09-af0521c960e4/50302301.jpg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "f7",
        name: "Moen - Adler",
        shape: ["tub"],
        allowFlip: true,
        tiers: {
          premium: ["Chrome"],
        },
        glb: "/models/shower-tub-faucets/Moen adler 3-handle.glb",
        position: [-1.2, 0.1, -5.6],
        rotation: [0, 0, 0],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/500c5a2a-cffa-4462-b8a4-3f84066a98d7/07700282.jpg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "f8",
        name: "Moen - Lindor",
        shape: ["tub"],
        allowFlip: true,
        tiers: {
          premium: ["Black"],
        },
        glb: "/models/shower-tub-faucets/moen lindor 1 handle.glb",
        position: [-1.2, 0.1, -5.6],
        rotation: [0, 0, 0],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/04f7ca33-8f47-4825-a27e-adbec903c56c/16021108.jpg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "f9",
        name: "Delta - Foundations (Single Function)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
        },
        glb: "/models/shower-tub-faucets/delta-foundations-shower-only.glb",
        position: [-1.2, 0.1, -5.6],
        rotation: [0, 0, 0],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/f66ae986-fd31-4887-88c2-737cf9a1625a/65531644.png?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "f10",
        name: "Moen - Adler (1 Handle)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
        },
        glb: "/models/shower-tub-faucets/moen-adler-1-handle-shower-only.glb",
        position: [-1.2, 0.5, -5.6],
        rotation: [0, 0, 0],
        scale: [0.5, 0.5, 0.5],
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/8be6d4e0-9c6f-4ad9-8d68-5fd9ad0eb72f/07700276.jpg?size=pdhz",
            color: "",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "f11",
        name: "Moen - Caldwell (1 Handle)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
        },
        glb: "/models/shower-tub-faucets/moen-caldwell-1-handle-shower-only.glb",
        position: [-1.2, 0.5, -5.6],
        rotation: [0, 0, 0],
        scale: [0.5, 0.5, 0.5],
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/80757c24-675c-489d-a85e-5afab3184922/77015257.jpeg?size=pdhz",
            color: "",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "f12",
        name: "American Standard - Colony (1 Handle)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
        },
        glb: "/models/shower-tub-faucets/american-standard-colony-1-handle-shower-only.glb",
        position: [-1.2, 0.1, -5.6],
        rotation: [0, 0, 0],
        scale: [0.8, 1, 0.8],
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/640e19a7-3b57-4d8e-8fa4-c496e0621497/11655822.jpg?size=pdhz",
            color: "",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "f13",
        name: "Moen - Lindor (1 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          standard: ["Brushed Nickel"],
        },
        glb: "/models/shower-tub-faucets/moen-lindor-1-handle-shower-only.glb",
        position: [-1.2, -0.2, -5.6],
        rotation: [0, 0, 0],
        scale: [1.5, 1.2, 1.5],
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/2b96785a-cf2b-4e6d-9a65-d8c36f1f2d72/66295907.jpeg?size=pdhz",
            color: "#EADDCA",
            displayColor: "#EADDCA",
          },
        },
      },
      {
        id: "f14",
        name: "Symmons - Identity (1 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          standard: ["Satin Nickel", "Black", "Gold"],
        },
        glb: "/models/shower-tub-faucets/symmons-identity-1-handle-shower-only.glb",
        position: [-1.2, 1, -5.6],
        rotation: [0, 0, 0],
        roughness: 0.5, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Satin Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/89a616a4-f907-4afb-bf66-cb8370edf05e/66554657.jpeg?size=pdhz",
            color: "#FAF2EA",
            displayColor: "#FAF2EA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/d36e8205-6946-42b5-8018-896983f48499/66554654.jpeg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/519efc78-b5c1-479f-8561-2908d79fe775/66554653.jpeg?size=pdhz",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "f15",
        name: "Symmons - Origins (1 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          standard: ["Satin Nickel"],
        },
        glb: "/models/shower-tub-faucets/symmons-origins-1-handle-shower-only.glb",
        position: [-1.2, 1.2, -5.6],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        roughness: 0.5, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Satin Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/b0c7cec8-d193-41e7-b220-34a7f5a55400/10273404.jpg?size=pdhz",
            color: "#FAF2EA",
            displayColor: "#FAF2EA",
          },
        },
      },
      {
        id: "f16",
        name: "Delta - Modern Spotshield (1 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          standard: ["Brushed Nickel", "Chrome", "Black", "Champagne Bronze"],
        },
        glb: "/models/shower-tub-faucets/delta-modern-spotshield-1-handle-shower-only.glb",
        position: [-1.2, 1.2, -5.6],
        rotation: [0, Math.PI / -2, 0],
        scale: [1, 1, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/0dfc6379-bc58-4ffd-9a2b-be8b37acfc0c/80773653.jpeg?size=pdhz",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/7d17377e-1f97-433f-85a6-89346937f2b2/66447477.jpeg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/54acc1eb-1a22-473c-97af-22d6e872f590/74055770.jpeg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          "Champagne Bronze": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/a75caae0-92f4-40fb-9d45-1dbf8d120c4d/74055771.jpeg?size=pdhz",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "f17",
        name: "Delta - Modern Round (1 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          standard: ["Black", "Brushed Nickel", "Chrome", "Champagne Bronze"],
        },
        glb: "/models/shower-tub-faucets/delta-modern-round-1-handle-shower-only.glb",
        position: [-1.2, 1.2, -5.6],
        rotation: [0, Math.PI / -2, 0],
        scale: [1, 1, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/be3873de-cab8-4500-a181-a9776b8a996c/80773808.jpeg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/9c91e513-d44c-4c32-97f9-25b9c8a1840c/80773567.jpeg?size=pdhz",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/0a59adfa-1509-4765-862c-048060243d09/80773611.jpeg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Champagne Bronze": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/b4394b05-23ba-401e-a81d-7f29c2afe40c/73951801.jpeg?size=pdhz",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "f18",
        name: "Moen - Voss (1 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          standard: ["Brushed Gold", "Chrome"],
        },
        glb: "/models/shower-tub-faucets/moen-voss-1-handle-shower-only.glb",
        position: [-1.2, 1.2, -5.6],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Brushed Gold": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/9d48f1ea-77e3-497b-9bc0-0d099d275089/43553012.jpg?size=pdhz",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/f747c2cf-4eec-48df-bbb8-0406e303c483/43570666.jpg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "f19",
        name: "Delta - Saylor (2 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          standard: ["Chrome"],
        },
        glb: "/models/shower-tub-faucets/delta-saylor-2-handle-shower-only.glb",
        position: [-1.2, 1, -5.6],
        rotation: [0, 0, 0],
        scale: [1.2, 1.1, 1.2],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/0cf4fee3-028b-46d1-9451-f32bda3101e1/60765214.png?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "f20",
        name: "Delta - Nicoli (1 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          standard: ["Chrome", "Black", "Champagne Bronze", "Stainless"],
        },
        glb: "/models/shower-tub-faucets/delta-nicoli-1-handle-shower-only.glb",
        position: [-1.2, 1.2, -5.6],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/1947b98e-b75a-4132-989d-68f92cf41eaa/64861709.png?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/d4623257-1326-4f8b-ad7c-8001c550f068/65062087.png?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          "Champagne Bronze": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/5864dacd-b210-48b6-9b23-ba2d1e3719c2/66048322.png?size=pdhz",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
          Stainless: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/2ed71f87-6c21-47a9-9e8e-f8e1ba71e801/64861697.png?size=pdhz",
            color: "#FFFFF0",
            displayColor: "#FFFFF0",
          },
        },
      },
      {
        id: "f21",
        name: "Hansgrohe (1 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          premium: ["Chrome"],
        },
        glb: "/models/shower-tub-faucets/hansgrohe-1-handle-shower-only.glb",
        position: [-1.2, 1.2, -5.6],
        rotation: [0, 0, 0],
        scale: [0.8, 0.8, 0.8],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/0d7fddfb-c07d-4f00-b56f-8d12fe875b62/65225151.jpg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "f22",
        name: "Delta - Modern Raincan (2 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          premium: ["Black", "Chrome", "Brushed Nickel", "Champagne Bronze"],
        },
        glb: "/models/shower-tub-faucets/delta-modern-raincan-2-handle-shower-only.glb",
        position: [-1.18, 0.9, -5.6],
        rotation: [0, 0, 0],
        scale: [1.4, 1.4, 1.4],
        roughness: 0.6, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/4a320d4e-249d-4ce9-b633-cbc9a0cf2483/74265371.jpeg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/30364a39-436f-4222-9b33-5b054b9a8f04/74265368.jpeg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/198dedf8-590f-4576-bb50-f18d9c45449a/74265369.jpeg?size=pdhz",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          "Champagne Bronze": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/1a7fde52-6d67-4027-919d-d1fe7f70779c/74265367.jpeg?size=pdhz",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "f23",
        name: "Keeney - Quadrato (1 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          premium: ["Chrome"],
        },
        glb: "/models/shower-tub-faucets/keeney-quadrato-1-handle-shower-only.glb",
        position: [-1.21, 1.5, -5.6],
        rotation: [0, 0, 0],
        scale: [1, 1.2, 1],
        roughness: 0.5, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/600ab467-1b30-43e1-b8b9-fa74f1812cba/08958499.jpg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "f24",
        name: "Delta - Modern Raincan Round (2 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          premium: ["Black", "Chrome", "Brushed Nickel", "Champagne Bronze"],
        },
        glb: "/models/shower-tub-faucets/delta-modern-raincan-round-2-handle-shower-only.glb",
        position: [-1.2, 0.9, -5.6],
        rotation: [0, Math.PI / -2, 0],
        scale: [1.6, 1.5, 2],
        roughness: 0.6, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/e092d1cd-f8a7-4475-bd42-c3ff1a8bf503/66453340.jpeg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/19d542f4-e4c6-4cca-b9b3-bfa10f3f8f91/66453335.jpeg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/2f65055f-b9ac-4600-8880-e1d508ac92d0/66447451.jpeg?size=pdhz",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          "Champagne Bronze": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/de5193cf-c632-405d-9762-09736d76ba51/66447492.jpeg?size=pdhz",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "f25",
        name: "Delta - Modern Raincan Round (2 Handle Shower Only)",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          premium: ["Gold", "Brushed Nickel", "Black"],
        },
        glb: "/models/shower-tub-faucets/wellfor-dt-rain-1-handle-shower-only.glb",
        position: [-1.2, 1.4, -5.6],
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
        roughness: 0.5, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/6461aacb-4a5d-4992-83d5-091f53c830ca/72056848.jpeg?size=pdhz",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/21ff843f-c1eb-4c6e-ba97-c77a6a6725f0/72056869.jpeg?size=pdhz",
            color: "#EADDCA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/38ce9621-f22c-4b72-8b41-836d29944f27/72056886.jpeg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "f26",
        name: "Kohler - Dual Head Shower",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          premium: ["Brushed Nickel", "Black", "Chrome"],
        },
        glb: "/models/shower-tub-faucets/kohler-dual-head-shower-only.glb",
        position: [-1.2, 1.9, -5.6],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/b47de755-bcf3-435e-bbf0-665893be843f/49851720.jpg?size=pdhz",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/9dcfa229-adf6-4ffc-8df9-4403f98a97a9/49851600.jpg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/ac9e845d-6a88-4b30-a92a-3f1761303d42/67542613.jpeg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "f27",
        name: "Moen - Verso Magnetix",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          premium: ["Gold"],
        },
        glb: "/models/shower-tub-faucets/moen-verso-magnetix-shower-only.glb",
        position: [-1.2, 1.9, -5.6],
        rotation: [0, 0, 0],
        scale: [0.6, 0.8, 0.8],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/7acf3ca8-1cbf-4794-8b80-f01e16d0757d/63337937.jpg?size=pdhz",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "f28",
        name: "Kohler - Dual Head Shower",
        shape: ["tub-to-shower", "alcove", "neo-angle", "curved"],
        allowFlip: true,
        tiers: {
          premium: ["Brushed Nickel", "Black", "Chrome"],
        },
        glb: "/models/shower-tub-faucets/kohler-raindet-shower-only.glb",
        position: [-1.2, 1.9, -5.6],
        rotation: [0, 0, 0],
        scale: [1.2, 1.2, 1.2],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/266be321-11dc-41f3-b93b-b46a51ebf9d2/63046678.jpg?size=pdhz",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/a149531f-2ea7-400d-be3b-2bd8efe8aece/50231545.jpg?size=pdhz",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/803444cd-e12d-4119-a5a1-79cc3a391540/50231544.jpg?size=pdhz",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
        },
      },
    ],
  },
];
