import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_SLIDES, STATS } from '@/data/content';
import Button from '@/components/Button';
import { staggerContainer, fadeSlideUp, EASE_BRAND } from '@/animations/variants';

// ── Scroll indicator ──────────────────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <span className="font-mono text-[9px] tracking-[3px] text-steel uppercase mb-1">Scroll</span>
      {[0, 0.2, 0.4].map((delay, i) => (
        <motion.span
          key={i}
          className="block w-1.5 h-1.5 rounded-full bg-primary"
          animate={{ y: [0, 6, 0], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.4, delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </motion.div>
  );
}

// ── Stat item ─────────────────────────────────────────────────────────────────
function StatItem({ value, label, index }) {
  return (
    <motion.div
      className="
        flex-1 flex flex-col items-center justify-center py-5 px-4
        border-r border-primary/15 last:border-r-0
        hover:bg-primary/5 transition-colors duration-300 cursor-default
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 + index * 0.1, duration: 0.5, ease: EASE_BRAND }}
    >
      <span className="font-condensed text-3xl md:text-4xl font-extrabold text-primary leading-none tracking-tight">
        {value}
      </span>
      <span className="font-mono text-[10px] tracking-[2px] text-steel uppercase mt-1.5">
        {label}
      </span>
    </motion.div>
  );
}

// ── Slide content ─────────────────────────────────────────────────────────────
function SlideContent({ slide, key: slideKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideKey}
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
        className="flex flex-col items-center text-center"
      >
        {/* Tag line */}
        <motion.div
          variants={fadeSlideUp}
          className="flex items-center gap-3 font-mono text-[11px] tracking-[4px] text-primary uppercase mb-6"
        >
          <span className="block h-px w-10 bg-primary/60" />
          <span>Bangalore, India · Est. 2013</span>
          <span className="block h-px w-10 bg-primary/60" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeSlideUp}
          className="font-condensed font-extrabold uppercase leading-[0.9] tracking-tight mb-6"
          style={{ fontSize: 'clamp(52px, 9vw, 108px)' }}
        >
          <span className="block text-brand-white">{slide.heading1}</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #C0392B 0%, #D4A017 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {slide.heading2}
          </span>
          <span className="block text-brand-white/50 font-light tracking-[6px]"
            style={{ fontSize: 'clamp(22px, 3.5vw, 48px)' }}>
            {slide.heading3}
          </span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          variants={fadeSlideUp}
          className="text-steel text-base md:text-lg leading-relaxed max-w-xl mb-10"
        >
          Superior CNC manufacturing, tool design, and 5-axis programming — 
          delivered with unparalleled quality and cost-effective turnaround.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeSlideUp} className="flex flex-wrap gap-4 justify-center">
          <Button href={slide.cta1.href} size="lg">{slide.cta1.label}</Button>
          <Button href={slide.cta2.href} variant="secondary" size="lg">{slide.cta2.label}</Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.08] }}
          transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        >
          <img
            src="https://sasiaerospace.com/assets/images/aero2.jpg"
            alt="Aerospace CNC manufacturing"
            className="w-full h-full object-cover"
            loading="eager"
            style={{ filter: 'brightness(0.28) saturate(0.8)' }}
          />
        </motion.div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(10,15,30,0.97) 0%, rgba(192,57,43,0.06) 50%, rgba(10,15,30,0.93) 100%)',
          }}
        />

        {/* Animated grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(192,57,43,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(192,57,43,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{ y: [0, 60] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pt-20">
        <SlideContent slide={HERO_SLIDES[current]} key={current} />
      </div>

      {/* Slide dots */}
      <motion.div
        className="relative z-10 flex justify-center gap-2 pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-1.5 bg-primary'
                : 'w-1.5 h-1.5 bg-steel/40 hover:bg-steel'
            }`}
          />
        ))}
      </motion.div>

      <ScrollIndicator />

      {/* Stats bar */}
      <div className="relative z-10 border-t border-primary/20 bg-secondary/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex divide-x divide-primary/15">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
