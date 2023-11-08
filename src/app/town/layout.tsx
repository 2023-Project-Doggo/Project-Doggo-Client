import { CharacterCustomizationProvider } from "@/app/world/contexts/CharacterCustomizationContext";;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
        <CharacterCustomizationProvider> 
                {children}
        </CharacterCustomizationProvider>      
  );
}