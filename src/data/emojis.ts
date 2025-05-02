/**
 * Categories of emojis available in the system
 */
export type EmojiCategory =
  | "social"
  | "media"
  | "business"
  | "navigation"
  | "status"
  | "weather"
  | "communication"
  | "organization";

/**
 * All available emoji names in the system
 */
export type EmojiName =
  // Social & Communication
  | "twitter"
  | "github"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "youtube"
  | "whatsapp"
  | "telegram"
  | "discord"
  | "slack"
  | "reddit"
  | "tiktok"
  // Media & Content
  | "video"
  | "image"
  | "music"
  | "podcast"
  | "stream"
  // Business & Work
  | "briefcase"
  | "meeting"
  | "project"
  | "task"
  | "deadline"
  // Navigation & UI
  | "home"
  | "back"
  | "forward"
  | "up"
  | "down"
  | "menu"
  | "website"
  | "search"
  | "settings"
  // Status & Feedback
  | "success"
  | "error"
  | "warning"
  | "info"
  | "loading"
  // Weather & Time
  | "sun"
  | "cloud"
  | "rain"
  | "snow"
  | "clock"
  // Communication
  | "email"
  | "phone"
  | "location"
  // Organization
  | "calendar"
  | "document"
  | "folder";

/**
 * Mapping of emoji names to their corresponding Unicode characters
 */
export const emojiMap: Record<EmojiName, string> = {
  // Social & Communication
  twitter: "𝕏",
  github: "⌨️",
  linkedin: "🔗",
  instagram: "📸",
  facebook: "📱",
  youtube: "▶️",
  whatsapp: "💬",
  telegram: "📨",
  discord: "🎮",
  slack: "💬",
  reddit: "📱",
  tiktok: "🎵",
  // Media & Content
  video: "🎥",
  image: "🖼️",
  music: "🎵",
  podcast: "🎙️",
  stream: "📺",
  // Business & Work
  briefcase: "💼",
  meeting: "👥",
  project: "📊",
  task: "✅",
  deadline: "⏰",
  // Navigation & UI
  home: "🏠",
  back: "⬅️",
  forward: "➡️",
  up: "⬆️",
  down: "⬇️",
  menu: "☰",
  website: "🌐",
  search: "🔍",
  settings: "⚙️",
  // Status & Feedback
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
  loading: "⏳",
  // Weather & Time
  sun: "☀️",
  cloud: "☁️",
  rain: "🌧️",
  snow: "❄️",
  clock: "🕒",
  // Communication
  email: "📧",
  phone: "📞",
  location: "📍",
  // Organization
  calendar: "📅",
  document: "📄",
  folder: "📁",
} as const;

/**
 * Type guard to check if a string is a valid EmojiName
 */
export function isValidEmojiName(name: string): name is EmojiName {
  return name in emojiMap;
}
