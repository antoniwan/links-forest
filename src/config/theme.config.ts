import type { ThemeName, ThemeConfig } from '../data/theme.types';
import { logDataLoading } from '../utils/logger';
import { motionPresets, type MotionPresetName } from './theme-motion';

const logThemeConfig = logDataLoading('theme.config');

/**
 * Shared calling-card chrome: white page, zinc type, tray cards.
 * Each theme owns radius, wells, hints, atmosphere, motion, and type.
 */
const shared = {
  button:
    'transition-all duration-200 ease-out hover:scale-[1.01] active:scale-[0.99] bg-linear-to-r from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 text-white font-medium tracking-wide',
  link: 'transition-colors duration-200 ease-out hover:underline hover:underline-offset-4',
  border: 'transition-colors duration-200 ease-out border-zinc-200 dark:border-zinc-700',
  card: 'bg-zinc-50/90 dark:bg-zinc-900/70 transition-all duration-200 ease-out shadow-none border border-zinc-200/90 dark:border-zinc-700/80 hover:bg-white dark:hover:bg-zinc-900',
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
  radius: string;
  well: string;
  wellHover: string;
  hint: string;
  hintText: string;
  featured: string;
  kicker: string;
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
      card: `${shared.card} ${accent.radius} ${accent.cardHover}`,
      link: `${shared.link} ${accent.linkHover}`,
      border: shared.border,
      font: fonts.body,
      display: fonts.display ?? fonts.body,
      atmosphere: accent.atmosphere,
      ring: accent.ring,
      accentSoft: accent.accentSoft,
      radius: accent.radius,
      well: accent.well,
      wellHover: accent.wellHover,
      hint: accent.hint,
      hintText: accent.hintText,
      featured: accent.featured,
      kicker: accent.kicker,
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
      ring: 'ring-2 ring-amber-800/20 ring-offset-2 ring-offset-white dark:ring-amber-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-amber-800 dark:text-amber-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_8%_6%,rgba(180,83,9,0.1),transparent_42%),radial-gradient(ellipse_at_92%_0%,rgba(113,113,122,0.05),transparent_36%)]',
      radius: 'rounded-lg',
      well: 'bg-amber-50/90 dark:bg-amber-950/40',
      wellHover: 'hover:bg-amber-50 dark:hover:bg-amber-950/50',
      hint: 'bg-zinc-900 dark:bg-amber-100',
      hintText: 'text-amber-50 dark:text-amber-950',
      featured: 'border-amber-800/30 dark:border-amber-500/40',
      kicker: 'tracking-[0.16em]',
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
      ring: 'ring-2 ring-blue-800/20 ring-offset-2 ring-offset-white dark:ring-blue-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-blue-800 dark:text-blue-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_6%_8%,rgba(30,64,175,0.09),transparent_44%),radial-gradient(ellipse_at_100%_12%,rgba(51,65,85,0.05),transparent_38%)]',
      radius: 'rounded-xl',
      well: 'bg-blue-50/90 dark:bg-blue-950/35',
      wellHover: 'hover:bg-blue-50 dark:hover:bg-blue-950/50',
      hint: 'bg-slate-900 dark:bg-blue-100',
      hintText: 'text-blue-50 dark:text-blue-950',
      featured: 'border-blue-800/30 dark:border-blue-400/40',
      kicker: 'tracking-[0.2em]',
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
      ring: 'ring-2 ring-indigo-800/20 ring-offset-2 ring-offset-white dark:ring-indigo-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-indigo-800 dark:text-indigo-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_18%_0%,rgba(67,56,202,0.11),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(49,46,129,0.05),transparent_42%)]',
      radius: 'rounded-2xl',
      well: 'bg-indigo-50/90 dark:bg-indigo-950/40',
      wellHover: 'hover:bg-indigo-50 dark:hover:bg-indigo-950/55',
      hint: 'bg-indigo-950 dark:bg-indigo-100',
      hintText: 'text-indigo-50 dark:text-indigo-950',
      featured: 'border-indigo-800/30 dark:border-indigo-400/35',
      kicker: 'tracking-[0.2em]',
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
      ring: 'ring-2 ring-orange-800/25 ring-offset-2 ring-offset-white dark:ring-orange-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-orange-800 dark:text-orange-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_10%_0%,rgba(154,52,18,0.12),transparent_46%),radial-gradient(ellipse_at_90%_8%,rgba(124,45,18,0.05),transparent_36%)]',
      radius: 'rounded-lg',
      well: 'bg-orange-50/90 dark:bg-orange-950/40',
      wellHover: 'hover:bg-orange-50 dark:hover:bg-orange-950/55',
      hint: 'bg-orange-950 dark:bg-orange-100',
      hintText: 'text-orange-50 dark:text-orange-950',
      featured: 'border-orange-800/40 dark:border-orange-400/40',
      kicker: 'tracking-[0.12em]',
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
      ring: 'ring-2 ring-rose-800/20 ring-offset-2 ring-offset-white dark:ring-rose-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-rose-800 dark:text-rose-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_14%_4%,rgba(159,18,57,0.09),transparent_48%),radial-gradient(ellipse_at_96%_18%,rgba(190,18,60,0.04),transparent_40%)]',
      radius: 'rounded-2xl',
      well: 'bg-rose-50/90 dark:bg-rose-950/35',
      wellHover: 'hover:bg-rose-50 dark:hover:bg-rose-950/50',
      hint: 'bg-rose-950 dark:bg-rose-100',
      hintText: 'text-rose-50 dark:text-rose-950',
      featured: 'border-rose-800/30 dark:border-rose-400/35',
      kicker: 'tracking-[0.18em]',
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
      ring: 'ring-2 ring-zinc-900/15 ring-offset-2 ring-offset-white dark:ring-amber-500/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-amber-900 dark:text-amber-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_0%_4%,rgba(15,23,42,0.07),transparent_40%),radial-gradient(ellipse_at_92%_0%,rgba(120,53,15,0.06),transparent_36%)]',
      radius: 'rounded-lg',
      well: 'bg-zinc-100/90 dark:bg-zinc-800/80',
      wellHover: 'hover:bg-zinc-100 dark:hover:bg-zinc-800',
      hint: 'bg-zinc-900 dark:bg-amber-50',
      hintText: 'text-amber-50 dark:text-zinc-900',
      featured: 'border-zinc-900/25 dark:border-amber-600/40',
      kicker: 'tracking-[0.22em]',
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
      ring: 'ring-2 ring-teal-800/20 ring-offset-2 ring-offset-white dark:ring-teal-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-teal-800 dark:text-teal-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_16%_2%,rgba(15,118,110,0.1),transparent_48%),radial-gradient(ellipse_at_88%_16%,rgba(19,78,74,0.04),transparent_40%)]',
      radius: 'rounded-2xl',
      well: 'bg-teal-50/90 dark:bg-teal-950/35',
      wellHover: 'hover:bg-teal-50 dark:hover:bg-teal-950/50',
      hint: 'bg-teal-950 dark:bg-teal-100',
      hintText: 'text-teal-50 dark:text-teal-950',
      featured: 'border-teal-800/30 dark:border-teal-400/35',
      kicker: 'tracking-[0.18em]',
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
      ring: 'ring-2 ring-violet-800/20 ring-offset-2 ring-offset-white dark:ring-violet-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-violet-800 dark:text-violet-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_12%_0%,rgba(91,33,182,0.1),transparent_46%),radial-gradient(ellipse_at_94%_22%,rgba(76,29,149,0.05),transparent_40%)]',
      radius: 'rounded-xl',
      well: 'bg-violet-50/90 dark:bg-violet-950/40',
      wellHover: 'hover:bg-violet-50 dark:hover:bg-violet-950/55',
      hint: 'bg-violet-950 dark:bg-violet-100',
      hintText: 'text-violet-50 dark:text-violet-950',
      featured: 'border-violet-800/30 dark:border-violet-400/35',
      kicker: 'tracking-[0.16em]',
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
      ring: 'ring-2 ring-sky-800/20 ring-offset-2 ring-offset-white dark:ring-sky-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-sky-800 dark:text-sky-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_8%_6%,rgba(3,105,161,0.09),transparent_42%),radial-gradient(ellipse_at_100%_0%,rgba(12,74,110,0.04),transparent_36%)]',
      radius: 'rounded-lg',
      well: 'bg-sky-50/90 dark:bg-sky-950/35',
      wellHover: 'hover:bg-sky-50 dark:hover:bg-sky-950/50',
      hint: 'bg-sky-950 dark:bg-sky-100',
      hintText: 'text-sky-50 dark:text-sky-950',
      featured: 'border-sky-800/30 dark:border-sky-400/35',
      kicker: 'tracking-[0.2em]',
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
      ring: 'ring-2 ring-green-800/20 ring-offset-2 ring-offset-white dark:ring-green-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-green-800 dark:text-green-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_10%_4%,rgba(22,101,52,0.09),transparent_46%),radial-gradient(ellipse_at_90%_14%,rgba(20,83,45,0.04),transparent_38%)]',
      radius: 'rounded-xl',
      well: 'bg-green-50/90 dark:bg-green-950/35',
      wellHover: 'hover:bg-green-50 dark:hover:bg-green-950/50',
      hint: 'bg-green-950 dark:bg-green-100',
      hintText: 'text-green-50 dark:text-green-950',
      featured: 'border-green-800/30 dark:border-green-400/35',
      kicker: 'tracking-[0.16em]',
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
      ring: 'ring-2 ring-stone-700/20 ring-offset-2 ring-offset-white dark:ring-stone-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-stone-700 dark:text-stone-300',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_20%_0%,rgba(68,64,60,0.08),transparent_50%),radial-gradient(ellipse_at_78%_24%,rgba(87,83,78,0.04),transparent_42%)]',
      radius: 'rounded-2xl',
      well: 'bg-stone-100/90 dark:bg-stone-800/70',
      wellHover: 'hover:bg-stone-100 dark:hover:bg-stone-800',
      hint: 'bg-stone-800 dark:bg-stone-100',
      hintText: 'text-stone-50 dark:text-stone-900',
      featured: 'border-stone-700/30 dark:border-stone-400/35',
      kicker: 'tracking-[0.14em] italic',
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
      ring: 'ring-1 ring-zinc-400/40 ring-offset-2 ring-offset-white dark:ring-zinc-500/40 dark:ring-offset-zinc-950',
      accentSoft: 'text-zinc-600 dark:text-zinc-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_50%_0%,rgba(82,82,91,0.05),transparent_46%)]',
      radius: 'rounded-2xl',
      well: 'bg-zinc-100/80 dark:bg-zinc-800/60',
      wellHover: 'hover:bg-zinc-100 dark:hover:bg-zinc-800/80',
      hint: 'bg-zinc-800 dark:bg-zinc-100',
      hintText: 'text-zinc-50 dark:text-zinc-900',
      featured: 'border-zinc-300/80 dark:border-zinc-600',
      kicker: 'tracking-[0.28em]',
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
      ring: 'ring-2 ring-red-900/20 ring-offset-2 ring-offset-white dark:ring-red-400/30 dark:ring-offset-zinc-950',
      accentSoft: 'text-red-900 dark:text-red-400',
      atmosphere:
        'bg-[radial-gradient(ellipse_at_4%_0%,rgba(127,29,29,0.11),transparent_44%),radial-gradient(ellipse_at_96%_18%,rgba(68,64,60,0.06),transparent_40%)]',
      radius: 'rounded-lg',
      well: 'bg-red-50/80 dark:bg-red-950/35',
      wellHover: 'hover:bg-red-50 dark:hover:bg-red-950/50',
      hint: 'bg-stone-950 dark:bg-red-100',
      hintText: 'text-red-50 dark:text-red-950',
      featured: 'border-red-900/30 dark:border-red-500/40',
      kicker: 'tracking-[0.14em]',
    },
    'snap',
    { name: 'The Forge', description: 'Heat, labor, making', icon: '⌁' },
  ),
};

logThemeConfig();
