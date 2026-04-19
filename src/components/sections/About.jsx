import { motion } from 'framer-motion';
import { ABOUT } from '@/data/content';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTag from '@/components/SectionTag';
import Button from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { slideLeft, slideRight, staggerContainer, fadeSlideUp } from '@/animations/variants';

// ── Feature tile ──────────────────────────────────────────────────────────────
function FeatureTile({ icon, label, desc }) {
  return (
    <motion.div
      className="
        flex gap-3 items-start p-4
        border border-primary/15 bg-primary/3
        hover:border-primary/40 hover:bg-primary/7
        transition-all duration-300 ease-brand
      "
      variants={fadeSlideUp}
      whileHover={{ x: 4 }}
    >
      {/* Diamond icon */}
      <div className="
        w-8 h-8 flex-shrink-0 clip-diamond bg-primary
        flex items-center justify-center text-white text-xs font-bold
      ">
        {icon}
      </div>
      <div>
        <p className="font-condensed font-bold text-sm uppercase tracking-wider text-brand-white mb-0.5">
          {label}
        </p>
        <p className="text-steel text-xs leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
export default function About() {
  const { ref: imgRef, inView: imgInView } = useScrollAnimation();
  const { ref: textRef, inView: textInView } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-secondary-mid">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left: Image ── */}
          <motion.div
            ref={imgRef}
            variants={slideLeft}
            initial="hidden"
            animate={imgInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Corner-bracket frame */}
            <div className="relative overflow-hidden border border-primary/30 group">
              {/* Top-left corner accent */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary z-10 pointer-events-none" />
              {/* Bottom-right corner accent */}
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary z-10 pointer-events-none" />

              <img
                src={ABOUT.image}
                alt="Sasi Aerospace CNC operations"
                className="w-full h-full object-cover block transition-transform duration-700 ease-brand group-hover:scale-[1.03]"
                style={{ filter: 'brightness(0.85) saturate(0.9)' }}
                loading="lazy"
              />

              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Hex badge */}
            <motion.div
              className="
                absolute -bottom-5 -right-5
                w-28 h-28 clip-hex bg-primary
                flex flex-col items-center justify-center
                hidden md:flex
              "
              initial={{ scale: 0, rotate: -30 }}
              animate={imgInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <span className="font-condensed font-extrabold text-3xl text-white leading-none">11+</span>
              <span className="font-mono text-[9px] tracking-wider text-white/80 uppercase text-center leading-tight mt-1">
                Years of<br/>Excellence
              </span>
            </motion.div>

            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 opacity-20 pointer-events-none hidden lg:block"
              style={{
                backgroundImage: 'radial-gradient(circle, #C0392B 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            ref={textRef}
            variants={slideRight}
            initial="hidden"
            animate={textInView ? 'visible' : 'hidden'}
          >
            <SectionTag>{ABOUT.tag}</SectionTag>

            <h2
              className="font-condensed font-extrabold uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(34px, 4vw, 56px)' }}
            >
              Excellence in{' '}
              <span className="gradient-text">Aerospace</span>{' '}
              Solutions
            </h2>

            <div className="brand-divider" />

            <p className="font-condensed font-semibold text-xl text-brand-white/80 mb-4">
              {ABOUT.subtitle}
            </p>

            {ABOUT.body.map((para, i) => (
              <p key={i} className="text-steel text-[15px] leading-relaxed mb-3">
                {para}
              </p>
            ))}

            {/* Feature grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 mt-8"
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate={textInView ? 'visible' : 'hidden'}
            >
              {ABOUT.features.map(f => (
                <FeatureTile key={f.label} {...f} />
              ))}
            </motion.div>

            <div className="mt-8">
              <Button href={ABOUT.cta.href} size="md">
                {ABOUT.cta.label} →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
