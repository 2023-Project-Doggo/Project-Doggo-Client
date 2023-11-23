"use client";
import { createContext, useContext, useMemo, useState } from "react";
interface CustomizingContextValue {
  userName: string;
  setUserName: (value: string) => void;
  cameraMode: string;
  setCameraMode: (cameraMode: string) => void;
  earColor: string;
  setEarColor: (earColor: string) => void;
  eyesColor: string;
  setEyesColor: (eyesColor: string) => void;
  noseColor: string;
  setNoseColor: (eyesColor: string) => void;
  bodyColor: string;
  setbodyColor: (bodyColor: string) => void;
  bellyColor: string;
  setBellyColor: (bodyBelly: string) => void;
  legsColor: string;
  setLegsColor: (legsColor: string) => void;
  toeColor: string;
  setToeColor: (toeColor: string) => void;
  tailColor: string;
  setTailColor: (tailColor: string) => void;
  morphTargetDictionary: Object;
  setMorphTargetDictionary: (morphTargetDictionary: Object) => void;
  morphTargetInfluences: [];
  setMorphTargetInfluences: (morphTargetInfluences: []) => void;
  takeScreenshot: boolean;
  setTakeScreenshot: (takeScreenshot: boolean) => void;
}

const CharacterCustomizationContext = createContext({});

export const CameraModes = {
  FREE: "FREE",
  FACE: "FACE",
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

const CharacterCustomizationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cameraMode, setCameraMode] = useState(CameraModes.FREE);
  const [takeScreenshot, setTakeScreenshot] = useState<boolean>(false);
  const [userName, setUserName] = useState("홍대컴공이");
  const [earColor, setEarColor] = useState("#b87348");
  const [eyesColor, setEyesColor] = useState("#b87348");
  const [noseColor, setNoseColor] = useState("#b87348");
  const [skinColor, setSkinColor] = useState("#de9466");
  const [bellyColor, setBellyColor] = useState("#b87348");
  const [legsColor, setLegsColor] = useState("#de9466");
  const [toeColor, setToeColor] = useState("#b87348");
  const [tailColor, setTailColor] = useState("#de9466");
  const [morphTargetDictionary, setMorphTargetDictionary] = useState([]);
  const [morphTargetInfluences, setMorphTargetInfluences] = useState([]);

  const contextValue = useMemo(
    () => ({
      cameraMode,
      setCameraMode,
      takeScreenshot,
      setTakeScreenshot,
      userName,
      setUserName,
      earColor,
      setEarColor,
      eyesColor,
      setEyesColor,
      noseColor,
      setNoseColor,
      skinColor,
      setSkinColor,
      bellyColor,
      setBellyColor,
      legsColor,
      setLegsColor,
      toeColor,
      setToeColor,
      tailColor,
      setTailColor,
      morphTargetDictionary,
      setMorphTargetDictionary,
      morphTargetInfluences,
      setMorphTargetInfluences,
    }),
    [
      cameraMode,
      setCameraMode,
      userName,
      setUserName,
      earColor,
      setEarColor,
      eyesColor,
      setEyesColor,
      noseColor,
      setNoseColor,
      skinColor,
      setSkinColor,
      bellyColor,
      setBellyColor,
      legsColor,
      setLegsColor,
      toeColor,
      setToeColor,
      tailColor,
      setTailColor,
      morphTargetDictionary,
      setMorphTargetDictionary,
      morphTargetInfluences,
      setMorphTargetInfluences,
    ]
  );

  return (
    <CharacterCustomizationContext.Provider value={contextValue}>
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

const useCharacterContext = () => {
  const ctx = useContext(CharacterCustomizationContext);
  if (!ctx)
    throw new Error(
      "Cannot find CharacterContext. It should be wrapped within CharacterCustomizationProvider."
    );
  return ctx;
};

export { useCharacterContext, CharacterCustomizationProvider };
