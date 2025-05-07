/**
 * User Configuration
 *
 * This is the main configuration file for your LinkForest page.
 * Edit the values below to customize your page.
 */

import type { ThemeName, ThemeConfig } from "../data/theme.types";
import type { Profile, Link, SocialLink, SecondaryLink } from "../data/types";
import { logDataLoading } from "../utils/logger";
import { themeConfig } from "./theme.config";

const logUserConfig = logDataLoading("user.config");

export interface UserConfig {
  /** Your name and subtitle */
  profile: Profile;

  /** Your active theme */
  theme: {
    /** Choose from: builder, wolf, mystic, dragon, artist, warrior, healer, alchemist, strategist, steward */
    active: ThemeName;
    /** Theme configuration */
    config: ThemeConfig;
  };

  /** Your main links */
  links: Link[];

  /** Your secondary links */
  secondaryLinks: SecondaryLink[];

  /** Your social media links */
  social: SocialLink[];
}

export const userConfig: UserConfig = {
  profile: {
    name: "Antonio Rodríguez Martínez",
    subtitle: "Father ✨ Builder 🧠 Systems Thinker",
    image: "profile-picture.avif",
  },
  theme: {
    active: "wolf",
    config: themeConfig.builder,
  },
  links: [
    {
      title: "The Strong Vault",
      url: "https://blog.antoniwan.online",
      description: "A blog— my core writing hub and personal thoughts",
      category: "Writing",
    },
    {
      title: "Builds.Software",
      url: "https://builds.software",
      description: "Freelance, consulting, and development services",
      category: "Business",
    },
    {
      title: "BlueSky",
      url: "https://bsky.antoniwan.online",
      description: "Stream of consciousness and public identity",
      category: "Social",
    },
    {
      title: "Strong Hands, Soft Heart",
      url: "https://www.stronghandssoftheart.com",
      description: "Core brand site and business presence",
      category: "Brand",
    },
  ],
  secondaryLinks: [
    {
      title: "Medium",
      url: "https://medium.com/@wizards777",
      description: "Wizard essays and deeper thoughts",
      category: "Legacy Writing",
    },
    {
      title: "GitHub (Personal)",
      url: "https://github.com/antoniwan",
      description: "Open source projects and tools",
      category: "Development",
    },
    {
      title: "GitHub (SHSH Org)",
      url: "https://github.com/Strong-Hands-Soft-Heart",
      description: "Strong Hands, Soft Heart brand repositories",
      category: "Development",
    },
    {
      title: "CodePen",
      url: "https://codepen.io/antoniwan",
      description: "Creative experiments and UI demos",
      category: "Development",
    },
    {
      title: "Mia Luna E-Book",
      url: "https://mia-the-sun-and-the-moon.antoniorodriguez.us",
      description: "The Sun and the Moon - Legacy project",
      category: "Legacy",
    },
    {
      title: "YouTube: StrongWizards",
      url: "https://www.youtube.com/@Antoniwan777",
      description: "Mythic, fun, and raw content",
      category: "Media",
    },
    {
      title: "Goodreads",
      url: "https://www.goodreads.com/antoniwan",
      description: "Reading bookshelf and recommendations",
      category: "Learning",
    },
    {
      title: "Patreon",
      url: "https://patreon.com/antoniwan",
      description: "Support the mission and back the builder",
      category: "Support",
    },
  ],
  social: [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/antoniwan",
      icon: "linkedin",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/antoniwan777",
      icon: "instagram",
    },
    {
      platform: "facebook",
      url: "https://www.facebook.com/antoniwan777",
      icon: "facebook",
    },
    {
      platform: "discord",
      url: "https://discord.gg/y63NbbYK",
      icon: "discord",
    },
    {
      platform: "email",
      url: "mailto:antonio@builds.software",
      icon: "email",
    },
  ],
};

// Log that user config has been loaded
logUserConfig();
