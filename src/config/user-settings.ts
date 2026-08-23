/**
 * User Settings
 *
 * This file contains all user-centric settings for your LinkForest page.
 * Edit the values below to customize your profile, links, theme, and site configuration.
 */

/**
 * 🎨 Available Themes
 *
 * Shared calling-card system (white + zinc) with drama in motion, rails, wells, and type.
 *
 * Each theme now owns radius, icon wells, hover hints, atmosphere, and label voice
 * so the compact identity layout feels native in every archetype.
 *
 * Type pairings:
 *   IBM Plex Sans + JetBrains Mono  — builder, forge
 *   Space Grotesk                   — wolf
 *   Fraunces                        — mystic
 *   DM Sans                         — dragon, warrior
 *   Newsreader                      — artist, poet
 *   Manrope                         — healer, monk
 *   EB Garamond                     — alchemist
 *   Outfit                          — strategist
 *   Literata                        — steward
 *
 * Motion personalities: snap, stalk, drift, strike, flourish, lock,
 * breathe, transmute, align, rise
 *
 * ◇  "builder"    — amber · systems · snap / left rail
 * ○  "wolf"       — blue · instinct · stalk / slash
 * ✧  "mystic"     — indigo · depth · drift / glow
 * ▣  "dragon"     — orange · force · strike / frame
 * ◻  "artist"     — rose · expression · flourish / bottom
 * ▪  "warrior"    — bronze · precision · lock / left
 * ◌  "healer"     — teal · care · breathe / glow
 * ◈  "alchemist"  — violet · change · transmute / slash
 * ▢  "strategist" — sky · clarity · align / bottom
 * ◎  "steward"    — green · legacy · rise / frame
 * ¶  "poet"       — stone · language · drift / glow
 * ·  "monk"       — zinc · restraint · breathe / glow
 * ⌁  "forge"      — ember · making · snap / left
 *
 * Example:
 *   theme: { active: "warrior" }
 */

import type { ThemeName } from '../data/theme.types';
import type { Profile, Link, SocialLink, SecondaryLink } from '../data/types';

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
      /** Optional meta description override (for SEO; page can still show subtitle as tagline) */
      metaDescription?: string;
      /** Optional OpenGraph overrides (e.g. type=profile, siteName) */
      openGraph?: {
        type: string;
        siteName: string;
        title: string;
        description: string;
      };
      /** Optional profile meta (profile:first_name, profile:last_name, profile:username) */
      profile?: {
        firstName: string;
        lastName: string;
        username: string;
      };
      /** Optional full Person JSON-LD; when set, replaces generated structured data */
      personStructuredData?: Record<string, unknown>;
    };
  };
  links: (Omit<Link, 'url'> & { url: string })[];
  secondaryLinks: (Omit<SecondaryLink, 'url'> & { url: string })[];
  social: (Omit<SocialLink, 'url'> & { url: string })[];
}

export const userSettings: UserSettings = {
  profile: {
    name: 'Rowan Hollow',
    handle: 'rowanhollow',
    subtitle: 'Trail maps, trail notes, and the long way around.',
  },
  theme: {
    active: 'builder',
  },
  site: {
    baseUrl: 'https://example.com',
    siteName: 'LinksForest',
    locale: 'en_US',
    themeColor: '#ffffff',
    defaultImage: '/default-share.jpg',
    social: {
      twitter: '@rowanhollow',
      linkedin: 'rowanhollow',
      instagram: 'rowanhollow',
      facebook: 'rowanhollow',
    },
    seo: {
      defaultDescription:
        'Rowan Hollow is a fictional LinksForest demo. Fork the repo, edit src/config/user-settings.ts, and replace this page with yours.',
      defaultKeywords: [
        'LinksForest',
        'link in bio',
        'personal links',
        'Rowan Hollow',
        'demo',
      ],
      metaDescription:
        'A finished LinksForest demo page. Clone the repo, run pnpm install && pnpm dev, then edit src/config/user-settings.ts.',
      robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      language: 'en',
      contentType: 'website',
      imageDimensions: {
        width: 1200,
        height: 630,
      },
      openGraph: {
        type: 'profile',
        siteName: 'LinksForest',
        title: 'Rowan Hollow',
        description:
          'A fictional LinksForest demo. Edit user-settings.ts to replace this page with yours.',
      },
      profile: {
        firstName: 'Rowan',
        lastName: 'Hollow',
        username: 'rowanhollow',
      },
      personStructuredData: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Rowan Hollow',
        alternateName: ['rowanhollow'],
        description:
          'Fictional LinksForest demo character. Trail maps, trail notes, and the long way around.',
        url: 'https://example.com',
        jobTitle: 'Trail cartographer',
        knowsAbout: ['Trail mapping', 'Static sites', 'Link pages'],
      },
    },
  },
  links: [
    {
      title: 'Trail Notes',
      url: 'https://example.com/notes',
      description: 'Field notes from the ridge. Replace this with your writing.',
      category: 'writing',
      icon: 'notebook',
      featured: true,
    },
    {
      title: 'The Hollow Map',
      url: 'https://example.com/map',
      description: 'A placeholder project page. Point it at something you made.',
      category: 'writing',
      icon: 'storybook',
    },
    {
      title: 'Workshop',
      url: 'https://example.com/workshop',
      description: 'Hire, consult, or show what you are building.',
      category: 'work',
      icon: 'handshake',
    },
    {
      title: 'LinksForest',
      url: 'https://github.com/antoniwan/links-forest',
      description: 'The template this page is built from. Fork it and edit one file.',
      category: 'work',
      icon: 'code',
    },
    {
      title: 'Self-hosting guide',
      url: 'https://github.com/antoniwan/links-forest/blob/main/SELF-HOSTING.md',
      description: 'Clone, edit user-settings.ts, deploy to Vercel or Netlify.',
      category: 'elsewhere',
      icon: 'folder',
    },
    {
      title: 'Example destination',
      url: 'https://example.com',
      description: 'A 404-proof placeholder. Swap it for any URL you want.',
      category: 'elsewhere',
      icon: 'website',
    },
  ],
  secondaryLinks: [],
  social: [
    {
      platform: 'github',
      url: 'https://github.com/antoniwan/links-forest',
      icon: 'github',
      primary: true,
    },
    {
      platform: 'website',
      url: 'https://github.com/antoniwan/links-forest#readme',
      icon: 'website',
      primary: true,
    },
    {
      platform: 'email',
      url: 'mailto:rowan@example.com',
      icon: 'email',
      primary: true,
    },
    {
      platform: 'twitter',
      url: 'https://example.com/x',
      icon: 'twitter',
    },
  ],
};
