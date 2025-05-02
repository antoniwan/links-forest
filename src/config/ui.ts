/**
 * Available size options for UI components
 */
export type Size = "sm" | "md" | "lg";

/**
 * Mapping of size options to their corresponding Tailwind classes
 */
export const sizeClasses: Record<Size, string> = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
} as const;

/**
 * Type guard to check if a string is a valid Size
 */
export function isValidSize(size: string): size is Size {
  return size in sizeClasses;
}
