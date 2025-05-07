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
    subtitle: "Father — Builder — Systems Thinker",
    image: "profile-picture.avif",
  },
  theme: {
    active: "builder",
    config: themeConfig.builder,
  },
  links: [
    {
      title: "Bluesky",
      url: "https://bsky.antoniwan.online",
      description:
        "My only active social media— I'm not using Meta products ATM.",
    },
    {
      title: "< > Builds.Software",
      url: "https://builds.software",
      description: "My latest projects and work",
    },
    {
      title: "Blog",
      url: "https://blog.antoniwan.online",
      description: "Read my latest articles and thoughts",
    },
    {
      title: "Strong Hands, Soft Heart LLC",
      url: "https://www.stronghandssoftheart.com",
      description: "Schedule a 1:1 meeting with me",
    },
    {
      title: "Strong Hands, Soft Heart LLC",
      url: "https://www.stronghandssoftheart.com",
      description: "Schedule a 1:1 meeting with me",
    },
  ],
  social: [
    {
      platform: "twitter",
      url: "https://twitter.com/antoniwan",
      icon: "twitter",
    },
    {
      platform: "github",
      url: "https://github.com/antoniwan",
      icon: "github",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/antoniwan",
      icon: "linkedin",
    },
    {
      platform: "email",
      url: "mailto:hello@antoniwan.com",
      icon: "email",
    },
    {
      platform: "website",
      url: "https://antoniwan.com",
      icon: "website",
    },
  ],
};

// Log that user config has been loaded
logUserConfig();
