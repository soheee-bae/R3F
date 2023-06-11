import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import * as THREE from "three";
import Experience from "./Experience";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    // flat
    // linear
    gl={{
      antialias: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      // outputEncoding: THREE.LinearEncoding,
    }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [3, 2, 6],
    }}>
    <Experience />
  </Canvas>
);
