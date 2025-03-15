import tx4 from "../../textures/4.jpg";
import React, { useState, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import Ecliptic from "../Camera/Ecliptic"; // Importa el componente
import { useThree } from "@react-three/fiber";

const Venus = () => {
  const [isHovered, setIsHovered] = useState(false);
  const rotationSpeed = 0.01;
  const xRadio = 12;
  const zRadio = 6;
  const visibleSize = 1.5;
  const hitboxSize = 2.3; // Hitbox más grande
  const speed = 0.67;
  const offset = 1;
  const name = "Venus";

  const planetRef = useRef();
  const texture = useLoader(THREE.TextureLoader, tx4);
  const { gl } = useThree();

  useFrame(({ clock }) => {
    if (!isHovered) {
      const t = clock.getElapsedTime() * speed + offset;
      const x = xRadio * Math.sin(t);
      const z = zRadio * Math.cos(t);
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      {/* Órbita fija (fuera del grupo) */}
      <Ecliptic 
        xRadius={xRadio} 
        zRadius={zRadio} 
        position={[0, 0, 0]} // ¡Fija en el centro del sistema solar!
      />

      {/* Grupo del planeta (movimiento + hitbox) */}
      <group ref={planetRef}>
        {/* Hitbox invisible */}
        <mesh
          onClick={() => alert("Fui clickeado")}
          onPointerOver={() => {
            gl.domElement.style.cursor = "pointer";
            setIsHovered(true);
          }}
          onPointerOut={() => {
            gl.domElement.style.cursor = "auto";
            setIsHovered(false);
          }}
        >
          <sphereGeometry args={[hitboxSize, 32, 32]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        {/* Planeta visible */}
        <mesh>
          <sphereGeometry args={[visibleSize, 32, 32]} />
          <meshStandardMaterial map={texture} />
          <Html distanceFactor={8}>
            <div className="annotation">{name}</div>
          </Html>
        </mesh>
      </group>
    </>
  );
};

export default Venus;