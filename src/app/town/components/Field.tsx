"use client";
import { OrbitControls, Sky } from "@react-three/drei";
import { Farm } from "../assets/Farm";
import CharacterController from "./CharacterController";

const Field = () => {
  return (
    <>
      <Sky sunPosition={[100, 100, 20]} />
      <OrbitControls />
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} castShadow />
      <group>
        <Farm />
        <CharacterController />
      </group>
    </>
  );
};

export default Field;
