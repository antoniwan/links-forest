/** @jsxImportSource react */
import { useEffect, useState } from "react";
import type { ThemeName } from "../data/theme.types";
import { dataLogger } from "../utils/logger";

interface AuraLayerProps {
  theme: ThemeName;
}

export function AuraLayers({ theme }: AuraLayerProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(theme);

  useEffect(() => {
    const handleThemeChange = (event: CustomEvent<{ theme: ThemeName }>) => {
      const newTheme = event.detail.theme;
      setCurrentTheme(newTheme);
      dataLogger(`Aura layers updating for theme: ${newTheme}`);
    };

    window.addEventListener("theme-change", handleThemeChange as EventListener);

    return () => {
      window.removeEventListener(
        "theme-change",
        handleThemeChange as EventListener
      );
    };
  }, []);

  // Only show aura layers for specific themes
  if (!["mystic", "alchemist"].includes(currentTheme)) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Base aura layer */}
      <div
        className={`absolute w-[500px] h-[500px] rounded-full blur-xl opacity-30 ${
          currentTheme === "mystic"
            ? "bg-indigo-500 animate-pulse"
            : "bg-purple-500 animate-pulse"
        }`}
        style={{
          top: "20%",
          left: "20%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Secondary aura layer */}
      <div
        className={`absolute w-[300px] h-[300px] rounded-full blur-xl opacity-20 ${
          currentTheme === "mystic" ? "bg-purple-400" : "bg-violet-400"
        }`}
        style={{
          top: "80%",
          right: "20%",
          transform: "translate(50%, -50%)",
        }}
      />

      {/* Accent aura layer */}
      <div
        className={`absolute w-[200px] h-[200px] rounded-full blur-xl opacity-15 ${
          currentTheme === "mystic" ? "bg-blue-400" : "bg-indigo-400"
        }`}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
