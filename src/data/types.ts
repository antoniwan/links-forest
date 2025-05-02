import type { EmojiName } from "./emojis";

/**
 * Theme types and configuration
 */
export type Theme =
  | "wolf"
  | "fox"
  | "owl"
  | "raven"
  | "deer"
  | "bear"
  | "eagle"
  | "salmon"
  | "otter"
  | "lynx";

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
  icon: string;
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
