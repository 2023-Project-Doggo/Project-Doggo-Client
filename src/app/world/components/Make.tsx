'use client';
import { useThree } from "@react-three/fiber";
import { CameraControls } from "./CameraControls"; 
import Dog from "@/app/world/characters/Dog";
import { DoubleSide, PlaneGeometry, Sphere } from "three";

const Make = () => {  
  return (
    <>
        <CameraControls />
        <ambientLight />
        <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        />
        <group position={[0, -1, 0]}>
            <Dog />
        </group>
        <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
        >  
            {/* <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
                <meshBasicMaterial color="green" side={DoubleSide} />
            </mesh>
            <shadowMaterial transparent opacity={0.2} /> */}
        </mesh>
    </>
  );
};

export default Make;