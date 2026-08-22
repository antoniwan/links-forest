/**
 * User Settings
 *
 * This file contains all user-centric settings for your LinkForest page.
 * Edit the values below to customize your profile, links, theme, and site configuration.
 */

/**
 * 🎨 Available Themes
 *
 * Shared system (white + zinc) with drama in motion, accent rails, and type.
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
    name: 'Antonio Rodríguez Martínez',
    subtitle: 'Builder. Father. Boricua 🇵🇷',
    image: 'profile-picture.avif',
  },
  theme: {
    active: 'warrior',
  },
  site: {
    baseUrl: 'https://antoniwan.online',
    siteName: 'LinkForest',
    locale: 'en_US',
    themeColor: '#ffffff',
    defaultImage: '/default-share.jpg',
    social: {
      twitter: '@antoniwan',
      linkedin: 'antoniwan',
      instagram: '_antoniwan',
      facebook: 'antoniwan',
    },
    seo: {
      defaultDescription:
        'Antonio Rodríguez Martínez (antoniwan) — Technical Program Manager at Stanley Black & Decker, full-stack developer, and founder of Strong Hands, Soft Heart LLC. Puerto Rico-born builder of digital systems, cultural storytelling projects, and human-centered teams based in Central Florida.',
      defaultKeywords: [
        'Antonio Rodríguez Martínez',
        'Systems Thinker',
        'Builder',
        'Father',
        'Software Development',
        'Consulting',
        'Digital Garden',
        'Link Hub',
        'Personal Brand',
        'Professional Profile',
      ],
      metaDescription:
        'Antonio Rodríguez Martínez (antoniwan) — Technical Program Manager at Stanley Black & Decker, full-stack developer, and founder of Strong Hands, Soft Heart LLC. Puerto Rico-born builder of digital systems, cultural storytelling projects, and human-centered teams based in Central Florida.',
      robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      language: 'en',
      contentType: 'website',
      imageDimensions: {
        width: 1200,
        height: 630,
      },
      /** OpenGraph overrides for personal profile page (og:type=profile, etc.) */
      openGraph: {
        type: 'profile',
        siteName: 'antoniwan',
        title: 'Antonio Rodríguez Martínez (antoniwan)',
        description:
          'Technical Program Manager at Stanley Black & Decker, full-stack developer, and founder of Strong Hands, Soft Heart LLC.',
      },
      /** Profile meta tags for og:type=profile (profile:first_name, etc.) */
      profile: {
        firstName: 'Antonio',
        lastName: 'Rodríguez Martínez',
        username: 'antoniwan',
      },
      /** Expanded Person schema for JSON-LD (replaces generated schema when set) */
      personStructuredData: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Antonio Rodríguez Martínez',
        alternateName: ['antoniwan', 'Antonio Rodriguez Martinez'],
        description:
          'Technical Program Manager, full-stack developer, and founder of Strong Hands, Soft Heart LLC. Builder of digital systems, cultural storytelling projects, and human-centered teams.',
        url: 'https://antoniwan.online',
        image: 'https://antoniwan.online/default-share.jpg',
        jobTitle: 'Technical Program Manager',
        worksFor: {
          '@type': 'Organization',
          name: 'Stanley Black & Decker',
          url: 'https://www.stanleyblackanddecker.com',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'University of Puerto Rico, Río Piedras',
          url: 'https://www.uprrp.edu',
        },
        knowsAbout: [
          'Technical Program Management',
          'Full-Stack Web Development',
          'React',
          'Node.js',
          'GraphQL',
          'NextJS',
          'Astro',
          'Design Systems',
          'Microservices Architecture',
          'Digital Transformation',
          'AI Integration',
          'Team Leadership',
          'Mentorship',
        ],
        knowsLanguage: ['en', 'es'],
        nationality: {
          '@type': 'Country',
          name: 'Puerto Rico',
        },
        sameAs: [
          'https://www.linkedin.com/in/antoniwan',
          'https://github.com/antoniwan',
          'https://medium.com/@wizards777',
          'https://codepen.io/antoniwan',
          'https://notes.antoniwan.online',
          'https://blog.antoniwan.online',
          'https://builds.software',
          'https://www.stronghandssoftheart.com',
          'https://consulting.stronghandssoftheart.com',
          'https://bsky.app/profile/antoniwan.online',
          'https://www.goodreads.com/antoniwan',
          'https://patreon.com/antoniwan',
          'https://www.instagram.com/_antoniwan',
          'https://www.facebook.com/antoniwan',
          'https://www.threads.com/@_antoniwan',
          'https://open.spotify.com/user/antoniwan',
          'https://www.last.fm/user/antoniwan',
          'https://www.antoniorodriguez.us',
        ],
        workExample: [
          {
            '@type': 'Book',
            name: 'The Bent One',
            url: 'https://the-bent-one-book.stronghandssoftheart.com',
            inLanguage: 'en',
          },
          {
            '@type': 'Book',
            name: 'Mia, the Sun, and the Moon',
            url: 'https://mia-the-sun-and-the-moon-web-book.stronghandssoftheart.com',
            inLanguage: 'en',
          },
        ],
      },
    },
  },
  links: [
    {
      title: 'The Bent One',
      url: 'https://the-bent-one-book.stronghandssoftheart.com',
      description: 'An interactive children\'s story from Strong Hands, Soft Heart',
      category: 'childrens-books',
    },
    {
      title: 'Mia, the Sun and the Moon',
      url: 'https://mia-the-sun-and-the-moon-web-book.stronghandssoftheart.com',
      description: 'A legacy children\'s story about love, light, and the rhythm of day and night',
      category: 'childrens-books',
    },
    {
      title: 'Notes (Blog)',
      url: 'https://notes.antoniwan.online/',
      description:
        'A working notebook in a season of becoming — choosing honesty over performance, precision over showmanship',
      category: 'writing',
    },
    {
      title: 'Medium',
      url: 'https://medium.com/@wizards777',
      description: 'Wizard essays and deeper thoughts',
      category: 'writing',
    },
    {
      title: 'Goodreads',
      url: 'https://www.goodreads.com/antoniwan',
      description: 'Reading bookshelf and recommendations',
      category: 'writing',
    },
    {
      title: 'My Prompt Library',
      url: 'https://mpl.antoniwan.online/',
      description:
        'Plain-text prompts in Markdown, stored in Git. Easy to read, copy, and adapt in your own tools. No lock-in.',
      category: 'writing',
    },
    {
      title: 'Strong Hands, Soft Heart Consulting',
      url: 'https://consulting.stronghandssoftheart.com/',
      description: 'AI & engineering consulting for founders, product leaders, and ICs',
      category: 'work',
    },
    {
      title: 'Builds.Software',
      url: 'https://builds.software',
      description: 'Freelance, consulting, and development services',
      category: 'work',
    },
    {
      title: 'Work Clock',
      url: 'https://work-clock.builds.software/',
      description:
        'Configure your work schedule including days, start time, end time, and display preferences',
      category: 'work',
    },
    {
      title: 'React Hooks Explorer',
      url: 'https://my-react-hooks.antoniwan.online/',
      description:
        'Personal workspace for React hooks, custom hooks, and patterns used for learning and POCs.',
      category: 'code',
    },
    {
      title: 'GitHub (Personal)',
      url: 'https://github.com/antoniwan',
      description: 'Open source projects and tools',
      category: 'code',
    },
    {
      title: 'GitHub (SHSH Org)',
      url: 'https://github.com/Strong-Hands-Soft-Heart',
      description: 'Strong Hands, Soft Heart brand repositories',
      category: 'code',
    },
    {
      title: 'CodePen',
      url: 'https://codepen.io/antoniwan',
      description: 'Creative experiments and UI demos',
      category: 'code',
    },
    {
      title: 'Strong Hands, Soft Heart',
      url: 'https://www.stronghandssoftheart.com',
      description: 'Core brand site and business presence',
      category: 'brand',
    },
    {
      title: 'BlueSky',
      url: 'https://bsky.app/profile/antoniwan.online',
      description: 'Stream of consciousness and public identity',
      category: 'connect',
    },
    {
      title: 'Patreon',
      url: 'https://patreon.com/antoniwan',
      description: 'Support the mission and back the builder',
      category: 'connect',
    },
  ],
  secondaryLinks: [],
  social: [
    {
      platform: 'twitter',
      url: 'https://x.com/antoniwan',
      icon: 'twitter',
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/antoniwan',
      icon: 'linkedin',
    },
    {
      platform: 'threads',
      url: 'https://www.threads.com/@_antoniwan',
      icon: 'threads',
    },
    {
      platform: 'instagram',
      url: 'https://www.instagram.com/_antoniwan',
      icon: 'instagram',
    },
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/antoniwan',
      icon: 'facebook',
    },
    {
      platform: 'email',
      url: 'mailto:antonio@builds.software',
      icon: 'email',
    },
    {
      platform: 'lastfm',
      url: 'https://www.last.fm/user/antoniwan',
      icon: 'lastfm',
    },
    {
      platform: 'spotify',
      url: 'https://open.spotify.com/user/antoniwan',
      icon: 'spotify',
    },
  ],
};
