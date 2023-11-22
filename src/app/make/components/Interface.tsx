import {
  CameraModes,
  useCharacterContext,
} from "@/app/make/contexts/CharacterCustomizationContext";
import { FaceConfigurator } from "./Configurator/FaceConfigurator";
import { BodyConfigurator } from "./Configurator/BodyConfigurator";
import { useRouter } from "next/navigation";
import { Affix, Button } from "@mantine/core";

const Interface = () => {
  const router = useRouter();
  const { cameraMode, setCameraMode, setTakeScreenshot } =
    useCharacterContext() as any;
  return (
    <>
      <Affix
        className={"flex flex-auto-row gap-2"}
        position={{ top: 20, right: 20 }}>
        {Object.keys(CameraModes).map((mode) => (
          <Button
            key={mode}
            variant={mode === cameraMode ? "outline" : "light"}
            color="rgba(59, 190, 255, 1)"
            onClick={() => setCameraMode(mode)}>
            {mode}
          </Button>
        ))}
      </Affix>
      <Affix className="py-4" position={{ top: 50, right: 20 }}>
        {cameraMode === CameraModes.FACE && <FaceConfigurator />}
        {cameraMode === CameraModes.BODY && <BodyConfigurator />}
      </Affix>
      <button
        className={
          "absolute right-4 bottom-4 bg-[#1053F3] text-white font-normal text-center px-12 py-1 rounded-lg z-10"
        }
        onClick={() => router.push("/town")}>
        {"SAVE"}
      </button>
    </>
  );
};

export default Interface;
