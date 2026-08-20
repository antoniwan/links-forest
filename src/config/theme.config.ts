import type { ThemeName, ThemeConfig } from '../data/theme.types';
import { logDataLoading } from '../utils/logger';
import { motionPresets, type MotionPresetName } from './theme-motion';

const logThemeConfig = logDataLoading('theme.config');

/**
 * Shared visual system: white surface, zinc type, muted accents.
 * Drama lives in motion, rail cues, and type pairings.
 */
const shared = {
  button:
    'transition-all duration-200 ease-out hover:scale-[1.01] active:scale-[0.99] bg-linear-to-r from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 text-white font-medium tracking-wide',
  link: 'transition-colors duration-200 ease-out hover:underline hover:underline-offset-4',
  border: 'transition-colors duration-200 ease-out border-zinc-200 dark:border-zinc-700',
  card: 'bg-white dark:bg-zinc-900 transition-all duration-200 ease-out shadow-none border rounded-xl border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900',
  background: 'bg-white dark:bg-zinc-950' as const,
  text: 'text-zinc-900 dark:text-zinc-50' as const,
  primary: 'from-zinc-900 to-zinc-800' as const,
  secondary: 'from-zinc-800 to-zinc-700' as const,
};

type AccentClasses = {
  accent: ThemeConfig['colors']['accent'];
  hover: ThemeConfig['colors']['hover'];
  cardHover: string;
  linkHover: string;
  ring: string;
  accentSoft: string;
  atmosphere: string;
};

function makeTheme(
  fonts: { body: string; display?: string },
  accent: AccentClasses,
  motion: MotionPresetName,
  meta: ThemeConfig['meta'],
): ThemeConfig {
  return {
    colors: {
      primary: shared.primary,
      secondary: shared.secondary,
      accent: accent.accent,
      background: shared.background,
      text: shared.text,
      hover: accent.hover,
    },
    styles: {
      button: shared.button,
      card: `${shared.card} ${accent.cardHover}`,
      link: `${shared.link} ${accent.linkHover}`,
      border: shared.border,
      font: fonts.body,
      display: fonts.display ?? fonts.body,
      atmosphere: accent.atmosphere,
      ring: accent.ring,
      accentSoft: accent.accentSoft,
    },
    motion: motionPresets[motion],
    meta,
  };
}

