import { motion } from 'framer-motion';
import { buttonHover } from '@/animations/variants';

/**
 * Button
 * @param {'primary'|'secondary'|'ghost'} variant
 * @param {'sm'|'md'|'lg'}               size
 * @param {string}  href   – renders <a> if set, otherwise <button>
 * @param {boolean} full   – full width
 */
export default function Button({
  children,
  variant = 'primary',
  size    = 'md',
  href,
  full    = false,
  onClick,
  type    = 'button',
  className = '',
  ...props
}) {
  const base = `
    inline-flex items-center justify-center gap-2 font-condensed font-bold
    uppercase tracking-widest transition-all duration-300 ease-brand
    clip-chevron relative overflow-hidden select-none will-animate
  `;

  const sizes = {
    sm: 'text-xs px-5 py-2.5',
    md: 'text-sm px-8 py-3.5',
    lg: 'text-base px-10 py-4',
  };

  const variants = {
    primary: `
      bg-primary text-white
      hover:bg-primary-light hover:shadow-glow-red
    `,
    secondary: `
      bg-transparent text-brand-white border border-brand-white/30
      hover:border-primary hover:text-primary
    `,
    ghost: `
      bg-transparent text-steel hover:text-brand-white
      border border-steel/20 hover:border-primary/40
    `,
  };

  const classes = [
    base,
    sizes[size],
    variants[variant],
    full ? 'w-full' : '',
    className,
  ].join(' ');

  const inner = (
    <>
      {/* Shimmer overlay */}
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.12))',
          transform: 'translateX(-100%)',
          transition: 'transform 0.5s',
        }}
        aria-hidden
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {inner}
    </motion.button>
  );
}
