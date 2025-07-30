/**
 * User Settings
 *
 * This file contains all user-centric settings for your LinkForest page.
 * Edit the values below to customize your profile, links, theme, and site configuration.
 */

/**
 * 🎨 Available Themes
 *
 * Choose from 10 unique archetypal themes that reflect different modes of being.
 * Each theme comes with its own typography, colors, and visual characteristics.
 *
 * To change your theme, update the `theme.active` property below with one of these values:
 *
 * 🏗️  "builder"    - The Builder: Creation, systems, form
 *                    Typography: Roboto Mono (monospace) with medium weight
 *                    Colors: Stone and amber tones
 *                    Energy: Technical, systematic, structured
 *
 * 🐺  "wolf"       - The Wolf: Instinct, loyalty, protection
 *                    Typography: Montserrat (sans-serif) with semibold weight
 *                    Colors: Slate and blue tones
 *                    Energy: Instinctual, loyal, protective
 *
 * 🔮  "mystic"     - The Mystic: Spirituality, vision, cosmic threads
 *                    Typography: Cormorant Garamond (serif) with italic styling
 *                    Colors: Deep purples and indigos
 *                    Energy: Spiritual, visionary, mystical
 *
 * 🐉  "dragon"     - The Dragon: Power, force, will
 *                    Typography: Cinzel (serif) with bold weight and wide tracking
 *                    Colors: Rich reds and oranges
 *                    Energy: Powerful, forceful, transformative
 *
 * 🎨  "artist"     - The Artist: Expression, creativity, truth
 *                    Typography: Playfair Display (serif) with semibold weight
 *                    Colors: Pink and rose tones
 *                    Energy: Creative, expressive, beautiful
 *
 * ⚔️  "warrior"    - The Warrior: Action, discipline, focus
 *                    Typography: Bebas Neue (sans-serif) with bold weight, wide tracking, uppercase
 *                    Colors: Gray and zinc tones
 *                    Energy: Action-oriented, disciplined, focused
 *
 * 💫  "healer"     - The Healer: Regeneration, soothing, connection
 *                    Typography: Quicksand (sans-serif) with medium weight and wide tracking
 *                    Colors: Emerald and teal tones
 *                    Energy: Soothing, nurturing, connecting
 *
 * 🧪  "alchemist"  - The Alchemist: Transformation, elements, ritual
 *                    Typography: EB Garamond (serif) with semibold weight and wide tracking
 *                    Colors: Violet and purple tones
 *                    Energy: Transformative, elemental, ritualistic
 *
 * 🧠  "strategist" - The Strategist: Mind, planning, clarity
 *                    Typography: Raleway (sans-serif) with medium weight and wide tracking
 *                    Colors: Blue and cyan tones
 *                    Energy: Strategic, clear, analytical
 *
 * 🌱  "steward"    - The Steward: Legacy, care, generational vision
 *                    Typography: Lora (serif) with medium weight and wide tracking
 *                    Colors: Green and lime tones
 *                    Energy: Nurturing, legacy-focused, caring
 *
 * Example usage:
 *   theme: {
 *     active: "strategist", // Change this to any theme name above
 *   }
 */

import type { ThemeName } from "../data/theme.types";
import type { Profile, Link, SocialLink, SecondaryLink } from "../data/types";

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
  links: (Omit<Link, "url"> & { url: string })[];
  secondaryLinks: (Omit<SecondaryLink, "url"> & { url: string })[];
  social: (Omit<SocialLink, "url"> & { url: string })[];
}

export const userSettings: UserSettings = {
  profile: {
    name: "Antonio Rodríguez Martínez",
    subtitle: "Father ✨ Builder 🧠 Systems Thinker",
    image: "profile-picture.avif",
  },
  theme: {
    active: "artist",
  },
  site: {
    baseUrl: "https://antoniwan.online",
    siteName: "LinkForest",
    locale: "en_US",
    themeColor: "#ffffff",
    defaultImage: "/default-share.jpg",
    social: {
      twitter: "@antoniwan",
      linkedin: "antoniwan",
      instagram: "_antoniwan",
      facebook: "antoniwan",
    },
    seo: {
      defaultDescription:
        "Personal digital garden and link hub by Antonio Rodríguez Martínez - Systems Thinker, Builder, and Father",
      defaultKeywords: [
        "Antonio Rodríguez Martínez",
        "Systems Thinker",
        "Builder",
        "Father",
        "Software Development",
        "Consulting",
        "Digital Garden",
        "Link Hub",
        "Personal Brand",
        "Professional Profile",
      ],
      robots:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      language: "en",
      contentType: "website",
      imageDimensions: {
        width: 1200,
        height: 630,
      },
    },
  },
  links: [
    {
      title: "Builds.Software",
      url: "https://builds.software",
      description: "Freelance, consulting, and development services",
      category: "work",
    },
    {
      title: "Curious Chaos Journal",
      url: "https://blog.antoniwan.online",
      description: "A blog— my core writing hub and personal thoughts",
      category: "book",
    },
    {
      title: "Strong Hands, Soft Heart",
      url: "https://www.stronghandssoftheart.com",
      description: "Core brand site and business presence",
      category: "art",
    },
    {
      title: "BlueSky",
      url: "https://bsky.app/profile/antoniwan.online",
      description: "Stream of consciousness and public identity",
      category: "lifestyle",
    },
  ],
  secondaryLinks: [
    {
      title: "Medium",
      url: "https://medium.com/@wizards777",
      description: "Wizard essays and deeper thoughts",
      category: "book",
    },
    {
      title: "GitHub (Personal)",
      url: "https://github.com/antoniwan",
      description: "Open source projects and tools",
      category: "code",
    },
    {
      title: "GitHub (SHSH Org)",
      url: "https://github.com/Strong-Hands-Soft-Heart",
      description: "Strong Hands, Soft Heart brand repositories",
      category: "code",
    },
    {
      title: "CodePen",
      url: "https://codepen.io/antoniwan",
      description: "Creative experiments and UI demos",
      category: "code",
    },
    {
      title: "Mia Luna E-Book",
      url: "https://mia-the-sun-and-the-moon.antoniorodriguez.us",
      description: "The Sun and the Moon - Legacy project",
      category: "book",
    },
    {
      title: "YouTube: StrongWizards",
      url: "https://www.youtube.com/@Antoniwan777",
      description: "Mythic, fun, and raw content",
      category: "video",
    },
    {
      title: "Goodreads",
      url: "https://www.goodreads.com/antoniwan",
      description: "Reading bookshelf and recommendations",
      category: "book",
    },
    {
      title: "Patreon",
      url: "https://patreon.com/antoniwan",
      description: "Support the mission and back the builder",
      category: "lifestyle",
    },
  ],
  social: [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/antoniwan",
      icon: "linkedin",
    },
    {
      platform: "threads",
      url: "https://www.threads.com/@_antoniwan",
      icon: "threads",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/_antoniwan",
      icon: "instagram",
    },
    {
      platform: "facebook",
      url: "https://www.facebook.com/antoniwan",
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
    {
      platform: "lastfm",
      url: "https://www.last.fm/user/antoniwan",
      icon: "lastfm",
    },
    {
      platform: "spotify",
      url: "https://open.spotify.com/user/antoniwan",
      icon: "spotify",
    },
  ],
};
