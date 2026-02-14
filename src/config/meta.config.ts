import type { Profile } from "../data/types";
import { userSettings } from "./user-settings";

/** Base URL configuration for the site */
export const siteConfig = {
  /** The canonical base URL of the site */
  baseUrl: userSettings.site.baseUrl,
  /** The site name */
  siteName: userSettings.site.siteName,
  /** Default locale */
  locale: userSettings.site.locale,
  /** Default theme color */
  themeColor: userSettings.site.themeColor,
  /** Default image path */
  defaultImage: userSettings.site.defaultImage,
  /** Default social media handles */
  social: userSettings.site.social,
  /** SEO Configuration */
  seo: userSettings.site.seo,
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
    profileFirstName?: string;
    profileLastName?: string;
    profileUsername?: string;
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

  /** Structured Data (Person schema or custom JSON-LD) */
  structuredData: Record<string, unknown>;
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

  const og = siteConfig.seo.openGraph;
  const profileMeta = siteConfig.seo.profile;

  return {
    seo: {
      description:
        siteConfig.seo.metaDescription ??
        (profile.subtitle || siteConfig.seo.defaultDescription),
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
      title: og?.title ?? `${profile.name} - ${siteConfig.siteName}`,
      description:
        og?.description ??
        (profile.subtitle || siteConfig.seo.defaultDescription),
      type: og?.type ?? siteConfig.seo.contentType,
      image: `${siteConfig.baseUrl}${siteConfig.defaultImage}`,
      url: canonicalUrl,
      siteName: og?.siteName ?? siteConfig.siteName,
      locale: siteConfig.locale,
      seeAlso: socialLinks,
      imageWidth: siteConfig.seo.imageDimensions.width,
      imageHeight: siteConfig.seo.imageDimensions.height,
      profileFirstName: profileMeta?.firstName,
      profileLastName: profileMeta?.lastName,
      profileUsername: profileMeta?.username,
    },

    twitter: {
      card: "summary_large_image",
      title: og?.title ?? `${profile.name} - ${siteConfig.siteName}`,
      description:
        og?.description ??
        (profile.subtitle || siteConfig.seo.defaultDescription),
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

    structuredData: siteConfig.seo.personStructuredData ?? {
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
