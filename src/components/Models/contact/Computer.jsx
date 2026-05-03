import { memo } from "react";
import { useGLTF } from "@react-three/drei";

function Computer(props) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  return (
    <group {...props}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
          castShadow
          receiveShadow
        />

        <mesh
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default memo(Computer);