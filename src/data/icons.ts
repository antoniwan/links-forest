import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
  FaDiscord,
  FaSlack,
  FaReddit,
  FaTiktok,
  FaEnvelope,
  FaLastfm,
} from "react-icons/fa";

export const socialIconMap = {
  twitter: FaTwitter,
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
  telegram: FaTelegram,
  discord: FaDiscord,
  slack: FaSlack,
  reddit: FaReddit,
  tiktok: FaTiktok,
  email: FaEnvelope,
  lastfm: FaLastfm,
} as const;

export type SocialIconName = keyof typeof socialIconMap;
