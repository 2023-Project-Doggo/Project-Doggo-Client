"use client";
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCharacterContext } from "../contexts/CharacterCustomizationContext";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

type GLTFResult = GLTF & {
  nodes: {
    body: THREE.Mesh;
    ear: THREE.Mesh;
    eyes: THREE.Mesh;
    legs: THREE.Mesh;
    nose: THREE.Mesh;
    tail: THREE.Mesh;
  };
  materials: {
    M_Dog: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Rig|Attack";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Dog(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations } = useGLTF(
    "/assets/Dog.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  const characterState = useCharacterAnimations();
  const { headColor, mouthColor, eyesColor, bodyColor, legsColor, toeColor } =
    useCharacterContext() as any;

  useEffect(() => {}, []);

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="body"
          castShadow
          receiveShadow
          geometry={nodes.body.geometry}
          material={materials.M_Dog}
          scale={0.4}
        />
        <mesh
          name="ear"
          castShadow
          receiveShadow
          geometry={nodes.ear.geometry}
          material={materials.M_Dog}
          scale={0.4}
        />
        <mesh
          name="eyes"
          castShadow
          receiveShadow
          geometry={nodes.eyes.geometry}
          material={materials.M_Dog}
          scale={0.4}
        />
        <mesh
          name="legs"
          castShadow
          receiveShadow
          geometry={nodes.legs.geometry}
          material={materials.M_Dog}
          scale={0.4}
        />
        <mesh
          name="nose"
          castShadow
          receiveShadow
          geometry={nodes.nose.geometry}
          material={materials.M_Dog}
          scale={0.4}
        />
        <mesh
          name="tail"
          castShadow
          receiveShadow
          geometry={nodes.tail.geometry}
          material={materials.M_Dog}
          scale={0.4}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/Dog.glb");