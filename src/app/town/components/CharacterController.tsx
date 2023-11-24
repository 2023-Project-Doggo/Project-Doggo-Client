import {
  CapsuleCollider,
  RigidBody,
  RapierRigidBody,
  vec3,
} from "@react-three/rapier";
import { CameraControls, Html, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Dog } from "@/app/make/characters/Dog";
import * as THREE from "three";
import { useCharacterContext } from "@/contexts/CharacterCustomizationContext";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

const JUMP_FORCE = 0.1;
const MOVEMENT_SPEED = 0.04;
const MAX_VEL = 1.4;

const CharacterController = () => {
  const { userName } = useCharacterContext() as any;
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
    const curY = rigidbody.current.translation().y;
    const impulse = { x: 0, y: 0, z: 0 };

    if (curY < 0) {
      rigidbody.current.setTranslation(vec3({ x: 6, y: 2, z: 0 }), true);
      rigidbody.current.setLinvel(vec3({ x: 0, y: 0, z: 0 }), true);
      rigidbody.current.applyImpulse(impulse, true);
    }

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
      rigidbody.current.applyImpulse(impulse, true);
    }

    const cameraDistanceY = window.innerWidth < 1024 ? 1 : 2.2;
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
    <group>
      <CameraControls
        makeDefault
        ref={controls}
        verticalDragToForward={true}
        minDistance={0}
        maxDistance={100}
      />
      <RigidBody
        ref={rigidbody}
        colliders={false}
        scale={[0.6, 0.6, 0.6]}
        position={[6, 2, 0]}
        enabledRotations={[false, false, false]}
        onCollisionEnter={() => {
          isOnFloor.current = true;
        }}>
        <Html scale={0.5} transform center distanceFactor={10}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bottom: "-5rem",
              fontSize: "1rem",
              padding: "0.5rem",
              width: "100px",
              background: "rgba(0, 0, 0, 0.4)",
              color: "#ffffff9e",
              textAlign: "center",
              borderRadius: "0.5em",
              display: "block",
            }}>
            {userName}
          </div>
        </Html>
        <CapsuleCollider args={[0.2, 0.2]}>
          <group ref={character}>
            <Dog />
          </group>
        </CapsuleCollider>
      </RigidBody>
    </group>
  );
};

export default CharacterController;
