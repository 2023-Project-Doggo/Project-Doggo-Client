"use client";
import {
  KeyboardControls,
  KeyboardControlsEntry,
  Sky,
} from "@react-three/drei";
import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Controls } from "@/app/town/components/CharacterController";
import Field from "@/app/town/components/Field";
import { useCharacterContext } from "@/contexts/CharacterCustomizationContext";

const Town = () => {
  const { userName } = useCharacterContext() as any;
  console.log(userName);
  const map = useMemo<KeyboardControlsEntry<string>[]>(
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
      <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
        <color attach={"background"} args={["#e6f8ff"]} />
        <fog attach="fog" color="#d9f9ff" near={1} far={400} />
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={2} />
        <directionalLight position={[-5, 5, 5]} castShadow />
        <Field />
      </Canvas>
    </KeyboardControls>
  );
};
export default Town;
