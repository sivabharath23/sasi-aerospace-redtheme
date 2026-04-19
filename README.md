# Sasi Aerospace — Modern React Website

Premium redesign of [sasiaerospace.com](https://sasiaerospace.com) built with:
- **React 18** (functional components + hooks)
- **Tailwind CSS** (brand-configured utility classes)
- **Framer Motion** (scroll + hover + page animations)
- **Vite** (lightning-fast dev server)

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🎨 Brand Colors (tailwind.config.js)

| Token       | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| `primary`   | `#C0392B` | Buttons, highlights, accents   |
| `secondary` | `#0A0F1E` | Page background                |
| `accent`    | `#D4A017` | Gradient partner to primary    |
| `steel`     | `#8A9BB0` | Body text, muted labels        |

---

## 📁 Project Structure

```
src/
├── animations/
│   └── variants.js          # All Framer Motion variants
├── components/
│   ├── AnimatedSection.jsx  # Scroll-triggered wrapper
│   ├── Button.jsx           # Primary / Secondary / Ghost
│   ├── MotionCard.jsx       # Hover lift + border highlight
│   ├── Navbar.jsx           # Sticky, mobile-responsive nav
│   ├── PageWrapper.jsx      # Fade page transition
│   ├── SectionTag.jsx       # Mono uppercase label
│   └── sections/
│       ├── Hero.jsx         # Rotating slides, stat bar
│       ├── About.jsx        # Image frame + feature grid
│       ├── Services.jsx     # 6-service card grid
│       ├── Software.jsx     # Licensed software cards
│       ├── FAQ.jsx          # Accordion + certifications
│       ├── WhyUs.jsx        # 6-reason grid
│       ├── Contact.jsx      # Form + contact details
│       └── Footer.jsx       # 4-column footer
├── data/
│   └── content.js           # All real content from sasiaerospace.com
├── hooks/
│   ├── useScrollAnimation.js  # IntersectionObserver hook
│   └── useNavScroll.js        # Navbar scroll threshold
├── pages/
│   └── Home.jsx             # Assembles all sections
├── App.jsx                  # Root layout
├── main.jsx                 # ReactDOM entry
└── index.css                # Tailwind + custom utilities
```

---

## ✨ Key Features

- **Mobile-first** responsive design (mobile → tablet → desktop)
- **Scroll-triggered animations** on every section (fade + slide-up)
- **Stagger animations** on card grids
- **Hero carousel** auto-rotates every 5 seconds with animated slide transitions
- **Sticky navbar** — transparent → frosted glass + border on scroll
- **Mobile hamburger** drawer with animated links
- **FAQ accordion** with smooth open/close
- **Contact form** with loading + success states
- **Real content only** — all text/images from sasiaerospace.com
- **Performance** — lazy-loaded images, `will-change: transform/opacity`, passive event listeners

---

## 🧩 Reusable Components

### `<Button variant="primary|secondary|ghost" size="sm|md|lg" href?>`
Renders `<a>` or `<button>` with chevron clip-path, shimmer effect, Framer Motion hover/tap.

### `<AnimatedSection delay? threshold? variants? as?>`
Wraps any content with IntersectionObserver-triggered Framer Motion animation.

### `<MotionCard>`
Card with hover: lift (-8px) + scale + shadow + red top-border sweep.

### `<PageWrapper>`
Fade + slide page transition for AnimatePresence.

### `<SectionTag center?>`
Mono uppercase label with left-side red bar.
