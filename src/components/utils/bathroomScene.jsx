"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  useEnvironment,
  useTexture,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { useLayoutEffect, Suspense, useMemo, useRef, useEffect } from "react";

useEnvironment.preload({ files: "/environment/bathroom-environment.hdr" });

function BathroomModel({ filteredTextures, selectedProducts }) {
  const { scene } = useGLTF("/models/bathroom.glb");

  const initialTextures = {
    floorTexture: {
      map: "/textures/tiles/floor_tile_1/Tiles107_2K-JPG_Color.jpg",
      normalMap: "/textures/tiles/floor_tile_1/Tiles107_2K-JPG_NormalGL.jpg",
      roughnessMap:
        "/textures/tiles/floor_tile_1/Tiles107_2K-JPG_Roughness.jpg",
    },
    wallTexture: {
      map: "/textures/walls/wall_tile_1/Tiles075_2K-JPG_Color.jpg",
      normalMap: "/textures/walls/wall_tile_1/Tiles075_2K-JPG_NormalGL.jpg",
      roughnessMap: "/textures/walls/wall_tile_1/Tiles075_2K-JPG_Roughness.jpg",
    },
    cabinWallTexture: {
      map: "/textures/cabin_walls/cabin_wall_1/Marble020_2K-JPG_Color.jpg",
      normalMap:
        "/textures/cabin_walls/cabin_wall_1/Marble020_2K-JPG_NormalGL.jpg",
      roughnessMap:
        "/textures/cabin_walls/cabin_wall_1/Marble020_2K-JPG_Roughness.jpg",
    },
    ceilingTexture: {
      map: "/textures/ceilings/ceiling_1/Plastic013A_2K-JPG_Color.jpg",
      normalMap: "/textures/ceilings/ceiling_1/Plastic013A_2K-JPG_NormalGL.jpg",
      roughnessMap:
        "/textures/ceilings/ceiling_1/Plastic013A_2K-JPG_Roughness.jpg",
    },
  };

  const textures = useMemo(() => {
    const result = {};

    Object.keys(initialTextures).forEach((key) => {
      const category = filteredTextures?.find((c) => c.id === key);
      const selected = selectedProducts?.[key];

      if (category && selected) {
        const product = category.products.find(
          (p) => p.id === selected.productId,
        );

        if (product) {
          const color = product.displayByColor?.[selected.color]?.color;

          result[key] = {
            map: color || product.map || initialTextures[key].map,
            normalMap: product.normalMap || initialTextures[key].normalMap,
            roughnessMap:
              product.roughnessMap || initialTextures[key].roughnessMap,
          };
          return;
        }
      }

      // fallback
      result[key] = initialTextures[key];
    });

    return result;
  }, [filteredTextures, selectedProducts]);

  const { floorTexture, wallTexture, cabinWallTexture, ceilingTexture } =
    textures;

  // 1. Load textures (hooks handle the Suspense automatically)
  const floorMaps = useTexture(floorTexture || {});

  const wallMaps = useTexture(wallTexture || {});

  const cabinWallMaps = useTexture(cabinWallTexture || {});

  const ceilingMaps = useTexture(ceilingTexture || {});

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if (!child.isMesh || !child.material) return;

      child.material = child.material.clone();

      child.receiveShadow = true; // Walls catch shadows from vanity/bath
      child.castShadow = true; // If light comes from outside a window
    });

    return clone;
  }, [scene]);

  useLayoutEffect(() => {
    // Apply material config
    clonedScene.traverse((child) => {
      if (child.name === "floor") {
        child.traverse((mesh) => {
          if (!mesh.isMesh || !mesh.material) return;
          const mat = mesh.material;

          if (floorMaps.map) {
            // 1. Enable Wrapping (Necessary for tiling)
            floorMaps.map.wrapS = floorMaps.map.wrapT = THREE.RepeatWrapping;
            // 2. Set the Repeat [X, Y]
            // Values higher than 1 make the pattern smaller (tiling more)
            // Values lower than 1 stretch the pattern
            floorMaps.map.repeat.set(4, 4);
            mat.map = floorMaps.map;
            mat.map.flipY = false;
          }
          if (floorMaps.roughnessMap) mat.roughnessMap = floorMaps.roughnessMap;

          if (floorMaps.normalMap) {
            floorMaps.normalMap.wrapS = floorMaps.normalMap.wrapT =
              THREE.RepeatWrapping;
            floorMaps.normalMap.repeat.set(4, 4);
            mat.normalMap = floorMaps.normalMap;
          }
          mat.needsUpdate = true;
        });
      }

      if (
        child.name === "Wall_Right" ||
        child.name === "Wall_Left" ||
        child.name === "Wall_Back"
      ) {
        child.traverse((mesh) => {
          if (!mesh.isMesh || !mesh.material) return;
          // if (!mesh.name.includes("cabin_wall")) return;
          const mat = mesh.material;

          const bathroomWallMaps = mesh.name.includes("cabin_wall")
            ? cabinWallMaps
            : wallMaps;

          if (bathroomWallMaps.map) {
            // 1. Enable Wrapping (Necessary for tiling)
            bathroomWallMaps.map.wrapS = bathroomWallMaps.map.wrapT =
              THREE.RepeatWrapping;
            // 2. Set the Repeat [X, Y]
            // Values higher than 1 make the pattern smaller (tiling more)
            // Values lower than 1 stretch the pattern
            bathroomWallMaps.map.repeat.set(2, 2);
            mat.map = bathroomWallMaps.map;
            mat.map.flipY = false;
          }
          if (bathroomWallMaps.roughnessMap)
            mat.roughnessMap = bathroomWallMaps.roughnessMap;

          if (bathroomWallMaps.normalMap) {
            bathroomWallMaps.normalMap.wrapS =
              bathroomWallMaps.normalMap.wrapT = THREE.RepeatWrapping;
            bathroomWallMaps.normalMap.repeat.set(2, 2);
            mat.normalMap = bathroomWallMaps.normalMap;
          }

          mat.needsUpdate = true;
        });
      }

      if (child.name === "Ceiling") {
        child.traverse((mesh) => {
          if (!mesh.isMesh || !mesh.material) return;
          const mat = mesh.material;

          if (ceilingMaps.map) {
            // 1. Enable Wrapping (Necessary for tiling)
            ceilingMaps.map.wrapS = ceilingMaps.map.wrapT =
              THREE.RepeatWrapping;
            // 2. Set the Repeat [X, Y]
            // Values higher than 1 make the pattern smaller (tiling more)
            // Values lower than 1 stretch the pattern
            ceilingMaps.map.repeat.set(4, 4);
            mat.map = ceilingMaps.map;
            mat.map.flipY = false;
          }
          if (ceilingMaps.roughnessMap)
            mat.roughnessMap = ceilingMaps.roughnessMap;

          if (ceilingMaps.normalMap) {
            ceilingMaps.normalMap.wrapS = ceilingMaps.normalMap.wrapT =
              THREE.RepeatWrapping;
            ceilingMaps.normalMap.repeat.set(4, 4);
            mat.normalMap = ceilingMaps.normalMap;
          }
          mat.needsUpdate = true;
        });
      }
    });
  }, [clonedScene, floorMaps, wallMaps, cabinWallMaps, ceilingMaps]);

  return <primitive object={clonedScene} />;
}

