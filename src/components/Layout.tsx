import { useEffect } from "react";
import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";
import { useThemeStore } from "../store/ThemeStore";
import { SolarSystemAnimation } from "./shared/SolarSystemAnimation";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />
      {theme === "dark" && <SolarSystemAnimation />}
      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};
