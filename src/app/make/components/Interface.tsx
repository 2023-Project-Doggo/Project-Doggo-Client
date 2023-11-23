import { useRouter } from "next/navigation";
import { Affix, Button, TextInput } from "@mantine/core";
import {
  CameraModes,
  useCharacterContext,
} from "@/contexts/CharacterCustomizationContext";
import { FaceConfigurator } from "@/app/make/components/Configurator/FaceConfigurator";
import { BodyConfigurator } from "@/app/make/components/Configurator/BodyConfigurator";
import ScreeshotButton from "@/components/Button/ScreeshotButton";

const Interface = () => {
  const router = useRouter();
  const { cameraMode, setCameraMode, setUserName } =
    useCharacterContext() as any;

  return (
    <>
      <Affix
        className={"flex flex-auto-row gap-2"}
        position={{ top: 20, right: 20 }}>
        {Object.keys(CameraModes).map((mode) => (
          <Button
            key={mode}
            className="hover:border hover:bg-sky-300 hover:text-white"
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
      <TextInput
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[264px] z-10 text-center placeholder:text-center"
        variant="filled"
        placeholder="Write your nickname"
        description="닉네임을 10자 이하로 지어주세요."
        inputWrapperOrder={["label", "input", "description", "error"]}
        onChange={(e) => setUserName(e.target.value)}
      />
      <div
        className={
          "absolute right-4 bottom-4 text-white grid sm:grid-flow-row md:grid-flow-col gap-4 font-normal text-center rounded-lg z-10"
        }>
        <ScreeshotButton />
        <Button
          className="bg-sky-500 hover:bg-sky-300"
          variant="filled"
          type="submit"
          onClick={() => {
            router.push("/town");
          }}>
          {"SAVE"}
        </Button>
      </div>
    </>
  );
};

export default Interface;
