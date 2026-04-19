import Hero     from '@/components/sections/Hero';
import About    from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Software from '@/components/sections/Software';
import FAQ      from '@/components/sections/FAQ';
import WhyUs    from '@/components/sections/WhyUs';
import Contact  from '@/components/sections/Contact';

// Thin brand separator between sections
const Sep = () => (
  <div
    style={{
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(192,57,43,0.35), transparent)',
    }}
  />
);

export default function Home() {
  return (
    <>
      <Hero />
      <Sep />
      <About />
      <Sep />
      <Services />
      <Sep />
      <Software />
      <Sep />
      <FAQ />
      <Sep />
      <WhyUs />
      <Sep />
      <Contact />
    </>
  );
}
