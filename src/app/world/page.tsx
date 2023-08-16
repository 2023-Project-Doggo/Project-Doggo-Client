'use client'
import { Canvas } from "@react-three/fiber";
import Header from "@/components/Header/Header"; 
import Interface from "@/app/world/components/Interface";
import Make from "@/app/world/components/Make";


const World = () => {
  return (
    <>
        <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows gl={{ preserveDrawingBuffer: true }} >
            <Make/>
        </Canvas>
        <Header/>
        <Interface/>
    </>
  );
};
export default World;