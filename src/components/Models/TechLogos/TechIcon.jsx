import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useMemo } from "react";
import * as THREE from "three";

const TechModel = ({ model }) => {
  const { scene } = useGLTF(model.modelPath);

  // Create material once
  const whiteMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "white" }),
    []
  );

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = whiteMaterial;
        }
      });
    }
  }, [scene, model, whiteMaterial]);

  return (
    <Float speed={5} rotationIntensity={0.5} floatIntensity={0.8}>
      <group scale={model.scale * 0.4} rotation={model.rotation}>
        <primitive object={scene} />
      </group>
    </Float>
  );
};

const TechIcon = ({ model }) => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: false }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset="city" />

      <OrbitControls enableZoom={false} enablePan={false} />

      <TechModel model={model} />
    </Canvas>
  );
};

export default TechIcon;