/**
 * Development Configuration
 *
 * This file contains development-specific configuration and utilities.
 */

import type { ThemeName } from "../data/theme.types";
import { dataLogger } from "../utils/logger";

/**
 * Development environment configuration
 */
export interface DevConfig {
  /** Whether development mode is enabled */
  isDev: boolean;
  /** Theme cycling configuration */
  themeCycling: {
    /** Whether theme cycling is enabled */
    enabled: boolean;
    /** Interval between theme changes in milliseconds */
    interval: number;
  };
  /** Logging configuration */
  logging: {
    /** Whether debug logging is enabled */
    enabled: boolean;
    /** Log namespaces to enable */
    namespaces: string[];
  };
}

/**
 * Check if we're in development mode
 */
const isDev = import.meta.env.DEV;

/**
 * Development configuration
 */
export const devConfig: DevConfig = {
  isDev,
  themeCycling: {
    enabled: isDev,
    interval: 5000, // 5 seconds
  },
  logging: {
    enabled: isDev,
    namespaces: [
      "links-forest:config",
      "links-forest:layout",
      "links-forest:page",
      "links-forest:component",
      "links-forest:data",
    ],
  },
};

// Log development mode status
dataLogger(`Development mode: ${isDev ? "enabled" : "disabled"}`);

/**
 * Type guard to check if theme cycling is enabled
 */
export function isThemeCyclingEnabled(): boolean {
  return devConfig.themeCycling.enabled;
}

/**
 * Get the theme cycling interval
 */
export function getThemeCyclingInterval(): number {
  return devConfig.themeCycling.interval;
}

/**
 * Enable or disable theme cycling
 */
export function setThemeCyclingEnabled(enabled: boolean): void {
  devConfig.themeCycling.enabled = enabled;
  dataLogger(`Theme cycling ${enabled ? "enabled" : "disabled"}`);
}

/**
 * Set the theme cycling interval
 */
export function setThemeCyclingInterval(interval: number): void {
  devConfig.themeCycling.interval = interval;
  dataLogger(`Theme cycling interval set to ${interval}ms`);
}

// Log the current dev config settings
dataLogger("Development configuration loaded:", {
  themeCycling: {
    enabled: devConfig.themeCycling.enabled,
    interval: devConfig.themeCycling.interval,
  },
});
