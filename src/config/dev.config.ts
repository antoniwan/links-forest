/**
 * Development Configuration
 *
 * This file contains development-specific configuration and utilities.
 */

import { dataLogger } from "../utils/logger";

/**
 * Development environment configuration
 */
export interface DevConfig {
  /** Whether development mode is enabled */
  isDev: boolean;
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

// Log the current dev config settings
dataLogger("Development configuration loaded:", {
  logging: {
    enabled: devConfig.logging.enabled,
    namespaces: devConfig.logging.namespaces,
  },
});
