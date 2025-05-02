/**
 * Theme Types
 *
 * Centralized type definitions for the theming system.
 */

/**
 * Available theme names
 */
export type ThemeName =
  | "builder"
  | "wolf"
  | "mystic"
  | "dragon"
  | "artist"
  | "warrior"
  | "healer"
  | "alchemist"
  | "strategist"
  | "steward";

/**
 * Theme color configuration
 */
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  hover: string;
}

/**
 * Theme style configuration
 */
export interface ThemeStyles {
  button: string;
  card: string;
  link: string;
  border: string;
}

/**
 * Theme metadata
 */
export interface ThemeMeta {
  name: string;
  description: string;
  icon: string;
}

/**
 * Complete theme configuration
 */
export interface ThemeConfig {
  colors: ThemeColors;
  styles: ThemeStyles;
  meta: ThemeMeta;
}

/**
 * Theme context type for components
 */
export interface ThemeContext {
  active: ThemeName;
  config: ThemeConfig;
  setTheme: (theme: ThemeName) => void;
}
