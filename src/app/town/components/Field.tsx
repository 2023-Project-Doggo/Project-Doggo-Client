'use client'
import { OrbitControls } from "@react-three/drei";
import Farm from "../assets/Farm";
import Dog from "@/app/world/characters/Dog";

const Field = () => { 
    return (
    <> 
        <OrbitControls/>
        <ambientLight />
        <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        />
        <group scale={0.1} position={[0, 0, 1]}>
            <Dog/>
        </group>
        <group position={[0, 0, 0]}>
            <Farm/>
        </group> 
    </>
  );
};

export default Field;