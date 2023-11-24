"use client";
import { Farm } from "../assets/Farm";
import { Suspense } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import { Html } from "@react-three/drei";
import CharacterController from "./CharacterController";
import { Cake } from "@/app/town/assets/Cake";
import { useGameContext } from "@/contexts/GameContext";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const HongikPoster = () => {
  const textureMap = useLoader(TextureLoader, "/img/poster.jpeg");
  return (
    <group>
      <mesh>
        <planeGeometry args={[32, 32]} />
        <meshStandardMaterial map={textureMap} />
      </mesh>
    </group>
  );
};
const Field = () => {
  const { cake, setCake, github, setGithub, hongik, setHongik } =
    useGameContext() as any;

  return (
    <Suspense>
      <Physics gravity={[0, -20, 0]}>
        <CharacterController />
        <RigidBody
          scale={0.08}
          onCollisionEnter={setHongik(true)}
          onCollisionExit={setHongik(false)}
          position={[5, 1.4, -4]}
          type="fixed">
          <HongikPoster />
          {hongik && (
            <Html transform center distanceFactor={10}>
              <div
                style={{
                  fontSize: "0.6rem",
                  padding: "1rem",
                  width: "200px",
                  background: "rgba(0, 0, 0, 0.66)",
                  color: "#ffffff",
                  textAlign: "center",
                  borderRadius: "0.5em",
                  display: "block",
                }}>
                <span>
                  홍익대학교 컴퓨터공학과 졸업전시 <br />
                  S동 신축강당 절찬 진행중 <br />
                  다들 고생 많으셨고 축하드립니다"
                </span>
              </div>
            </Html>
          )}
        </RigidBody>
        <RigidBody
          onCollisionEnter={() => {
            setCake(true);
          }}
          onCollisionExit={setCake(false)}
          colliders={"hull"}
          position={[12.5, 0.3, 10.5]}
          type="fixed">
          {cake && (
            <Html transform center distanceFactor={10}>
              <div
                style={{
                  fontSize: "0.6rem",
                  padding: "1rem",
                  width: "200px",
                  background: "rgba(0, 0, 0, 0.66)",
                  color: "#ffffff",
                  textAlign: "center",
                  borderRadius: "0.5em",
                  display: "block",
                }}>
                <span>
                  "11월 24일은 이태휘 생일이자 <br />
                  홍익대학교 컴퓨터공학과 졸업전시 <br />
                  마지막날입니다 ^_^ <br />
                  다들 고생 많으셨고 축하드립니다"
                </span>
              </div>
            </Html>
          )}
          <Cake />
        </RigidBody>
        <RigidBody colliders={"hull"} position={[0, 0, 0]} type="fixed">
          <Farm />
        </RigidBody>
      </Physics>
    </Suspense>
  );
};

export default Field;
