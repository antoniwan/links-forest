import type { Theme } from "../data/types";
import { logDataLoading } from "../utils/logger";

const logThemeConfig = logDataLoading("theme.config");

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  styles: {
    button: string;
    card: string;
    link: string;
  };
}

export const themeConfig: Record<Theme, ThemeConfig> = {
  wolf: {
    colors: {
      primary: "from-gray-900 to-gray-700",
      secondary: "from-gray-800 to-gray-600",
      accent: "from-blue-500 to-blue-700",
      background: "bg-gray-900",
      text: "text-white",
    },
    styles: {
      button:
        "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
      card: "bg-gray-800 bg-opacity-50 backdrop-blur-sm",
      link: "hover:text-blue-400",
    },
  },
  fox: {
    colors: {
      primary: "from-orange-900 to-orange-700",
      secondary: "from-orange-800 to-orange-600",
      accent: "from-amber-500 to-amber-700",
      background: "bg-orange-900",
      text: "text-white",
    },
    styles: {
      button:
        "bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800",
      card: "bg-orange-800 bg-opacity-50 backdrop-blur-sm",
      link: "hover:text-amber-400",
    },
  },
  owl: {
    colors: {
      primary: "from-purple-900 to-purple-700",
      secondary: "from-purple-800 to-purple-600",
      accent: "from-indigo-500 to-indigo-700",
      background: "bg-purple-900",
      text: "text-white",
    },
    styles: {
      button:
        "bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800",
      card: "bg-purple-800 bg-opacity-50 backdrop-blur-sm",
      link: "hover:text-indigo-400",
    },
  },
  raven: {
    colors: {
      primary: "from-gray-900 to-gray-800",
      secondary: "from-gray-800 to-gray-700",
      accent: "from-gray-500 to-gray-700",
      background: "bg-gray-900",
      text: "text-white",
    },
    styles: {
      button:
        "bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800",
      card: "bg-gray-800 bg-opacity-50 backdrop-blur-sm",
      link: "hover:text-gray-400",
    },
  },
  deer: {
    colors: {
      primary: "from-green-900 to-green-700",
      secondary: "from-green-800 to-green-600",
      accent: "from-emerald-500 to-emerald-700",
      background: "bg-green-900",
      text: "text-white",
    },
    styles: {
      button:
        "bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800",
      card: "bg-green-800 bg-opacity-50 backdrop-blur-sm",
      link: "hover:text-emerald-400",
    },
  },
  bear: {
    colors: {
      primary: "from-amber-900 to-amber-700",
      secondary: "from-amber-800 to-amber-600",
      accent: "from-yellow-500 to-yellow-700",
      background: "bg-amber-900",
      text: "text-white",
    },
    styles: {
      button:
        "bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800",
      card: "bg-amber-800 bg-opacity-50 backdrop-blur-sm",
      link: "hover:text-yellow-400",
    },
  },
  eagle: {
    colors: {
      primary: "from-yellow-900 to-yellow-700",
      secondary: "from-yellow-800 to-yellow-600",
      accent: "from-gold-500 to-gold-700",
      background: "bg-yellow-900",
      text: "text-white",
    },
    styles: {
      button:
        "bg-gradient-to-r from-gold-500 to-gold-700 hover:from-gold-600 hover:to-gold-800",
      card: "bg-yellow-800 bg-opacity-50 backdrop-blur-sm",
      link: "hover:text-gold-400",
    },
  },
  salmon: {
    colors: {
      primary: "from-pink-900 to-pink-700",
      secondary: "from-pink-800 to-pink-600",
      accent: "from-rose-500 to-rose-700",
      background: "bg-pink-900",
      text: "text-white",
    },
    styles: {
      button:
        "bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800",
      card: "bg-pink-800 bg-opacity-50 backdrop-blur-sm",
      link: "hover:text-rose-400",
    },
  },
  otter: {
    colors: {
      primary: "from-teal-900 to-teal-700",
      secondary: "from-teal-800 to-teal-600",
      accent: "from-cyan-500 to-cyan-700",
      background: "bg-teal-900",
      text: "text-white",
    },
    styles: {
      button:
        "bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800",
      card: "bg-teal-800 bg-opacity-50 backdrop-blur-sm",
      link: "hover:text-cyan-400",
    },
  },
  lynx: {
    colors: {
      primary: "from-slate-900 to-slate-700",
      secondary: "from-slate-800 to-slate-600",
      accent: "from-slate-500 to-slate-700",
      background: "bg-slate-900",
      text: "text-white",
    },
    styles: {
      button:
        "bg-gradient-to-r from-slate-500 to-slate-700 hover:from-slate-600 hover:to-slate-800",
      card: "bg-slate-800 bg-opacity-50 backdrop-blur-sm",
      link: "hover:text-slate-400",
    },
  },
};

// Log that theme config has been loaded
logThemeConfig();
