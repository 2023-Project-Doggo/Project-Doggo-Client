import { PerspectiveCamera } from "@react-three/drei";

const CharacterCamera = () => {
  return (
    <PerspectiveCamera
      fov={75}
      makeDefault={true}
      position={[0, 2, 6]}></PerspectiveCamera>
  );
};

export default CharacterCamera;
