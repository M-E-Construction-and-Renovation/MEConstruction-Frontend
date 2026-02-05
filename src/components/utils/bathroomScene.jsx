"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
  Lightformer,
} from "@react-three/drei";
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

      mat.roughness = 0.5; // matte painted wall
      mat.metalness = 0.5;

      mat.envMapIntensity = 1; // subtle bounce
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
            toneMappingExposure: 1, // increase or decrease
            outputEncoding: THREE.SRGBColorSpace,
            antialias: true,
          }}
          className="bg-gradient-to-b from-blue-500 to-white"
        >
          <ambientLight intensity={4} />

          <directionalLight
            position={[2, 5, 5]} // Up 10 units, slightly to the side and front
            intensity={1}
            castShadow
          />

          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.6}
            scale={20}
            blur={2.5}
            far={1.5}
          />

          <Environment resolution={1024}>
            {/* A "Ceiling" light to make the whole room bright */}
            <Lightformer
              form="rect"
              intensity={5}
              position={[0, 5, 0]}
              scale={[10, 10]}
              rotation-x={Math.PI / 2}
            />
            <Lightformer
              form="rect"
              intensity={5}
              position={[-2, 5, 0]}
              scale={[10, 10]}
              rotation-x={Math.PI / 2}
            />
            <Lightformer
              form="rect"
              intensity={5}
              position={[2, 5, 0]}
              scale={[10, 10]}
              rotation-x={Math.PI / 2}
            />
          </Environment>

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
        </Canvas>
      </Suspense>
    </div>
  );
}

useGLTF.preload("/models/bathroom.glb");
