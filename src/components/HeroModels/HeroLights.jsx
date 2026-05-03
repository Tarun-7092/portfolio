import React, { useMemo } from "react";
import * as THREE from "three";

const HeroLights = () => {
  // Memoize RectAreaLight to prevent recreation on every render
  const rectLight = useMemo(() => {
    const light = new THREE.RectAreaLight("#a259ff", 8, 3, 2);
    light.position.set(1, 3, 4);
    light.rotation.set(Math.PI / 4, Math.PI / 4, 0);
    return light;
  }, []);

  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        intensity={100}
        penumbra={0.2}
        color="white"
        castShadow={false} // disables expensive shadow computation
      />

      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={0.5}
        color="#4cc9f0"
        castShadow={false}
      />

      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={60}
        penumbra={1}
        color="#9d4edd"
        castShadow={false}
      />

      <primitive object={rectLight} />

      <pointLight
        position={[0, 1, 0]}
        intensity={10}
        color="#7209b7"
      />

      <pointLight
        position={[1, 2, -2]}
        intensity={10}
        color="#0d00a4"
      />
    </>
  );
};

export default HeroLights;