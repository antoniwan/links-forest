import type { EmojiName } from "./emojis";

export interface Profile {
  name: string;
  subtitle: string;
  image: string;
}

export interface Link {
  title: string;
  url: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: EmojiName;
}

export interface LinksData {
  profile: Profile;
  links: Link[];
  social: SocialLink[];
}
