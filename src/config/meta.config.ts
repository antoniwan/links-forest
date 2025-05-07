import type { Profile } from "../data/types";

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
      canonical: url,
    },

    openGraph: {
      title: `${profile.name} - LinkForest`,
      description: profile.subtitle,
      type: "website",
      image: "/default-share.jpg",
      url: url,
      siteName: "LinkForest",
      locale: "en_US",
      seeAlso: [
        "https://www.linkedin.com/in/antoniwan",
        "https://www.instagram.com/antoniwan777",
        "https://www.facebook.com/antoniwan777",
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${profile.name} - LinkForest`,
      description: profile.subtitle,
      image: "/default-share.jpg",
      creator: "@antoniwan",
      site: "@antoniwan",
    },

    mobile: {
      themeColor: "#ffffff",
      webAppCapable: true,
      appleWebAppCapable: true,
      appleWebAppStatusBarStyle: "default",
      appleWebAppTitle: profile.name,
    },
  };
}
