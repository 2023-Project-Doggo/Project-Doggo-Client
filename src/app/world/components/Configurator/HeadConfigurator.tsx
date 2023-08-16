import { SwatchesColors, useCharacterContext } from "@/app/world/contexts/CharacterCustomizationContext"; 

export const HeadConfigurator = () => {
  const {
    hairColor,
    setHairColor,
    mouthColor,
    setMouthColor,
    eyesColor,
    setEyesColor,  
  } = useCharacterContext() as any;

  return (
    <div className="py-4">
        <input
          aria-label="hair" 
          value={hairColor}
          onChange={setHairColor}
        />
        <input
            aria-label="mouth" 
            value={mouthColor}
            onChange={setMouthColor}
        />
        <input
            aria-label="eyes" 
            value={eyesColor}
            onChange={setEyesColor}
        />
    </div>
  );
};