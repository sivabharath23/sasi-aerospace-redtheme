import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS, CERTIFICATIONS } from '@/data/content';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTag from '@/components/SectionTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { slideLeft, slideRight, staggerContainer, fadeSlideUp, EASE_BRAND } from '@/animations/variants';

// ── FAQ item (accordion) ──────────────────────────────────────────────────────
function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div
      className={`
        border transition-colors duration-300 ease-brand cursor-pointer
        ${isOpen ? 'border-primary/35 bg-primary/5' : 'border-primary/10 bg-secondary-light hover:border-primary/25'}
      `}
      onClick={onClick}
    >
      {/* Question row */}
      <div className="flex items-center justify-between gap-4 p-5 md:p-6">
        <h3 className="font-condensed font-bold text-lg md:text-xl uppercase tracking-wide text-brand-white leading-tight">
          {q}
        </h3>
        <motion.div
          className={`
            flex-shrink-0 w-8 h-8 flex items-center justify-center
            border text-lg font-light transition-colors duration-300
            ${isOpen
              ? 'bg-primary border-primary text-white rotate-45'
              : 'border-primary/30 bg-primary/10 text-primary'}
          `}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: EASE_BRAND }}
        >
          +
        </motion.div>
      </div>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_BRAND }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 text-steel text-[15px] leading-relaxed border-t border-primary/10 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Certification card ────────────────────────────────────────────────────────
function CertCard({ name, desc }) {
  return (
    <motion.div
      variants={fadeSlideUp}
      className="
        flex gap-3 items-start
        pl-4 border-l-2 border-primary
        py-3 hover:bg-primary/5
        transition-colors duration-300
      "
    >
      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
      <div>
        <p className="font-condensed font-bold text-base uppercase tracking-wider text-brand-white mb-0.5">
          {name}
        </p>
        <p className="text-steel text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// ── FAQ section ───────────────────────────────────────────────────────────────
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref: leftRef, inView: leftInView }   = useScrollAnimation();
  const { ref: rightRef, inView: rightInView } = useScrollAnimation();

  const toggle = i => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section id="faq" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-24">

          {/* ── Left: Certifications (sticky on desktop) ── */}
          <motion.div
            ref={leftRef}
            variants={slideLeft}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="lg:sticky lg:top-28 self-start"
          >
            <div className="bg-secondary-light border border-primary/20 p-8 md:p-10">
              <SectionTag>Certifications & Compliance</SectionTag>
              <h2
                className="font-condensed font-extrabold uppercase leading-[0.95] tracking-tight mb-4"
                style={{ fontSize: 'clamp(30px, 3.5vw, 46px)' }}
              >
                Certified for{' '}
                <span className="gradient-text">Aerospace</span>
              </h2>
              <div className="brand-divider" />
              <p className="text-steel text-[15px] leading-relaxed mb-8">
                Our compliance and certification framework ensures every deliverable
                meets the strictest aerospace industry standards globally.
              </p>

              <motion.div
                className="flex flex-col gap-4"
                variants={staggerContainer(0.1)}
                initial="hidden"
                animate={leftInView ? 'visible' : 'hidden'}
              >
                {CERTIFICATIONS.map(cert => (
                  <CertCard key={cert.name} {...cert} />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: FAQ accordion ── */}
          <motion.div
            ref={rightRef}
            variants={slideRight}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
          >
            <SectionTag>Get Information</SectionTag>
            <h2
              className="font-condensed font-extrabold uppercase leading-[0.95] tracking-tight mb-8"
              style={{ fontSize: 'clamp(30px, 3.5vw, 46px)' }}
            >
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>

            <div className="flex flex-col gap-px">
              {FAQS.map((faq, i) => (
                <FaqItem
                  key={i}
                  {...faq}
                  isOpen={openIndex === i}
                  onClick={() => toggle(i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
