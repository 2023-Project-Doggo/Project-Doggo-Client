"use client";
import * as THREE from "three";
import React, {useRef} from "react";
import {useAnimations, useGLTF} from "@react-three/drei";
import {GLTF} from "three-stdlib";
import {useCharacterContext} from "../contexts/CharacterCustomizationContext";

type GLTFResult = GLTF & {
  nodes: {
    Mesh001: THREE.Mesh;
  };
  materials: {
    "M_Dog.001": THREE.Material;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef();
  const {nodes, materials, animations} = useGLTF("/assets/Dog.glb") as GLTFResult;
  const {actions} = useAnimations(animations, group);
  const {headColor, mouthColor, eyesColor, bodyColor, legsColor, toeColor} =
    useCharacterContext() as any;

  return (
    <group {...props} dispose={null}>
      <group name='Scene'>
        <group name='Rig001' scale={1}>
          <mesh
            name='Mesh001'
            castShadow
            receiveShadow
            geometry={nodes.Mesh001.geometry}
            material={materials["M_Dog.001"]}
          >
            <meshStandardMaterial color={headColor} />
          </mesh>
          <group name='root' rotation={[-Math.PI / 2, 0, 0]}>
            <group name='body' position={[0, 0.034, 0.731]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color={bodyColor} />
            </group>
            <group name='earL' position={[0.284, 1.312, 0.451]} rotation={[0.348, 0.139, -2.672]}>
              <meshStandardMaterial color={eyesColor} />
            </group>
            <group name='earL01' position={[0, 0.275, 0]} rotation={[-0.314, 0.038, -0.195]}>
              <meshStandardMaterial color={eyesColor} />
            </group>
          </group>
          <group name='earR' position={[-0.284, 1.312, 0.451]} rotation={[0.348, -0.139, 2.672]}>
            <meshStandardMaterial color={eyesColor} />
          </group>
          <group name='earR01' position={[0, 0.275, 0]} rotation={[-0.314, -0.038, 0.195]}>
            <meshStandardMaterial color={eyesColor} />
          </group>
        </group>
        <group name='tail01' position={[0, 0.26, -0.784]} rotation={[1.108, 0, -Math.PI]}>
          <meshStandardMaterial color={toeColor} />
          <group name='tail02' position={[0, 0.503, 0]} rotation={[0.002, 0, 0]} />
        </group>
        <group name='legFL' position={[0.358, 0.111, 0.357]} rotation={[0, 0, -Math.PI]}>
          <meshStandardMaterial color={legsColor} />
        </group>
        <group name='legBL' position={[0.358, 0.111, -0.654]} rotation={[0, 0, -Math.PI]}>
          <meshStandardMaterial color={legsColor} />
        </group>
        <group name='legFR' position={[-0.358, 0.111, 0.357]} rotation={[0, 0, -Math.PI]}>
          <meshStandardMaterial color={legsColor} />
        </group>
        <group name='legBR' position={[-0.358, 0.111, -0.654]} rotation={[0, 0, -Math.PI]}>
          <meshStandardMaterial color={legsColor} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/Dog.glb");
