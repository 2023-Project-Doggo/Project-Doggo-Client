"use client";
import {KeyboardControls, KeyboardControlsEntry} from "@react-three/drei";
import {Suspense, useEffect, useMemo} from "react";
import {Canvas} from "@react-three/fiber";
import {Physics} from "@react-three/rapier";
import { Controls } from "@/app/town/components/CharacterController";
import Field from "@/app/town/components/Field";

const Town = () => {
  const map = useMemo<KeyboardControlsEntry<string>[]>(
    () => [
      {name: Controls.forward, keys: ["ArrowUp", "KeyW"]},
      {name: Controls.back, keys: ["ArrowDown", "KeyS"]},
      {name: Controls.left, keys: ["ArrowLeft", "KeyA"]},
      {name: Controls.right, keys: ["ArrowRight", "KeyD"]},
      {name: Controls.jump, keys: ["Space"]},
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas
        camera={{position: [0, 0.5, 2.5], fov: 50}}
        shadows
        gl={{preserveDrawingBuffer: true}}
      >
        <color attach={"background"} args={["#e6f8ff"]} />
        <fog attach='fog' color='#d9f9ff' near={1} far={40} />
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
