import { useState, useEffect } from 'react';

/**
 * useNavScroll
 * Returns true when the user has scrolled past `threshold` pixels.
 */
export function useNavScroll(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

export default useNavScroll;
