import noxusTexture from "../../textures/noxus.png"
import * as THREE from "three";
import React from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";

function Sun() {
  const texture2 = useLoader(THREE.TextureLoader, noxusTexture);

  const rotationSpeed = 0.05;
  const xRadio = 8;
  const zRadio = 4;
  const speed = 1;
  const offset = 1;

  const planetRef = React.useRef();

  useFrame(({ clock }) => {
  const t = clock.getElapsedTime() * speed + offset;
  const x = xRadio * Math.sin(t);
  const z = zRadio * Math.cos(t);
  planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <group ref={planetRef}>
            <mesh rotation={[0, Math.PI / 2, 0]}> {/* Rota 90° en Y */}
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

export default Sun;