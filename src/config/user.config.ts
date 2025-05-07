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
    subtitle: "Father — Builder — Systems Thinker",
    image: "profile-picture.avif",
  },
  theme: {
    active: "wolf",
    config: themeConfig.builder,
  },
  links: [
    {
      title: "BlueSky",
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
  ],
  secondaryLinks: [
    {
      title: "GitHub Profile",
      url: "https://github.com/antoniwan",
      description: "Check out my open source contributions",
      category: "Development",
    },
    {
      title: "LinkedIn Profile",
      url: "https://linkedin.com/in/antoniwan",
      description: "Connect with me professionally",
      category: "Professional",
    },
    {
      title: "Twitter Archive",
      url: "https://twitter.com/antoniwan",
      description: "My old tweets and thoughts",
      category: "Social",
    },
    {
      title: "Personal Blog",
      url: "https://blog.antoniwan.online/personal",
      description: "More personal thoughts and experiences",
      category: "Writing",
    },
    {
      title: "Reading List",
      url: "https://blog.antoniwan.online/reading",
      description: "Books and articles I recommend",
      category: "Resources",
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
