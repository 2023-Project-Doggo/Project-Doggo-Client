'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib';
import { DoubleSide } from 'three';

type GLTFResult = GLTF & {
    nodes: {
        Circle: THREE.Mesh;
        WindMill001: THREE.Mesh;
        Fence_White013: THREE.Mesh;
        Wooden_Box: THREE.Mesh;
        Plane: THREE.Mesh;
        Well: THREE.Mesh;
        Trees: THREE.Mesh;
        Barn_01: THREE.Mesh;
        WindMill: THREE.Mesh;
    };
    materials: {
        'default': THREE.Material;  
    };
  };

export default function Farm(props : JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-farm/model.gltf') as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Circle.geometry} material={materials['default']} position={[0.47, 0, -0.61,]} scale={3.76} />
      <mesh geometry={nodes.WindMill001.geometry} material={nodes.WindMill001.material} position={[1.26, 1.9, 0.17,]} scale={0.48} />
      <mesh geometry={nodes.Fence_White013.geometry} material={nodes.Fence_White013.material} position={[1.4, -0.01, -2.47,]} rotation={[0, Math.PI / 2, 0,]} scale={0.1} />
      <mesh geometry={nodes.Wooden_Box.geometry} material={nodes.Wooden_Box.material} position={[0.19, 0.05, 0.21,]} scale={0.4} />
      <mesh geometry={nodes.Plane.geometry}  material={nodes.Plane.material} position={[-0.17, 1.05, 0.32,]} scale={0.03} > 
      </mesh>
      <mesh geometry={nodes.Well.geometry} material={nodes.Well.material} position={[2.08, 0.23, -0.06,]} scale={[0.14, 0.13, 0.14,]} />
      <mesh geometry={nodes.Trees.geometry} material={nodes.Trees.material} position={[0.37, 0.15, -1.36,]} scale={62.95} />
      <mesh geometry={nodes.Barn_01.geometry} material={nodes.Barn_01.material} position={[-0.18, 0.41, -0.18,]} scale={1.15} />
      <mesh geometry={nodes.WindMill.geometry} material={nodes.WindMill.material} position={[1.26, 1.56, 0.08,]} scale={0.48} />
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-farm/model.gltf')