import {
  CapsuleCollider,
  RigidBody,
  RapierRigidBody,
} from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Dog } from "@/app/make/characters/Dog";
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

      if (changeRotation && character.current) {
        const angle = Math.atan2(impulse.x, impulse.z);
        character.current.rotation.y = angle;
      }

      rigidbody.current.setLinvel(impulse, true);
    }

    if (character.current) {
      const characterPos = character.current.getWorldPosition(
        new THREE.Vector3()
      );

      const worldPos = character.current.getWorldPosition(new THREE.Vector3());
      const targetPos = new THREE.Vector3(worldPos.x, 1, worldPos.z - 2);
      const targetLookAt = targetPos.clone();
      const direction = new THREE.Vector3();
      const position = new THREE.Vector3();

      state.camera.position.lerp(targetPos, 0.1);
      state.camera.getWorldDirection(direction);
      state.camera.getWorldPosition(position);

      const curLookAt = position.clone().add(direction);
      const lerpedLookAt = new THREE.Vector3();
      lerpedLookAt.lerpVectors(curLookAt, targetLookAt, 0.1);

      state.camera.lookAt(lerpedLookAt);
      state.camera.updateProjectionMatrix();
    }
  });

  return (
    <RigidBody
      ref={rigidbody}
      colliders={false}
      scale={[0.6, 0.6, 0.6]}
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
