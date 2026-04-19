import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/data/content';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTag from '@/components/SectionTag';
import Button from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { slideLeft, slideRight, fadeSlideUp, EASE_BRAND } from '@/animations/variants';

// ── Contact detail row ────────────────────────────────────────────────────────
function ContactDetail({ icon, label, value, href }) {
  const content = href
    ? <a href={href} className="text-brand-white hover:text-primary transition-colors duration-300 break-words">{value}</a>
    : <span className="text-brand-white whitespace-pre-line">{value}</span>;

  return (
    <div className="flex gap-4 items-start py-5 border-b border-primary/10 last:border-b-0">
      {/* Icon box */}
      <div className="
        w-10 h-10 flex-shrink-0
        border border-primary/25 bg-primary/10
        flex items-center justify-center text-base
      ">
        {icon}
      </div>
      <div>
        <p className="font-mono text-[10px] tracking-[2px] text-primary uppercase mb-1">{label}</p>
        <p className="text-[15px] leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

// ── Form field ────────────────────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] tracking-[2px] text-steel uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass = `
  w-full bg-white/4 border border-primary/20 text-brand-white
  px-4 py-3 text-[15px] font-body
  focus:outline-none focus:border-primary focus:bg-primary/5
  transition-all duration-300 ease-brand
  placeholder:text-steel/50
`;

// ── Contact ───────────────────────────────────────────────────────────────────
export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const { ref: leftRef,  inView: leftInView  } = useScrollAnimation();
  const { ref: rightRef, inView: rightInView } = useScrollAnimation();

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1400);
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-24">

          {/* ── Left: Info ── */}
          <motion.div
            ref={leftRef}
            variants={slideLeft}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
          >
            <SectionTag>Get In Touch</SectionTag>
            <h2
              className="font-condensed font-extrabold uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(34px, 4vw, 56px)' }}
            >
              Start Your{' '}
              <span className="gradient-text">Project</span> Today
            </h2>
            <div className="brand-divider" />
            <p className="text-steel text-[15px] leading-relaxed mb-8">
              Looking for effective and affordable CNC programming services?
              Get in touch with us — we're ready to help you make parts faster
              with our precision programming skills.
            </p>

            <ContactDetail icon="📞" label="Phone"   href={`tel:${CONTACT.phone.replace(/\s/g,'')}`} value={CONTACT.phone} />
            <ContactDetail icon="✉"  label="Email"   href={`mailto:${CONTACT.email}`}               value={CONTACT.email} />
            <ContactDetail icon="◎"  label="Address" value={CONTACT.address} />

            {/* Map placeholder */}
            <div className="mt-8 border border-primary/20 bg-secondary-light p-6">
              <p className="font-mono text-[10px] tracking-[3px] text-primary/60 uppercase mb-2">Location</p>
              <p className="font-condensed font-bold text-lg uppercase text-brand-white">
                KSSIDC Industrial Estate
              </p>
              <p className="text-steel text-sm">Veerasandra, Hosur Main Road, Bangalore – 560 100</p>
              <a
                href="https://maps.google.com/?q=KSSIDC+Industrial+Estate+Veerasandra+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 mt-3
                  font-mono text-[11px] tracking-[2px] text-primary uppercase
                  hover:gap-4 transition-all duration-300 ease-brand
                "
              >
                View on Maps →
              </a>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            ref={rightRef}
            variants={slideRight}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
          >
            <div className="bg-secondary-light border border-primary/15 p-8 md:p-10">
              <h3 className="font-condensed font-bold text-2xl uppercase tracking-wide text-brand-white mb-8">
                Request a Quote
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name">
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Company">
                    <input
                      type="text"
                      placeholder="Your Company"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Email Address">
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className={inputClass}
                  />
                </Field>

                <Field label="Service Required">
                  <select required className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" className="bg-secondary-mid">Select a service…</option>
                    <option className="bg-secondary-mid">CNC Programming (3/4/5 Axis)</option>
                    <option className="bg-secondary-mid">Custom Tool Design</option>
                    <option className="bg-secondary-mid">3D Modelling &amp; Detailing</option>
                    <option className="bg-secondary-mid">Machine Simulation &amp; Verification</option>
                    <option className="bg-secondary-mid">Materials Consultation</option>
                    <option className="bg-secondary-mid">Other</option>
                  </select>
                </Field>

                <Field label="Project Details">
                  <textarea
                    rows={4}
                    placeholder="Describe your project requirements, materials, timelines, and any specific machine requirements…"
                    className={`${inputClass} resize-y min-h-[110px]`}
                  />
                </Field>

                <motion.button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`
                    clip-chevron w-full py-4
                    font-condensed font-bold text-[15px] tracking-[3px] uppercase
                    transition-all duration-300 ease-brand
                    ${status === 'sent'
                      ? 'bg-green-700 text-white cursor-default'
                      : status === 'sending'
                        ? 'bg-primary/60 text-white/70 cursor-wait'
                        : 'bg-primary text-white hover:bg-primary-light hover:shadow-glow-red cursor-pointer'}
                  `}
                  whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                >
                  {status === 'sending' ? 'Sending…'
                   : status === 'sent'   ? '✓ Request Sent!'
                   : 'Send Request →'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
