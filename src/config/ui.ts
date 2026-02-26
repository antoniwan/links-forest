/**
 * UI Configuration
 *
 * This file contains type definitions and utilities for UI components.
 */

/**
 * Available size options for UI components
 */
export type Size = 'sm' | 'md' | 'lg';

/**
 * Size configuration for UI components
 */
export const sizeClasses = {
  sm: 'w-16 h-16 text-lg',
  md: 'w-32 h-32 text-2xl',
  lg: 'w-48 h-48 text-4xl',
} as const;

/**
 * Type guard to check if a string is a valid Size
 */
export function isValidSize(size: string): size is Size {
  return size in sizeClasses;
}

/**
 * Component size configuration
 */
export interface SizeConfig {
  /** Width in pixels */
  width: number;
  /** Height in pixels */
  height: number;
  /** Font size class */
  fontSize: string;
}

/**
 * Size configuration map
 */
export const sizeConfig: Record<Size, SizeConfig> = {
  sm: {
    width: 64,
    height: 64,
    fontSize: 'text-lg',
  },
  md: {
    width: 128,
    height: 128,
    fontSize: 'text-2xl',
  },
  lg: {
    width: 192,
    height: 192,
    fontSize: 'text-4xl',
  },
} as const;

/**
 * Animation configuration
 */
export interface AnimationConfig {
  /** Initial animation state */
  initial: Record<string, unknown>;
  /** Animation state while hovering */
  whileHover: Record<string, unknown>;
  /** Animation state while tapping */
  whileTap: Record<string, unknown>;
  /** Animation transition configuration */
  transition: Record<string, unknown>;
}

/**
 * Default animation configuration
 */
export const defaultAnimation: AnimationConfig = {
  initial: { opacity: 0, y: 20 },
  whileHover: { scale: 1.05, rotate: 5 },
  whileTap: { scale: 0.95 },
  transition: {
    duration: 0.3,
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
};
