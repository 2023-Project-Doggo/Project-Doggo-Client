'use client'
import { createContext, useContext, useMemo, useState } from "react";

interface CustomizingContextValue {
  cameraMode : string;
  setCameraMode : (cameraMode: string) => void;
  headColor : string;
  setHeadColor : (hairColor: string) => void;
  mouthColor : string;
  setMouthColor : (mouthColor: string) => void;
  eyesColor : string;
  setEyesColor : (eyesColor: string) => void;
  skinColor : string; 
  setSkinColor : (skinColor: string) => void;
  bodyColor : string;
  setbodyColor : (bodyColor: string) => void;
  legsColor : string;
  setLegsColor : (legsColor: string) => void;
  toeColor :  string;
  setToeColor : (toeColor: string) => void;
  morphTargetDictionary : Object;
  setMorphTargetDictionary : (morphTargetDictionary: Object) => void;
  morphTargetInfluences : [];
  setMorphTargetInfluences : (morphTargetInfluences : []) => void; 
}

const CharacterCustomizationContext = createContext({});

export const CameraModes = {
  FREE: "FREE",
  HEAD: "HEAD",
  BODY: "BODY", 
};

export const SwatchesColors = [
  "#25262b",
  "#868e96",
  "#fa5252",
  "#e64980",
  "#be4bdb",
  "#7950f2",
  "#4c6ef5",
  "#228be6",
  "#15aabf",
  "#12b886",
  "#40c057",
  "#82c91e",
  "#fab005",
  "#fd7e14",
];

const CharacterCustomizationProvider = ({ children }: { children: React.ReactNode }) => { 
  const [cameraMode, setCameraMode] = useState(CameraModes.FREE);
  const [headColor, setHeadColor] = useState();
  const [eyesColor, setEyesColor] = useState();
  const [mouthColor, setMouthColor] = useState(); 
  const [skinColor, setSkinColor] = useState();
  const [bodyColor, setbodyColor] = useState();
  const [legsColor, setLegsColor] = useState();
  const [toeColor, setToeColor] = useState();  
  const [morphTargetDictionary, setMorphTargetDictionary] = useState([]);
  const [morphTargetInfluences, setMorphTargetInfluences] = useState([]);

 const contextValue = useMemo(() => ({         
  cameraMode,
  setCameraMode,
  headColor,
  setHeadColor,
  mouthColor,
  setMouthColor,
  eyesColor,
  setEyesColor, 
  skinColor,
  setSkinColor,
  bodyColor,
  setbodyColor,
  legsColor,
  setLegsColor,
  toeColor,
  setToeColor,  
  morphTargetDictionary,
  setMorphTargetDictionary,
  morphTargetInfluences,
  setMorphTargetInfluences}), 
  [ 
    cameraMode,
    setCameraMode,
    headColor,
    setHeadColor,
    mouthColor,
    setMouthColor,
    eyesColor,
    setEyesColor, 
    skinColor,
    setSkinColor,
    bodyColor,
    setbodyColor,
    legsColor,
    setLegsColor,
    toeColor,
    setToeColor,  
    morphTargetDictionary,
    setMorphTargetDictionary,
    morphTargetInfluences,
    setMorphTargetInfluences,
  ]);

  return (
    <CharacterCustomizationContext.Provider value={contextValue} >
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

const useCharacterContext = () => {
  const ctx = useContext(CharacterCustomizationContext);
  if (!ctx) throw new Error('Cannot find CharacterContext. It should be wrapped within CharacterCustomizationProvider.');
  return ctx;
};

export { useCharacterContext, CharacterCustomizationProvider }