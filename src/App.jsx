import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import Sun from "./components/SolarSystem/Sun";
import Mercurio from "./components/SolarSystem/Mercurio";
import Venus from "./components/SolarSystem/Venus";
import Lights from "./components/Camera/Lights";
import "./style.css";

export default function App() {
  return (
    <Canvas camera={{ position: [10, 15, 20], fov: 25 }}>
      <Suspense fallback={<Html>Loading...</Html>}>
          <Sun />
          <Mercurio />
          <Venus />
          <Lights />
          <OrbitControls enabled={true} />
      </Suspense>
    </Canvas>
  );
}