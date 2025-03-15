import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function CameraAnimation() {
  const { camera } = useThree();
  const clock = useRef(new THREE.Clock());
  const isMovingAway = useRef(true);

  // Configuración inicial
  camera.fov = 20;
  camera.position.set(10, 25, 5); // Comienza cerca del Sol (z = 5)
  camera.lookAt(0, 0, 0);

  useFrame(() => {
    const time = clock.current.getElapsedTime();

    if (isMovingAway.current) {
      // Fase 1: Alejarse del Sol (duración: 5 segundos)
        const startPosition = 0;
        const endPosition = 25;
        const duration = 5; // 15 segundos

        // Interpolación suave entre 5 y 25
        camera.position.z = THREE.MathUtils.lerp(
            startPosition,
            endPosition,
            0.5
        );
    } else {
      // Fase 2: Rotar alrededor del Sol (radio = 25)
      const radius = 25;
      const angle = time * 0.1; // Velocidad de rotación lenta
      camera.position.x = Math.cos(angle) * radius;
      camera.position.z = Math.sin(angle) * radius;
    }

    camera.lookAt(0, 0, 0); // Siempre enfocado al Sol
  });

  return null;
}

export default CameraAnimation;


//import CameraAnimation from "./components/Camera/CameraAnimation"; // Importa el nuevo componente
//<CameraAnimation /> {/* Añade la animación */}
