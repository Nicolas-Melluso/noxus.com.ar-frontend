import tx from "../../textures/3.jpg";
import React, { useState, useRef } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Ecliptic from "../Camera/Ecliptic";

const Mercurio = () => {
  const [isHovered, setIsHovered] = useState(false);
  const rotationSpeed = 0.010;
  const xRadio = 8;
  const zRadio = 4;
  const visibleSize = 1;
  const hitboxSize = 1.8;
  const speed = 0.47;
  const offset = 1;

  const planetRef = useRef();
  const texture = useLoader(THREE.TextureLoader, tx);
  const { gl, camera } = useThree(); // Renombra para claridad
  const navigate = useNavigate();

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

  const handleClick = () => {
    setIsHovered(true); // Detiene el movimiento orbital

    // Posición objetivo: Planeta + offset para no colisionar
    const targetPosition = planetRef.current.position.clone();
    const cameraTarget = targetPosition.clone().add(new THREE.Vector3(0, 0, 5));

    // Animación de cámara
    gsap.to(camera.position, {
      x: cameraTarget.x,
      y: cameraTarget.y,
      z: cameraTarget.z,
      duration: 1, // Duración de acercamiento
      onUpdate: () => camera.lookAt(targetPosition), // Enfoca el planeta
      onComplete: () => {
        // Animación de escala del planeta
        gsap.to(planetRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.5,
          onComplete: () => navigate("/finanzas") // Redirige después de la animación
        });
      }
    });
  };

  return (
    <>
      <Ecliptic xRadius={xRadio} zRadius={zRadio} position={[0, 0, 0]} />
      <group ref={planetRef}>
        {/* Hitbox con animación */}
        <mesh
          onClick={handleClick}
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
            <div className="annotation">Finanzas</div>
          </Html>
        </mesh>
      </group>
    </>
  );
};

export default Mercurio;