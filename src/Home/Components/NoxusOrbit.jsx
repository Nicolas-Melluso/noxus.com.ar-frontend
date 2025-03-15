import noxusTexture from "/textures/noxus.png"
import * as THREE from "three";
import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";

function NoxusOrbit() {
  const texture2 = useLoader(THREE.TextureLoader, noxusTexture);

  const planetRef = React.useRef();

  useFrame(() => {
  planetRef.current.rotation.y += 0.05;
  });

  return (
    <>
      <group ref={planetRef}>
            <mesh rotation={[0, Math.PI / 2, 0]}>
              <planeGeometry args={[5.5, 8]} />
              <meshBasicMaterial 
                map={texture2}
                transparent={true}
                side={THREE.DoubleSide}
              />
            </mesh>
        </group>
    </>
  );
}

export default NoxusOrbit;