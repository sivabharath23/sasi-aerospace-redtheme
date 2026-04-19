import { motion } from 'framer-motion';
import { pageTransition } from '@/animations/variants';

/**
 * PageWrapper
 * Wraps page content with a fade + slide entry/exit transition.
 */
export default function PageWrapper({ children, className = '' }) {
  return (
    <motion.main
      className={className}
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.main>
  );
}
