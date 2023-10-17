import { Stack, ColorInput } from "@mantine/core";
import { SwatchesColors, useCharacterContext } from "@/app/world/contexts/CharacterCustomizationContext"; 

export const HeadConfigurator = () => {
  const {
    headColor,
    setHeadColor,
    mouthColor,
    setMouthColor,
    eyesColor,
    setEyesColor,  
  } = useCharacterContext() as any;

  return (
    <Stack className="py-4">
        <ColorInput 
          label={"Head"} 
          format={"hex"} 
          swatches={SwatchesColors} 
          value={headColor} 
          onChange={setHeadColor}/>
        <ColorInput 
          label={"Mouth"} 
          format={"hex"} 
          swatches={SwatchesColors} 
          value={mouthColor} 
          onChange={setMouthColor}/>
        <ColorInput 
          label={"Eyes"} 
          format={"hex"} 
          swatches={SwatchesColors} 
          value={eyesColor} 
          onChange={setEyesColor}/> 
    </Stack>
  );
};