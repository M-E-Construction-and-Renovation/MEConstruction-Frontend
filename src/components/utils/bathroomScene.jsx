"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
  useEnvironment,
} from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { useLayoutEffect, Suspense, useMemo } from "react";

useEnvironment.preload({ files: "/environment/bathroom-environment.hdr" });

function BathroomModel() {
  const { scene } = useGLTF("/models/bathroom.glb");

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if (!child.isMesh || !child.material) return;

      child.material = child.material.clone();

      child.receiveShadow = true; // Walls catch shadows from vanity/bath
      child.castShadow = true; // If light comes from outside a window

      const mat = child.material;

      // mat.color.set("#F5F5F5");
      mat.color.set("#E8E8E8");
      mat.color.convertSRGBToLinear();

      mat.needsUpdate = true;
    });

    return clone;
  }, [scene]);

  useLayoutEffect(() => {
    // Center the model
    // const box = new THREE.Box3().setFromObject(clonedScene);
    // const center = box.getCenter(new THREE.Vector3());

    // clonedScene.position.sub(center);

    // Apply material config
    clonedScene.traverse((child) => {
      // if (!child.isMesh || !child.material) return;
      // if (child.name === "floor" || child.name === "Ceiling") {
      //   child.traverse((mesh) => {
      //     if (!mesh.isMesh || !mesh.material) return;
      //     const mat = mesh.material;
      //     mat.color.set("#FFFFFA");
      //     mat.color.convertSRGBToLinear();
      //     mat.needsUpdate = true;
      //   });
      // }
      // const mat = child.material;
      // // Neutral architectural white
      // mat.color.set("#000000");
      // mat.color.convertSRGBToLinear();
      // mat.roughness = 0.5; // matte painted wall
      // mat.metalness = 0.5;
      // mat.envMapIntensity = 1; // subtle bounce
      // mat.needsUpdate = true;
    });
  }, [clonedScene]);

  return <primitive object={clonedScene} />;
}

function Product({
  glb,
  position,
  rotation,
  scale = [1, 1, 1],
  color = "#EFF2F3",
  roughness = 0.0, // glossy ceramic
  metalness = 0.0, // not metal
  clearcoat = 0.0, // glazed surface
  clearcoatRoughness = 0.0,
  envMapIntensity = 0, // reflections
}) {
  const { scene } = useGLTF(glb);

  // 🔑 CLONE THE SCENE
  // const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if (!child.isMesh || !child.material) return;

      child.material = child.material.clone();
    });

    return clone;
  }, [scene]);

  useLayoutEffect(() => {
    // Apply material config

    // scene.position.copy(position);
    // scene.rotation.copy(rotation);
    // scene.scale.set(...scale);

    clonedScene.traverse((child) => {
      if (!child.isMesh || !child.material) return;

      const mat = child.material;

      // Store original color once (optional but professional)
      if (!child.userData.initialColor) {
        child.userData.initialColor = mat.color.clone();
      }

      child.castShadow = true; // Product casts shadow on floor/wall
      child.receiveShadow = true; // Product receives shadows from walls

      // Apply color correctly
      mat.color.set(color || "#EFF2F3");
      mat.color.convertSRGBToLinear(); // CRITICAL

      // Apply PBR values
      mat.roughness = roughness;
      mat.metalness = metalness;

      // Only if material supports it
      if ("clearcoat" in mat) {
        mat.clearcoat = clearcoat;
        mat.clearcoatRoughness = clearcoatRoughness;
      }

      mat.envMapIntensity = envMapIntensity;
      mat.needsUpdate = true;
    });
  }, [
    clonedScene,
    // position,
    // rotation,
    // scale,
    color,
    roughness,
    metalness,
    clearcoat,
    clearcoatRoughness,
    envMapIntensity,
  ]);

  // return <primitive object={clonedScene} />;
  // 🔑 TRANSFORMS GO HERE (NO EFFECT)
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}

function InteriorLight({
  position = [0.08, 2.9, -4.3],
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

  return (
    <div className="w-full h-full">
      <Suspense
        fallback={
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
            <p className="text-lg font-medium text-gray-700">
              Loading Design Tool...
            </p>
          </div>
        }
      >
        <Canvas
          camera={{ fov: 50 }}
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
            environmentIntensity={0.2}
            files="/environment/bathroom-environment.hdr"
            // background={true}
          />

          <BathroomModel />

          {filteredCategories.map((category, index) => {
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
                color={color}
                roughness={specificProduct.roughness}
                metalness={specificProduct.metalness}
                clearcoat={specificProduct.clearcoat}
                clearcoatRoughness={specificProduct.clearcoatRoughness}
                envMapIntensity={specificProduct.envMapIntensity}
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

          <ambientLight intensity={0.1} />

          {/* 2. The Main Light Source */}
          <InteriorLight intensity={10} />
          {/* 3. Secondary Light Source */}
          <InteriorLight
            position={[0.08, 2.9, -1.6]}
            intensity={5}
            castShadow={false}
          />

          <OrbitControls
            makeDefault
            target={[0, 1.5, -4]}
            enablePan={false}
            minDistance={1}
            maxDistance={4}
            minPolarAngle={Math.PI / 2.5} // 45°
            maxPolarAngle={Math.PI / 1.9} // ~95°
            minAzimuthAngle={-Math.PI / 13.3}
            maxAzimuthAngle={Math.PI / 13.3}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
