'use client'
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    character_dog: THREE.Mesh;
    character_dogArmLeft: THREE.Mesh;
    character_dogArmRight: THREE.Mesh;
    Cube1339: THREE.Mesh;
    Cube1339_1: THREE.Mesh;
    Cube1339_2: THREE.Mesh;
  };
  materials: {
    'Red.034': THREE.Material;
    'Black.026': THREE.Material; 
  };
};


export default function Model(props : JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf') as GLTFResult;
    return (
    <group {...props} dispose={null}>
        <mesh geometry={nodes.character_dog.geometry} material={nodes.character_dog.material} rotation={[Math.PI / 2, 0, 0,]} >
        <mesh geometry={nodes.character_dogArmLeft.geometry} material={nodes.character_dogArmLeft.material} position={[0.2, 0, -0.63,]} />
        <mesh geometry={nodes.character_dogArmRight.geometry} material={nodes.character_dogArmRight.material} position={[-0.2, 0, -0.63,]} />
            <group position={[0, 0, -0.7,]} >
            <mesh geometry={nodes.Cube1339.geometry} material={nodes.Cube1339.material} />
            <mesh geometry={nodes.Cube1339_1.geometry} material={materials['Red.034']} />
            <mesh geometry={nodes.Cube1339_2.geometry} material={materials['Black.026']} />
            </group>
        </mesh>
    </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf')