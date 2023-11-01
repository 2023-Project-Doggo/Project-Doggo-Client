import { CharacterCustomizationProvider } from "@/app/world/contexts/CharacterCustomizationContext";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
        <CharacterCustomizationProvider> 
            <CharacterAnimationsProvider>
                {children}
            </CharacterAnimationsProvider>
        </CharacterCustomizationProvider>      
  );
}