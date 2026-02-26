import type { ThemeName, ThemeConfig } from '../data/theme.types';
import { logDataLoading } from '../utils/logger';

const logThemeConfig = logDataLoading('theme.config');

// Enhanced common styles with better typography and accessibility
const commonStyles = {
  card: 'bg-opacity-95 backdrop-blur-sm transition-all duration-300 ease-in-out shadow-sm hover:shadow-md border',
  button:
    'transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] font-medium',
  link: 'transition-colors duration-200 ease-in-out hover:underline hover:underline-offset-4',
  border: 'transition-colors duration-200 ease-in-out',
  typography: {
    heading: 'font-serif tracking-tight leading-tight font-bold',
    body: 'font-sans leading-relaxed',
    meta: 'font-sans text-sm tracking-wide uppercase font-medium',
  },
  spacing: {
    container: 'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8',
    section: 'py-12',
    element: 'mb-6',
  },
};

export const themeConfig: Record<ThemeName, ThemeConfig> = {
  builder: {
    colors: {
      primary: 'from-stone-900 to-stone-800',
      secondary: 'from-stone-800 to-stone-700',
      accent: 'from-amber-600 to-amber-700',
      background: 'bg-stone-50 dark:bg-stone-900',
      text: 'text-stone-900 dark:text-stone-50',
      hover: 'hover:from-amber-700 hover:to-amber-800 hover:shadow-lg hover:shadow-amber-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 hover:shadow-lg hover:shadow-amber-500/20 text-white font-mono tracking-wide font-semibold`,
      card: `${commonStyles.card} bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700/60 hover:shadow-lg hover:shadow-amber-500/10 border-stone-200 dark:border-stone-700`,
      link: `${commonStyles.link} hover:text-amber-600 dark:hover:text-amber-400 font-mono font-medium`,
      border: `${commonStyles.border} border-stone-200 dark:border-stone-700 hover:border-amber-500 dark:hover:border-amber-600`,
      font: 'font-builder font-medium',
    },
    meta: {
      name: 'The Builder',
      description: 'Creation, systems, form',
      icon: '🏗️',
    },
  },
  wolf: {
    colors: {
      primary: 'from-slate-900 to-slate-800',
      secondary: 'from-slate-800 to-slate-700',
      accent: 'from-blue-600 to-blue-700',
      background: 'bg-slate-50 dark:bg-slate-900',
      text: 'text-slate-900 dark:text-slate-50',
      hover: 'hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/20 text-white font-sans tracking-wider font-semibold`,
      card: `${commonStyles.card} bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 hover:shadow-lg hover:shadow-blue-500/10 border-slate-200 dark:border-slate-700`,
      link: `${commonStyles.link} hover:text-blue-600 dark:hover:text-blue-400 font-sans font-semibold`,
      border: `${commonStyles.border} border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-600`,
      font: 'font-wolf font-semibold',
    },
    meta: {
      name: 'The Wolf',
      description: 'Instinct, loyalty, protection',
      icon: '🐺',
    },
  },
  mystic: {
    colors: {
      primary: 'from-purple-900 to-purple-800',
      secondary: 'from-purple-800 to-purple-700',
      accent: 'from-indigo-600 to-indigo-700',
      background: 'bg-purple-50 dark:bg-purple-900',
      text: 'text-purple-900 dark:text-purple-50',
      hover: 'hover:from-indigo-700 hover:to-indigo-800 hover:shadow-lg hover:shadow-indigo-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 hover:shadow-lg hover:shadow-indigo-500/20 text-white font-serif italic font-semibold`,
      card: `${commonStyles.card} bg-white dark:bg-purple-800 hover:bg-purple-50 dark:hover:bg-purple-700/60 hover:shadow-lg hover:shadow-indigo-500/10 border-purple-200 dark:border-purple-700`,
      link: `${commonStyles.link} hover:text-indigo-600 dark:hover:text-indigo-400 font-serif font-medium`,
      border: `${commonStyles.border} border-purple-200 dark:border-purple-700 hover:border-indigo-500 dark:hover:border-indigo-600`,
      font: 'font-mystic font-medium italic',
    },
    meta: {
      name: 'The Mystic',
      description: 'Spirituality, vision, cosmic threads',
      icon: '🔮',
    },
  },
  dragon: {
    colors: {
      primary: 'from-red-900 to-red-800',
      secondary: 'from-red-800 to-red-700',
      accent: 'from-orange-600 to-orange-700',
      background: 'bg-red-50 dark:bg-red-900',
      text: 'text-red-900 dark:text-red-50',
      hover: 'hover:from-orange-700 hover:to-orange-800 hover:shadow-lg hover:shadow-orange-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 hover:shadow-lg hover:shadow-orange-500/20 text-white font-serif font-bold tracking-widest`,
      card: `${commonStyles.card} bg-white dark:bg-red-800 hover:bg-red-50 dark:hover:bg-red-700/60 hover:shadow-lg hover:shadow-orange-500/10 border-red-200 dark:border-red-700`,
      link: `${commonStyles.link} hover:text-orange-600 dark:hover:text-orange-400 font-serif font-bold`,
      border: `${commonStyles.border} border-red-200 dark:border-red-700 hover:border-orange-500 dark:hover:border-orange-600`,
      font: 'font-dragon font-bold tracking-wide',
    },
    meta: {
      name: 'The Dragon',
      description: 'Power, force, will',
      icon: '🐉',
    },
  },
  artist: {
    colors: {
      primary: 'from-pink-900 to-pink-800',
      secondary: 'from-pink-800 to-pink-700',
      accent: 'from-rose-600 to-rose-700',
      background: 'bg-pink-50 dark:bg-pink-900',
      text: 'text-pink-900 dark:text-pink-50',
      hover: 'hover:from-rose-700 hover:to-rose-800 hover:shadow-lg hover:shadow-rose-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 hover:shadow-lg hover:shadow-rose-500/20 text-white font-serif tracking-wide font-semibold`,
      card: `${commonStyles.card} bg-white dark:bg-pink-800 hover:bg-pink-50 dark:hover:bg-pink-700/60 hover:shadow-lg hover:shadow-rose-500/10 border-pink-200 dark:border-pink-700`,
      link: `${commonStyles.link} hover:text-rose-600 dark:hover:text-rose-400 font-serif font-medium`,
      border: `${commonStyles.border} border-pink-200 dark:border-pink-700 hover:border-rose-500 dark:hover:border-rose-600`,
      font: 'font-artist font-semibold tracking-wide',
    },
    meta: {
      name: 'The Artist',
      description: 'Expression, creativity, truth',
      icon: '🎨',
    },
  },
  warrior: {
    colors: {
      primary: 'from-slate-900 to-slate-800',
      secondary: 'from-slate-800 to-slate-700',
      accent: 'from-amber-500 to-amber-600',
      background: 'bg-white dark:bg-slate-900',
      text: 'text-slate-900 dark:text-slate-50',
      hover: 'hover:from-amber-600 hover:to-amber-700 hover:shadow-lg hover:shadow-amber-500/25',
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg hover:shadow-amber-500/25 text-white font-sans font-semibold tracking-wide`,
      card: `${commonStyles.card} bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 hover:shadow-lg hover:shadow-amber-500/15 border-slate-200 dark:border-slate-700`,
      link: `${commonStyles.link} hover:text-amber-600 dark:hover:text-amber-400 font-sans font-medium`,
      border: `${commonStyles.border} border-slate-200 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-600`,
      font: 'font-warrior font-medium tracking-wide',
    },
    meta: {
      name: 'The Warrior',
      description: 'Prestige, precision, cleanliness',
      icon: '⚔️',
    },
  },
  healer: {
    colors: {
      primary: 'from-emerald-900 to-emerald-800',
      secondary: 'from-emerald-800 to-emerald-700',
      accent: 'from-teal-600 to-teal-700',
      background: 'bg-emerald-50 dark:bg-emerald-900',
      text: 'text-emerald-900 dark:text-emerald-50',
      hover: 'hover:from-teal-700 hover:to-teal-800 hover:shadow-lg hover:shadow-teal-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 hover:shadow-lg hover:shadow-teal-500/20 text-white font-sans font-medium tracking-wide`,
      card: `${commonStyles.card} bg-white dark:bg-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-700/60 hover:shadow-lg hover:shadow-teal-500/10 border-emerald-200 dark:border-emerald-700`,
      link: `${commonStyles.link} hover:text-teal-600 dark:hover:text-teal-400 font-sans font-medium`,
      border: `${commonStyles.border} border-emerald-200 dark:border-emerald-700 hover:border-teal-500 dark:hover:border-teal-600`,
      font: 'font-healer font-medium tracking-wide',
    },
    meta: {
      name: 'The Healer',
      description: 'Regeneration, soothing, connection',
      icon: '💫',
    },
  },
  alchemist: {
    colors: {
      primary: 'from-violet-900 to-violet-800',
      secondary: 'from-violet-800 to-violet-700',
      accent: 'from-purple-600 to-purple-700',
      background: 'bg-violet-50 dark:bg-violet-900',
      text: 'text-violet-900 dark:text-violet-50',
      hover: 'hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-500/20 text-white font-serif tracking-wide font-semibold`,
      card: `${commonStyles.card} bg-white dark:bg-violet-800 hover:bg-violet-50 dark:hover:bg-violet-700/60 hover:shadow-lg hover:shadow-purple-500/10 border-violet-200 dark:border-violet-700`,
      link: `${commonStyles.link} hover:text-purple-600 dark:hover:text-purple-400 font-serif font-medium`,
      border: `${commonStyles.border} border-violet-200 dark:border-violet-700 hover:border-purple-500 dark:hover:border-purple-600`,
      font: 'font-alchemist font-semibold tracking-wide',
    },
    meta: {
      name: 'The Alchemist',
      description: 'Transformation, elements, ritual',
      icon: '🧪',
    },
  },
  strategist: {
    colors: {
      primary: 'from-blue-900 to-blue-800',
      secondary: 'from-blue-800 to-blue-700',
      accent: 'from-cyan-600 to-cyan-700',
      background: 'bg-blue-50 dark:bg-blue-900',
      text: 'text-blue-900 dark:text-blue-50',
      hover: 'hover:from-cyan-700 hover:to-cyan-800 hover:shadow-lg hover:shadow-cyan-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 hover:shadow-lg hover:shadow-cyan-500/20 text-white font-sans font-medium tracking-wide`,
      card: `${commonStyles.card} bg-white dark:bg-blue-800 hover:bg-blue-50 dark:hover:bg-blue-700/60 hover:shadow-lg hover:shadow-cyan-500/10 border-blue-200 dark:border-blue-700`,
      link: `${commonStyles.link} hover:text-cyan-600 dark:hover:text-cyan-400 font-sans font-medium`,
      border: `${commonStyles.border} border-blue-200 dark:border-blue-700 hover:border-cyan-500 dark:hover:border-cyan-600`,
      font: 'font-strategist font-medium tracking-wide',
    },
    meta: {
      name: 'The Strategist',
      description: 'Mind, planning, clarity',
      icon: '🧠',
    },
  },
  steward: {
    colors: {
      primary: 'from-green-900 to-green-800',
      secondary: 'from-green-800 to-green-700',
      accent: 'from-lime-600 to-lime-700',
      background: 'bg-green-50 dark:bg-green-900',
      text: 'text-green-900 dark:text-green-50',
      hover: 'hover:from-lime-700 hover:to-lime-800 hover:shadow-lg hover:shadow-lime-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-gradient-to-r from-lime-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 hover:shadow-lg hover:shadow-lime-500/20 text-white font-serif font-medium tracking-wide`,
      card: `${commonStyles.card} bg-white dark:bg-green-800 hover:bg-green-50 dark:hover:bg-green-700/60 hover:shadow-lg hover:shadow-lime-500/10 border-green-200 dark:border-green-700`,
      link: `${commonStyles.link} hover:text-lime-600 dark:hover:text-lime-400 font-serif font-medium`,
      border: `${commonStyles.border} border-green-200 dark:border-green-700 hover:border-lime-500 dark:hover:border-lime-600`,
      font: 'font-steward font-medium tracking-wide',
    },
    meta: {
      name: 'The Steward',
      description: 'Legacy, care, generational vision',
      icon: '🌱',
    },
  },
};

// Log that theme config has been loaded
logThemeConfig();
