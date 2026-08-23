/**
 * Emoji icons for links and social profiles.
 */
export type EmojiName =
  // Social
  | 'twitter'
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'whatsapp'
  | 'telegram'
  | 'discord'
  | 'slack'
  | 'reddit'
  | 'tiktok'
  | 'lastfm'
  | 'spotify'
  | 'threads'
  | 'medium'
  | 'bluesky'
  | 'email'
  // Writing & media
  | 'notebook'
  | 'storybook'
  | 'pen'
  | 'books'
  // Work
  | 'briefcase'
  | 'handshake'
  | 'code'
  | 'heart'
  // Elsewhere
  | 'website'
  | 'paint'
  | 'gift'
  | 'folder';

export const emojiMap: Record<EmojiName, string> = {
  twitter: '𝕏',
  github: '🐙',
  linkedin: '💼',
  instagram: '📸',
  facebook: '📘',
  youtube: '▶️',
  whatsapp: '💬',
  telegram: '📨',
  discord: '🎮',
  slack: '💬',
  reddit: '👽',
  tiktok: '🎵',
  lastfm: '🎵',
  spotify: '🎧',
  threads: '🧵',
  medium: '✍️',
  bluesky: '🦋',
  email: '📧',
  notebook: '📝',
  storybook: '📖',
  pen: '✍️',
  books: '📚',
  briefcase: '💼',
  handshake: '🤝',
  code: '💻',
  heart: '❤️',
  website: '🌐',
  paint: '🎨',
  gift: '🎁',
  folder: '📁',
};

export function isValidEmojiName(name: string): name is EmojiName {
  return name in emojiMap;
}

/** Default emoji when a link has a section but no explicit icon */
export const sectionDefaultEmoji: Partial<Record<string, EmojiName>> = {
  writing: 'pen',
  work: 'briefcase',
  elsewhere: 'website',
};
