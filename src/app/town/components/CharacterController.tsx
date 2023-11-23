import {
  CapsuleCollider,
  RigidBody,
  RapierRigidBody,
  vec3,
} from "@react-three/rapier";
import { CameraControls, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Dog } from "@/app/make/characters/Dog";
import * as THREE from "three";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

const JUMP_FORCE = 2;
const MOVEMENT_SPEED = 5;
const MAX_VEL = 3;

const CharacterController = () => {
  const rigidbody = useRef<RapierRigidBody>(null);
  const isOnFloor = useRef(true);
  const character = useRef<THREE.Group>(null);
  const controls = useRef<CameraControls>(null);
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  useFrame(() => {
    if (!rigidbody.current || !character.current || !controls.current) return;
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

      if (changeRotation && character.current) {
        const angle = Math.atan2(impulse.x, impulse.z);
        character.current.rotation.y = angle;
      }

      rigidbody.current.setLinvel(impulse, true);
    }

    const cameraDistanceY = window.innerWidth < 1024 ? 1 : 3;
    const cameraDistanceZ = window.innerWidth < 1024 ? 3 : 2;
    const playerWorldPos = vec3(rigidbody.current.translation());
    controls.current.setLookAt(
      playerWorldPos.x,
      playerWorldPos.y + cameraDistanceY,
      playerWorldPos.z + cameraDistanceZ,
      playerWorldPos.x,
      playerWorldPos.y + 1.5,
      playerWorldPos.z,
      true
    );
  });

  return (
    <RigidBody
      ref={rigidbody}
      colliders={false}
      scale={[0.6, 0.6, 0.6]}
      position={[0, 0, 1]}
      enabledRotations={[false, false, false]}
      onCollisionEnter={() => {
        isOnFloor.current = true;
      }}>
      <CameraControls
        makeDefault
        ref={controls}
        verticalDragToForward={true}
        minDistance={0}
        maxDistance={100}
      />
      <CapsuleCollider args={[0.8, 0]}>
        <group ref={character}>
          <Dog />
        </group>
      </CapsuleCollider>
    </RigidBody>
  );
};

export default CharacterController;
