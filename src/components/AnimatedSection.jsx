import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeSlideUp } from '@/animations/variants';

/**
 * AnimatedSection
 * Wraps any content with scroll-triggered fade + slide-up animation.
 *
 * @param {object}  variants   – custom Framer variants (overrides default)
 * @param {number}  delay      – transition delay in seconds
 * @param {number}  threshold  – IntersectionObserver threshold
 * @param {string}  className  – Tailwind classes for the wrapper
 * @param {string}  as         – HTML element to render ('div', 'section', etc.)
 */
export default function AnimatedSection({
  children,
  variants   = fadeSlideUp,
  delay      = 0,
  threshold  = 0.12,
  className  = '',
  as         = 'div',
}) {
  const { ref, inView } = useScrollAnimation({ threshold });
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}
