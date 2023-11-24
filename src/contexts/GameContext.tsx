"use client";
import { createContext, useContext, useMemo, useState } from "react";
interface GameContextValue {
  cake: boolean;
  setCake: (value: boolean) => void;
  github: boolean;
  setGithub: (value: boolean) => void;
  hongik: boolean;
  setHongik: (value: boolean) => void;
}

const GameContext = createContext({});

const GameContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cake, setCake] = useState<boolean>(false);
  const [github, setGithub] = useState<boolean>(false);
  const [hongik, setHongik] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      cake,
      setCake,
      github,
      setGithub,
      hongik,
      setHongik,
    }),
    [cake, setCake, github, setGithub, hongik, setHongik]
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

const useGameContext = () => {
  const ctx = useContext(GameContext);
  if (!ctx)
    throw new Error(
      "Cannot find GameContext. It should be wrapped within GameProvider."
    );
  return ctx;
};

export { useGameContext, GameContextProvider };
