import Interface from "./components/Interface";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Interface />
      {children}
    </>
  );
}
