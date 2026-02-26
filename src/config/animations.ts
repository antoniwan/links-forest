/**
 * Animation Configuration
 *
 * Centralized animation configurations following NYT's animation principles:
 * - Subtle and purposeful
 * - Consistent timing and easing
 * - Performance optimized
 * - Accessible
 */

import type { Variants } from 'framer-motion';

// Common transition configurations
export const transitions = {
  // Quick, subtle interactions
  quick: {
    type: 'spring',
    stiffness: 400,
    damping: 30,
    duration: 0.2,
  },
  // Smooth, natural movements
  smooth: {
    type: 'spring',
    stiffness: 300,
    damping: 25,
    duration: 0.3,
  },
  // Deliberate, attention-grabbing
  deliberate: {
    type: 'spring',
    stiffness: 200,
    damping: 20,
    duration: 0.4,
  },
} as const;

// Common animation variants
export const variants = {
  // Fade in from bottom
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  // Fade in from top
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  // Scale in
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  // Stagger children
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  // Stagger item
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
} as const;

// Interactive animations
export const interactions = {
  // Subtle hover effect
  subtleHover: {
    scale: 1.02,
    transition: transitions.quick,
  },
  // Playful hover effect
  playfulHover: {
    scale: 1.05,
    rotate: 2,
    transition: transitions.smooth,
  },
  // Active state
  active: {
    scale: 0.98,
    transition: transitions.quick,
  },
} as const;

// Page transitions
export const pageTransitions = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: { opacity: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, filter: 'blur(10px)' },
  transition: transitions.smooth,
} as const;

// CSS classes for non-Framer Motion animations
export const cssTransitions = {
  // Quick transitions
  quick: 'transition-all duration-200 ease-out',
  // Smooth transitions
  smooth: 'transition-all duration-300 ease-in-out',
  // Deliberate transitions
  deliberate: 'transition-all duration-400 ease-in-out',
} as const;
