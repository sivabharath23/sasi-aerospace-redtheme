import { motion } from 'framer-motion';
import { SERVICES } from '@/data/content';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTag from '@/components/SectionTag';
import MotionCard from '@/components/MotionCard';
import Button from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainer, fadeSlideUp } from '@/animations/variants';

// ── Service card ──────────────────────────────────────────────────────────────
function ServiceCard({ num, icon, name, desc, image, href, index }) {
  return (
    <motion.div variants={fadeSlideUp}>
      <MotionCard className="h-full flex flex-col group">
        {/* Image strip */}
        <div className="relative overflow-hidden h-44">
          <img
            src={image}
            alt={name}
            className="
              w-full h-full object-cover
              transition-transform duration-700 ease-brand
              group-hover:scale-105
            "
            style={{ filter: 'brightness(0.5) saturate(0.7)' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-light via-transparent to-transparent" />

          {/* Number badge */}
          <div className="
            absolute top-4 left-4
            font-mono text-[11px] tracking-[3px] text-primary
          ">
            {num}
          </div>

          {/* Icon */}
          <div className="
            absolute bottom-4 right-4 w-11 h-11
            bg-secondary-light border border-primary/30
            flex items-center justify-center text-xl
            transition-all duration-300 ease-brand
            group-hover:bg-primary group-hover:border-primary group-hover:scale-110
          ">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          <h3 className="font-condensed font-bold text-xl uppercase tracking-wide text-brand-white mb-3">
            {name}
          </h3>
          <p className="text-steel text-sm leading-relaxed flex-1">{desc}</p>

          {/* Arrow CTA */}
          <a
            href={href}
            className="
              mt-5 flex items-center gap-2
              font-mono text-[11px] tracking-[2px] text-primary uppercase
              hover:gap-4 transition-all duration-300 ease-brand w-fit
            "
          >
            <span>Enquire</span>
            <span className="block w-6 h-px bg-primary" />
            <span>→</span>
          </a>
        </div>
      </MotionCard>
    </motion.div>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────
export default function Services() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.08 });

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <AnimatedSection>
            <SectionTag>What We're Offering</SectionTag>
            <h2
              className="font-condensed font-extrabold uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(34px, 4vw, 56px)' }}
            >
              Select the Service<br />
              <span className="gradient-text">For Your Needs</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Button href="#contact" variant="secondary" size="sm">
              Request Consultation
            </Button>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/10"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {SERVICES.map((service, i) => (
            <div key={service.num} className="bg-secondary">
              <ServiceCard {...service} index={i} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
