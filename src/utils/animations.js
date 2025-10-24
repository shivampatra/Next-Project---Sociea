/**
 * Animation utility functions and constants
 * Reusable animation configurations for Framer Motion
 */

// Easing functions
export const easing = {
  easeInOut: [0.6, 0.05, 0.01, 0.9],
  easeOut: [0.6, 0.01, -0.05, 0.95],
  easeIn: [0.6, -0.05, 0.01, 0.99],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
}

// Fade animations
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.6, ease: easing.easeOut },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6 },
}

// Scale animations
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5, ease: easing.easeOut },
}

// Slide animations
export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
  transition: { duration: 0.6, ease: easing.easeOut },
}

export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },
  transition: { duration: 0.6, ease: easing.easeOut },
}

// Stagger children animation
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easing.easeOut },
}

// Hover animations
export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  whileTap: { scale: 0.95 },
}

export const hoverLift = {
  whileHover: { 
    y: -10,
    transition: { duration: 0.3 },
  },
}

// Rotate animations
export const rotate360 = {
  whileHover: { 
    rotate: 360,
    transition: { duration: 0.6 },
  },
}

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOut,
    },
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: easing.easeIn,
    },
  },
}

// Scroll reveal animation with GSAP
export const gsapScrollAnimation = {
  from: {
    opacity: 0,
    y: 100,
  },
  to: {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
  },
  scrollTrigger: {
    start: 'top 80%',
    end: 'top 20%',
    toggleActions: 'play none none reverse',
  },
}

// 3D Card tilt effect config
export const cardTiltConfig = {
  maxTilt: 15,
  perspective: 1000,
  scale: 1.05,
  speed: 400,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
}

// Loading spinner animation
export const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// Pulse animation
export const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Float animation
export const floatVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Text reveal animation
export const textReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: easing.easeOut,
    },
  }),
}

// Modal animations
export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easing.easeOut,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: easing.easeIn,
    },
  },
}

// Backdrop blur animation
export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

/**
 * Helper function to create scroll-triggered animations
 * @param {string} trigger - CSS selector for trigger element
 * @param {object} options - ScrollTrigger options
 */
export const createScrollAnimation = (trigger, options = {}) => ({
  scrollTrigger: {
    trigger,
    start: 'top 80%',
    end: 'top 20%',
    toggleActions: 'play none none reverse',
    ...options,
  },
})

/**
 * Helper to create stagger animation with custom delay
 * @param {number} stagger - Delay between children
 * @param {number} delay - Initial delay
 */
export const createStagger = (stagger = 0.1, delay = 0) => ({
  animate: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})