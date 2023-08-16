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
        className="border border-[#EFF6FF] bg-[#F4F9FF] p-2"
          aria-label="hair" 
          value={hairColor}
          onChange={setHairColor}  
          placeholder={hairColor}
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