import {
  CapsuleCollider,
  RigidBody,
  RapierRigidBody,
} from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Dog } from "@/app/world/characters/Dog";
import CharacterCamera from "./CharacterCamera";
import * as THREE from "three";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

const JUMP_FORCE = 0.5;
const MOVEMENT_SPEED = 5;
const MAX_VEL = 3;
const RUN_VEL = 2;

const CharacterController = () => {
  const rigidbody = useRef<RapierRigidBody>(null);
  const isOnFloor = useRef(true);
  const character = useRef<THREE.Group>(null);
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  useFrame((state) => {
    const impulse = { x: 0, y: 0, z: 0 };

    if (rigidbody.current) {
      const linvel = rigidbody.current.linvel();
      let changeRotation = false;

      if (jumpPressed && isOnFloor.current) {
        impulse.y += JUMP_FORCE;
        isOnFloor.current = false;
      }

      if (rightPressed && linvel.x < MAX_VEL) {
        impulse.x += MOVEMENT_SPEED;
        changeRotation = true;
      }
      if (leftPressed && linvel.x > -MAX_VEL) {
        impulse.x -= MOVEMENT_SPEED;
        changeRotation = true;
      }
      if (backPressed && linvel.z < MAX_VEL) {
        impulse.z += MOVEMENT_SPEED;
        changeRotation = true;
      }
      if (forwardPressed && linvel.z > -MAX_VEL) {
        impulse.z -= MOVEMENT_SPEED;
        changeRotation = true;
      }

      rigidbody.current.setLinvel(impulse, true);
    }
  });

  return (
    <RigidBody
      ref={rigidbody}
      colliders={false}
      scale={[0.2, 0.2, 0.2]}
      position={[0, 0, 1]}
      enabledRotations={[false, false, false]}
      onCollisionEnter={() => {
        isOnFloor.current! = true;
      }}>
      <CapsuleCollider args={[0.8, 0]}>
        <group ref={character}>
          <CharacterCamera />
          <Dog />
        </group>
      </CapsuleCollider>
    </RigidBody>
  );
};

export default CharacterController;
