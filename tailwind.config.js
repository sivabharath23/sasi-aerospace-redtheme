/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Extracted from Sasi Aerospace logo
        primary: {
          DEFAULT: '#C0392B',
          light:   '#E74C3C',
          dark:    '#922B21',
          50:      '#FDF2F1',
          100:     '#FAE0DE',
          200:     '#F4B8B3',
          300:     '#ED8C84',
          400:     '#E05A50',
          500:     '#C0392B',
          600:     '#A03020',
          700:     '#7D2418',
          800:     '#591A11',
          900:     '#36100A',
        },
        secondary: {
          DEFAULT: '#0A0F1E',
          mid:     '#111827',
          light:   '#1C2536',
          lighter: '#243044',
        },
        accent: {
          DEFAULT: '#D4A017',
          light:   '#E8B830',
          dark:    '#A67C10',
        },
        steel: {
          DEFAULT: '#8A9BB0',
          light:   '#B0BEC5',
          dark:    '#4A5568',
        },
        brand: {
          white: '#F5F7FA',
        },
      },
      fontFamily: {
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        body:      ['Barlow', 'sans-serif'],
        mono:      ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'slow-zoom':     'slowZoom 20s ease-in-out infinite alternate',
        'grid-move':     'gridMove 30s linear infinite',
        'scroll-bounce': 'scrollBounce 1.5s ease-in-out infinite',
        'pulse-ring':    'pulseRing 2s ease-out infinite',
      },
      keyframes: {
        slowZoom: {
          from: { transform: 'scale(1)' },
          to:   { transform: 'scale(1.08)' },
        },
        gridMove: {
          from: { transform: 'translateY(0)' },
          to:   { transform: 'translateY(60px)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(6px)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(192,57,43,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(192,57,43,0.06) 1px, transparent 1px)
        `,
        'brand-gradient': 'linear-gradient(135deg, #C0392B 0%, #D4A017 100%)',
        'hero-overlay':   'linear-gradient(135deg, rgba(10,15,30,0.96) 0%, rgba(192,57,43,0.07) 50%, rgba(10,15,30,0.92) 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      clipPath: {
        hex:     'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        chevron: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
        diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        arrow:   'polygon(0 0, 100% 50%, 0 100%, 20% 50%)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        'glow-red':  '0 8px 32px rgba(192,57,43,0.45)',
        'glow-sm':   '0 4px 16px rgba(192,57,43,0.25)',
        'card':      '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover':'0 12px 48px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
