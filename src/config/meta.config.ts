import type { Profile } from "../data/types";

/** Base URL configuration for the site */
export const siteConfig = {
  /** The canonical base URL of the site */
  baseUrl: "https://antoniwan.online",
  /** The site name */
  siteName: "LinkForest",
  /** Default locale */
  locale: "en_US",
  /** Default theme color */
  themeColor: "#ffffff",
} as const;

export interface MetaConfig {
  /** Basic SEO meta tags */
  seo: {
    description: string;
    keywords: string[];
    robots: string;
    canonical: string;
  };

  /** OpenGraph meta tags */
  openGraph: {
    title: string;
    description: string;
    type: string;
    image: string;
    url: string;
    siteName: string;
    locale: string;
    seeAlso: string[];
  };

  /** Twitter Card meta tags */
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
    creator: string;
    site: string;
  };

  /** Mobile/App meta tags */
  mobile: {
    themeColor: string;
    webAppCapable: boolean;
    appleWebAppCapable: boolean;
    appleWebAppStatusBarStyle: string;
    appleWebAppTitle: string;
  };
}

/**
 * Generate meta configuration based on user profile
 */
export function generateMetaConfig(profile: Profile, url: string): MetaConfig {
  // Ensure the URL is absolute by using the base URL if it's relative
  const canonicalUrl = url.startsWith("http")
    ? url
    : `${siteConfig.baseUrl}${url}`;

  return {
    seo: {
      description: profile.subtitle,
      keywords: [
        profile.name,
        "Systems Thinker",
        "Builder",
        "Father",
        "Software Development",
        "Consulting",
      ],
      robots: "index, follow",
      canonical: canonicalUrl,
    },

    openGraph: {
      title: `${profile.name} - ${siteConfig.siteName}`,
      description: profile.subtitle,
      type: "website",
      image: `${siteConfig.baseUrl}/default-share.jpg`,
      url: canonicalUrl,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      seeAlso: [
        "https://www.linkedin.com/in/antoniwan",
        "https://www.instagram.com/antoniwan777",
        "https://www.facebook.com/antoniwan777",
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${profile.name} - ${siteConfig.siteName}`,
      description: profile.subtitle,
      image: `${siteConfig.baseUrl}/default-share.jpg`,
      creator: "@antoniwan",
      site: "@antoniwan",
    },

    mobile: {
      themeColor: siteConfig.themeColor,
      webAppCapable: true,
      appleWebAppCapable: true,
      appleWebAppStatusBarStyle: "default",
      appleWebAppTitle: profile.name,
    },
  };
}
