import type { EmojiName } from "./emojis";
import type { ThemeName, ThemeConfig as ThemeConfigType } from "./theme.types";

/**
 * Core Types
 *
 * This file contains the core type definitions for the LinkForest application.
 * These types define the structure of user data, links, and profiles.
 */

/**
 * Profile Types
 */

/**
 * Profile picture fallback options
 */
export type ProfilePictureFallback = "initials" | "avatar";

/**
 * User profile information
 */
export interface Profile {
  /** User's full name */
  name: string;
  /** Short subtitle or tagline; may contain simple HTML (e.g. <sup>, <em>). Plain text is used for SEO and signature. */
  subtitle: string;
  /** Optional profile picture filename */
  image?: string;
}

/**
 * Link Types
 */

/**
 * URL validation regex
 */
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

/**
 * Validates a URL string
 */
export function isValidUrl(url: string): boolean {
  return URL_REGEX.test(url);
}

/**
 * Main link structure
 */
export interface Link {
  /** Display title of the link */
  title: string;
  /** Destination URL */
  url: string;
  /** Short description of the link */
  description: string;
  /** Category or group this link belongs to */
  category?: string;
}

/**
 * Social media platform types
 */
export type SocialPlatform =
  | "twitter"
  | "github"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "youtube"
  | "whatsapp"
  | "telegram"
  | "discord"
  | "slack"
  | "reddit"
  | "tiktok"
  | "email"
  | "website"
  | "lastfm"
  | "spotify"
  | "medium"
  | "devto"
  | "stackoverflow"
  | "behance"
  | "dribbble"
  | "pinterest"
  | "twitch"
  | "soundcloud"
  | "apple"
  | "android"
  | "windows"
  | "linux"
  | "mastodon"
  | "threads"
  | "bluesky";

/**
 * Social media link structure
 */
export interface SocialLink {
  /** Social media platform */
  platform: SocialPlatform;
  /** Profile URL */
  url: string;
  /** Icon identifier from emojiMap */
  icon: EmojiName;
}

/**
 * Data structure types
 */

/**
 * Secondary link structure - now just an alias for Link
 */
export type SecondaryLink = Link;

/**
 * Complete links data structure
 */
export interface LinksData {
  /** Optional profile information */
  profile?: Profile;
  /** Array of main links */
  links: Link[];
  /** Array of secondary links */
  secondaryLinks?: SecondaryLink[];
  /** Array of social media links */
  social: SocialLink[];
}

/**
 * Type guard to check if a string is a valid SocialPlatform
 */
export function isValidSocialPlatform(
  platform: string
): platform is SocialPlatform {
  const validPlatforms: SocialPlatform[] = [
    "twitter",
    "github",
    "linkedin",
    "instagram",
    "facebook",
    "youtube",
    "whatsapp",
    "telegram",
    "discord",
    "slack",
    "reddit",
    "tiktok",
    "email",
    "website",
    "lastfm",
    "spotify",
    "medium",
    "devto",
    "stackoverflow",
    "behance",
    "dribbble",
    "pinterest",
    "twitch",
    "soundcloud",
    "apple",
    "android",
    "windows",
    "linux",
    "mastodon",
    "threads",
    "bluesky",
  ];
  return validPlatforms.includes(platform as SocialPlatform);
}

/**
 * Validates a Link object
 */
export function isValidLink(link: unknown): link is Link {
  if (!link || typeof link !== "object") return false;
  const l = link as Link;
  return (
    typeof l.title === "string" &&
    typeof l.url === "string" &&
    typeof l.description === "string" &&
    isValidUrl(l.url)
  );
}

/**
 * Validates a SocialLink object
 */
export function isValidSocialLink(link: unknown): link is SocialLink {
  if (!link || typeof link !== "object") return false;
  const l = link as SocialLink;
  return (
    typeof l.platform === "string" &&
    typeof l.url === "string" &&
    typeof l.icon === "string" &&
    isValidSocialPlatform(l.platform) &&
    isValidUrl(l.url)
  );
}

export interface ThemeConfig extends ThemeConfigType {}
