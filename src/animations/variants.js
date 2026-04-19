// ─────────────────────────────────────────────────────────────────────────────
// Shared Framer Motion variants
// ─────────────────────────────────────────────────────────────────────────────

export const EASE_BRAND = [0.25, 0.46, 0.45, 0.94];

/** Fade + slide up – default entry animation */
export const fadeSlideUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_BRAND },
  },
};

/** Fade in only */
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_BRAND },
  },
};

/** Slide in from left */
export const slideLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_BRAND },
  },
};

/** Slide in from right */
export const slideRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_BRAND },
  },
};

/** Scale up */
export const scaleUp = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_BRAND },
  },
};

/**
 * Stagger container – animates children with delay between them
 * @param {number} staggerChildren  - seconds between each child
 * @param {number} delayChildren    - initial delay before first child
 */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden:  {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Card hover spring */
export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
    transition: { duration: 0.3, ease: EASE_BRAND },
  },
  hover: {
    y: -8,
    scale: 1.01,
    boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
    transition: { duration: 0.3, ease: EASE_BRAND },
  },
};

/** Button hover */
export const buttonHover = {
  rest:  { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2, ease: EASE_BRAND } },
  tap:   { scale: 0.97 },
};

/** Page transition wrapper */
export const pageTransition = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_BRAND },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.3, ease: EASE_BRAND },
  },
};
