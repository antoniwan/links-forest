import type { Theme } from "../data/types";
import { dataLogger } from "../utils/logger";

// Check if we're in development mode
const isDev = import.meta.env.DEV;
dataLogger(`Development mode: ${isDev ? "enabled" : "disabled"}`);

export interface DevConfig {
  /** Whether theme cycling is enabled */
  themeCycling: {
    enabled: boolean;
    /** Interval in milliseconds between theme changes */
    interval: number;
  };
}

export const devConfig: DevConfig = {
  themeCycling: {
    enabled: isDev,
    interval: 30000, // 30 seconds
  },
};

// Log the current dev config settings
dataLogger("Development configuration loaded:", {
  themeCycling: {
    enabled: devConfig.themeCycling.enabled,
    interval: devConfig.themeCycling.interval,
  },
});
