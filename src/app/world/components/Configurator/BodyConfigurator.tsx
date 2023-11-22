import {
  SwatchesColors,
  useCharacterContext,
} from "@/app/world/contexts/CharacterCustomizationContext";
import { ColorInput, Stack } from "@mantine/core";

export const BodyConfigurator = () => {
  const {
    bellyColor,
    setBellyColor,
    legsColor,
    setLegsColor,
    toeColor,
    setToeColor,
    tailColor,
    setTailColor,
  } = useCharacterContext() as any;

  return (
    <Stack className="rounded-lg p-4 bg-white drop-shadow-md">
      <ColorInput
        label={"Belly"}
        format={"hex"}
        aria-label="bellys"
        swatches={SwatchesColors}
        value={bellyColor}
        onChange={setBellyColor}
      />
      <ColorInput
        label={"Legs"}
        aria-label="legs"
        format={"hex"}
        swatches={SwatchesColors}
        value={legsColor}
        onChange={setLegsColor}
      />
      <ColorInput
        label={"Toe"}
        format={"hex"}
        swatches={SwatchesColors}
        aria-label="toe"
        value={toeColor}
        onChange={setToeColor}
      />
      <ColorInput
        label={"Tail"}
        format={"hex"}
        swatches={SwatchesColors}
        aria-label="tail"
        value={tailColor}
        onChange={setTailColor}
      />
    </Stack>
  );
};
