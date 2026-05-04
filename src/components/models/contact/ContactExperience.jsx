import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Computer from "./Computer.jsx";

const ContactExperience = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}                     // limits pixel ratio
      camera={{ position: [0, 3, 7], fov: 45 }}
      gl={{ antialias: false }}          // antialias off = big GPU win
      shadows="soft"                     // lighter shadow type
      frameloop="demand"                 // render only when needed
    >
      <Suspense fallback={null}>
        
        {/* Ambient light */}
        <ambientLight intensity={0.35} color="#fff4e6" />

        {/* Main directional light */}
        <directionalLight
          position={[5, 5, 3]}
          intensity={1.5}
          color="#ffd9b3"
        />

        {/* Shadow light */}
        <directionalLight
          position={[5, 9, 1]}
          castShadow
          intensity={1.2}
          shadow-mapSize-width={512}     // reduced from 1024
          shadow-mapSize-height={512}
          color="#ffd9b3"
        />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        {/* Floor */}
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>

        {/* Computer model */}
        <group scale={0.03} position={[0, -1.49, -2]}>
          <Computer />
        </group>

      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;