export const themeConfig: Record<ThemeName, ThemeConfig> = {
  builder: makeTheme(
    {
      body: 'font-builder font-medium tracking-tight',
      display: 'font-builder-display font-semibold tracking-tight',
    },
    {
      accent: 'from-amber-800 to-amber-900',
      hover: 'hover:from-amber-900 hover:to-amber-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-amber-800/40 dark:hover:border-amber-500/40 hover:shadow-md',
      linkHover: 'hover:text-amber-800 dark:hover:text-amber-400',
      ring: 'ring-2 ring-amber-800/20 ring-offset-4 ring-offset-white dark:ring-amber-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-amber-800 dark:text-amber-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_15%_0%,rgba(180,83,9,0.08),transparent_50%),radial-gradient(ellipse_at_85%_10%,rgba(113,113,122,0.05),transparent_45%)]',
    },
    'snap',
    { name: 'The Builder', description: 'Systems, craft, structure', icon: '◇' },
  ),

  wolf: makeTheme(
    { body: 'font-wolf font-medium tracking-tight' },
    {
      accent: 'from-blue-800 to-blue-900',
      hover: 'hover:from-blue-900 hover:to-blue-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-blue-800/40 dark:hover:border-blue-400/40 hover:shadow-md',
      linkHover: 'hover:text-blue-800 dark:hover:text-blue-400',
      ring: 'ring-2 ring-blue-800/20 ring-offset-4 ring-offset-white dark:ring-blue-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-blue-800 dark:text-blue-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_15%_0%,rgba(30,64,175,0.07),transparent_50%),radial-gradient(ellipse_at_85%_10%,rgba(71,85,105,0.05),transparent_45%)]',
    },
    'stalk',
    { name: 'The Wolf', description: 'Loyalty, focus, instinct', icon: '○' },
  ),

  mystic: makeTheme(
    { body: 'font-mystic font-medium', display: 'font-mystic font-semibold tracking-tight' },
    {
      accent: 'from-indigo-800 to-indigo-900',
      hover: 'hover:from-indigo-900 hover:to-indigo-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-indigo-800/35 dark:hover:border-indigo-400/35 hover:shadow-lg hover:shadow-indigo-900/5',
      linkHover: 'hover:text-indigo-800 dark:hover:text-indigo-400',
      ring: 'ring-2 ring-indigo-800/20 ring-offset-4 ring-offset-white dark:ring-indigo-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-indigo-800 dark:text-indigo-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(67,56,202,0.08),transparent_55%)]',
    },
    'drift',
    { name: 'The Mystic', description: 'Vision, depth, stillness', icon: '✧' },
  ),

  dragon: makeTheme(
    { body: 'font-dragon font-medium tracking-tight', display: 'font-dragon font-bold tracking-tight' },
    {
      accent: 'from-orange-800 to-orange-900',
      hover: 'hover:from-orange-900 hover:to-orange-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-orange-800/45 dark:hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-900/10',
      linkHover: 'hover:text-orange-800 dark:hover:text-orange-400',
      ring: 'ring-2 ring-orange-800/25 ring-offset-4 ring-offset-white dark:ring-orange-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-orange-800 dark:text-orange-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(154,52,18,0.09),transparent_55%)]',
    },
    'strike',
    { name: 'The Dragon', description: 'Force, heat, resolve', icon: '▣' },
  ),

  artist: makeTheme(
    { body: 'font-artist font-medium', display: 'font-artist font-semibold tracking-tight' },
    {
      accent: 'from-rose-800 to-rose-900',
      hover: 'hover:from-rose-900 hover:to-rose-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-rose-800/40 dark:hover:border-rose-400/35 hover:shadow-md',
      linkHover: 'hover:text-rose-800 dark:hover:text-rose-400',
      ring: 'ring-2 ring-rose-800/20 ring-offset-4 ring-offset-white dark:ring-rose-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-rose-800 dark:text-rose-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(159,18,57,0.07),transparent_55%)]',
    },
    'flourish',
    { name: 'The Artist', description: 'Expression, taste, form', icon: '◻' },
  ),

  warrior: makeTheme(
    { body: 'font-warrior font-medium tracking-wide', display: 'font-warrior font-semibold tracking-[0.04em]' },
    {
      accent: 'from-amber-800 to-amber-900',
      hover: 'hover:from-amber-900 hover:to-amber-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-zinc-900/45 dark:hover:border-amber-600/40 hover:shadow-sm',
      linkHover: 'hover:text-amber-900 dark:hover:text-amber-400',
      ring: 'ring-2 ring-zinc-900/15 ring-offset-4 ring-offset-white dark:ring-amber-500/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-amber-900 dark:text-amber-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_0%_0%,rgba(15,23,42,0.06),transparent_45%),radial-gradient(ellipse_at_90%_0%,rgba(120,53,15,0.05),transparent_40%)]',
    },
    'lock',
    { name: 'The Warrior', description: 'Precision, discipline, clarity', icon: '▪' },
  ),

  healer: makeTheme(
    { body: 'font-healer font-medium tracking-tight' },
    {
      accent: 'from-teal-800 to-teal-900',
      hover: 'hover:from-teal-900 hover:to-teal-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-teal-800/35 dark:hover:border-teal-400/35 hover:shadow-md',
      linkHover: 'hover:text-teal-800 dark:hover:text-teal-400',
      ring: 'ring-2 ring-teal-800/20 ring-offset-4 ring-offset-white dark:ring-teal-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-teal-800 dark:text-teal-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(15,118,110,0.07),transparent_55%)]',
    },
    'breathe',
    { name: 'The Healer', description: 'Care, renewal, balance', icon: '◌' },
  ),

  alchemist: makeTheme(
    { body: 'font-alchemist font-medium', display: 'font-alchemist font-semibold' },
    {
      accent: 'from-violet-800 to-violet-900',
      hover: 'hover:from-violet-900 hover:to-violet-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-violet-800/40 dark:hover:border-violet-400/35 hover:shadow-md',
      linkHover: 'hover:text-violet-800 dark:hover:text-violet-400',
      ring: 'ring-2 ring-violet-800/20 ring-offset-4 ring-offset-white dark:ring-violet-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-violet-800 dark:text-violet-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(91,33,182,0.07),transparent_55%)]',
    },
    'transmute',
    { name: 'The Alchemist', description: 'Change, synthesis, craft', icon: '◈' },
  ),

  strategist: makeTheme(
    { body: 'font-strategist font-medium tracking-tight', display: 'font-strategist font-semibold tracking-tight' },
    {
      accent: 'from-sky-800 to-sky-900',
      hover: 'hover:from-sky-900 hover:to-sky-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-sky-800/40 dark:hover:border-sky-400/35 hover:shadow-sm',
      linkHover: 'hover:text-sky-800 dark:hover:text-sky-400',
      ring: 'ring-2 ring-sky-800/20 ring-offset-4 ring-offset-white dark:ring-sky-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-sky-800 dark:text-sky-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(3,105,161,0.07),transparent_55%)]',
    },
    'align',
    { name: 'The Strategist', description: 'Clarity, planning, signal', icon: '▢' },
  ),

  steward: makeTheme(
    { body: 'font-steward font-medium', display: 'font-steward font-semibold' },
    {
      accent: 'from-green-800 to-green-900',
      hover: 'hover:from-green-900 hover:to-green-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-green-800/35 dark:hover:border-green-400/35 hover:shadow-md',
      linkHover: 'hover:text-green-800 dark:hover:text-green-400',
      ring: 'ring-2 ring-green-800/20 ring-offset-4 ring-offset-white dark:ring-green-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-green-800 dark:text-green-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(22,101,52,0.07),transparent_55%)]',
    },
    'rise',
    { name: 'The Steward', description: 'Legacy, patience, ground', icon: '◎' },
  ),

  poet: makeTheme(
    { body: 'font-poet font-medium', display: 'font-poet font-semibold italic tracking-tight' },
    {
      accent: 'from-stone-700 to-stone-800',
      hover: 'hover:from-stone-800 hover:to-stone-900 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-stone-700/40 dark:hover:border-stone-400/35 hover:shadow-md',
      linkHover: 'hover:text-stone-700 dark:hover:text-stone-300',
      ring: 'ring-2 ring-stone-700/20 ring-offset-4 ring-offset-white dark:ring-stone-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-stone-700 dark:text-stone-300',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_25%_0%,rgba(68,64,60,0.06),transparent_55%)]',
    },
    'drift',
    { name: 'The Poet', description: 'Language, cadence, meaning', icon: '¶' },
  ),

  monk: makeTheme(
    { body: 'font-monk font-medium tracking-tight', display: 'font-monk font-semibold tracking-tight' },
    {
      accent: 'from-stone-800 to-zinc-900',
      hover: 'hover:from-zinc-900 hover:to-zinc-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-zinc-400/50 dark:hover:border-zinc-500/40',
      linkHover: 'hover:text-zinc-700 dark:hover:text-zinc-300',
      ring: 'ring-1 ring-zinc-400/40 ring-offset-4 ring-offset-white dark:ring-zinc-500/40 dark:ring-offset-zinc-950',
      accentSoft: 'text-zinc-600 dark:text-zinc-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_50%_0%,rgba(82,82,91,0.05),transparent_50%)]',
    },
    'breathe',
    { name: 'The Monk', description: 'Restraint, space, attention', icon: '·' },
  ),

  forge: makeTheme(
    {
      body: 'font-forge font-medium tracking-tight',
      display: 'font-forge-display font-semibold tracking-tight',
    },
    {
      accent: 'from-red-900 to-stone-900',
      hover: 'hover:from-red-950 hover:to-stone-950 hover:shadow-lg hover:shadow-zinc-950/10',
      cardHover: 'hover:border-red-900/35 dark:hover:border-red-500/35 hover:shadow-md',
      linkHover: 'hover:text-red-900 dark:hover:text-red-400',
      ring: 'ring-2 ring-red-900/20 ring-offset-4 ring-offset-white dark:ring-red-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-red-900 dark:text-red-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_10%_0%,rgba(127,29,29,0.08),transparent_50%),radial-gradient(ellipse_at_90%_20%,rgba(68,64,60,0.05),transparent_45%)]',
    },
    'snap',
    { name: 'The Forge', description: 'Heat, labor, making', icon: '⌁' },
  ),
};

logThemeConfig();
