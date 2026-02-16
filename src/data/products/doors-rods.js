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
        id: "sd1",
        name: "Alcove Shower Door",
        tiers: {
          basic: ["Chrome"],
        },
        glb: "/models/doors-and-rods/door-alcove.glb",
        position: new THREE.Vector3(-1.2, 0.1, -5.1),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 1, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://image.made-in-china.com/2f0j00kSBiNTZdwbpv/China-Sanitary-Ware-Simple-Shower-Enclosure-for-Bath-Room.webp",
            color: "#ffffff",
          },
        },
      },
      {
        id: "sd2",
        name: "Curved Shower Door",
        tiers: {
          standard: ["Chrome"],
        },
        glb: "/models/doors-and-rods/door-curved.glb",
        position: new THREE.Vector3(-1.2, 0.1, -5.1),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 0.5, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://ibathroompro.co.nz/wp-content/uploads/2021/07/BPSHR-90.jpg",
            color: "#ffffff",
          },
        },
      },
      {
        id: "sd3",
        name: "Neo-Angle Shower Door",
        tiers: {
          premium: ["Chrome"],
        },
        glb: "/models/doors-and-rods/door-neoangle.glb",
        position: new THREE.Vector3(-1.2, 0.1, -5.1),
        rotation: new THREE.Euler(0, 0, 0),
        roughness: 1, // glossy ceramic
        metalness: 1, // not metal
        clearcoat: 0.0, // glazed surface
        clearcoatRoughness: 0.0,
        envMapIntensity: 1.0, // reflections
        displayByColor: {
          Chrome: {
            productDisplay:
              "https://m.media-amazon.com/images/I/71-2oUjACLL._AC_UF894,1000_QL80_.jpg",
            color: "#ffffff",
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
        position: new THREE.Vector3(-1.2, 0.1, -5.1),
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
