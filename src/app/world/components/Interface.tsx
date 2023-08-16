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
      <div className="absolute right-4 top-4 grid grid-flow-col gap-2 z-10">
      {Object.keys(CameraModes).map((mode) => (
          <button 
            className={mode === cameraMode ? "bg-[#F4F9FF] text-[#334155] px-4 py-1 rounded-lg" : "border border-[#98ABC6] text-[#98ABC6] px-4 py-1 rounded-lg"}
            onClick={() => setCameraMode(mode)}
          >
            {mode}
          </button>
        ))}
      </div>
      <div style={{ top: 50, right: 20}}>
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
      <button 
            className={"absolute right-4 bottom-4 bg-[#1053F3] text-white font-normal text-center px-12 py-1 rounded-lg z-10"}
            onClick={() => console.log('save')}
          >
          {'Save'}
      </button>
    </>
  );
};

export default Interface;