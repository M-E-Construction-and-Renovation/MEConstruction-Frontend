export const towelBars = [
  {
    id: "towelBars",
    label: "Towel Bars",
    products: [
      {
        id: "tb1",
        name: "Square Towel Bar",
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
          standard: ["Brass"],
          premium: ["Black", "Champagne Gold"],
        },
        glb: "/models/towel-bars/towel bar model 1 - 24in.glb",
        position: [-1.11, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/23285-CP_ISO_d2c0076888_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Brass: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/23285-2MB_ISO_d2c0076824_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#B5A642",
            displayColor: "#B5A642",
          },
          Black: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/23285-BL_ISO_d2c0076851_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#000000",
            displayColor: "#000000",
          },
          "Champagne Gold": {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/23285-2MB_ISO_d2c0076824_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "tb2",
        name: "Allen + Roth - Harlow 24-in",
        allowFlip: true,
        tiers: {
          standard: ["Chrome", "Brushed Nickel", "Gold", "Black"],
        },
        glb: "/models/towel-bars/allen-roth-harlow-24in-towel-bar.glb",
        position: [-1.11, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/270ae286-4d6f-4dc8-a6d4-dc1e8571eab5/67696746.jpeg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/c6636056-dfb3-49c4-8894-0b11b9f140d2/67917606.jpeg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/5ddc0dbb-84fe-41f6-9d1f-2fb6f39decae/73663204.jpeg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/9baadd24-163f-48e5-a4ec-f8c0aecbf201/72498097.jpeg?size=pdhism",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "tb3",
        name: "Moen - Lindor 24-in",
        allowFlip: true,
        tiers: {
          basic: ["Chrome", "Brushed Nickel", "Black", "Gold"],
        },
        glb: "/models/towel-bars/moen-lindor-single-mount-towel-bar.glb",
        position: [-1.07, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1, 1],
        roughness: 0.3, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/e525f04a-85d2-45b6-be4b-0ddb7d346788/16003305.jpg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/480054cb-9aea-4ae5-85c2-5a7ac7c45b1c/08877123.jpg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/1a3efa07-2186-4eaa-9196-77fa4a19810f/40882940.jpg?size=pdhism",
            color: "#7D7D7D",
            displayColor: "#000000",
          },
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/7829dadb-c8d8-4a57-b739-179e638c26ba/66316635.jpeg?size=pdhism",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "tb4",
        name: "Project Source - Seton 24-in",
        allowFlip: true,
        tiers: {
          basic: ["Chrome"],
        },
        glb: "/models/towel-bars/project-source-seton-24in-single-towel-bar.glb",
        position: [-1.09, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/89410351-52c3-4311-89a6-c5b17dd78720/09126967.jpg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "tb5",
        name: "Delta - Foundations 24-in",
        allowFlip: true,
        tiers: {
          basic: ["Chrome", "Brushed Nickel"],
        },
        glb: "/models/towel-bars/delta-foundations-24in-towel-bar.glb",
        position: [-1.07, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/e28229f3-9d12-40aa-b1c8-6bfbc79210ba/05459687.jpg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/ce73b208-991b-43e7-9c58-483893557c01/64514161.jpg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
        },
      },
      {
        id: "tb6",
        name: "Amerock - Stature 24-in",
        allowFlip: true,
        tiers: {
          standard: ["Chrome", "Black", "Gold"],
        },
        glb: "/models/towel-bars/amerock-stature-24in-towel-bar.glb",
        position: [-1.11, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/6a57287b-0d03-4101-9c3a-5dd0b21ce1f6/47705684.jpg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/51a35f9c-4f1d-4f80-aa05-8156f6f202c4/47705604.jpg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/0dc27b7d-5f6c-4072-8740-664aacf0e796/47705690.jpg?size=pdhism",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "tb7",
        name: "Allen + Roth - Townley 24-in",
        allowFlip: true,
        tiers: {
          standard: ["Chrome", "Brushed Nickel"],
        },
        glb: "/models/towel-bars/allen-roth-townley-24in-towel-bar.glb",
        position: [-1.07, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/cf5ae018-0d22-42a4-a267-55650b4252f9/64785162.jpg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/294e6d8f-2292-41be-af04-64c46b37d89b/64785159.jpg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
        },
      },
      {
        id: "tb8",
        name: "Moen - Avri 18-in",
        allowFlip: true,
        tiers: {
          standard: ["Chrome", "Brushed Nickel", "Black"],
        },
        glb: "/models/towel-bars/moen-avri-18in-towel-bar.glb",
        position: [-1.11, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.4, 1.3, 1],
        roughness: 0.5, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/93d44ed2-eaac-44d5-870e-98dcc29e2e3f/63433086.jpg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/edef8223-02bc-495a-9933-5720da4730a9/62529342.jpg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/2f5054fa-a8c6-467a-9cb9-93d5c0bf0a4b/63433084.jpg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "tb9",
        name: "Delta - Flynn 24-in",
        allowFlip: true,
        tiers: {
          standard: ["Brushed Nickel", "Black"],
        },
        glb: "/models/towel-bars/delta-flynn-24in-towel-bar.glb",
        position: [-1.06, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 0.6],
        roughness: 0.5, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/ca5c27de-5d2a-4c84-a367-c670a1daf875/09617746.jpg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/32849852-0ba2-49bf-b41f-2c62577cd21f/50248597.jpg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "tb10",
        name: "Delta - Becker 24-in",
        allowFlip: true,
        tiers: {
          standard: ["Brushed Nickel", "Black", "Chrome"],
        },
        glb: "/models/towel-bars/delta-becker-24in-towel-bar.glb",
        position: [-1.12, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 1.2],
        roughness: 0.5, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/2868dc6b-78db-4639-9ee8-4d8042fbaea6/49683616.jpg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/64a749a6-8208-43d8-9687-1c310071c0b7/60854887.jpg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/3aaba26f-83f9-4771-a2ae-b1ad7cf18c13/60854809.jpg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "tb11",
        name: "Moen - Sage 18-in",
        allowFlip: true,
        tiers: {
          standard: ["Brushed Nickel"],
        },
        glb: "/models/towel-bars/moen-sage-18in-towel-bar.glb",
        position: [-1.086, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.4, 1.3, 1.2],
        roughness: 0.5, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/fdf9244b-b363-4a90-a934-f13848abd487/08296327.jpg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
        },
      },
      {
        id: "tb12",
        name: "Moen - Sage 24-in Double",
        allowFlip: true,
        tiers: {
          standard: ["Brushed Nickel"],
        },
        glb: "/models/towel-bars/moen-sage-24in-double-towel-bar.glb",
        position: [-1.05, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 1.2],
        roughness: 0.5, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/a21f6e02-077e-41e2-abd6-0916ff097a88/08296305.jpg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
        },
      },
      {
        id: "tb13",
        name: "Moen - Align 24-in",
        allowFlip: true,
        tiers: {
          standard: ["Gold", "Black", "Chrome", "Brushed Nickel"],
        },
        glb: "/models/towel-bars/moen-align-24in-towel-bar.glb",
        position: [-1.11, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 1.2],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/432f36b6-6539-4614-a9f3-85b3ddd64da3/40976269.jpg?size=pdhism",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },

          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/6fa9486c-443e-40d8-97f5-b1f25273ab3d/40978625.jpg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/459d4806-e67c-493e-aa52-b22fe8705f4a/40976459.jpg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/f2bfc08b-7c7d-48b4-a1f6-441c0273693c/40975019.jpg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
        },
      },
      {
        id: "tb14",
        name: "Delta - Sparrow 24-in",
        allowFlip: true,
        tiers: {
          standard: ["Black", "Gold"],
        },
        glb: "/models/towel-bars/delta-sparrow-24in-towel-bar.glb",
        position: [-1.098, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 1.4],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/be74f1f0-cb9b-43f5-b2e7-b639de0ef55a/64182177.jpg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/3ff62cbb-1a6d-4554-ad85-e6887148091b/68485327.jpeg?size=pdhism",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "tb15",
        name: "WOWOW - 24-in Double Layered",
        allowFlip: true,
        tiers: {
          premium: ["Black", "Brushed Nickel"],
        },
        glb: "/models/towel-bars/wowow-24in-double-towel-bar.glb",
        position: [-0.955, 2.1, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 1.4],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/87e387c6-0638-495a-ae0b-a494776a8074/67614391.jpeg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/671d744b-d80a-4865-aefc-e7246f406e1d/67614383.jpeg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
        },
      },
      {
        id: "tb16",
        name: "WOWOW - 24-in Single Layered",
        allowFlip: true,
        tiers: {
          premium: ["Black", "Brushed Nickel", "Gold"],
        },
        glb: "/models/towel-bars/wowow-24in-single-layer-towel-bar.glb",
        position: [-0.935, 2.1, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 1.4],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/d8d63dfb-7839-4451-9003-cf4557b03dca/67629490.jpeg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/fcbe58c9-cf25-482b-a493-2b68565ba1ce/67614346.jpeg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/acffec95-7ba0-4f59-a3ce-1c15db5493c0/67614675.jpeg?size=pdhism",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "tb17",
        name: "Kohler - Occasion 24-in",
        allowFlip: true,
        tiers: {
          premium: ["Gold"],
        },
        glb: "/models/towel-bars/kohler-occasion-24in-towel-bar.glb",
        position: [-1.1, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/3575eee7-06b1-44dd-a1c8-acadb87b380f/77437619.jpeg?size=pdhism",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "tb18",
        name: "Kohler - Artifacts 24-in",
        allowFlip: true,
        tiers: {
          premium: ["Gold"],
        },
        glb: "/models/towel-bars/kohler-artifacts-24in-towel-bar.glb",
        position: [-1.068, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/8f2b1cc9-9f4f-4c5a-8664-af99864204e8/77437232.jpeg?size=pdhism",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },
        },
      },
      {
        id: "tb19",
        name: "American Standard - 24-in Double",
        allowFlip: true,
        tiers: {
          premium: ["Chrome"],
        },
        glb: "/models/towel-bars/american-standard-24in-double-towel-bar.glb",
        position: [-1.07, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 1],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/85f866c8-0cfb-4fcb-8cc2-863c3407174b/44315740.jpg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
        },
      },
      {
        id: "tb20",
        name: "Kohler - Purist 24-in Double",
        allowFlip: true,
        tiers: {
          premium: ["Chrome", "Brushed Nickel", "Black"],
        },
        glb: "/models/towel-bars/kohler-purist-24in-double-towel-bar.glb",
        position: [-1.032, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.6, 1.3, 1.2],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/536790a4-d4a0-499a-8495-fdb9d96a0344/79301113.jpeg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/468c7a27-33b6-4486-836f-e4e5b15d1fd3/79301214.jpeg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/eff89920-2b38-49c7-b403-50961a0ffc5a/79301100.jpeg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "tb21",
        name: "Kohler - Parallel 20-in",
        allowFlip: true,
        tiers: {
          premium: ["Brushed Nickel", "Chrome", "Gold", "Black"],
        },
        glb: "/models/towel-bars/kohler-parallel-20in-towel-bar.glb",
        position: [-1.06, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.5, 1.3, 1.3],
        roughness: 0.6, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/2e67ea52-3b61-4cc1-8a09-1b531bedb4b7/80393700.jpeg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/323c1337-c6e3-4120-8a39-0e5d74ce674c/80393807.jpeg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/606c216d-3e78-4239-9cb8-270f94612c07/80393699.jpeg?size=pdhism",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },

          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/9a196fb8-c5bd-4007-9480-02c015d155c5/80393798.jpeg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
        },
      },
      {
        id: "tb22",
        name: "Kraus - Elie 26-in",
        allowFlip: true,
        tiers: {
          premium: ["Brushed Nickel", "Chrome", "Gold", "Black"],
        },
        glb: "/models/towel-bars/kraus-elie-26in-towel-bar.glb",
        position: [-0.975, 1.4, -4.2],
        rotation: [0, Math.PI / 2, 0],
        scale: [1.65, 1.3, 1.3],
        roughness: 0.4, // glossy ceramic
        metalness: 1, // not metal
        displayByColor: {
          "Brushed Nickel": {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/ed4d6219-5625-4eac-a355-0e99f25a7361/66447915.jpeg?size=pdhism",
            color: "#FAF2EA",
            displayColor: "#EADDCA",
          },
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/91941e20-54b0-4a30-9207-4c023588d415/48823320.jpg?size=pdhism",
            color: "#ffffff",
            displayColor: "#EBECF0",
          },
          Gold: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/c49994ac-415f-4b27-82e0-84e835f72f23/65479839.jpg?size=pdhism",
            color: "#F7E7CE",
            displayColor: "#FFD700",
          },

          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/580c829a-fef3-414d-b004-1208a30ff9ef/48818767.jpg?size=pdhism",
            color: "#000000",
            displayColor: "#000000",
          },
        },
      },
    ],
  },
];
