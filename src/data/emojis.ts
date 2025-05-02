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
};
