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
import { useLayoutEffect, useMemo, useEffect, useState } from "react";

import { Geometry, Base, Subtraction } from "@react-three/csg";

useEnvironment.preload({ files: "/environment/bathroom-environment.hdr" });

function BathroomModel({
  filteredTextures,
  filteredProducts,
  selectedProducts,
}) {
  // 1. Load the bathroom GLB
  const { scene, nodes } = useGLTF("/models/bathroom.glb");

  // Load the Niche GLB at the top level (don't put this in useMemo!)
  // If the niche changes based on selectedProducts, pass the dynamic path here
  const selectedNichePath = useMemo(() => {
    const category = filteredProducts?.find((c) => c.id === "niche");
    const product = category?.products.find(
      (p) => p.id === selectedProducts["niche"]?.productId,
    );
    return product?.glb || null;
  }, [filteredProducts, selectedProducts]);

  // Use the hook correctly
  const nicheGLTF = useGLTF(
    selectedNichePath || "/models/wall-niche/wall-niche.glb",
  );

  // Now calculate dimensions safely
  const wallNicheInfo = useMemo(() => {
    if (!nicheGLTF) return null;

    const box = new THREE.Box3().setFromObject(nicheGLTF.scene);
    const size = new THREE.Vector3();
    box.getSize(size);

    // Get the niche position from your product data
    const category = filteredProducts?.find((c) => c.id === "niche");
    const product = category?.products.find(
      (p) => p.id === selectedProducts["niche"]?.productId,
    );

    return {
      size: size,
      position: product?.position || [0, 1.2, 0],
      scale: product?.scale || [1, 1, 1],
    };
  }, [nicheGLTF, filteredProducts, selectedProducts]);

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
  const floorMaps = useTexture(floorTexture || initialTextures.floorTexture);

  const wallMaps = useTexture(wallTexture || initialTextures.wallTexture);

  const ceilingMaps = useTexture(
    ceilingTexture || initialTextures.ceilingTexture,
  );

  const cabinWallMaps = useTexture(
    cabinWallTexture || initialTextures.cabinWallTexture,
  );

  // 1. Prepare your textures outside the return so they are ready
  const backWallMaterial = useMemo(() => {
    if (!cabinWallMaps.map) return null;

    // Clone the texture so we don't mess up other objects using it
    const map = cabinWallMaps.map.clone();
    const normal = cabinWallMaps.normalMap?.clone();

    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.repeat.set(2, 2); // Match your bathroom tiling

    if (normal) {
      normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
      normal.repeat.set(2, 2);
    }

    return (
      <meshStandardMaterial
        map={map}
        normalMap={normal}
        roughnessMap={cabinWallMaps.roughnessMap}
      />
    );
  }, [cabinWallMaps]);

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

  // At the top of your component, add this effect
  useLayoutEffect(() => {
    const wall = clonedScene.getObjectByName("back_wall");
    if (wall) {
      wall.visible = false;
      // We also hide it from shadow casting so it doesn't leave a ghost shadow where the hole is
      wall.castShadow = false;
      wall.receiveShadow = false;
    }
  }, [clonedScene]);

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

      if (child.name === "walls") {
        child.traverse((mesh) => {
          if (!mesh.isMesh || !mesh.material || mesh.name === "back_wall")
            return;

          const mat = mesh.material;

          const bathroomWallMaps = wallMaps;

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

  return (
    <group>
      {/* 1. RENDER THE FULL BATHROOM SCENE (Without the back wall) */}
      <primitive object={clonedScene} />

      {/* 2. THE HOLE ENGINE */}
      <mesh>
        <Geometry computeWindow={0} useBuffers={true} incremental={true}>
          <Base geometry={nodes.back_wall.geometry} />
          {wallNicheInfo && (
            <Subtraction
              position={wallNicheInfo.position}
              scale={wallNicheInfo.scale}
              // showOperation
            >
              <boxGeometry
                args={[
                  wallNicheInfo.size.x,
                  wallNicheInfo.size.y,
                  wallNicheInfo.size.z * 5, // Extra deep to ensure a clean cut
                ]}
              />
            </Subtraction>
          )}
        </Geometry>
        {backWallMaterial}
      </mesh>
    </group>
  );
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
  categoryId,
  // FOR PRODUCTS THAT HAVE MIRROR
  isMirror = false,
  // FOR VANITY SHELVES THAT REQUIRES MORE THAN ONE SINK FAUCET
  sinkCoords = null,
}) {
  const { scene } = useGLTF(glb);

  // 1. Determine positions: if it's a faucet and we have coords from the vanity, use them.
  // Otherwise, fallback to the product's default position.
  const renderPositions =
    categoryId === "sinkFaucets" && sinkCoords ? sinkCoords : [position];

  // 2. Create an array of clones based on how many positions we have
  const instances = useMemo(() => {
    return renderPositions.map(() => {
      const clone = scene.clone(true);

      let mirrorGeo = null;

      let centerOffSet = null;

      clone.traverse((child) => {
        if (!child.isMesh || !child.material) return;
        child.material = child.material.clone();

        if (isMirror && child.name.includes("mirror")) {
          mirrorGeo = child.geometry;
          child.visible = false;
        }
      });

      if (categoryId === "niche") {
        const box = new THREE.Box3().setFromObject(clone);
        const center = new THREE.Vector3();
        box.getCenter(center);
        centerOffSet = center;
      }

      return { clone, mirrorGeo, centerOffSet };
    });
  }, [scene, renderPositions, isMirror]);

  // 3. Apply PBR Properties to ALL clones
  useLayoutEffect(() => {
    instances.forEach(({ clone }) => {
      clone.traverse((child) => {
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
    });
  }, [
    instances,
    color,
    roughness,
    metalness,
    clearcoat,
    clearcoatRoughness,
    envMapIntensity,
  ]);

  return (
    <>
      {instances.map(({ clone, mirrorGeo, centerOffSet }, index) => (
        <group
          key={`${glb}-${index}`}
          position={
            centerOffSet
              ? [
                  renderPositions[index][0] - centerOffSet?.x,
                  renderPositions[index][1] - centerOffSet?.y,
                  renderPositions[index][2] - centerOffSet?.z,
                ]
              : renderPositions[index]
          }
          rotation={rotation}
          scale={scale}
        >
          <primitive object={clone} />

          {isMirror && mirrorGeo && (
            <mesh geometry={mirrorGeo}>
              <MeshReflectorMaterial
                blur={[0, 0]}
                resolution={1024}
                mixBlur={0}
                mixStrength={2}
                roughness={0}
                depthScale={0}
                color="#a0a0a0"
                metalness={0.5}
                mirror={1}
                transparent={false}
                depthWrite={true}
                side={THREE.DoubleSide}
              />
            </mesh>
          )}
        </group>
      ))}
    </>
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

// Function for calculating dynamically window and screen size
function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default function BathroomScene({
  selectedProducts = {},
  categories = [],
  plumbing = "",
}) {
  const { width } = useWindowSize(); // This will trigger a re-render on resize/rotateconst { width } = useWindowSize(); // This will trigger a re-render on resize/rotate

  const isMobile = width < 768;
  const isLaptop = width < 1280 && width >= 768;

  // Recalculate FOV based on current width
  const dynamicFov = useMemo(() => {
    if (isMobile) return 75;
    if (isLaptop) return 50;
    return 55;
  }, [isMobile, isLaptop]);

  const filteredCategories = categories.filter(
    (category) => category.id in selectedProducts,
  );

  const filteredTextures = filteredCategories.filter(
    (category) => category.isTexture,
  );

  const filteredProducts = filteredCategories.filter(
    (category) => !category.isTexture,
  );

  // 1. Find the active vanity shelf data to see if it has sinkCoords, for vanity shelves that require more than one sink faucet
  const activeVanity = useMemo(() => {
    const vanityCategory = categories.find((c) => c.id === "vanityShelves");
    const selection = selectedProducts["vanityShelves"];
    if (!vanityCategory || !selection) return null;

    return vanityCategory.products.find((p) => p.id === selection.productId);
  }, [categories, selectedProducts]);

  return (
    <div className="w-full h-full">
      <Canvas
        key={dynamicFov}
        camera={{
          fov: dynamicFov,
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
          filteredProducts={filteredProducts}
          selectedProducts={selectedProducts}
        />

        {filteredProducts.map((category, index) => {
          const specificProduct = category.products.find(
            (product) => product.id === selectedProducts[category.id].productId,
          );

          if (!specificProduct) return null;

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
              categoryId={category.id}
              // ONLY FOR PRODUCTS THAT HAVE MIRRORS
              isMirror={category.isMirror}
              // ONLY FOR THE VANITY SHELVES THAT REQUIRES MORE THAN ONE SINK FAUCET
              sinkCoords={
                category.id === "sinkFaucets" ? activeVanity?.sinkCoords : null
              }
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
          enablePan={false}
          minDistance={1}
          maxDistance={4.5}
          minPolarAngle={Math.PI / 2.5} // 45°
          maxPolarAngle={Math.PI / 1.9} // ~95°
          minAzimuthAngle={-Math.PI / 13.3}
          maxAzimuthAngle={Math.PI / 13.3}
        />
      </Canvas>
    </div>
  );
}
