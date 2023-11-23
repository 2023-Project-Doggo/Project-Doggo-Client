"use client";
import { Canvas } from "@react-three/fiber";
import Header from "@/components/Header/Header";
import Interface from "@/app/make/components/Interface";
import Make from "@/app/make/components/Make";
import { Sky, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

const World = () => {
  const progress = useProgress();
  console.log(progress);
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
      <Header />
    </>
  );
};
export default World;
