import type { ThemeName, ThemeConfig } from '../data/theme.types';
import { logDataLoading } from '../utils/logger';

const logThemeConfig = logDataLoading('theme.config');

const commonStyles = {
  card: 'bg-white/90 backdrop-blur-md transition-all duration-300 ease-out shadow-xs hover:shadow-lg border rounded-2xl',
  button:
    'transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] font-medium',
  link: 'transition-colors duration-200 ease-out hover:underline hover:underline-offset-4',
  border: 'transition-colors duration-200 ease-out',
};

export const themeConfig: Record<ThemeName, ThemeConfig> = {
  builder: {
    colors: {
      primary: 'from-stone-900 to-stone-800',
      secondary: 'from-stone-800 to-stone-700',
      accent: 'from-amber-600 to-amber-700',
      background: 'bg-stone-50 dark:bg-stone-950',
      text: 'text-stone-900 dark:text-stone-50',
      hover: 'hover:from-amber-700 hover:to-amber-800 hover:shadow-lg hover:shadow-amber-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 hover:shadow-lg hover:shadow-amber-500/20 text-white font-mono tracking-wide font-semibold`,
      card: `${commonStyles.card} dark:bg-stone-900/80 hover:bg-white dark:hover:bg-stone-800/90 hover:shadow-amber-500/10 border-stone-200/80 dark:border-stone-700/80 hover:border-amber-400/60 dark:hover:border-amber-500/40`,
      link: `${commonStyles.link} hover:text-amber-600 dark:hover:text-amber-400 font-mono font-medium`,
      border: `${commonStyles.border} border-stone-200 dark:border-stone-700`,
      font: 'font-builder font-medium',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(217,119,6,0.14),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(120,113,108,0.12),transparent_45%)]',
      ring: 'ring-4 ring-amber-500/25 ring-offset-4 ring-offset-stone-50 dark:ring-offset-stone-950',
      accentSoft: 'text-amber-600 dark:text-amber-400',
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
      background: 'bg-slate-50 dark:bg-slate-950',
      text: 'text-slate-900 dark:text-slate-50',
      hover: 'hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/20 text-white font-sans tracking-wider font-semibold`,
      card: `${commonStyles.card} dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800/90 hover:shadow-blue-500/10 border-slate-200/80 dark:border-slate-700/80 hover:border-blue-400/60 dark:hover:border-blue-500/40`,
      link: `${commonStyles.link} hover:text-blue-600 dark:hover:text-blue-400 font-sans font-semibold`,
      border: `${commonStyles.border} border-slate-200 dark:border-slate-700`,
      font: 'font-wolf font-semibold',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_15%_0%,rgba(37,99,235,0.14),transparent_50%),radial-gradient(ellipse_at_85%_15%,rgba(71,85,105,0.12),transparent_45%)]',
      ring: 'ring-4 ring-blue-500/25 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-950',
      accentSoft: 'text-blue-600 dark:text-blue-400',
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
      background: 'bg-purple-50 dark:bg-purple-950',
      text: 'text-purple-950 dark:text-purple-50',
      hover: 'hover:from-indigo-700 hover:to-indigo-800 hover:shadow-lg hover:shadow-indigo-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 hover:shadow-lg hover:shadow-indigo-500/20 text-white font-serif italic font-semibold`,
      card: `${commonStyles.card} dark:bg-purple-900/80 hover:bg-white dark:hover:bg-purple-800/90 hover:shadow-indigo-500/10 border-purple-200/80 dark:border-purple-700/80 hover:border-indigo-400/60 dark:hover:border-indigo-500/40`,
      link: `${commonStyles.link} hover:text-indigo-600 dark:hover:text-indigo-400 font-serif font-medium`,
      border: `${commonStyles.border} border-purple-200 dark:border-purple-700`,
      font: 'font-mystic font-medium italic',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_30%_0%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(ellipse_at_70%_10%,rgba(147,51,234,0.12),transparent_50%)]',
      ring: 'ring-4 ring-indigo-500/30 ring-offset-4 ring-offset-purple-50 dark:ring-offset-purple-950',
      accentSoft: 'text-indigo-600 dark:text-indigo-400',
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
      background: 'bg-red-50 dark:bg-red-950',
      text: 'text-red-950 dark:text-red-50',
      hover: 'hover:from-orange-700 hover:to-orange-800 hover:shadow-lg hover:shadow-orange-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-linear-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 hover:shadow-lg hover:shadow-orange-500/20 text-white font-serif font-bold tracking-widest`,
      card: `${commonStyles.card} dark:bg-red-900/80 hover:bg-white dark:hover:bg-red-800/90 hover:shadow-orange-500/10 border-red-200/80 dark:border-red-700/80 hover:border-orange-400/60 dark:hover:border-orange-500/40`,
      link: `${commonStyles.link} hover:text-orange-600 dark:hover:text-orange-400 font-serif font-bold`,
      border: `${commonStyles.border} border-red-200 dark:border-red-700`,
      font: 'font-dragon font-bold tracking-wide',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_25%_0%,rgba(234,88,12,0.16),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(185,28,28,0.1),transparent_45%)]',
      ring: 'ring-4 ring-orange-500/30 ring-offset-4 ring-offset-red-50 dark:ring-offset-red-950',
      accentSoft: 'text-orange-600 dark:text-orange-400',
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
      background: 'bg-pink-50 dark:bg-pink-950',
      text: 'text-pink-950 dark:text-pink-50',
      hover: 'hover:from-rose-700 hover:to-rose-800 hover:shadow-lg hover:shadow-rose-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-linear-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 hover:shadow-lg hover:shadow-rose-500/20 text-white font-serif tracking-wide font-semibold`,
      card: `${commonStyles.card} dark:bg-pink-900/80 hover:bg-white dark:hover:bg-pink-800/90 hover:shadow-rose-500/10 border-pink-200/80 dark:border-pink-700/80 hover:border-rose-400/60 dark:hover:border-rose-500/40`,
      link: `${commonStyles.link} hover:text-rose-600 dark:hover:text-rose-400 font-serif font-medium`,
      border: `${commonStyles.border} border-pink-200 dark:border-pink-700`,
      font: 'font-artist font-semibold tracking-wide',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(244,63,94,0.14),transparent_50%),radial-gradient(ellipse_at_85%_15%,rgba(236,72,153,0.1),transparent_45%)]',
      ring: 'ring-4 ring-rose-500/25 ring-offset-4 ring-offset-pink-50 dark:ring-offset-pink-950',
      accentSoft: 'text-rose-600 dark:text-rose-400',
    },
    meta: {
      name: 'The Artist',
      description: 'Expression, creativity, truth',
      icon: '🎨',
    },
  },
  warrior: {
    colors: {
      primary: 'from-slate-950 to-slate-800',
      secondary: 'from-slate-800 to-slate-700',
      accent: 'from-amber-800 to-amber-900',
      background: 'bg-white dark:bg-slate-950',
      text: 'text-slate-950 dark:text-slate-50',
      hover: 'hover:from-amber-900 hover:to-amber-950 hover:shadow-lg hover:shadow-slate-950/15',
    },
    styles: {
      button: `${commonStyles.button} bg-linear-to-r from-slate-950 to-slate-800 hover:from-slate-900 hover:to-slate-700 hover:shadow-lg hover:shadow-slate-950/20 text-white font-warrior font-semibold tracking-[0.12em] uppercase`,
      card: `bg-white dark:bg-slate-900 transition-all duration-200 ease-out shadow-none hover:shadow-md border rounded-xl dark:hover:bg-slate-900 hover:bg-slate-50 border-slate-200 dark:border-slate-700 hover:border-slate-950 dark:hover:border-amber-700/60`,
      link: `${commonStyles.link} hover:text-amber-900 dark:hover:text-amber-500 font-warrior font-medium tracking-wide`,
      border: `${commonStyles.border} border-slate-200 dark:border-slate-700`,
      font: 'font-warrior font-medium tracking-wide',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_0%_0%,rgba(15,23,42,0.06),transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.03),transparent_28%)]',
      ring: 'ring-2 ring-slate-950/20 ring-offset-4 ring-offset-white dark:ring-amber-700/40 dark:ring-offset-slate-950',
      accentSoft: 'text-amber-900 dark:text-amber-500',
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
      background: 'bg-emerald-50 dark:bg-emerald-950',
      text: 'text-emerald-950 dark:text-emerald-50',
      hover: 'hover:from-teal-700 hover:to-teal-800 hover:shadow-lg hover:shadow-teal-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 hover:shadow-lg hover:shadow-teal-500/20 text-white font-sans font-medium tracking-wide`,
      card: `${commonStyles.card} dark:bg-emerald-900/80 hover:bg-white dark:hover:bg-emerald-800/90 hover:shadow-teal-500/10 border-emerald-200/80 dark:border-emerald-700/80 hover:border-teal-400/60 dark:hover:border-teal-500/40`,
      link: `${commonStyles.link} hover:text-teal-600 dark:hover:text-teal-400 font-sans font-medium`,
      border: `${commonStyles.border} border-emerald-200 dark:border-emerald-700`,
      font: 'font-healer font-medium tracking-wide',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(13,148,136,0.14),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(16,185,129,0.1),transparent_45%)]',
      ring: 'ring-4 ring-teal-500/25 ring-offset-4 ring-offset-emerald-50 dark:ring-offset-emerald-950',
      accentSoft: 'text-teal-600 dark:text-teal-400',
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
      background: 'bg-violet-50 dark:bg-violet-950',
      text: 'text-violet-950 dark:text-violet-50',
      hover: 'hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-500/20 text-white font-serif tracking-wide font-semibold`,
      card: `${commonStyles.card} dark:bg-violet-900/80 hover:bg-white dark:hover:bg-violet-800/90 hover:shadow-purple-500/10 border-violet-200/80 dark:border-violet-700/80 hover:border-purple-400/60 dark:hover:border-purple-500/40`,
      link: `${commonStyles.link} hover:text-purple-600 dark:hover:text-purple-400 font-serif font-medium`,
      border: `${commonStyles.border} border-violet-200 dark:border-violet-700`,
      font: 'font-alchemist font-semibold tracking-wide',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_25%_0%,rgba(147,51,234,0.14),transparent_50%),radial-gradient(ellipse_at_75%_15%,rgba(124,58,237,0.1),transparent_45%)]',
      ring: 'ring-4 ring-purple-500/25 ring-offset-4 ring-offset-violet-50 dark:ring-offset-violet-950',
      accentSoft: 'text-purple-600 dark:text-purple-400',
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
      background: 'bg-blue-50 dark:bg-blue-950',
      text: 'text-blue-950 dark:text-blue-50',
      hover: 'hover:from-cyan-700 hover:to-cyan-800 hover:shadow-lg hover:shadow-cyan-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-linear-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 hover:shadow-lg hover:shadow-cyan-500/20 text-white font-sans font-medium tracking-wide`,
      card: `${commonStyles.card} dark:bg-blue-900/80 hover:bg-white dark:hover:bg-blue-800/90 hover:shadow-cyan-500/10 border-blue-200/80 dark:border-blue-700/80 hover:border-cyan-400/60 dark:hover:border-cyan-500/40`,
      link: `${commonStyles.link} hover:text-cyan-600 dark:hover:text-cyan-400 font-sans font-medium`,
      border: `${commonStyles.border} border-blue-200 dark:border-blue-700`,
      font: 'font-strategist font-medium tracking-wide',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(8,145,178,0.14),transparent_50%),radial-gradient(ellipse_at_85%_15%,rgba(37,99,235,0.1),transparent_45%)]',
      ring: 'ring-4 ring-cyan-500/25 ring-offset-4 ring-offset-blue-50 dark:ring-offset-blue-950',
      accentSoft: 'text-cyan-600 dark:text-cyan-400',
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
      background: 'bg-green-50 dark:bg-green-950',
      text: 'text-green-950 dark:text-green-50',
      hover: 'hover:from-lime-700 hover:to-lime-800 hover:shadow-lg hover:shadow-lime-500/20',
    },
    styles: {
      button: `${commonStyles.button} bg-linear-to-r from-lime-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 hover:shadow-lg hover:shadow-lime-500/20 text-white font-serif font-medium tracking-wide`,
      card: `${commonStyles.card} dark:bg-green-900/80 hover:bg-white dark:hover:bg-green-800/90 hover:shadow-lime-500/10 border-green-200/80 dark:border-green-700/80 hover:border-lime-400/60 dark:hover:border-lime-500/40`,
      link: `${commonStyles.link} hover:text-lime-600 dark:hover:text-lime-400 font-serif font-medium`,
      border: `${commonStyles.border} border-green-200 dark:border-green-700`,
      font: 'font-steward font-medium tracking-wide',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(101,163,13,0.14),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(22,163,74,0.1),transparent_45%)]',
      ring: 'ring-4 ring-lime-500/25 ring-offset-4 ring-offset-green-50 dark:ring-offset-green-950',
      accentSoft: 'text-lime-600 dark:text-lime-400',
    },
    meta: {
      name: 'The Steward',
      description: 'Legacy, care, generational vision',
      icon: '🌱',
    },
  },
};

logThemeConfig();
