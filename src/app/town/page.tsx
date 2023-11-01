'use client'
import { Canvas } from "@react-three/fiber";
import Field from "./components/Field";

const Town = () => {
  return (
    <> 
        <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows gl={{ preserveDrawingBuffer: true }} >
            <color attach={"background"} args={["dbecfb"]}/>
            <fog attach={"fog"} args={["#dbecfb", 30, 40]}/> 
            <Field/> 
        </Canvas> 
    </>
  );
};
export default Town;