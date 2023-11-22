"use client";
import { CameraControls } from "./CameraControls";
import { Dog } from "@/app/world/characters/Dog";

const Make = () => {
	return (
		<>
			<CameraControls />
			<ambientLight />
			<directionalLight
				position={[-5, 5, 5]}
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
			/>
			<group position={[0, -0.7, 0]}>
				<Dog />
			</group>
		</>
	);
};

export default Make;
