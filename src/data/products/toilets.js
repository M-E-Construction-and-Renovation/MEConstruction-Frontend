"use client";

import * as THREE from "three";

export const toiletCategories = [
  {
    id: "toilets",
    // initialAngle: "side",
    label: "Toilets",
    // zIndex: "10",
    // shapesAllowed: ["tub", "tub-to-shower", "curved", "neo-angle", "alcove"],
    isDraggable: false,
    products: [
      {
        id: "t1",
        name: "Glacier Bay",
        tiers: {
          basic: ["White"],
        },
        glb: "/models/toilets/basic_glacierbay.glb",
        position: new THREE.Vector3(0.45, 0, -3),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.9, // glossy ceramic
        metalness: 1.0, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://images.thdstatic.com/productImages/6fe20a93-2ab3-453c-b589-a96123a18b20/svn/white-glacier-bay-two-piece-toilets-n2316-64_1000.jpg",
            color: "#ffffff",
          },
        },
      },
      {
        id: "t2",
        name: "American Standard",
        tiers: {
          basic: ["White"],
        },
        glb: "/models/toilets/basic_american standard.glb",
        position: new THREE.Vector3(0.45, 0, -3),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.9, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          White: {
            productDisplay: "https://cdn.rona.ca/images/00535176_L.jpg",
            color: "#ffffff",
          },
        },
      },
      {
        id: "t3",
        name: "Elmbrook",
        tiers: {
          premium: ["White"],
        },
        glb: "/models/toilets/premium_kelmbrook.glb",
        position: new THREE.Vector3(0.45, 0, -3),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.9, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/33201-0_ISO_d2c0041033_rgb}&$PDPMobilePortraitSQ$&fmt=webp",
            color: "#ffffff",
          },
        },
      },
      {
        id: "t4",
        name: "Santa Rosa Compact",
        tiers: {
          premium: ["White"],
        },
        glb: "/models/toilets/premium_starosacompact.glb",
        position: new THREE.Vector3(0.45, 0, -3),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.9, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/Category_Template?$PDPcon$&fmt=webp&$gradient_src=PAWEB/organic-gradient&$shadow_src=PAWEB/Blank&$Badge1_src=PAWEB/Blank&$Badge4_src=PAWEB/Blank&$Badge3_src=PAWEB/Blank&$Badge2_src=PAWEB/Blank&$product_src=is{PAWEB/zaa64625_rgb}",
            color: "#ffffff",
          },
        },
      },
      // {
      //   id: "t5",
      //   name: "TOTO - Drake",
      //   tiers: {
      //     premium: ["White"],
      //   },
      //   glb: "/models/toilets/premium_totodrake.glb",
      //   position: new THREE.Vector3(0.45, -1.55, 0.7),
      //   rotation: new THREE.Euler(0, 0, 0),
      //   roughness: 0.7, // glossy ceramic
      //   metalness: 1, // not metal
      //   clearcoat: 0.0, // glazed surface
      //   clearcoatRoughness: 0.0,
      //   envMapIntensity: 1.0, // reflections
      //   displayByColor: {
      //     White: {
      //       productDisplay:
      //         "https://images.thdstatic.com/productImages/57b32ad3-276e-43a0-81e2-bd9fb5fe1e1d/svn/cotton-white-toto-two-piece-toilets-ms776124csfg-01-64_1000.jpg",
      //       color: "#ffffff",
      //     },
      //   },
      // },
      {
        id: "t6",
        name: "TOTO - Ultramax II",
        tiers: {
          premium: ["White"],
        },
        glb: "/models/toilets/premium_totoultra2.glb",
        position: new THREE.Vector3(0.45, 0, -3),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.9, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://www.blissbathandkitchen.com/wp-content/uploads/2024/10/CST604CEFGAT40-Toilet-hero.webp",
            color: "#ffffff",
          },
        },
      },
      {
        id: "t7",
        name: "Highline",
        tiers: {
          standard: ["White"],
        },
        glb: "/models/toilets/standard_highline.glb",
        position: new THREE.Vector3(0.45, 0, -3),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.9, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/Category_Template?$PDPexpz$&fmt=webp&$gradient_src=PAWEB/organic-gradient&$shadow_src=PAWEB/Blank&$Badge1_src=PAWEB/Blank&$Badge4_src=PAWEB/Blank&$Badge3_src=PAWEB/Blank&$Badge2_src=PAWEB/Blank&$product_src=is{PAWEB/aad01724_rgb}",
            color: "#ffffff",
          },
        },
      },
      {
        id: "t8",
        name: "Gleam",
        tiers: {
          standard: ["White"],
        },
        glb: "/models/toilets/standard_gleam.glb",
        position: new THREE.Vector3(0.45, 0, -3),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.9, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/Category_Template?$PDPexpz$&fmt=webp&$gradient_src=PAWEB/organic-gradient&$shadow_src=PAWEB/Blank&$Badge1_src=PAWEB/Blank&$Badge4_src=PAWEB/Blank&$Badge3_src=PAWEB/Blank&$Badge2_src=PAWEB/Blank&$product_src=is{PAWEB/zaa86862_rgb}",
            color: "#FAF9F0",
          },
        },
      },
    ],
  },
];
