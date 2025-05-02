/**
 * Theme Configuration
 *
 * This file defines the available themes and their visual styles.
 *
 * To change your theme:
 * 1. Go to src/config/user.config.ts
 * 2. Find the theme.active property
 * 3. Set it to one of the theme names below
 *
 * Available themes:
 * - wolf: Cool grays and blues
 * - fox: Warm oranges and browns
 * - owl: Deep purples and dark blues
 * - raven: Dark blacks and grays
 * - deer: Earthy browns and greens
 * - bear: Rich browns and golds
 * - eagle: Majestic golds and browns
 * - salmon: Vibrant pinks and oranges
 * - otter: Playful blues and teals
 * - lynx: Mysterious grays and silvers
 */

import type { Theme, ThemeConfig } from "./types";

export const ACTIVE_THEME: Theme = "wolf";

export const themeConfig: Record<Theme, ThemeConfig> = {
  wolf: {
    bg: "bg-gray-100 dark:bg-gray-900",
    text: "text-gray-900 dark:text-gray-100",
    accent:
      "border-blue-500 hover:border-blue-600 dark:border-blue-400 dark:hover:border-blue-300",
  },
  fox: {
    bg: "bg-orange-50 dark:bg-orange-950",
    text: "text-orange-900 dark:text-orange-100",
    accent:
      "border-orange-500 hover:border-orange-600 dark:border-orange-400 dark:hover:border-orange-300",
  },
  owl: {
    bg: "bg-purple-50 dark:bg-purple-950",
    text: "text-purple-900 dark:text-purple-100",
    accent:
      "border-indigo-500 hover:border-indigo-600 dark:border-indigo-400 dark:hover:border-indigo-300",
  },
  raven: {
    bg: "bg-gray-900 dark:bg-black",
    text: "text-gray-100 dark:text-gray-200",
    accent:
      "border-gray-700 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-500",
  },
  deer: {
    bg: "bg-green-50 dark:bg-green-950",
    text: "text-green-900 dark:text-green-100",
    accent:
      "border-emerald-500 hover:border-emerald-600 dark:border-emerald-400 dark:hover:border-emerald-300",
  },
  bear: {
    bg: "bg-amber-50 dark:bg-amber-950",
    text: "text-amber-900 dark:text-amber-100",
    accent:
      "border-amber-500 hover:border-amber-600 dark:border-amber-400 dark:hover:border-amber-300",
  },
  eagle: {
    bg: "bg-yellow-50 dark:bg-yellow-950",
    text: "text-yellow-900 dark:text-yellow-100",
    accent:
      "border-yellow-500 hover:border-yellow-600 dark:border-yellow-400 dark:hover:border-yellow-300",
  },
  salmon: {
    bg: "bg-pink-50 dark:bg-pink-950",
    text: "text-pink-900 dark:text-pink-100",
    accent:
      "border-rose-500 hover:border-rose-600 dark:border-rose-400 dark:hover:border-rose-300",
  },
  otter: {
    bg: "bg-cyan-50 dark:bg-cyan-950",
    text: "text-cyan-900 dark:text-cyan-100",
    accent:
      "border-teal-500 hover:border-teal-600 dark:border-teal-400 dark:hover:border-teal-300",
  },
  lynx: {
    bg: "bg-slate-50 dark:bg-slate-950",
    text: "text-slate-900 dark:text-slate-100",
    accent:
      "border-slate-500 hover:border-slate-600 dark:border-slate-400 dark:hover:border-slate-300",
  },
};
