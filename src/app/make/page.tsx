"use client";
import { Canvas } from "@react-three/fiber";
import Interface from "@/app/make/components/Interface";
import Make from "@/app/make/components/Make";
import { Sky } from "@react-three/drei";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

const World = () => {
  return (
    <>
      <Interface />
      <Canvas
        camera={{ position: [1, 1.5, 2.5], fov: 50 }}
        shadows
        gl={{ preserveDrawingBuffer: true }}>
        <Sky />
        <Suspense>
          <Physics>
            <Make />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
};
export default World;
