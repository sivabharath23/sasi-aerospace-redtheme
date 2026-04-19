import { motion } from 'framer-motion';

/**
 * MotionCard
 * A card wrapper with hover: lift + scale + shadow + border-highlight
 */
export default function MotionCard({
  children,
  className = '',
  onClick,
  ...props
}) {
  return (
    <motion.div
      onClick={onClick}
      className={`
        relative bg-secondary-light border border-primary/10
        transition-colors duration-300 ease-brand cursor-default
        ${className}
      `}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={{
        rest: {
          y: 0,
          scale: 1,
          boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
        },
        hover: {
          y: -8,
          scale: 1.01,
          boxShadow: '0 16px 48px rgba(0,0,0,0.55)',
          transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
        },
        tap: {
          scale: 0.99,
          transition: { duration: 0.15 },
        },
      }}
      {...props}
    >
      {/* Top border highlight on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-primary origin-left"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        aria-hidden
      />
      {children}
    </motion.div>
  );
}
