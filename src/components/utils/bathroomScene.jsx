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

import { resolvePlacement } from "@/lib/utils";

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

    if (!product) return null;

    const placement = selectedProducts["niche"]?.placement ?? "center";
    const flipped = selectedProducts["niche"]?.flipped ?? false;

    const { positions, rotation, scale } = resolvePlacement(
      product,
      placement,
      flipped,
    );

    return {
      size,
      position: positions,
      rotation,
      scale,
    };
  }, [nicheGLTF, filteredProducts, selectedProducts]);

  const initialTextures = {
    floorTexture: {
      color: "",
      map: "/textures/tiles/floor_tile_1/Tiles107_2K-JPG_Color.jpg",
      normalMap: "/textures/tiles/floor_tile_1/Tiles107_2K-JPG_NormalGL.jpg",
      roughnessMap:
        "/textures/tiles/floor_tile_1/Tiles107_2K-JPG_Roughness.jpg",
    },
    wallTexture: {
      color: "#8E8E8E",
      // map: "/textures/walls/wall_tile_6/Concrete048_1K-JPG_Color.jpg",
      map: null,
      normalMap: "/textures/walls/wall_tile_6/Concrete048_1K-JPG_NormalGL.jpg",
      roughnessMap:
        "/textures/walls/wall_tile_6/Concrete048_1K-JPG_Roughness.jpg",
    },
    cabinWallTexture: {
      color: "#8E8E8E",
      // map: "/textures/walls/wall_tile_6/Concrete048_1K-JPG_Color.jpg",
      map: null,
      normalMap: "/textures/walls/wall_tile_6/Concrete048_1K-JPG_NormalGL.jpg",
      roughnessMap:
        "/textures/walls/wall_tile_6/Concrete048_1K-JPG_Roughness.jpg",
    },
    ceilingTexture: {
      color: "",
      // map: "/textures/ceilings/ceiling_1/Plastic013A_2K-JPG_Color.jpg",
      map: "/textures/walls/wall_tile_6/Concrete048_1K-JPG_Color.jpg",
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
          const selectedProductColor = product.displayByColor?.[selected.color];

          const map = selectedProductColor?.map;
          const color = selectedProductColor?.color;

          result[key] = {
            map,
            color,
            normalMap: product.normalMap || initialTextures[key].normalMap,
            roughnessMap:
              product.roughnessMap || initialTextures[key].roughnessMap,
          };
          return;
        }
      }

      result[key] = initialTextures[key];
    });

    return result;
  }, [filteredTextures, selectedProducts]);

  // Collect all active image URLs into one object for the hook
  const allTextureUrls = useMemo(() => {
    const urls = {};
    Object.keys(textures).forEach((key) => {
      if (textures[key].map) urls[`${key}_map`] = textures[key].map;
      if (textures[key].normalMap)
        urls[`${key}_normal`] = textures[key].normalMap;
      if (textures[key].roughnessMap)
        urls[`${key}_rough`] = textures[key].roughnessMap;
    });
    return urls;
  }, [textures]);

  // This hook handles the suspense and loading of everything at once
  const loadedMaps = useTexture(allTextureUrls);

  const bathroomMaterials = useMemo(() => {
    const prepare = (key) => {
      const config = textures[key];

      // FIX: Only get the map from loadedMaps if config says a map should exist
      const map = config.map ? loadedMaps[`${key}_map`]?.clone() : null;

      // const map = loadedMaps[`${key}_map`]?.clone();
      const normalMap = loadedMaps[`${key}_normal`]?.clone();
      const roughnessMap = loadedMaps[`${key}_rough`]?.clone();

      // Apply tiling if map exists
      [map, normalMap, roughnessMap].forEach((m) => {
        if (m) {
          m.wrapS = m.wrapT = THREE.RepeatWrapping;
          m.repeat.set(2, 2);
          m.needsUpdate = true; // Ensure Three.js updates the change
        }
      });

      // Determine the resolved color:
      // - If a color is explicitly set (hex), use it
      // - If a map is used (no color), reset to white so it doesn't tint the map
      const resolvedColor =
        config.color && config.color !== "" ? config.color : "#ffffff";

      return (
        <meshStandardMaterial
          key={`${key}-${config.color || "nocolor"}-${config.map || "nomap"}`} // 👈 Forces remount
          color={resolvedColor}
          map={map} // If Hex was used, map is null
          normalMap={normalMap}
          roughnessMap={roughnessMap}
        />
      );
    };

    return {
      wallMaterial: prepare("wallTexture"),
      cabinWallMaterial: prepare("cabinWallTexture"),
      ceilingMaterial: prepare("ceilingTexture"),
      floorMaterial: prepare("floorTexture"),
    };
  }, [loadedMaps, textures]);

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
    // 1. List the names of all objects you want to hide/disable
    const objectsToHide = ["back_wall", "side_walls", "ceiling", "floor"];

    objectsToHide.forEach((name) => {
      const obj = clonedScene.getObjectByName(name);

      if (obj) {
        obj.visible = false;
        obj.castShadow = false;
        obj.receiveShadow = false;
      }
    });
  }, [clonedScene]);

  return (
    <group>
      {/* 1. RENDER THE FULL BATHROOM SCENE (Hidden walls are already invisible) */}
      <primitive object={clonedScene} />

      {/* 2. RENDER DYNAMIC CSG WALLS */}
      {[
        {
          name: "back_wall",
          geometry: nodes.back_wall.geometry,
          material: bathroomMaterials.cabinWallMaterial,
          hasNiches: true,
        },
        {
          name: "side_walls",
          geometry: nodes.side_walls.geometry,
          material: bathroomMaterials.wallMaterial,
          hasNiches: false,
        },
        {
          name: "ceiling",
          geometry: nodes.ceiling.geometry,
          material: bathroomMaterials.ceilingMaterial,
          hasNiches: false,
        },
        {
          name: "floor",
          geometry: nodes.floor.geometry,
          material: bathroomMaterials.floorMaterial,
          hasNiches: false,
        },
      ].map((wall) => (
        <mesh key={wall.name} castShadow receiveShadow>
          <Geometry computeWindow={0} useBuffers={true} incremental={true}>
            <Base geometry={wall.geometry} />

            {/* Only render Subtractions if this specific wall needs them */}
            {wall.hasNiches &&
              wallNicheInfo?.position?.map((pos, idx) => (
                <Subtraction
                  key={idx}
                  position={pos}
                  scale={wallNicheInfo.scale}
                  rotation={wallNicheInfo.rotation}
                >
                  <boxGeometry
                    args={[
                      wallNicheInfo.size.x,
                      wallNicheInfo.size.y,
                      wallNicheInfo.size.z * 5,
                    ]}
                  />
                </Subtraction>
              ))}
          </Geometry>
          {wall.material}
        </mesh>
      ))}
    </group>
  );
}

