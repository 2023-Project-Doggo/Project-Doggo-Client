import { useCharacterAnimations } from "@/app/world/contexts/CharacterAnimations";
import {
  CameraModes,
  useCharacterContext,
} from "@/app/world/contexts/CharacterCustomizationContext"; 
import { HeadConfigurator } from "./Configurator/HeadConfigurator";
import { BodyConfigurator } from "./Configurator/BodyConfigurator";
import { useRouter } from "next/navigation";
import { Affix, Button } from "@mantine/core";

const Interface = () => {
  const router = useRouter();
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations() as any;
  const { cameraMode, setCameraMode, setTakeScreenshot } =
    useCharacterContext() as any;
  return (
    <>
      <Affix position={{ top: 20, right: 20 }}>
      {Object.keys(CameraModes).map((mode) => (
          <Button 
            key={mode}
            variant={mode === cameraMode ? "filled" : "light"}
            onClick={() => setCameraMode(mode)}
          >
            {mode}
          </Button>
        ))}
      </Affix>
      <Affix position={{ top: 50, right: 20 }}>
        {cameraMode === CameraModes.HEAD && <HeadConfigurator />}
        {cameraMode === CameraModes.BODY && <BodyConfigurator />} 
      </Affix>
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
            onClick={() => router.push('/town')}
          >
          {'Save'}
      </button>
    </>
  );
};

export default Interface;