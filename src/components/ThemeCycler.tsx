import { useEffect, useState } from "react";
import { devConfig } from "../config/dev.config";
import { userConfig } from "../config/user.config";
import type { ThemeName } from "../data/theme.types";
import { dataLogger } from "../utils/logger";

// Custom event for theme changes
const THEME_CHANGE_EVENT = "theme-change";

export function ThemeCycler() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const themes: ThemeName[] = [
    "builder",
    "wolf",
    "mystic",
    "dragon",
    "artist",
    "warrior",
    "healer",
    "alchemist",
    "strategist",
    "steward",
  ];

  useEffect(() => {
    dataLogger("ThemeCycler component mounted");

    if (!devConfig.themeCycling.enabled) {
      dataLogger("Theme cycling is disabled, exiting");
      return;
    }

    dataLogger(
      "Starting theme cycling with interval:",
      devConfig.themeCycling.interval
    );
    dataLogger("Available themes:", themes);

    const changeTheme = () => {
      const nextIndex = (currentThemeIndex + 1) % themes.length;
      const nextTheme = themes[nextIndex];
      setCurrentThemeIndex(nextIndex);

      // Dispatch a custom event with the new theme
      const event = new CustomEvent(THEME_CHANGE_EVENT, {
        detail: { theme: nextTheme },
      });
      window.dispatchEvent(event);

      dataLogger(
        `Theme changed from ${themes[currentThemeIndex]} to ${nextTheme}`
      );
    };

    const interval = setInterval(changeTheme, devConfig.themeCycling.interval);

    return () => {
      dataLogger("ThemeCycler component unmounting, clearing interval");
      clearInterval(interval);
    };
  }, [currentThemeIndex]);

  // This component doesn't render anything visible
  return null;
}
