import { useCharacterAnimations } from "@/app/world/contexts/CharacterAnimations";
import {
  CameraModes,
  useCharacterContext,
} from "@/app/world/contexts/CharacterCustomizationContext";
import { LegConfigurator } from "./Configurator/LegConfigurator";
import { HeadConfigurator } from "./Configurator/HeadConfigurator";
import { BodyConfigurator } from "./Configurator/TopConfigurator";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations() as any;
  const { cameraMode, setCameraMode, setTakeScreenshot } =
    useCharacterContext() as any;
  return (
    <>
      <div style={{ top: 50, right: 20 }}>
        {cameraMode === CameraModes.HEAD && <HeadConfigurator />}
        {cameraMode === CameraModes.TOP && <BodyConfigurator />}
        {cameraMode === CameraModes.BOTTOM && <LegConfigurator />}
      </div>
      <div style={{ bottom: 50, right: 20 }}>
        <div>
          {animations.map((animation : any, index : number) => (
            <button
              key={animation}
              onClick={() => setAnimationIndex(index)}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Interface;