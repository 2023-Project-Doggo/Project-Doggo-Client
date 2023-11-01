import { SwatchesColors, useCharacterContext } from "@/app/world/contexts/CharacterCustomizationContext"; 
import { ColorInput, Stack } from "@mantine/core";

export const BodyConfigurator = () => {
  const { bodyColor, setbodyColor, toeColor, setToeColor, legsColor, setLegsColor} = useCharacterContext() as any;

  return ( 
      <Stack className="py-4">
        <ColorInput 
          label={"Body"} 
          format={"hex"} 
          swatches={SwatchesColors}
          value={bodyColor} 
          onChange={setbodyColor}/>
        <ColorInput
          label={"LeftArm"} 
          aria-label="lefttArm" 
          format={"hex"} 
          swatches={SwatchesColors} 
          value={toeColor}
          onChange={setToeColor}
          />
        <ColorInput
            label={"RightArm"} 
            format={"hex"} 
            swatches={SwatchesColors} 
            aria-label="rightArm" 
            value={legsColor}
            onChange={setLegsColor}
        />  
    </Stack> 
  );
};