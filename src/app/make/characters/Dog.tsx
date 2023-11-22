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
    bodybelly: THREE.Mesh;
    ear: THREE.Mesh;
    eyes: THREE.Mesh;
    eyesbg: THREE.Mesh;
    eyesbrow: THREE.Mesh;
    legs: THREE.Mesh;
    legstoe: THREE.Mesh;
    nose: THREE.Mesh;
    tail: THREE.Mesh;
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

  const {
    earColor,
    eyesColor,
    noseColor,
    skinColor,
    bellyColor,
    legsColor,
    toeColor,
    tailColor,
  } = useCharacterContext() as any;

  useEffect(() => {}, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Rig">
        <mesh name="body" geometry={nodes.body.geometry}>
          <meshStandardMaterial color={skinColor} />
        </mesh>
        <mesh name="bodybelly" geometry={nodes.bodybelly.geometry}>
          <meshStandardMaterial color={bellyColor} />
        </mesh>
        <mesh name="ear" geometry={nodes.ear.geometry}>
          <meshStandardMaterial color={earColor} />
        </mesh>
        <mesh name="eyes" geometry={nodes.eyes.geometry}>
          <meshStandardMaterial color={eyesColor} />
        </mesh>
        <mesh name="eyesbg" geometry={nodes.eyesbg.geometry}>
          <meshStandardMaterial color={"#ffffff"} />
        </mesh>
        <mesh name="eyesbrow" geometry={nodes.eyesbrow.geometry}>
          <meshStandardMaterial color={bellyColor} />
        </mesh>
        <mesh name="legs" geometry={nodes.legs.geometry}>
          <meshStandardMaterial color={legsColor} />
        </mesh>
        <mesh name="legstoe" geometry={nodes.legstoe.geometry}>
          <meshStandardMaterial color={toeColor} />
        </mesh>
        <mesh name="nose" geometry={nodes.nose.geometry}>
          <meshStandardMaterial color={noseColor} />
        </mesh>
        <mesh name="tail" geometry={nodes.tail.geometry}>
          <meshStandardMaterial color={tailColor} />
        </mesh>
        <primitive object={nodes.root} />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/Dog.glb");
