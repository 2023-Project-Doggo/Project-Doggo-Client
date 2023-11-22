"use client";
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCharacterContext } from "../contexts/CharacterCustomizationContext";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.SkinnedMesh;
    root: THREE.Bone;
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
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Rig">
          <skinnedMesh
            name="Mesh"
            geometry={nodes.Mesh.geometry}
            material={materials.M_Dog}
            skeleton={nodes.Mesh.skeleton}
          />
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/Dog.glb");
