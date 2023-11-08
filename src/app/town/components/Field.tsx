"use client";
import { OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import Farm from "../assets/Farm";
import CharacterController from "./CharacterController";

const Field = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <group>
        <Farm />
        <CharacterController />
      </group>
    </>
  );
};

export default Field;
