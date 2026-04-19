import { motion } from 'framer-motion';
import { SOFTWARE } from '@/data/content';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTag from '@/components/SectionTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainer, fadeSlideUp, scaleUp } from '@/animations/variants';

// ── Software card ─────────────────────────────────────────────────────────────
function SoftwareCard({ abbr, name, desc, image }) {
  return (
    <motion.div
      variants={scaleUp}
      className="
        relative flex flex-col items-center text-center p-8
        bg-secondary-light border border-primary/10
        hover:border-primary/35 hover:-translate-y-2
        hover:bg-primary/5 transition-all duration-300 ease-brand
        cursor-default group
      "
    >
      {/* Licensed badge */}
      <div className="
        absolute top-4 right-4
        font-mono text-[9px] tracking-[1.5px] text-primary uppercase
        px-2 py-1 border border-primary/30 bg-primary/10
      ">
        Licensed
      </div>

      {/* Logo image with fallback abbr */}
      <div className="w-24 h-16 mb-5 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
          onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
        />
        <div
          className="hidden font-condensed font-extrabold text-5xl text-primary/60 group-hover:text-primary transition-colors duration-300"
        >
          {abbr}
        </div>
      </div>

      <h3 className="font-condensed font-bold text-lg uppercase tracking-wider text-brand-white mb-2">
        {name}
      </h3>
      <p className="text-steel text-sm leading-relaxed">{desc}</p>

      {/* Bottom accent line */}
      <div className="
        absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary
        w-0 group-hover:w-3/4 transition-all duration-400 ease-brand
      " />
    </motion.div>
  );
}

// ── Software section ──────────────────────────────────────────────────────────
export default function Software() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="software" className="py-24 bg-secondary-mid overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header – centred */}
        <AnimatedSection className="text-center max-w-xl mx-auto mb-14">
          <SectionTag center>Licensed Software Solutions</SectionTag>
          <h2
            className="font-condensed font-extrabold uppercase leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(34px, 4vw, 56px)' }}
          >
            Certified <span className="gradient-text">Excellence</span>
          </h2>
          <div className="brand-divider mx-auto" />
          <p className="text-steel text-[15px] leading-relaxed">
            We operate with industry-leading, fully licensed software platforms —
            ensuring the highest standards of precision and compliance in every project.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/8"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {SOFTWARE.map(sw => (
            <div key={sw.name} className="bg-secondary-mid">
              <SoftwareCard {...sw} />
            </div>
          ))}
        </motion.div>

        {/* Decorative separator */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <span className="font-mono text-[10px] tracking-[3px] text-primary/50 uppercase">
            All Software Fully Licensed
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>
    </section>
  );
}
