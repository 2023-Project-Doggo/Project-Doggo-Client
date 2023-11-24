"use client";
import { CameraControls } from "./CameraControls";
import { Dog } from "@/app/make/characters/Dog";
import { Ground } from "./Ground";

const Make = () => {
  return (
    <>
      <CameraControls />
      <ambientLight intensity={2} />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <group position={[0, -0.2, 0]}>
        <Dog />
      </group>
      <group position={[0.4, -0.4, -2]} rotation={[0, 1.3, 0]}>
        <Ground />
      </group>
    </>
  );
};

export default Make;
