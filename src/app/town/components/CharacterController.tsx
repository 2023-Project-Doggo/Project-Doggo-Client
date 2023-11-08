import {
  CapsuleCollider,
  RigidBody,
  RapierRigidBody,
} from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import Dog from "@/app/world/characters/Dog";

const JUMP_FORCE = 0.5;
const MOVEMENT_SPEED = 0.2;
const MAX_VEL = 3;

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

const CharacterController = () => {
  const rigidbody = useRef<RapierRigidBody>(null!); // TODO: rigidbody 타입 찾기..
  const isOnFloor = useRef(true);
  const character = useRef<THREE.Group>(null!);

  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  useFrame((_, dt) => {
    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };
    const impulseStrength = 0.5 * dt;
    const torqueStrength = 0.1 * dt;
    if (jumpPressed && isOnFloor.current!) {
      character.current.position.y += JUMP_FORCE;
      isOnFloor.current! = false;
    }
    const linvel = rigidbody.current.linvel();

    let changeRotation = false;
    if (rightPressed && linvel.x < MAX_VEL) {
      character.current.position.x += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (leftPressed && linvel.x > -MAX_VEL) {
      character.current.position.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (backPressed && linvel.z < MAX_VEL) {
      character.current.position.z += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (forwardPressed && linvel.z > -MAX_VEL) {
      character.current.position.z -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    rigidbody.current?.applyImpulse(impulse, true);
    if (changeRotation) {
      const angle = Math.atan2(
        character.current.position.z,
        character.current.position.x
      );
      character.current.rotation.y = angle;
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
        <group ref={character} scale={[0.5, 0.5, 0.5]}>
          <Dog />
        </group>
      </CapsuleCollider>
    </RigidBody>
  );
};

export default CharacterController;
