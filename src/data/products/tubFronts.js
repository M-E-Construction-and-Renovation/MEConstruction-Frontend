"use client";

import * as THREE from "three";

export const tubFrontsShowerPansCategories = [
  {
    id: "tubFronts/showerPans",
    // initialAngle: "front",
    label: "Tub Fronts/Shower Pans",
    // zIndex: "75",
    // shapesAllowed: ["tub"],
    isDraggable: false,
    products: [
      {
        id: "tf1",
        name: "Princeton - American Standard",
        tiers: {
          basic: ["White"], // Your images were only White
        },
        glb: "/models/tub-fronts-and-shower-pans/princeton.glb",
        position: new THREE.Vector3(-1.45, -1.55, -1.8),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.5, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://lixil.cdn.celum.cloud/174054_2391202ICH020_0_CDNwebp.webp",
            color: "#EFF2F3",
          },
        },
      },
      {
        id: "tf2",
        name: "Pro Steel - MAAX",
        tiers: {
          standard: ["White"],
        },
        glb: "/models/tub-fronts-and-shower-pans/prosteel.glb",
        position: new THREE.Vector3(-1.2, -1.55, -2.05),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.8, // glossy ceramic
        metalness: 0.7, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/fc85934f-5401-4902-a777-ce06d40cad8d/74270120.jpeg?size=pdhism",
            color: "#EFF2F3",
          },
        },
      },
      {
        id: "tf3",
        name: "Villager - Kohler",
        tiers: {
          premium: ["White"],
        },
        glb: "/models/tub-fronts-and-shower-pans/villager.glb",
        position: new THREE.Vector3(-1.2, -1.55, -2.05),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.8, // glossy ceramic
        metalness: 0.7, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/715-0_ISO_d2c0064351_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#EFF2F3",
          },
        },
      },
      {
        id: "sp1",
        name: "Tub-To-Shower Pan",
        tiers: {
          premium: ["White"],
        },
        glb: "/models/tub-fronts-and-shower-pans/tub.glb",
        position: new THREE.Vector3(-1.2, -1.55, -1.85),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.8, // glossy ceramic
        metalness: 0.7, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/b9724081-d95f-4c08-93ea-0cb34e26ce27/74273147.jpeg",
            color: "#EFF2F3",
          },
        },
      },
      {
        id: "sp2",
        name: "Alcove Shower Pan",
        tiers: {
          basic: ["White"],
        },
        glb: "/models/tub-fronts-and-shower-pans/alcove.glb",
        position: new THREE.Vector3(-1.2, -1.55, -1.85),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.8, // glossy ceramic
        metalness: 0.7, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://images.thdstatic.com/productImages/91df8fbb-f764-4d68-96a4-dc1fb7e34b1e/svn/white-swan-shower-pans-ff03454md-010-64_600.jpg",
            color: "#EFF2F3",
          },
        },
      },
      {
        id: "sp3",
        name: "Curved Shower Pan",
        tiers: {
          standard: ["White"],
        },
        glb: "/models/tub-fronts-and-shower-pans/curved.glb",
        position: new THREE.Vector3(-1.2, -1.55, -1.85),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.8, // glossy ceramic
        metalness: 0.7, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlv2yPJ3Jl3rEobOjLcDtpDFYNyEBGjmwIw&s",
            color: "#EFF2F3",
          },
        },
      },
      {
        id: "sp4",
        name: "Neo-Angle Shower Pan",
        tiers: {
          premium: ["White"],
        },
        glb: "/models/tub-fronts-and-shower-pans/neo-angle.glb",
        position: new THREE.Vector3(-1.2, -1.55, -1.85),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.8, // glossy ceramic
        metalness: 0.7, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://static.wixstatic.com/media/f18398_0fda84c0c25d4594a36462eabe88e987~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f18398_0fda84c0c25d4594a36462eabe88e987~mv2.jpg",
            color: "#EFF2F3",
          },
        },
      },
    ],
  },
];
