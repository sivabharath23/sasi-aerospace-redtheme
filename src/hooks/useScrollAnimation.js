import { useInView } from 'react-intersection-observer';

/**
 * useScrollAnimation
 * Returns [ref, controls] for triggering Framer Motion animations
 * when an element enters the viewport.
 *
 * @param {object} options
 * @param {number}  options.threshold  - 0–1, fraction visible before trigger
 * @param {boolean} options.triggerOnce - only animate once (default: true)
 */
export function useScrollAnimation({ threshold = 0.15, triggerOnce = true } = {}) {
  const { ref, inView } = useInView({ threshold, triggerOnce });
  return { ref, inView };
}

export default useScrollAnimation;