function Product({
  glb,
  position,
  rotation,
  scale = [1, 1, 1],
  color,
  roughness = 0.0,
  metalness = 0.0,
  clearcoat = 0.0,
  clearcoatRoughness = 0.0,
  envMapIntensity = 0,
  isMirror = false,
}) {
  const { scene } = useGLTF(glb);

  const { clonedScene, mirrorGeometry } = useMemo(() => {
    const clone = scene.clone(true);

    let mirrorGeometry;

    clone.traverse((child) => {
      if (!child.isMesh || !child.material) return;
      // Clone materials so changes don't affect other instances
      child.material = child.material.clone();

      if (isMirror && child.name.includes("mirror")) {
        mirrorGeometry = child.geometry;
        child.visible = false; // Hide the original so it doesn't overlap
      }
    });

    return { clonedScene: clone, mirrorGeometry };
  }, [scene]);

  // APPLY PBR PROPERTIES
  useLayoutEffect(() => {
    clonedScene.traverse((child) => {
      if (!child.isMesh || !child.material) return;

      const mat = child.material;
      child.castShadow = true;
      child.receiveShadow = true;

      if (color) mat.color.set(color || "#EFF2F3").convertSRGBToLinear();

      mat.roughness = roughness;
      mat.metalness = metalness;

      if ("clearcoat" in mat) {
        mat.clearcoat = clearcoat;
        mat.clearcoatRoughness = clearcoatRoughness;
      }

      mat.envMapIntensity = envMapIntensity;
      mat.needsUpdate = true;
    });
  }, [
    clonedScene,
    color,
    roughness,
    metalness,
    clearcoat,
    clearcoatRoughness,
    envMapIntensity,
  ]);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <primitive object={clonedScene} />

      {isMirror && mirrorGeometry && (
        <mesh geometry={mirrorGeometry}>
          <MeshReflectorMaterial
            blur={[0, 0]} // Turn off blur temporarily to see if it's working
            resolution={1024}
            mixBlur={0}
            mixStrength={2} // Crank this up to force the reflection to show
            roughness={0}
            depthScale={0} // Set to 0 to disable depth-based fading for testing
            color="#a0a0a0" // Lighten the base color (black base = black mirror)
            metalness={0.5}
            mirror={1}
            transparent={false}
            depthWrite={true}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
}

function InteriorLight({
  position = [0.08, 2.96, -4.3],
  intensity = 10,
  castShadow = true,
}) {
  return (
    <group position={position}>
      {/* Adjust Y to your ceiling height */}
      {/* 1. The Physical "Bulb" (What you see) */}
      <mesh>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          emissive="#ffffca"
          emissiveIntensity={2}
          color="white"
        />
      </mesh>
      {/* 2. The Actual Light (What illuminates the room) */}
      <pointLight
        intensity={intensity} // High because of physical decay
        decay={1} // Standard physical light behavior
        distance={20} // Range of the light
        castShadow={castShadow} // Enable this for shadows on walls
        // shadow-mapSize={1024}
        shadow-mapSize={[512, 512]}
        shadow-bias={-0.0005} // Prevents "shadow acne" patterns on meshes
        // shadow-normalBias={0.02}
        shadow-normalBias={0.04}
      />
    </group>
  );
}

export default function BathroomScene({
  selectedProducts = {},
  categories = [],
  plumbing = "",
}) {
  const filteredCategories = categories.filter(
    (category) => category.id in selectedProducts,
  );

  const filteredTextures = filteredCategories.filter(
    (category) => category.isTexture,
  );

  const filteredProducts = filteredCategories.filter(
    (category) => !category.isTexture,
  );

  // Check if we are on mobile to adjust camera
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const isLaptop =
    typeof window !== "undefined" &&
    window.innerWidth < 1280 &&
    window.innerWidth > 768;

  return (
    <div className="w-full h-full">
      <Suspense
        fallback={
          <div className="h-full flex flex-col items-center justify-center bg-white z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
            <p className="text-lg font-medium text-gray-700">
              Loading Design Tool...
            </p>
          </div>
        }
      >
        <Canvas
          // camera={{ fov: 50 }}
          camera={{
            fov: isMobile ? 75 : isLaptop ? 50 : 55,
          }}
          shadows
          dpr={[1, 1.5]} // This ensures the GPU never works harder than it needs to
          gl={{
            physicallyCorrectLights: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1, // increase or decrease
            outputEncoding: THREE.SRGBColorSpace,
            antialias: true,
          }}
          className="bg-gradient-to-b from-blue-500 to-white"
        >
          <Environment
            environmentIntensity={0}
            files="/environment/bathroom-environment.hdr"
            background={true}
          />

          <BathroomModel
            filteredTextures={filteredTextures}
            selectedProducts={selectedProducts}
          />

          {filteredProducts.map((category, index) => {
            const specificProduct = category.products.find(
              (product) =>
                product.id === selectedProducts[category.id].productId,
            );

            const color =
              specificProduct.displayByColor?.[
                selectedProducts[category.id].color
              ].color;

            return (
              <Product
                key={specificProduct.id}
                glb={specificProduct.glb}
                position={specificProduct.position}
                rotation={specificProduct.rotation}
                scale={specificProduct.scale}
                color={color}
                roughness={specificProduct.roughness}
                metalness={specificProduct.metalness}
                clearcoat={specificProduct.clearcoat}
                clearcoatRoughness={specificProduct.clearcoatRoughness}
                envMapIntensity={specificProduct.envMapIntensity}
                isMirror={category.isMirror}
              />
            );
          })}

          <EffectComposer disableNormalPass>
            <N8AO
              halfRes // Renders at half resolution (invisible to eye, 2x faster)
              aoRadius={0.5}
              intensity={1}
              distanceFalloff={1}
            />
          </EffectComposer>

          <ambientLight intensity={1} />

          {/* 2. The Main Light Source */}
          <InteriorLight intensity={10} />
          {/* 3. Secondary Light Source */}
          <InteriorLight
            position={[0.08, 2.96, -1.6]}
            intensity={5}
            castShadow={false}
          />

          <OrbitControls
            makeDefault
            target={[0, 1.5, -4]}
            enablePan={true}
            // minDistance={1}
            // maxDistance={4.5}
            // minPolarAngle={Math.PI / 2.5} // 45°
            // maxPolarAngle={Math.PI / 1.9} // ~95°
            // minAzimuthAngle={-Math.PI / 13.3}
            // maxAzimuthAngle={Math.PI / 13.3}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
