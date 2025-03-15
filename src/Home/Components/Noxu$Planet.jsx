import tx from "/textures/3.jpg";
import React, { useState, useRef } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import gsap from "gsap";
import Ecliptic from "../../Camera/Ecliptic";
import { useNavigate } from "react-router-dom";


const Noxu$Planet = () => {
  const texture = useLoader(THREE.TextureLoader, tx);

  const [isHovered, setIsHovered] = useState(false);
  
  const { gl, camera } = useThree();
  
  const navigate = useNavigate();
 
  const planetRef = useRef();
  
  const rotationSpeed = 0.010;
  const xRadio = 8;
  const zRadio = 4;
  const visibleSize = 1;
  const hitboxSize = 1.8;
  const speed = 0.47;
  const offset = 1;


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
    setIsHovered(true);

    const targetPosition = planetRef.current.position.clone();
    const cameraTarget = targetPosition.clone().add(new THREE.Vector3(0, 0, 5));

    gsap.to(camera.position, {
      x: cameraTarget.x,
      y: cameraTarget.y,
      z: cameraTarget.z,
      duration: 1,
      onUpdate: () => camera.lookAt(targetPosition),
      onComplete: () => {
        gsap.to(planetRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.5,
          onComplete: () => {
            const isAuthenticated = !!localStorage.getItem('token'); 
            isAuthenticated ? navigate("/noxu$") : navigate("/login")
          }   
        });
      }
    });
  };

  return (
    <>
      <Ecliptic xRadius={xRadio} zRadius={zRadio} position={[0, 0, 0]} />
      <group ref={planetRef}>
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
            <div className="annotation">Noxu$</div>
          </Html>
        </mesh>
        {/* Planeta visible */}
      </group>
    </>
  );
};

export default Noxu$Planet;