import { createContext, useContext, useMemo, useState } from "react";

const CharacterAnimationContext = createContext({});

const CharacterAnimationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState([]);
  const contextValue = useMemo(
    () => ({
      animationIndex,
      setAnimationIndex,
      animations,
      setAnimations,
    }),
    [animationIndex, setAnimationIndex, animations, setAnimations]
  );
  return (
    <CharacterAnimationContext.Provider value={contextValue}>
      {children}
    </CharacterAnimationContext.Provider>
  );
};

const useCharacterAnimationContext = () => {
  const ctx = useContext(CharacterAnimationContext);
  if (!ctx)
    throw new Error(
      "Cannot find CharacterContext. It should be wrapped within CharacterAnimationProvider."
    );
  return ctx;
};

export { useCharacterAnimationContext, CharacterAnimationProvider };
