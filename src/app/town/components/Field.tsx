"use client";
import { Farm } from "../assets/Farm";
import { Suspense } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import CharacterController from "./CharacterController";

const Field = () => {
  return (
    <Suspense>
      <Physics debug gravity={[0, -20, 0]}>
        <CharacterController />
        <RigidBody colliders={"hull"} position={[0, 0, 0]} type="fixed">
          <Farm />
        </RigidBody>
      </Physics>
    </Suspense>
  );
};

export default Field;
