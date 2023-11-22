import {CapsuleCollider, RigidBody, RapierRigidBody} from "@react-three/rapier";
import {useKeyboardControls} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import {useRef} from "react"; 
import {Dog} from "@/app/world/characters/Dog";
import * as THREE from "three";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

const JUMP_FORCE = 0.5;
const MOVEMENT_SPEED = 0.2;
const MAX_VEL = 3;

const CharacterController = () => {
  const rigidbody = useRef<RapierRigidBody>(null!); // TODO: rigidbody 타입 찾기..
  const isOnFloor = useRef(true);
  const character = useRef<THREE.Group>(null!);

  const lookAtVec = new THREE.Vector3(0, 0, 0);
  const cameraVec = new THREE.Vector3(0, 0, 0);

  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls((state) => state[Controls.forward]);

  useFrame((state) => {
    const impulse = {x: 0, y: 0, z: 0};
    console.log(impulse);
    if (jumpPressed && isOnFloor.current!) {
      character.current!.position.y += JUMP_FORCE;
      isOnFloor.current! = false;
    }

    let changeRotation = false;
    if (rightPressed) {
      character.current!.position.x += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (leftPressed) {
      character.current!.position.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (backPressed) {
      character.current!.position.z += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (forwardPressed) {
      character.current!.position.z -= MOVEMENT_SPEED;
      changeRotation! = true;
    }
    // rigidbody.current!.applyImpulse(impulse, true);

    const characterPos = rigidbody.current.translation();
    lookAtVec.set(characterPos.x, characterPos.y, characterPos.z);
    cameraVec.lerp(lookAtVec, 0.1);
    state.camera.lookAt(cameraVec);
    state.camera.updateProjectionMatrix();
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
      }}
    >
      <CapsuleCollider args={[0.8, 0]}>
        <group ref={character}>
          <Dog />
        </group>
      </CapsuleCollider>
    </RigidBody>
  );
};

export default CharacterController;
