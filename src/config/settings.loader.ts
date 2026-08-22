/**
 * Settings Loader
 *
 * Loads user-centric settings from the JSON file and applies necessary transformations.
 */

import type { ThemeName, ThemeConfig } from '../data/theme.types';
import type { Profile, Link, SocialLink, SecondaryLink } from '../data/types';
import { logDataLoading } from '../utils/logger';
import { themeConfig } from './theme.config';
import { addUtmParams } from '../utils/url';

const logSettingsLoader = logDataLoading('settings.loader');

// Import the user settings
import { userSettings } from './user-settings';

export interface UserSettings {
  profile: Profile;
  theme: {
    active: ThemeName;
  };
  site: {
    baseUrl: string;
    siteName: string;
    locale: string;
    themeColor: string;
    defaultImage: string;
    social: {
      twitter: string;
      linkedin: string;
      instagram: string;
      facebook: string;
    };
    seo: {
      defaultDescription: string;
      defaultKeywords: string[];
      robots: string;
      language: string;
      contentType: string;
      imageDimensions: {
        width: number;
        height: number;
      };
    };
  };
  links: (Omit<Link, 'url'> & { url: string })[];
  secondaryLinks: (Omit<SecondaryLink, 'url'> & { url: string })[];
  social: (Omit<SocialLink, 'url'> & { url: string })[];
}

export interface UserConfig {
  /** Your name and subtitle */
  profile: Profile;

  /** Your active theme */
  theme: {
    /**
     * Themes share a white/zinc base; drama is accent + motion + type.
     * See user-settings.ts header for the full list (13 themes).
     */
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

/**
 * Load and process user settings from JSON
 */
export function loadUserConfig(): UserConfig {
  const settings = userSettings as UserSettings;

  // Apply UTM parameters to all links
  const processedLinks: Link[] = settings.links.map((link, index) => ({
    ...link,
    url: addUtmParams(link.url, 'links-forest', 'link', `main-${link.category || `link-${index}`}`),
  }));

  const processedSecondaryLinks: SecondaryLink[] = settings.secondaryLinks.map((link, index) => ({
    ...link,
    url: addUtmParams(
      link.url,
      'links-forest',
      'link',
      `secondary-${link.category || `link-${index}`}`,
    ),
  }));

  const allLinks = [...processedLinks, ...processedSecondaryLinks];

  const processedSocialLinks: SocialLink[] = settings.social.map((link) => ({
    ...link,
    url: addUtmParams(link.url, 'links-forest', 'link', `social-${link.platform}`),
  }));

  const userConfig: UserConfig = {
    profile: settings.profile,
    theme: {
      active: settings.theme.active,
      config: themeConfig[settings.theme.active],
    },
    links: allLinks,
    secondaryLinks: processedSecondaryLinks,
    social: processedSocialLinks,
  };

  // Log that user config has been loaded
  logSettingsLoader();

  return userConfig;
}

// Export the loaded config for backward compatibility
export const userConfig = loadUserConfig();
