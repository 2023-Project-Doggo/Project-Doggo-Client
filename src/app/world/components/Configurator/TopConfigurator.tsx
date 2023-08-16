import { SwatchesColors, useCharacterContext } from "@/app/world/contexts/CharacterCustomizationContext"; 

export const BodyConfigurator = () => {
  const { bodyColor, setbodyColor, skinColor,
    setSkinColor, } = useCharacterContext() as any;

  return (
    <div className="py-4">
        <input
          aria-label="skin" 
          value={skinColor}
          onChange={setSkinColor}
        />
        <input
            aria-label="body" 
            value={bodyColor}
            onChange={setbodyColor}
        />
    </div>
  );
};