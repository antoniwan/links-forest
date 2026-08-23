import type { Link } from './types';
import { emojiMap, isValidEmojiName, sectionDefaultEmoji, type EmojiName } from './emojis';

export type LinkIcon = EmojiName;

/** Resolve a link's emoji: explicit icon → section default → none */
export function resolveLinkEmoji(link: Link): string | null {
  if (link.icon && isValidEmojiName(link.icon)) {
    return emojiMap[link.icon];
  }

  if (link.category) {
    const fallback = sectionDefaultEmoji[link.category];
    if (fallback) {
      return emojiMap[fallback];
    }
  }

  return null;
}
