import type { EmojiName } from "./emojis";

/**
 * Theme types and configuration
 */
export type Theme =
  | "wolf" // Cool grays and blues
  | "fox" // Warm oranges and browns
  | "owl" // Deep purples and dark blues
  | "raven" // Dark blacks and grays
  | "deer" // Earthy browns and greens
  | "bear" // Rich browns and golds
  | "eagle" // Majestic golds and browns
  | "salmon" // Vibrant pinks and oranges
  | "otter" // Playful blues and teals
  | "lynx"; // Mysterious grays and silvers

/**
 * Profile types
 */
export type ProfilePictureFallback = "initials" | "avatar";

export interface Profile {
  name: string;
  subtitle: string;
  image?: string;
}

/**
 * Link types
 */
export interface Link {
  title: string;
  url: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: EmojiName;
}

/**
 * Data structure types
 */
export interface LinksData {
  profile?: Profile;
  links: Link[];
  social: SocialLink[];
}

export interface ThemeConfig {
  bg: string;
  text: string;
  accent: string;
}
