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
import { addUtmParams } from "../utils/url";

const logUserConfig = logDataLoading("user.config");

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

export const userConfig: UserConfig = {
  profile: {
    name: "Antonio Rodríguez Martínez",
    subtitle: "Father ✨ Builder 🧠 Systems Thinker",
    image: "profile-picture.avif",
  },
  theme: {
    active: "strategist",
    config: themeConfig.builder,
  },
  links: [
    {
      title: "The Strong Vault",
      url: addUtmParams(
        "https://blog.antoniwan.online",
        "links-forest",
        "link",
        "main-blog"
      ),
      description: "A blog— my core writing hub and personal thoughts",
      category: "book",
    },
    {
      title: "Builds.Software",
      url: addUtmParams(
        "https://builds.software",
        "links-forest",
        "link",
        "main-services"
      ),
      description: "Freelance, consulting, and development services",
      category: "work",
    },
    {
      title: "BlueSky",
      url: addUtmParams(
        "https://bsky.antoniwan.online",
        "links-forest",
        "link",
        "main-social"
      ),
      description: "Stream of consciousness and public identity",
      category: "lifestyle",
    },
    {
      title: "Strong Hands, Soft Heart",
      url: addUtmParams(
        "https://www.stronghandssoftheart.com",
        "links-forest",
        "link",
        "main-brand"
      ),
      description: "Core brand site and business presence",
      category: "art",
    },
  ],
  secondaryLinks: [
    {
      title: "Medium",
      url: addUtmParams(
        "https://medium.com/@wizards777",
        "links-forest",
        "link",
        "secondary-writing"
      ),
      description: "Wizard essays and deeper thoughts",
      category: "book",
    },
    {
      title: "GitHub (Personal)",
      url: addUtmParams(
        "https://github.com/antoniwan",
        "links-forest",
        "link",
        "secondary-code"
      ),
      description: "Open source projects and tools",
      category: "code",
    },
    {
      title: "GitHub (SHSH Org)",
      url: addUtmParams(
        "https://github.com/Strong-Hands-Soft-Heart",
        "links-forest",
        "link",
        "secondary-org"
      ),
      description: "Strong Hands, Soft Heart brand repositories",
      category: "code",
    },
    {
      title: "CodePen",
      url: addUtmParams(
        "https://codepen.io/antoniwan",
        "links-forest",
        "link",
        "secondary-demos"
      ),
      description: "Creative experiments and UI demos",
      category: "code",
    },
    {
      title: "Mia Luna E-Book",
      url: addUtmParams(
        "https://mia-the-sun-and-the-moon.antoniorodriguez.us",
        "links-forest",
        "link",
        "secondary-book"
      ),
      description: "The Sun and the Moon - Legacy project",
      category: "book",
    },
    {
      title: "YouTube: StrongWizards",
      url: addUtmParams(
        "https://www.youtube.com/@Antoniwan777",
        "links-forest",
        "link",
        "secondary-video"
      ),
      description: "Mythic, fun, and raw content",
      category: "video",
    },
    {
      title: "Goodreads",
      url: addUtmParams(
        "https://www.goodreads.com/antoniwan",
        "links-forest",
        "link",
        "secondary-reading"
      ),
      description: "Reading bookshelf and recommendations",
      category: "book",
    },
    {
      title: "Patreon",
      url: addUtmParams(
        "https://patreon.com/antoniwan",
        "links-forest",
        "link",
        "secondary-support"
      ),
      description: "Support the mission and back the builder",
      category: "lifestyle",
    },
  ],
  social: [
    {
      platform: "linkedin",
      url: addUtmParams(
        "https://www.linkedin.com/in/antoniwan",
        "links-forest",
        "link",
        "social-linkedin"
      ),
      icon: "linkedin",
    },
    {
      platform: "instagram",
      url: addUtmParams(
        "https://www.instagram.com/antoniwan777",
        "links-forest",
        "link",
        "social-instagram"
      ),
      icon: "instagram",
    },
    {
      platform: "facebook",
      url: addUtmParams(
        "https://www.facebook.com/antoniwan777",
        "links-forest",
        "link",
        "social-facebook"
      ),
      icon: "facebook",
    },
    {
      platform: "discord",
      url: addUtmParams(
        "https://discord.gg/y63NbbYK",
        "links-forest",
        "link",
        "social-discord"
      ),
      icon: "discord",
    },
    {
      platform: "email",
      url: addUtmParams(
        "mailto:antonio@builds.software",
        "links-forest",
        "link",
        "social-email"
      ),
      icon: "email",
    },
    {
      platform: "lastfm",
      url: addUtmParams(
        "https://www.last.fm/user/antoniwan",
        "links-forest",
        "link",
        "social-lastfm"
      ),
      icon: "lastfm",
    },
    {
      platform: "spotify",
      url: addUtmParams(
        "https://open.spotify.com/user/antoniwan",
        "links-forest",
        "link",
        "social-spotify"
      ),
      icon: "spotify",
    },
  ],
};

// Log that user config has been loaded
logUserConfig();
