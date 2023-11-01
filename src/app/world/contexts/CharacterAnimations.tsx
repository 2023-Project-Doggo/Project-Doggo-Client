'use client'
import { createContext, useContext, useMemo, useState } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = ({ children }: { children: React.ReactNode }) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState([]);


 const contextValue = useMemo(() => ({         
    animationIndex,
    setAnimationIndex,
    animations,
    setAnimations
}), 
  [  
    animationIndex,
    setAnimationIndex,
    animations,
    setAnimations
  ]);

  return (
    <CharacterAnimationsContext.Provider value={contextValue}>
      {children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
    const ctx = useContext(CharacterAnimationsContext);
    if (!ctx) throw new Error('Cannot find CharacterAnimationsContext. It should be wrapped within CharacterAnimationsProvider.');
    return ctx;
};