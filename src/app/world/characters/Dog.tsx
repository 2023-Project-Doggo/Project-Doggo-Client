"use client";
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCharacterContext } from "../contexts/CharacterCustomizationContext";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";


type GLTFResult = GLTF & {
  nodes: {
    body: THREE.SkinnedMesh;
    bodybelly: THREE.SkinnedMesh;
    ear: THREE.SkinnedMesh;
    eyes: THREE.SkinnedMesh;
    eyesbg: THREE.SkinnedMesh;
    eyesbrow: THREE.SkinnedMesh;
    legs: THREE.SkinnedMesh;
    legstoe: THREE.SkinnedMesh;
    nose: THREE.SkinnedMesh;
    tail: THREE.SkinnedMesh;
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
        <group name="Rig" scale={0.4}>
          <skinnedMesh
            name="body"
            geometry={nodes.body.geometry}
            material={materials.M_Dog}
            skeleton={nodes.body.skeleton}
          />
          <skinnedMesh
            name="bodybelly"
            geometry={nodes.bodybelly.geometry}
            material={materials.M_Dog}
            skeleton={nodes.bodybelly.skeleton}
          />
          <skinnedMesh
            name="ear"
            geometry={nodes.ear.geometry}
            material={materials.M_Dog}
            skeleton={nodes.ear.skeleton}
          />
          <skinnedMesh
            name="eyes"
            geometry={nodes.eyes.geometry}
            material={materials.M_Dog}
            skeleton={nodes.eyes.skeleton}
          />
          <skinnedMesh
            name="eyesbg"
            geometry={nodes.eyesbg.geometry}
            material={materials.M_Dog}
            skeleton={nodes.eyesbg.skeleton}
          />
          <skinnedMesh
            name="eyesbrow"
            geometry={nodes.eyesbrow.geometry}
            material={materials.M_Dog}
            skeleton={nodes.eyesbrow.skeleton}
          />
          <skinnedMesh
            name="legs"
            geometry={nodes.legs.geometry}
            material={materials.M_Dog}
            skeleton={nodes.legs.skeleton}
          />
          <skinnedMesh
            name="legstoe"
            geometry={nodes.legstoe.geometry}
            material={materials.M_Dog}
            skeleton={nodes.legstoe.skeleton}
          />
          <skinnedMesh
            name="nose"
            geometry={nodes.nose.geometry}
            material={materials.M_Dog}
            skeleton={nodes.nose.skeleton}
          />
          <skinnedMesh
            name="tail"
            geometry={nodes.tail.geometry}
            material={materials.M_Dog}
            skeleton={nodes.tail.skeleton}
          />
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/Dog.glb");
