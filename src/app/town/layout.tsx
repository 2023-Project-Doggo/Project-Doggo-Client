import { GameContextProvider } from "@/contexts/GameContext";
import Interface from "./components/Interface";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GameContextProvider>
      <Interface />
      {children}
    </GameContextProvider>
  );
}
