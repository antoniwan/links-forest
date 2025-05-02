/**
 * Links Configuration
 *
 * This file contains your main links and social media connections.
 *
 * To add or modify links:
 * 1. Go to src/config/user.config.ts
 * 2. Find the links and social arrays
 * 3. Add or modify entries following the examples below
 *
 * For social links, use the platform names from the SocialPlatform type:
 * - twitter
 * - github
 * - linkedin
 * - instagram
 * - youtube
 * - facebook
 * - tiktok
 * - discord
 * - twitch
 * - reddit
 * - pinterest
 * - snapchat
 * - telegram
 * - whatsapp
 * - medium
 * - devto
 * - hashnode
 * - producthunt
 * - behance
 * - dribbble
 * - figma
 * - notion
 * - substack
 * - patreon
 * - buymeacoffee
 * - kofi
 */

import type { LinksData } from "./types";
import { logDataLoading } from "../utils/logger";

const logLinks = logDataLoading("links");

export const linksData: LinksData = {
  links: [
    {
      title: "Blog",
      url: "https://blog.example.com",
      description: "Read my latest articles and thoughts",
    },
    {
      title: "Portfolio",
      url: "https://portfolio.example.com",
      description: "Check out my work and projects",
    },
    {
      title: "Book a Session",
      url: "https://calendly.com/example",
      description: "Schedule a 1:1 meeting with me",
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

// Log that links data has been loaded
logLinks();
