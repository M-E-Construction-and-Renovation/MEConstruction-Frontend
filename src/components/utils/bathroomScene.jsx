"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useLayoutEffect, Suspense } from "react";

function BathroomModel() {
  const { scene } = useGLTF("/models/bathroom.glb");

  useLayoutEffect(() => {
    // Center the model
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());

    scene.position.sub(center);

    // Apply material config
    scene.traverse((child) => {
      if (!child.isMesh || !child.material) return;

      const mat = child.material;

      // Neutral architectural white
      mat.color.set("#F2F3F4");
      mat.color.convertSRGBToLinear();

      mat.roughness = 0.85; // matte painted wall
      mat.metalness = 0.0;

      mat.envMapIntensity = 0.3; // subtle bounce
      mat.needsUpdate = true;
    });
  }, [scene]);

  return <primitive object={scene} />;
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

  useLayoutEffect(() => {
    // Apply material config

    scene.position.copy(position);
    scene.rotation.copy(rotation);
    scene.scale.set(...scale);

    scene.traverse((child) => {
      if (!child.isMesh || !child.material) return;

      const mat = child.material;

      // Store original color once (optional but professional)
      if (!child.userData.initialColor) {
        child.userData.initialColor = mat.color.clone();
      }

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
    scene,
    position,
    rotation,
    scale,
    color,
    roughness,
    metalness,
    clearcoat,
    clearcoatRoughness,
    envMapIntensity,
  ]);

  return <primitive object={scene} />;
}

export default function BathroomScene({
  selectedProducts = {},
  categories = [],
  plumbing = "",
  shape = "",
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
          gl={{
            physicallyCorrectLights: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.0, // increase or decrease
            outputEncoding: THREE.SRGBColorSpace,
          }}
          className="bg-gray-400"
        >
          <ambientLight intensity={0.35} />

          <directionalLight position={[3, 5, 2]} intensity={3} castShadow />

          <directionalLight position={[-3, 4, -2]} intensity={1.5} />

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

          <Environment
            background={false} // false if you don't want HDR as sky
            environmentIntensity={0.6}
            preset="warehouse" // drei provides a neutral preset
          />

          <OrbitControls
            makeDefault
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

useGLTF.preload("/models/bathroom.glb");
