import { AnimatePresence } from 'framer-motion';
import Navbar      from '@/components/Navbar';
import Footer      from '@/components/sections/Footer';
import PageWrapper from '@/components/PageWrapper';
import Home        from '@/pages/Home';

export default function App() {
  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <PageWrapper>
          <Home />
        </PageWrapper>
      </AnimatePresence>

      <Footer />
    </>
  );
}
