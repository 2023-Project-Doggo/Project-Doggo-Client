import { PerspectiveCamera } from "@react-three/drei";

const CharacterCamera = () => {
  return <PerspectiveCamera makeDefault args={[45, 1.2, 1, 100]} />;
};

export default CharacterCamera;
