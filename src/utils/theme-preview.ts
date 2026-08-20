import { THEME_NAMES, isValidThemeName, type ThemeName } from '../data/theme.types';

export { THEME_NAMES };

/** Resolve a preview theme from a query string value. */
export function themeFromQueryParam(
  value: string | null | undefined,
  fallback: ThemeName,
): ThemeName {
  if (value && isValidThemeName(value)) return value;
  return fallback;
}
