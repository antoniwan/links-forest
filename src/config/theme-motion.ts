import type { ThemeMotion, ThemeRail } from '../data/theme.types';

const spring = (stiffness: number, damping: number, duration?: number) =>
  ({ type: 'spring' as const, stiffness, damping, ...(duration ? { duration } : {}) });

/** Shared tap — keeps active states consistent */
const tapPress = { scale: 0.985, transition: spring(500, 32) };

export const motionPresets = {
  /** Snappy, mechanical — builder / forge */
  snap: {
    cardHover: { y: -2, scale: 1.01, transition: spring(520, 28) },
    cardTap: tapPress,
    cardEntrance: { y: 18, filter: 'blur(4px)' },
    cardTransition: spring(380, 28),
    stagger: 0.035,
    socialHover: { scale: 1.06, transition: spring(420, 26) },
    rail: 'left' as ThemeRail,
  },
  /** Lateral prowling — wolf */
  stalk: {
    cardHover: { x: 6, transition: spring(300, 24) },
    cardTap: tapPress,
    cardEntrance: { x: -16, y: 8 },
    cardTransition: spring(280, 26),
    stagger: 0.05,
    socialHover: { x: 3, scale: 1.05, transition: spring(320, 24) },
    rail: 'slash' as ThemeRail,
  },
  /** Soft lift + haze — mystic / poet */
  drift: {
    cardHover: { y: -6, transition: spring(180, 18) },
    cardTap: { scale: 0.99, transition: spring(300, 30) },
    cardEntrance: { y: 24, filter: 'blur(8px)' },
    cardTransition: spring(160, 20),
    stagger: 0.07,
    socialHover: { y: -4, scale: 1.04, transition: spring(200, 20) },
    rail: 'glow' as ThemeRail,
  },
  /** Forceful punch — dragon */
  strike: {
    cardHover: { scale: 1.035, transition: spring(420, 20) },
    cardTap: { scale: 0.97, transition: spring(500, 30) },
    cardEntrance: { scale: 0.92, y: 12 },
    cardTransition: spring(340, 22),
    stagger: 0.04,
    socialHover: { scale: 1.1, rotate: -3, transition: spring(380, 18) },
    rail: 'frame' as ThemeRail,
  },
  /** Expressive tilt — artist */
  flourish: {
    cardHover: { y: -4, rotate: -0.6, transition: spring(240, 20) },
    cardTap: tapPress,
    cardEntrance: { y: 20, rotate: -1.5 },
    cardTransition: spring(220, 22),
    stagger: 0.06,
    socialHover: { scale: 1.08, rotate: 4, transition: spring(260, 20) },
    rail: 'bottom' as ThemeRail,
  },
  /** Crisp, disciplined — warrior */
  lock: {
    cardHover: { y: -1, transition: spring(600, 40) },
    cardTap: { scale: 0.99, transition: spring(600, 40) },
    cardEntrance: { y: 10 },
    cardTransition: spring(480, 36),
    stagger: 0.03,
    socialHover: { scale: 1.04, transition: spring(500, 34) },
    rail: 'left' as ThemeRail,
  },
  /** Gentle swell — healer / monk */
  breathe: {
    cardHover: { scale: 1.02, transition: spring(200, 22) },
    cardTap: { scale: 0.99, transition: spring(280, 28) },
    cardEntrance: { y: 16, scale: 0.98 },
    cardTransition: spring(200, 24),
    stagger: 0.055,
    socialHover: { scale: 1.07, transition: spring(220, 22) },
    rail: 'glow' as ThemeRail,
  },
  /** Precise horizontal — strategist */
  align: {
    cardHover: { x: 4, y: -2, transition: spring(360, 28) },
    cardTap: tapPress,
    cardEntrance: { x: -10, opacity: 0 },
    cardTransition: spring(320, 28),
    stagger: 0.04,
    socialHover: { y: -3, transition: spring(340, 26) },
    rail: 'bottom' as ThemeRail,
  },
  /** Slow grounded rise — steward */
  rise: {
    cardHover: { y: -3, transition: spring(160, 22) },
    cardTap: tapPress,
    cardEntrance: { y: 28 },
    cardTransition: spring(140, 22),
    stagger: 0.065,
    socialHover: { y: -2, scale: 1.05, transition: spring(180, 22) },
    rail: 'frame' as ThemeRail,
  },
  /** Alchemical shimmer via scale — alchemist */
  transmute: {
    cardHover: { scale: 1.02, y: -3, transition: spring(260, 20) },
    cardTap: tapPress,
    cardEntrance: { scale: 0.94, filter: 'blur(6px)' },
    cardTransition: spring(240, 22),
    stagger: 0.05,
    socialHover: { scale: 1.06, rotate: 2, transition: spring(280, 22) },
    rail: 'slash' as ThemeRail,
  },
} satisfies Record<string, ThemeMotion>;

export type MotionPresetName = keyof typeof motionPresets;
