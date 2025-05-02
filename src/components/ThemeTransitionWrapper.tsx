/** @jsxImportSource react */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ThemeName } from "../data/theme.types";
import { dataLogger } from "../utils/logger";

interface ThemeTransitionWrapperProps {
  children: React.ReactNode;
}

export function ThemeTransitionWrapper({
  children,
}: ThemeTransitionWrapperProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("builder");

  useEffect(() => {
    const handleThemeChange = (event: CustomEvent<{ theme: ThemeName }>) => {
      const newTheme = event.detail.theme;
      setCurrentTheme(newTheme);
      dataLogger(`Theme transition starting to: ${newTheme}`);
    };

    window.addEventListener("theme-change", handleThemeChange as EventListener);

    return () => {
      window.removeEventListener(
        "theme-change",
        handleThemeChange as EventListener
      );
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentTheme}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
