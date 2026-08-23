/**
 * Theme Types
 *
 * Centralized type definitions for the theming system.
 */

import type { TargetAndTransition, Transition } from 'framer-motion';

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
  | 'steward'
  | 'poet'
  | 'monk'
  | 'forge';

export const THEME_NAMES: ThemeName[] = [
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
  'poet',
  'monk',
  'forge',
];

export type ColorGradient = `from-${string} to-${string}`;
export type BackgroundColor = `bg-${string}`;
export type TextColor = `text-${string}`;
export type HoverState = `hover:from-${string} hover:to-${string}`;

export interface ThemeColors {
  primary: ColorGradient;
  secondary: ColorGradient;
  accent: ColorGradient;
  background: BackgroundColor;
  text: TextColor;
  hover: HoverState;
}

/** How the accent cue appears on link cards */
export type ThemeRail = 'left' | 'bottom' | 'glow' | 'frame' | 'slash';

export interface ThemeMotion {
  /** Framer hover on link cards */
  cardHover: TargetAndTransition;
  /** Framer tap on link cards */
  cardTap: TargetAndTransition;
  /** Entrance offset for staggered cards */
  cardEntrance: { x?: number; y?: number; scale?: number; filter?: string; rotate?: number; opacity?: number };
  /** Spring / tween used for card entrance */
  cardTransition: Transition;
  /** Stagger delay between cards (seconds) */
  stagger: number;
  /** Framer hover on social icons */
  socialHover: TargetAndTransition;
  /** Accent rail / reveal style on cards */
  rail: ThemeRail;
}

export interface ThemeStyles {
  button: string;
  card: string;
  link: string;
  border: string;
  /** Body / UI font utilities */
  font: string;
  /** Optional display font utilities for the hero name */
  display: string;
  atmosphere: string;
  ring: string;
  accentSoft: string;
  /** Card / control corner radius */
  radius: string;
  /** Icon well surface on link cards */
  well: string;
  /** Hover fill for ghost socials */
  wellHover: string;
  /** Tooltip chip surface */
  hint: string;
  /** Tooltip chip type */
  hintText: string;
  /** Extra classes for featured cards */
  featured: string;
  /** Handle and section-label tracking / voice */
  kicker: string;
}

export interface ThemeMeta {
  name: string;
  description: string;
  icon: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  styles: ThemeStyles;
  motion: ThemeMotion;
  meta: ThemeMeta;
}

export interface ThemeContext {
  active: ThemeName;
  config: ThemeConfig;
  setTheme: (theme: ThemeName) => void;
}

export function isValidThemeName(name: string): name is ThemeName {
  return THEME_NAMES.includes(name as ThemeName);
}
