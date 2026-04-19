import { motion } from 'framer-motion';
import { WHY_ITEMS } from '@/data/content';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTag from '@/components/SectionTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainer, fadeSlideUp } from '@/animations/variants';

// ── Why card ──────────────────────────────────────────────────────────────────
function WhyCard({ num, title, desc }) {
  return (
    <motion.div
      variants={fadeSlideUp}
      className="
        relative p-8 md:p-10
        bg-secondary-light border border-primary/10
        hover:border-primary/35 hover:-translate-y-1.5
        transition-all duration-300 ease-brand group overflow-hidden
      "
      whileHover={{ y: -6 }}
    >
      {/* Ghost number */}
      <div
        className="
          absolute -top-2 -left-1
          font-condensed font-extrabold leading-none select-none pointer-events-none
          transition-all duration-500 ease-brand
          text-primary/6 group-hover:text-primary/12
        "
        style={{ fontSize: '90px' }}
        aria-hidden
      >
        {num}
      </div>

      {/* Red line above title */}
      <div className="
        w-8 h-0.5 bg-primary mb-4
        transition-all duration-300 ease-brand group-hover:w-16
      " />

      <h3 className="
        font-condensed font-bold text-xl uppercase tracking-wide
        text-brand-white mb-3 relative z-10
      ">
        {title}
      </h3>
      <p className="text-steel text-sm leading-relaxed relative z-10">{desc}</p>

      {/* Radial glow on hover */}
      <div className="
        absolute -bottom-8 -right-8 w-32 h-32 rounded-full
        bg-primary/0 group-hover:bg-primary/8
        transition-all duration-500 ease-brand
        pointer-events-none
      " />
    </motion.div>
  );
}

// ── Why Us ────────────────────────────────────────────────────────────────────
export default function WhyUs() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.07 });

  return (
    <section id="why" className="py-24 bg-secondary-mid">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header – centred */}
        <AnimatedSection className="text-center max-w-xl mx-auto mb-14">
          <SectionTag center>Our Advantage</SectionTag>
          <h2
            className="font-condensed font-extrabold uppercase leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(34px, 4vw, 56px)' }}
          >
            Why Choose{' '}
            <span className="gradient-text">Sasi Aerospace</span>
          </h2>
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/8"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {WHY_ITEMS.map(item => (
            <div key={item.num} className="bg-secondary-mid">
              <WhyCard {...item} />
            </div>
          ))}
        </motion.div>

        {/* Bottom decorative band */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="
            flex flex-wrap items-center justify-center gap-6 md:gap-12
            py-8 px-8 border border-primary/15 bg-primary/3
          ">
            {['Aerospace-Grade Quality', 'Vericut Verified', 'Global Delivery', 'Licensed Software'].map(tag => (
              <div key={tag} className="flex items-center gap-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-mono text-[11px] tracking-[2px] text-steel uppercase">{tag}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
