import type { ThemeName, ThemeConfig } from "../data/theme.types";
import { logDataLoading } from "../utils/logger";

const logThemeConfig = logDataLoading("theme.config");

// Common styles that can be reused across themes
const commonStyles = {
  card: "bg-opacity-50 backdrop-blur-sm transition-all duration-300 ease-in-out",
  button: "transition-all duration-300 ease-in-out transform hover:scale-105",
  link: "transition-colors duration-200 ease-in-out",
  border: "transition-colors duration-200 ease-in-out",
};

export const themeConfig: Record<ThemeName, ThemeConfig> = {
  builder: {
    colors: {
      primary: "from-stone-900 to-stone-700",
      secondary: "from-stone-800 to-stone-600",
      accent: "from-amber-500 to-amber-700",
      background: "bg-stone-900",
      text: "text-gray-100",
      hover:
        "hover:from-amber-600 hover:to-amber-800 hover:shadow-lg hover:shadow-amber-500/20",
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 hover:shadow-lg hover:shadow-amber-500/20`,
      card: `${commonStyles.card} bg-stone-800 hover:bg-stone-700/60 hover:shadow-lg hover:shadow-amber-500/10`,
      link: `${commonStyles.link} hover:text-amber-400 hover:underline hover:underline-offset-4`,
      border: `${commonStyles.border} border-amber-500 hover:border-amber-600 hover:shadow-lg hover:shadow-amber-500/20`,
      font: "font-builder",
    },
    meta: {
      name: "The Builder",
      description: "Creation, systems, form",
      icon: "🏗️",
    },
  },
  wolf: {
    colors: {
      primary: "from-gray-900 to-gray-700",
      secondary: "from-gray-800 to-gray-600",
      accent: "from-blue-500 to-blue-700",
      background: "bg-gray-900",
      text: "text-gray-100",
      hover:
        "hover:from-blue-600 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/20",
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/20`,
      card: `${commonStyles.card} bg-gray-800 hover:bg-gray-700/60 hover:shadow-lg hover:shadow-blue-500/10`,
      link: `${commonStyles.link} hover:text-blue-400 hover:underline hover:underline-offset-4`,
      border: `${commonStyles.border} border-blue-500 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/20`,
      font: "font-wolf",
    },
    meta: {
      name: "The Wolf",
      description: "Instinct, loyalty, protection",
      icon: "🐺",
    },
  },
  mystic: {
    colors: {
      primary: "from-purple-900 to-purple-700",
      secondary: "from-purple-800 to-purple-600",
      accent: "from-indigo-500 to-indigo-700",
      background: "bg-purple-900",
      text: "text-gray-100",
      hover:
        "hover:from-indigo-600 hover:to-indigo-800 hover:shadow-lg hover:shadow-indigo-500/20",
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 hover:shadow-lg hover:shadow-indigo-500/20`,
      card: `${commonStyles.card} bg-purple-800 hover:bg-purple-700/60 hover:shadow-lg hover:shadow-indigo-500/10`,
      link: `${commonStyles.link} hover:text-indigo-400 hover:underline hover:underline-offset-4`,
      border: `${commonStyles.border} border-indigo-500 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20`,
      font: "font-mystic",
    },
    meta: {
      name: "The Mystic",
      description: "Spirituality, vision, cosmic threads",
      icon: "🔮",
    },
  },
  dragon: {
    colors: {
      primary: "from-red-900 to-red-700",
      secondary: "from-red-800 to-red-600",
      accent: "from-orange-500 to-orange-700",
      background: "bg-red-900",
      text: "text-gray-100",
      hover:
        "hover:from-orange-600 hover:to-orange-800 hover:shadow-lg hover:shadow-orange-500/20",
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 hover:shadow-lg hover:shadow-orange-500/20`,
      card: `${commonStyles.card} bg-red-800 hover:bg-red-700/60 hover:shadow-lg hover:shadow-orange-500/10`,
      link: `${commonStyles.link} hover:text-orange-400 hover:underline hover:underline-offset-4`,
      border: `${commonStyles.border} border-orange-500 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-500/20`,
      font: "font-dragon",
    },
    meta: {
      name: "The Dragon",
      description: "Power, force, will",
      icon: "🐉",
    },
  },
  artist: {
    colors: {
      primary: "from-pink-900 to-pink-700",
      secondary: "from-pink-800 to-pink-600",
      accent: "from-rose-500 to-rose-700",
      background: "bg-pink-900",
      text: "text-gray-100",
      hover:
        "hover:from-rose-600 hover:to-rose-800 hover:shadow-lg hover:shadow-rose-500/20",
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 hover:shadow-lg hover:shadow-rose-500/20`,
      card: `${commonStyles.card} bg-pink-800 hover:bg-pink-700/60 hover:shadow-lg hover:shadow-rose-500/10`,
      link: `${commonStyles.link} hover:text-rose-400 hover:underline hover:underline-offset-4`,
      border: `${commonStyles.border} border-rose-500 hover:border-rose-600 hover:shadow-lg hover:shadow-rose-500/20`,
      font: "font-artist",
    },
    meta: {
      name: "The Artist",
      description: "Expression, creativity, truth",
      icon: "🎨",
    },
  },
  warrior: {
    colors: {
      primary: "from-slate-900 to-slate-700",
      secondary: "from-slate-800 to-slate-600",
      accent: "from-gray-500 to-gray-700",
      background: "bg-slate-900",
      text: "text-gray-100",
      hover:
        "hover:from-gray-600 hover:to-gray-800 hover:shadow-lg hover:shadow-gray-500/20",
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 hover:shadow-lg hover:shadow-gray-500/20`,
      card: `${commonStyles.card} bg-slate-800 hover:bg-slate-700/60 hover:shadow-lg hover:shadow-gray-500/10`,
      link: `${commonStyles.link} hover:text-gray-400 hover:underline hover:underline-offset-4`,
      border: `${commonStyles.border} border-gray-500 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-500/20`,
      font: "font-warrior",
    },
    meta: {
      name: "The Warrior",
      description: "Action, discipline, focus",
      icon: "⚔️",
    },
  },
  healer: {
    colors: {
      primary: "from-emerald-900 to-emerald-700",
      secondary: "from-emerald-800 to-emerald-600",
      accent: "from-teal-500 to-teal-700",
      background: "bg-emerald-900",
      text: "text-gray-100",
      hover:
        "hover:from-teal-600 hover:to-teal-800 hover:shadow-lg hover:shadow-teal-500/20",
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 hover:shadow-lg hover:shadow-teal-500/20`,
      card: `${commonStyles.card} bg-emerald-800 hover:bg-emerald-700/60 hover:shadow-lg hover:shadow-teal-500/10`,
      link: `${commonStyles.link} hover:text-teal-400 hover:underline hover:underline-offset-4`,
      border: `${commonStyles.border} border-teal-500 hover:border-teal-600 hover:shadow-lg hover:shadow-teal-500/20`,
      font: "font-healer",
    },
    meta: {
      name: "The Healer",
      description: "Regeneration, soothing, connection",
      icon: "💫",
    },
  },
  alchemist: {
    colors: {
      primary: "from-violet-900 to-violet-700",
      secondary: "from-violet-800 to-violet-600",
      accent: "from-purple-500 to-purple-700",
      background: "bg-violet-900",
      text: "text-gray-100",
      hover:
        "hover:from-purple-600 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-500/20",
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-500/20`,
      card: `${commonStyles.card} bg-violet-800 hover:bg-violet-700/60 hover:shadow-lg hover:shadow-purple-500/10`,
      link: `${commonStyles.link} hover:text-purple-400 hover:underline hover:underline-offset-4`,
      border: `${commonStyles.border} border-purple-500 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-500/20`,
      font: "font-alchemist",
    },
    meta: {
      name: "The Alchemist",
      description: "Transformation, elements, ritual",
      icon: "🧪",
    },
  },
  strategist: {
    colors: {
      primary: "from-blue-900 to-blue-700",
      secondary: "from-blue-800 to-blue-600",
      accent: "from-cyan-500 to-cyan-700",
      background: "bg-blue-900",
      text: "text-gray-100",
      hover:
        "hover:from-cyan-600 hover:to-cyan-800 hover:shadow-lg hover:shadow-cyan-500/20",
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 hover:shadow-lg hover:shadow-cyan-500/20`,
      card: `${commonStyles.card} bg-blue-800 hover:bg-blue-700/60 hover:shadow-lg hover:shadow-cyan-500/10`,
      link: `${commonStyles.link} hover:text-cyan-400 hover:underline hover:underline-offset-4`,
      border: `${commonStyles.border} border-cyan-500 hover:border-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20`,
      font: "font-strategist",
    },
    meta: {
      name: "The Strategist",
      description: "Mind, planning, clarity",
      icon: "🧠",
    },
  },
  steward: {
    colors: {
      primary: "from-green-900 to-green-700",
      secondary: "from-green-800 to-green-600",
      accent: "from-lime-500 to-lime-700",
      background: "bg-green-900",
      text: "text-gray-100",
      hover:
        "hover:from-lime-600 hover:to-lime-800 hover:shadow-lg hover:shadow-lime-500/20",
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-lime-500 to-lime-700 hover:from-lime-600 hover:to-lime-800 hover:shadow-lg hover:shadow-lime-500/20`,
      card: `${commonStyles.card} bg-green-800 hover:bg-green-700/60 hover:shadow-lg hover:shadow-lime-500/10`,
      link: `${commonStyles.link} hover:text-lime-400 hover:underline hover:underline-offset-4`,
      border: `${commonStyles.border} border-lime-500 hover:border-lime-600 hover:shadow-lg hover:shadow-lime-500/20`,
      font: "font-steward",
    },
    meta: {
      name: "The Steward",
      description: "Legacy, care, generational vision",
      icon: "🌱",
    },
  },
};

// Log that theme config has been loaded
logThemeConfig();
