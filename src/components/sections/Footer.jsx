import { motion } from 'framer-motion';
import { FOOTER_LINKS, CONTACT } from '@/data/content';
import { fadeSlideUp, staggerContainer } from '@/animations/variants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// ── Footer link ───────────────────────────────────────────────────────────────
function FooterLink({ label, href }) {
  return (
    <li>
      <a
        href={href}
        className="
          flex items-center gap-2 text-steel text-[13px]
          hover:text-brand-white hover:pl-1
          transition-all duration-300 ease-brand group
        "
      >
        <span className="block w-0 h-px bg-primary transition-all duration-300 group-hover:w-4" />
        {label}
      </a>
    </li>
  );
}

// ── Footer col heading ────────────────────────────────────────────────────────
function ColHeading({ children }) {
  return (
    <h4 className="
      font-condensed font-bold text-[13px] uppercase tracking-[2px]
      text-brand-white mb-5 pb-3
      border-b border-primary/20
    ">
      {children}
    </h4>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
export default function Footer() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary-mid border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-8">

        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >

          {/* Brand column */}
          <motion.div variants={fadeSlideUp} className="lg:col-span-1">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 clip-hex bg-primary flex items-center justify-center group-hover:bg-primary-light transition-colors duration-300">
                <span className="font-mono text-[10px] text-white font-bold">SA</span>
              </div>
              <div className="font-condensed font-bold text-xl tracking-[3px] uppercase text-brand-white">
                Sasi<span className="text-primary"> Aero</span>space
              </div>
            </a>

            <p className="text-steel text-sm leading-relaxed mb-6">
              Precision CNC manufacturing, tool design, and aerospace programming 
              services — delivered with excellence from Bangalore, India to clients worldwide.
            </p>

            {/* Social placeholder buttons */}
            <div className="flex gap-2">
              {['in', 'tw', 'fb'].map(s => (
                <button
                  key={s}
                  aria-label={s}
                  className="
                    w-9 h-9 border border-primary/25 bg-primary/10
                    text-steel hover:bg-primary hover:border-primary hover:text-white
                    font-condensed font-bold text-xs uppercase
                    transition-all duration-300 ease-brand
                    flex items-center justify-center
                  "
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Navigate */}
          <motion.div variants={fadeSlideUp}>
            <ColHeading>Navigate</ColHeading>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.navigate.map(l => <FooterLink key={l.href} {...l} />)}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeSlideUp}>
            <ColHeading>Services</ColHeading>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map(l => <FooterLink key={l.label} {...l} />)}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeSlideUp}>
            <ColHeading>Contact</ColHeading>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g,'')}`}
                   className="text-steel text-sm hover:text-primary transition-colors duration-300">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}
                   className="text-steel text-sm hover:text-primary transition-colors duration-300 break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-steel text-sm leading-relaxed whitespace-pre-line">
                {CONTACT.address}
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="sep-line mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel/60 text-xs">
            © {year}{' '}
            <a href="#hero" className="text-primary hover:text-primary-light transition-colors duration-300">
              Sasi Aerospace
            </a>
            . All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[3px] text-primary/35 uppercase">
            Precision · Quality · Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
