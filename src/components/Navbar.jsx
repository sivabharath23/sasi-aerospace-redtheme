import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavScroll } from '@/hooks/useNavScroll';
import { NAV_LINKS } from '@/data/content';
import Button from '@/components/Button';

// ── Logo mark ────────────────────────────────────────────────────────────────
function LogoMark() {
  return (
    <a href="#hero" className="flex items-center gap-3 group">
      {/* Hex icon */}
      <div className="w-10 h-10 clip-hex bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light transition-colors duration-300">
        <span className="font-mono text-[10px] text-white font-bold tracking-tight">SA</span>
      </div>
      {/* Brand name */}
      <div className="font-condensed font-bold text-xl tracking-[3px] uppercase text-brand-white">
        Sasi<span className="text-primary"> Aero</span>space
      </div>
    </a>
  );
}

// ── Desktop nav link ──────────────────────────────────────────────────────────
function NavLink({ href, label }) {
  return (
    <a
      href={href}
      className="
        relative font-body text-[13px] font-medium tracking-[1.5px]
        uppercase text-steel hover:text-brand-white
        transition-colors duration-300 group py-1
      "
    >
      {label}
      <span
        className="
          absolute -bottom-1 left-0 h-[1.5px] w-0 bg-primary
          transition-all duration-300 ease-brand group-hover:w-full
        "
      />
    </a>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const scrolled  = useNavScroll(60);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        className={`
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          px-6 md:px-10 transition-all duration-400 ease-brand
          ${scrolled
            ? 'h-[60px] bg-secondary/90 backdrop-blur-xl border-b border-primary/20'
            : 'h-[72px] bg-transparent'}
        `}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <LogoMark />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <NavLink {...link} />
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button href="#contact" size="sm">Get a Quote</Button>
          </div>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setOpen(o => !o)}
          >
            <motion.span
              className="block w-6 h-0.5 bg-brand-white origin-center"
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-brand-white"
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-brand-white origin-center"
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed inset-0 z-40 bg-secondary/98 backdrop-blur-xl
              flex flex-col justify-center items-center gap-8
              lg:hidden
            "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  font-condensed text-3xl font-bold uppercase tracking-widest
                  text-brand-white hover:text-primary transition-colors duration-300
                "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button href="#contact" size="lg" onClick={() => setOpen(false)}>
                Get a Quote
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
