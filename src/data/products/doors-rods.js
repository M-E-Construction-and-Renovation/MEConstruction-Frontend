"use client";

import * as THREE from "three";

export const doorsRodsCategories = [
  {
    id: "doorsRods",
    // initialAngle: "front",
    label: "Doors / Rods",
    // zIndex: "80",
    // shapesAllowed: ["tub"],
    isDraggable: false,
    products: [
      {
        id: "tfd1",
        name: "Kohler - Levity Bathtub Door",
        tiers: {
          premium: ["Black"],
        },
        glb: "/models/doors-and-rods/kohler-levity-frameless.glb",
        position: new THREE.Vector3(0, 0.6, -5.1),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1.6, 1.3, 1],
        roughness: 1, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/7406aa25-ac0f-4182-abf5-85d1db14fd88/44205698.jpg?size=pdhism",
            color: "#727472",
          },
        },
      },
      {
        id: "tfd2",
        name: "allen + roth - Davidson Bathtub Door",
        tiers: {
          premium: ["Chrome"],
        },
        glb: "/models/doors-and-rods/allen-roth-davidson-frameless.glb",
        position: new THREE.Vector3(0, 0.6, -5.1),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1.6, 1.3, 1],
        roughness: 1, // glossy ceramic
        metalness: 0.8, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/626b66c8-f7f1-48f2-bec1-09337e536b6d/42573895.jpg?size=pdhism",
            color: "#ffffff",
          },
        },
      },
      {
        id: "sd1",
        name: "Allen Brau Fantasy - Alcove Shower Door",
        tiers: {
          basic: ["Black"],
        },
        glb: "/models/doors-and-rods/alcove-shower-door.glb",
        position: new THREE.Vector3(0, 0.03, -6.3),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1.45, 1.2, 1.05],
        roughness: 1, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://b5.3dsky.org/media/cache/tuk_model_custom_filter_ang_en/model_images/0000/0000/7840/7840537.686cd2dcbcf20.jpeg",
            color: "#727472",
          },
        },
      },
      {
        id: "sd2",
        name: "ABBER - Curved Shower Door",
        tiers: {
          standard: ["Black"],
        },
        glb: "/models/doors-and-rods/abber-schwarzer-diamant-curved-shower-door.glb",
        position: new THREE.Vector3(-0.72, 0.1, -5.06),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1.35, 1.2, 1.05],
        roughness: 1, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://b4.3dsky.org/media/cache/tuk_model_custom_filter_ang_en/model_images/0000/0000/7508/7508399.67d5f0846c414.png",
            color: "#727472",
          },
        },
      },
      {
        id: "sd3",
        name: "ABBER - Neo-Angle Shower Door",
        tiers: {
          premium: ["Black"],
        },
        glb: "/models/doors-and-rods/abber-ewiges-wasser-neo-angle-shower-door.glb",
        position: new THREE.Vector3(0.09, 0.1, -4.83),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1.35, 1.2, 1.38],
        roughness: 1, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://b4.3dsky.org/media/cache/tuk_model_custom_filter_ang_en/model_images/0000/0000/7504/7504590.67d3f231c94c3.png",
            color: "#727472",
          },
        },
      },
      {
        id: "sd4",
        name: "Tub-To-Shower Thin Frame Door",
        tiers: {
          premium: ["Chrome"],
        },
        glb: "/models/doors-and-rods/tub-to-shower-door.glb",
        position: new THREE.Vector3(-1.2, 0.1, -5),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.2, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://images.thdstatic.com/productImages/a14bb0e1-fbe5-4678-8bc9-1408f4640a35/svn/dreamline-alcove-shower-doors-shdr-20557210-04-64_600.jpg",
            color: "#ffffff",
          },
        },
      },
      {
        id: "sd5",
        name: "Tub-To-Shower Door",
        tiers: {
          standard: ["Black"],
        },
        glb: "/models/doors-and-rods/bathtub-door.glb",
        position: new THREE.Vector3(-1.2, 0.1, -5.1),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.2, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://free3dbase.com/upload/modele/drzwi-rozsuwane-geo-6-120.jpg",
            color: "#ffffff",
          },
        },
      },
      {
        id: "sd6",
        name: "Kohler - Levity Shower Door",
        tiers: {
          premium: ["Black"],
        },
        glb: "/models/doors-and-rods/kohler-levity-frameless.glb",
        position: new THREE.Vector3(0, 0.1, -5.1),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1.66, 1.6, 1],
        roughness: 1, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/6737df2d-23d1-4875-8fa9-5bef86f30555/80392648.jpeg?size=pdhismm",
            color: "#727472",
          },
        },
      },
      {
        id: "sd7",
        name: "allen + roth - Davidson Shower Door",
        tiers: {
          premium: ["Black"],
        },
        glb: "/models/doors-and-rods/allen-roth-davidson-frameless.glb",
        position: new THREE.Vector3(0, 0.1, -5.1),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1.66, 1.7, 1],
        roughness: 1, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://mobileimages.lowes.com/productimages/f6d155b9-e01d-4678-9851-9581e8f93af1/63882436.jpg?size=pdhism",
            color: "#727472",
          },
        },
      },
      {
        id: "sd8",
        name: "ABBER - Alcove Shower Door",
        tiers: {
          basic: ["Black"],
        },
        glb: "/models/doors-and-rods/alcove-shower-door2.glb",
        position: new THREE.Vector3(0.05, 0.15, -6.3),
        rotation: new THREE.Euler(0, 0, 0),
        scale: [1.55, 1.2, 1.55],
        roughness: 1, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://m.media-amazon.com/images/I/81FHpqB-NGL.jpg",
            color: "#727472",
          },
        },
      },
      {
        id: "sr1",
        name: "Shower Rod 1",
        tiers: {
          standard: ["Chrome"],
        },
        glb: "/models/doors-and-rods/curtain rod.glb",
        position: new THREE.Vector3(-1.21, 0.1, -5),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 1, // glossy ceramic
        metalness: 0.2, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://m.media-amazon.com/images/S/aplus-media-library-service-media/8ef3d433-1a67-4752-ae64-24ee317e9955.__CR0,0,970,600_PT0_SX970_V1___.jpg",
            color: "#ffffff",
          },
        },
      },
      {
        id: "sr2",
        name: "Shower Rod 2",
        tiers: {
          basic: ["Champagne Gold"],
        },
        glb: "/models/doors-and-rods/curtain rod 2.glb",
        position: new THREE.Vector3(-1.21, 0.1, -4.5),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.5, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 0.0, // reflections
        displayByColor: {
          "Champagne Gold": {
            productDisplay:
              "https://i.pinimg.com/736x/da/7e/de/da7edec696bf20fde9329de87a43e5f1.jpg",
            color: "#F7E7CE",
          },
        },
      },
      {
        id: "sr3",
        name: "Shower Rod 3",
        tiers: {
          premium: ["Black"],
        },
        glb: "/models/doors-and-rods/curtain rod 3.glb",
        position: new THREE.Vector3(-1.21, 0.1, -4.5),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 1, // glossy ceramic
        metalness: 0.5, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Black: {
            productDisplay:
              "https://3hlinen.com.au/cdn/shop/files/3HLinen_Linen_Shower_Curtain_Black.png?v=1758293819&width=1920",
            color: "#727472",
          },
        },
      },
    ],
  },
];
