"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useLayoutEffect, Suspense, useRef } from "react";

// function BathroomModel() {
//   const { scene } = useGLTF("/models/bathroom.glb");

//   // Log mesh names once (for verification)
//   useEffect(() => {
//     console.log("Bathroom children:");
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         console.log(child);
//         // console.log("Mesh:", child.name);
//         // console.log("Material:", child.material?.name);
//       }
//     });
//   }, [scene]);

//   return <primitive object={scene} />;
// }

function BathroomModel() {
  const { scene } = useGLTF("/models/bathroom.glb");

  useLayoutEffect(() => {
    // Center the model
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());

    scene.position.sub(center);

    // scene.traverse((child) => {
    //   if (child.isMesh) {
    //     const material = child.material;

    //     if (material) {
    //       // 2. Adjust roughness (0.0 to 1.0)
    //       // Lowering this will make the "warehouse" environment reflect more on the dark walls
    //       material.roughness = 0.5;

    //       // 3. Optional: Adjust metalness to make it react more to light
    //       material.metalness = 0.2;

    //       // 4. Ensure Three.js knows the material needs an update
    //       material.needsUpdate = true;
    //     }
    //   }
    // });
  }, [scene]);

  return <primitive object={scene} />;
}

function Product({
  glb,
  position,
  rotation,
  scale = [1, 1, 1],
  color = "white",
}) {
  const { scene } = useGLTF(glb);

  useLayoutEffect(() => {
    scene.position.copy(position);
    scene.rotation.copy(rotation);
    scene.scale.set(...scale);

    // Set color
    scene.traverse((child) => {
      if (child.isMesh) {
        child.userData.initialColor = child.material.color.clone();
        child.material.color.set(color);
      }
    });
  }, [scene, position, rotation, scale, color]);

  return <primitive object={scene} />;
}

export default function BathroomScene({
  selectedProducts = {},
  categories = [],
  plumbing = "",
  shape = "",
}) {
  const bathroomRef = useRef();

  const filteredCategories = categories.filter(
    (category) => category.id in selectedProducts,
    // &&
    //   (isSideAngle ? category.angle === "side" : category.angle === "front")
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
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 0.7, // increase or decrease
            outputEncoding: THREE.SRGBColorSpace,
          }}
        >
          {/* Optional: ambient for soft fill */}
          <ambientLight intensity={0.2} />
          <hemisphereLight intensity={0.5} color="white" groundColor="black" />
          <directionalLight position={[0, 3, 0]} intensity={10} />

          <BathroomModel bathroomRef={bathroomRef} />

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
              />
            );
          })}

          <Environment
            background={true} // false if you don't want HDR as sky
            backgroundIntensity={1}
            environmentIntensity={0.8}
            files={null} // null for a neutral default
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
