import { SwatchesColors, useCharacterContext } from "@/app/world/contexts/CharacterCustomizationContext"; 

export const LegConfigurator = () => {
  const {
    legsColor,
    setLegsColor,
    toeColor,
    setToeColor,  
  } = useCharacterContext() as any;

  return (
    <div className="py-4">
        <input
          aria-label="legs" 
          value={legsColor}
          onChange={setLegsColor}
        />
        <input
            aria-label="toe" 
            value={toeColor}
            onChange={setToeColor}
        /> 
    </div>
  );
};