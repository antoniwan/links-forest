/**
 * Theme Types
 *
 * Centralized type definitions for the theming system.
 * These types define the structure and constraints for the theming system.
 */

/**
 * Available theme names
 * Each theme represents a different archetypal energy and visual style.
 */
export type ThemeName =
  | 'builder'
  | 'wolf'
  | 'mystic'
  | 'dragon'
  | 'artist'
  | 'warrior'
  | 'healer'
  | 'alchemist'
  | 'strategist'
  | 'steward';

/**
 * Tailwind color gradient configuration
 */
export type ColorGradient = `from-${string} to-${string}`;

/**
 * Tailwind background color configuration
 */
export type BackgroundColor = `bg-${string}`;

/**
 * Tailwind text color configuration
 */
export type TextColor = `text-${string}`;

/**
 * Tailwind hover state configuration
 */
export type HoverState = `hover:from-${string} hover:to-${string}`;

/**
 * Theme color configuration
 * Defines the color scheme for each theme using Tailwind classes
 */
export interface ThemeColors {
  /** Primary gradient for main elements */
  primary: ColorGradient;
  /** Secondary gradient for supporting elements */
  secondary: ColorGradient;
  /** Accent gradient for highlights and interactive elements */
  accent: ColorGradient;
  /** Background color for the page */
  background: BackgroundColor;
  /** Text color for content */
  text: TextColor;
  /** Hover state for interactive elements */
  hover: HoverState;
}

/**
 * Theme style configuration
 * Defines the visual styles for UI components
 */
export interface ThemeStyles {
  /** Button styles including hover states */
  button: string;
  /** Card styles for content containers */
  card: string;
  /** Link styles for text links */
  link: string;
  /** Border styles for containers */
  border: string;
  /** Font family for the theme */
  font: string;
}

/**
 * Theme metadata
 * Contains descriptive information about the theme
 */
export interface ThemeMeta {
  /** Display name of the theme */
  name: string;
  /** Short description of the theme's energy */
  description: string;
  /** Emoji icon representing the theme */
  icon: string;
}

/**
 * Complete theme configuration
 * Combines all theme aspects into a single configuration object
 */
export interface ThemeConfig {
  /** Color scheme configuration */
  colors: ThemeColors;
  /** Component style configuration */
  styles: ThemeStyles;
  /** Theme metadata */
  meta: ThemeMeta;
}

/**
 * Theme context type for components
 * Used by the theme provider to manage theme state
 */
export interface ThemeContext {
  /** Currently active theme */
  active: ThemeName;
  /** Configuration for the active theme */
  config: ThemeConfig;
  /** Function to change the active theme */
  setTheme: (theme: ThemeName) => void;
}

/**
 * Type guard to check if a string is a valid ThemeName
 */
export function isValidThemeName(name: string): name is ThemeName {
  const validThemes: ThemeName[] = [
    'builder',
    'wolf',
    'mystic',
    'dragon',
    'artist',
    'warrior',
    'healer',
    'alchemist',
    'strategist',
    'steward',
  ];
  return validThemes.includes(name as ThemeName);
}
