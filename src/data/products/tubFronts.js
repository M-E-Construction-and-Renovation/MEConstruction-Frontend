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
        name: "Kohler - Entity",
        tiers: {
          basic: ["White"], // Your images were only White
        },
        glb: "/models/tub-fronts-and-shower-pans/kohler-entity.glb",
        position: new THREE.Vector3(-0.1, -0.025, -5.7),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1.73, 1.6, 1.6],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/f28e0c12-0f59-4c25-8e32-55ee61f6353b/75042117.jpeg?size=pdhism",
            color: "#ffffff",
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
        // position: new THREE.Vector3(-1.2, -1.55, -2.05),
        position: new THREE.Vector3(-1.195, -0.015, -5.1),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1, 1, 1.2],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/fc85934f-5401-4902-a777-ce06d40cad8d/74270120.jpeg?size=pdhism",
            color: "#ffffff",
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
        position: new THREE.Vector3(-1.195, -0.015, -5.1),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1, 1, 1.2],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://kohler.scene7.com/is/image/PAWEB/GBH_SQTemplate?$product_src=is{PAWEB/715-0_ISO_d2c0064351_rgb}&$PDPDesktopSQ$&fmt=webp",
            color: "#ffffff",
          },
        },
      },
      {
        id: "tf4",
        name: "Kohler - Underscore",
        tiers: {
          premium: ["White"], // Your images were only White
        },
        glb: "/models/tub-fronts-and-shower-pans/kohler-underscore.glb",
        position: new THREE.Vector3(0, -0.015, -5.72),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1.7, 1.2, 1.5],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/2dd25004-f30c-4013-9dbe-752dc8fc0ac1/75042305.jpeg?size=pdhism",
            color: "#ffffff",
          },
        },
      },
      {
        id: "tf5",
        name: "Sterling - Rectangle Alcove",
        tiers: {
          standard: ["White"], // Your images were only White
        },
        glb: "/models/tub-fronts-and-shower-pans/sterling-rectangle-alcove.glb",
        position: new THREE.Vector3(0, -0.015, -5.75),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1.7, 1.5, 1.65],
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/eda8f54b-6adb-4005-8e92-a612ef4445bc/69094221.jpeg?size=pdhism",
            color: "#ffffff",
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
        position: new THREE.Vector3(-1.195, -0.015, -5.09),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/b9724081-d95f-4c08-93ea-0cb34e26ce27/74273147.jpeg",
            color: "#ffffff",
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
        position: new THREE.Vector3(-1.195, -0.015, -5.09),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://images.thdstatic.com/productImages/91df8fbb-f764-4d68-96a4-dc1fb7e34b1e/svn/white-swan-shower-pans-ff03454md-010-64_600.jpg",
            color: "#ffffff",
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
        position: new THREE.Vector3(-1.195, -0.015, -5.09),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlv2yPJ3Jl3rEobOjLcDtpDFYNyEBGjmwIw&s",
            color: "#ffffff",
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
        position: new THREE.Vector3(-1.195, -0.015, -5.09),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          White: {
            productDisplay:
              "https://static.wixstatic.com/media/f18398_0fda84c0c25d4594a36462eabe88e987~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f18398_0fda84c0c25d4594a36462eabe88e987~mv2.jpg",
            color: "#ffffff",
          },
        },
      },
    ],
  },
];
