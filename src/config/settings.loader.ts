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
  links: Omit<Link, 'url'> & { url: string };
  secondaryLinks: Omit<SecondaryLink, 'url'> & { url: string };
  social: Omit<SocialLink, 'url'> & { url: string };
}

export interface UserConfig {
  /** Your name and subtitle */
  profile: Profile;

  /** Your active theme */
  theme: {
    /**
     * Available theme options:
     * - builder: 🏗️ Creation, systems, form (Stone and amber tones)
     * - wolf: 🐺 Instinct, loyalty, protection (Cool grays and blues)
     * - mystic: 🔮 Spirituality, vision, cosmic threads (Deep purples and indigos)
     * - dragon: 🐉 Power, force, will (Rich reds and oranges)
     * - artist: 🎨 Expression, creativity, truth (Pink and rose tones)
     * - warrior: ⚔️ Action, discipline, focus (Slate and gray tones)
     * - healer: 💫 Regeneration, soothing, connection (Emerald and teal tones)
     * - alchemist: 🧪 Transformation, elements, ritual (Violet and purple tones)
     * - strategist: 🧠 Mind, planning, clarity (Blue and cyan tones)
     * - steward: 🌱 Legacy, care, generational vision (Green and lime tones)
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
    links: processedLinks,
    secondaryLinks: processedSecondaryLinks,
    social: processedSocialLinks,
  };

  // Log that user config has been loaded
  logSettingsLoader();

  return userConfig;
}

// Export the loaded config for backward compatibility
export const userConfig = loadUserConfig();
