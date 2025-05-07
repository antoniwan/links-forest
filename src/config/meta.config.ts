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
  /** Default image path */
  defaultImage: "/default-share.jpg",
  /** Default social media handles */
  social: {
    twitter: "@antoniwan",
    linkedin: "antoniwan",
    instagram: "antoniwan777",
    facebook: "antoniwan777",
  },
  /** SEO Configuration */
  seo: {
    /** Default meta description */
    defaultDescription:
      "Personal digital garden and link hub by Antonio Rodríguez Martínez - Systems Thinker, Builder, and Father",
    /** Default meta keywords */
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
    /** Default robots meta */
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    /** Default language */
    language: "en",
    /** Default content type */
    contentType: "website",
    /** Default image dimensions */
    imageDimensions: {
      width: 1200,
      height: 630,
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;

export interface MetaConfig {
  /** Basic SEO meta tags */
  seo: {
    description: string;
    keywords: string[];
    robots: string;
    canonical: string;
    language: string;
    contentType: string;
    author: string;
    generator: string;
    viewport: string;
    charset: string;
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
    imageWidth: number;
    imageHeight: number;
  };

  /** Twitter Card meta tags */
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
    creator: string;
    site: string;
    imageAlt: string;
  };

  /** Mobile/App meta tags */
  mobile: {
    themeColor: string;
    webAppCapable: boolean;
    appleWebAppCapable: boolean;
    appleWebAppStatusBarStyle: string;
    appleWebAppTitle: string;
    formatDetection: string;
    viewport: string;
  };

  /** Structured Data */
  structuredData: {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    url: string;
    image: string;
    sameAs: string[];
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
  const socialLinks = [
    `https://www.linkedin.com/in/${siteConfig.social.linkedin}`,
    `https://www.instagram.com/${siteConfig.social.instagram}`,
    `https://www.facebook.com/${siteConfig.social.facebook}`,
    `https://twitter.com/${siteConfig.social.twitter.replace("@", "")}`,
  ];

  return {
    seo: {
      description: profile.subtitle || siteConfig.seo.defaultDescription,
      keywords: [...siteConfig.seo.defaultKeywords],
      robots: siteConfig.seo.robots,
      canonical: canonicalUrl,
      language: siteConfig.seo.language,
      contentType: siteConfig.seo.contentType,
      author: profile.name,
      generator: "LinkForest",
      viewport: "width=device-width, initial-scale=1.0",
      charset: "UTF-8",
    },

    openGraph: {
      title: `${profile.name} - ${siteConfig.siteName}`,
      description: profile.subtitle || siteConfig.seo.defaultDescription,
      type: siteConfig.seo.contentType,
      image: `${siteConfig.baseUrl}${siteConfig.defaultImage}`,
      url: canonicalUrl,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      seeAlso: socialLinks,
      imageWidth: siteConfig.seo.imageDimensions.width,
      imageHeight: siteConfig.seo.imageDimensions.height,
    },

    twitter: {
      card: "summary_large_image",
      title: `${profile.name} - ${siteConfig.siteName}`,
      description: profile.subtitle || siteConfig.seo.defaultDescription,
      image: `${siteConfig.baseUrl}${siteConfig.defaultImage}`,
      creator: siteConfig.social.twitter,
      site: siteConfig.social.twitter,
      imageAlt: `${profile.name}'s profile image`,
    },

    mobile: {
      themeColor: siteConfig.themeColor,
      webAppCapable: true,
      appleWebAppCapable: true,
      appleWebAppStatusBarStyle: "default",
      appleWebAppTitle: profile.name,
      formatDetection: "telephone=no",
      viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover",
    },

    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      description: profile.subtitle || siteConfig.seo.defaultDescription,
      url: canonicalUrl,
      image: `${siteConfig.baseUrl}${siteConfig.defaultImage}`,
      sameAs: socialLinks,
    },
  };
}