function Product({
  glb,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  color = "",
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
  mirrorCoords = null,
  lightCoords = null,
  // FOR DOUBLE OR MORE WALL NICHE
  // nicheCoords = null,
  // FOR FLIPPLING AND INVERTING PRODUCTS
  flipped = false,
  placement = "center",
  positionOptions = null,
}) {
  const { scene } = useGLTF(glb);

  // Resolve positions and rotation from placement system
  const {
    positions: resolvedPositions,
    rotation: resolvedRotation,
    scale: resolvedScale,
    shouldFlip,
  } = useMemo(() => {
    // Invert rotation
    // const flipRotation = flipped ? rotation.map((rot) => -rot) : rotation;

    // Products with the new positionOptions system
    if (positionOptions) {
      return resolvePlacement(
        // { position, rotation, nicheCoords, positionOptions, scale },
        { position, rotation, positionOptions, scale },
        placement,
        flipped,
      );
    }

    // Legacy: sinkFaucets
    if (categoryId === "sinkFaucets" && sinkCoords) {
      return {
        positions: sinkCoords,
        rotation,
        scale,
        shouldFlip: flipped,
      };
    }
    // Legacy: mirrors
    if (categoryId === "mirrors" && mirrorCoords) {
      return {
        // positions: mirrorCoords,
        positions: mirrorCoords.map((item) => [position[0], item[1], item[2]]),
        rotation,
        scale,
        shouldFlip: flipped,
      };
    }
    // Legacy: lights
    if (categoryId === "lights" && lightCoords) {
      return {
        positions: lightCoords,
        rotation,
        scale,
        shouldFlip: flipped,
      };
    }

    // Legacy: niche with raw nicheCoords (no positionOptions)
    // if (categoryId === "niche" && nicheCoords) {
    //   return { positions: nicheCoords, rotation, scale, shouldFlip: flipped };
    // }

    return {
      positions: [position],
      rotation,
      scale,
      shouldFlip: flipped,
    };
  }, [
    positionOptions,
    placement,
    flipped,
    position,
    rotation,
    // nicheCoords,
    sinkCoords,
    mirrorCoords,
    lightCoords,
    scale,
    categoryId,
  ]);

  // Now use resolvedScale instead of the raw scale prop
  const effectiveScale = useMemo(() => {
    const s = Array.isArray(resolvedScale)
      ? resolvedScale
      : [resolvedScale.x, resolvedScale.y, resolvedScale.z];
    return shouldFlip ? [-s[0], s[1], s[2]] : s;
  }, [resolvedScale, shouldFlip]);

  // Apply flip to positions only when shouldFlip is true
  const effectivePositions = useMemo(() => {
    return resolvedPositions.map((pos) => {
      const p = Array.isArray(pos) ? pos : [pos.x, pos.y, pos.z];
      return shouldFlip ? [-p[0], p[1], p[2]] : p;
    });
  }, [resolvedPositions, shouldFlip]);

  // Apply if rotation should be flipped too
  const effectiveRotation = useMemo(() => {
    const r = Array.isArray(resolvedRotation)
      ? resolvedRotation
      : [resolvedRotation.x, resolvedRotation.y, resolvedRotation.z];
    return shouldFlip ? r.map((rot) => -rot) : r;
  }, [resolvedRotation, shouldFlip]);

  // 2. Create an array of clones based on how many positions we have
  const instances = useMemo(() => {
    return effectivePositions.map(() => {
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
  }, [scene, effectivePositions, isMirror]);

  // 3. Apply PBR Properties to ALL clones
  useLayoutEffect(() => {
    instances.forEach(({ clone }) => {
      clone.traverse((child) => {
        if (!child.isMesh || !child.material || child.name.includes("skip"))
          return;
        const mat = child.material;
        child.castShadow = true;
        child.receiveShadow = true;

        if (color) mat.color.set(color || "#EFF2F3").convertSRGBToLinear();
        if (roughness) mat.roughness = roughness;
        if (metalness) mat.metalness = metalness;

        if ("clearcoat" in mat) {
          mat.clearcoat = clearcoat;
          mat.clearcoatRoughness = clearcoatRoughness;
        }
        if (envMapIntensity) mat.envMapIntensity = envMapIntensity;
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
                  effectivePositions[index][0] - centerOffSet.x,
                  effectivePositions[index][1] - centerOffSet.y,
                  effectivePositions[index][2] - centerOffSet.z,
                ]
              : effectivePositions[index]
          }
          // rotation={resolvedRotation}
          rotation={effectiveRotation}
          scale={effectiveScale}
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
                clipBias={0.01}
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
  // const activeVanity = useMemo(() => {
  //   const vanityCategory = categories.find((c) => c.id === "vanityShelves");
  //   const selection = selectedProducts["vanityShelves"];
  //   if (!vanityCategory || !selection) return null;

  //   return vanityCategory.products.find((p) => p.id === selection.productId);
  // }, [categories, selectedProducts]);

  const activeVanityShelfCoords = useMemo(() => {
    const vanityCategory = categories.find((c) => c.id === "vanityShelves");
    const selection = selectedProducts["vanityShelves"];
    if (!vanityCategory || !selection) return null;

    const product = vanityCategory.products.find(
      (p) => p.id === selection.productId,
    );
    if (!product) return null;

    // Use resolvePlacement so we get the placement-aware sinkCoords
    // const { sinkCoords, shouldFlip } = resolvePlacement(
    //   product,
    //   selection.placement ?? "center",
    //   selection.flipped ?? false,
    // );

    const { sinkCoords, mirrorCoords, lightCoords } = resolvePlacement(
      product,
      selection.placement ?? "center",
      selection.flipped ?? false,
    );

    // return sinkCoords ?? null;

    if (sinkCoords && mirrorCoords && lightCoords) {
      return { sinkCoords, mirrorCoords, lightCoords };
    } else return null;

    // if (!sinkCoords) return null;

    // // Apply flip to sink coords the same way Product component does it
    // return sinkCoords.map((coord) => {
    //   const c = Array.isArray(coord) ? coord : [coord.x, coord.y, coord.z];
    //   return shouldFlip ? [-c[0], c[1], c[2]] : c;
    // });
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

              // sinkCoords={
              //   category.id === "sinkFaucets" ? activeVanity?.sinkCoords : null
              // }

              sinkCoords={
                category.id === "sinkFaucets"
                  ? activeVanityShelfCoords?.sinkCoords
                  : null
              }
              mirrorCoords={
                category.id === "mirrors"
                  ? activeVanityShelfCoords?.mirrorCoords
                  : null
              }
              lightCoords={
                category.id === "lights"
                  ? activeVanityShelfCoords?.lightCoords
                  : null
              }
              // ONLY FOR DOUBLE WALL NICHE
              // nicheCoords={
              //   category.id === "niche" && specificProduct.nicheCoords
              //     ? specificProduct.nicheCoords
              //     : null
              // }

              // flipped={selectedProducts[category.id]?.flipped ?? false}

              flipped={
                category.id === "sinkFaucets" ||
                category.id === "mirrors" ||
                category.id === "lights"
                  ? (selectedProducts["vanityShelves"]?.flipped ?? false)
                  : (selectedProducts[category.id]?.flipped ?? false)
              }
              placement={selectedProducts[category.id]?.placement ?? "center"}
              positionOptions={specificProduct.positionOptions ?? null}
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
        <InteriorLight intensity={7} />
        {/* 3. Secondary Light Source */}
        <InteriorLight
          position={[0.08, 2.96, -1.6]}
          intensity={3.5}
          castShadow={false}
        />

        <OrbitControls
          makeDefault
          target={[0, 1.5, -4]}
          // enablePan={true}
          enablePan={false}
          minDistance={1}
          maxDistance={4.5}
          minPolarAngle={Math.PI / 2.5} // 45°
          maxPolarAngle={Math.PI / 1.9} // ~95°
          minAzimuthAngle={-Math.PI / 13.3}
          maxAzimuthAngle={Math.PI / 13.3}
          // minAzimuthAngle={-16}
          // maxAzimuthAngle={16}
        />
      </Canvas>
    </div>
  );
}
