/**
 * User Configuration
 *
 * This is the main configuration file for your LinkForest page.
 * Edit the values below to customize your page.
 */

import type { ThemeName, ThemeConfig } from "../data/theme.types";
import type { Profile, Link, SocialLink } from "../data/types";
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

  /** Your links */
  links: Link[];

  /** Your social media links */
  social: SocialLink[];
}

export const userConfig: UserConfig = {
  profile: {
    name: "Antonio Rodriguez Martinez",
    subtitle: "Builder, Writer, Healer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Antonio",
  },
  theme: {
    active: "builder",
    config: themeConfig.builder,
  },
  links: [
    {
      title: "My Blog",
      url: "https://blog.example.com",
      description: "Thoughts on technology and healing",
    },
    {
      title: "Portfolio",
      url: "https://portfolio.example.com",
      description: "My latest projects and work",
    },
    {
      title: "Book a Session",
      url: "https://calendly.com/example",
      description: "Schedule a healing session",
    },
  ],
  social: [
    {
      platform: "twitter",
      url: "https://twitter.com/example",
      icon: "twitter",
    },
    {
      platform: "github",
      url: "https://github.com/example",
      icon: "github",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/example",
      icon: "linkedin",
    },
  ],
};

// Log that user config has been loaded
logUserConfig();
