import { Stack, ColorInput } from "@mantine/core";
import {
  SwatchesColors,
  useCharacterContext,
} from "@/app/world/contexts/CharacterCustomizationContext";

export const FaceConfigurator = () => {
  const {
    earColor,
    setEarColor,
    eyesColor,
    setEyesColor,
    skinColor,
    setSkinColor,
    noseColor,
    setNoseColor,
  } = useCharacterContext() as any;

  return (
    <Stack className="rounded-lg p-4 bg-white drop-shadow-md">
      <ColorInput
        label={"Skin"}
        format={"hex"}
        swatches={SwatchesColors}
        value={skinColor}
        onChange={setSkinColor}
      />
      <ColorInput
        label={"Ear"}
        format={"hex"}
        swatches={SwatchesColors}
        value={earColor}
        onChange={setEarColor}
      />
      <ColorInput
        label={"Eyes"}
        format={"hex"}
        swatches={SwatchesColors}
        value={eyesColor}
        onChange={setEyesColor}
      />
      <ColorInput
        label={"Nose"}
        format={"hex"}
        swatches={SwatchesColors}
        value={noseColor}
        onChange={setNoseColor}
      />
    </Stack>
  );
};
