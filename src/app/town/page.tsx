"use client";
import { KeyboardControls } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Field from "./components/Field";
import { Controls } from "./components/CharacterController";

const Town = () => {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas
        camera={{ position: [1, 1.5, 2.5], fov: 50 }}
        shadows
        gl={{ preserveDrawingBuffer: true }}>
        <color attach={"background"} args={["dbecfb"]} />
        <fog attach={"fog"} args={["#ffdd9d", 30, 40]} />
        <Suspense>
          <Physics>
            <Field />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  );
};
export default Town;
