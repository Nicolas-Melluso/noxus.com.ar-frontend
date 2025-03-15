import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import NoxusOrbit from "./Components/NoxusOrbit";
import Noxu$Planet from "./Components/Noxu$Planet";
import Voley from "./Components/Voley";
import Lights from "../Camera/Lights";
import "./Css/Home.css";

export default function Home() {
  return (
    <Canvas camera={{ position: [10, 15, 20], fov: 25 }}>
      <Suspense fallback={<Html>Loading...</Html>}>
          <NoxusOrbit />
          <Noxu$Planet />
          <Voley />
          <Lights />
          <OrbitControls enabled={true} />
      </Suspense>
    </Canvas>
  );
}