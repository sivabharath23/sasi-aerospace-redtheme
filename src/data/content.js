// ─────────────────────────────────────────────────────────────────────────────
// All content extracted from https://sasiaerospace.com
// ─────────────────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Software', href: '#software' },
  { label: 'FAQ',      href: '#faq'      },
  { label: 'Why Us',   href: '#why'      },
  { label: 'Contact',  href: '#contact'  },
];

export const HERO_SLIDES = [
  {
    heading1: 'Precision',
    heading2: 'Engineering',
    heading3: 'for Aerospace Industry',
    cta1: { label: 'Get a Quote',        href: '#contact'  },
    cta2: { label: 'Learn More',         href: '#about'    },
  },
  {
    heading1: 'CNC',
    heading2: 'Manufacturing',
    heading3: 'Excellence',
    cta1: { label: 'Request Consultation', href: '#contact'  },
    cta2: { label: 'Discover Services',    href: '#services' },
  },
  {
    heading1: 'Innovative',
    heading2: 'Tool Design',
    heading3: 'Solutions',
    cta1: { label: 'Contact Us Today',    href: '#contact' },
    cta2: { label: 'Explore Expertise',   href: '#why'     },
  },
];

export const STATS = [
  { value: '11+',    label: 'Years Experience'   },
  { value: '5-Axis', label: 'CNC Programming'    },
  { value: 'Global', label: 'Clients Served'     },
  { value: '100%',   label: 'Vericut Verified'   },
];

export const ABOUT = {
  tag:      'About Sasi Aerospace',
  title:    'Excellence in Aerospace Solutions',
  subtitle: 'Sasi Aerospace has been serving the Aerospace Industry for over 11 years.',
  body: [
    'We provide superior service and unparalleled quality to our customers. Our highly experienced team has the skills and expertise to complete your project efficiently.',
    'Our CNC programming services are offered at highly cost-effective rates with very quick turnaround times. Our CNC programmers have extensive experience with 3, 4, and 5 axis CNC machines.',
    'We have the capabilities to design mill fixtures, including vacuum fixtures, drill jigs, and assembly jigs. We have supported customers all over the world, helping them make parts faster with our programming skills.',
  ],
  image: 'https://sasiaerospace.com/assets/images/aero2.jpg',
  features: [
    { icon: '⚙',  label: '3–5 Axis CNC',       desc: 'Complex multi-axis CNC programming'     },
    { icon: '⚡', label: 'Rapid Turnaround',   desc: 'Cost-effective & fast delivery'          },
    { icon: '◈',  label: 'Fixture Design',     desc: 'Vacuum, drill jigs, assembly jigs'       },
    { icon: '🌐', label: 'Global Reach',        desc: 'Clients supported worldwide'             },
  ],
  cta: { label: 'Discover More', href: '#services' },
};

export const SERVICES = [
  {
    num:   '01',
    icon:  '⚙',
    name:  'CNC Programming',
    desc:  'Strong expertise in complex 5-Axis, 4-Axis & 3-Axis CNC programming for aerospace-grade components with exceptional precision.',
    image: 'https://sasiaerospace.com/assets/images/services/cnc-programming.jpg',
    href:  '#contact',
  },
  {
    num:   '02',
    icon:  '◈',
    name:  'Materials Expertise',
    desc:  'Comprehensive expertise in Aluminum, Titanium, Inconel, and other advanced aerospace-grade materials and composites.',
    image: 'https://sasiaerospace.com/assets/images/services/materials.jpg',
    href:  '#contact',
  },
  {
    num:   '03',
    icon:  '⊞',
    name:  'Machines We Program',
    desc:  'Experience with industry-leading machines including Makino, Cincinnati, and Mori Seiki precision CNC systems.',
    image: 'https://sasiaerospace.com/assets/images/services/machines.jpg',
    href:  '#contact',
  },
  {
    num:   '04',
    icon:  '◫',
    name:  'Custom Tool Design',
    desc:  'Designing fixtures and jigs tailored to customer requirements — vacuum fixtures, drill jigs, and assembly jig solutions.',
    image: 'https://sasiaerospace.com/assets/images/services/tool-design.jpg',
    href:  '#contact',
  },
  {
    num:   '05',
    icon:  '◈',
    name:  '3D Modelling & Detailing',
    desc:  'Expert 3D modelling of complicated aerospace structural parts with meticulous detailing and engineering accuracy.',
    image: 'https://sasiaerospace.com/assets/images/services/3d-modelling.jpg',
    href:  '#contact',
  },
  {
    num:   '06',
    icon:  '▷',
    name:  'Machine Simulation',
    desc:  'Complete verification of CNC programs using Vericut to prevent collisions and ensure precision in machining operations.',
    image: 'https://sasiaerospace.com/assets/images/services/simulation.jpg',
    href:  '#contact',
  },
];

export const SOFTWARE = [
  {
    abbr:  'MC',
    name:  'Mastercam',
    desc:  'Industry-leading CAD/CAM software for complex machining.',
    image: 'https://sasiaerospace.com/assets/images/brand/MC.png',
  },
  {
    abbr:  'VC',
    name:  'Vericut',
    desc:  'Simulation & verification for collision-free CNC programs.',
    image: 'https://sasiaerospace.com/assets/images/brand/vc.png',
  },
  {
    abbr:  'SIM',
    name:  'Simulation Suite',
    desc:  'Full machine simulation for pre-production validation.',
    image: 'https://sasiaerospace.com/assets/images/brand/sim.png',
  },
  {
    abbr:  'CAT',
    name:  'CATIA',
    desc:  'Advanced 3D modelling and aerospace design platform.',
    image: 'https://sasiaerospace.com/assets/images/brand/CATIA.png',
  },
];

export const CERTIFICATIONS = [
  {
    name: 'FAA Certification',
    desc: 'Fully compliant with FAA regulations ensuring safe and reliable services.',
  },
  {
    name: 'ISO Certification',
    desc: 'Committed to maintaining quality management standards through ISO certification.',
  },
  {
    name: 'EASA Certification',
    desc: 'Recognized by the European Union Aviation Safety Agency for operational excellence.',
  },
  {
    name: 'Local Compliance Licenses',
    desc: 'All necessary local licenses ensuring adherence to regional regulations.',
  },
];

export const FAQS = [
  {
    q: 'What types of CNC programming do you offer?',
    a: 'We specialize in complex 3, 4, and 5-axis CNC programming for various materials, including aluminum, titanium, and composites. Our programmers are experienced across the full spectrum of aerospace-grade manufacturing requirements.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We primarily serve the aerospace industry, providing high-quality CNC programming and tooling design services. Our global client base spans manufacturers and aerospace companies worldwide.',
  },
  {
    q: 'How do you ensure quality in your programs?',
    a: 'All our CNC programs are verified and simulated using Vericut to prevent collisions and ensure precision in machining. This rigorous verification process guarantees collision-free, optimized programs before any physical production begins.',
  },
  {
    q: 'What is your typical turnaround time?',
    a: 'We pride ourselves on very quick turnaround times at highly cost-effective rates. The exact timeline depends on project complexity, but our streamlined processes ensure we meet even the most demanding schedules.',
  },
];

export const WHY_ITEMS = [
  {
    num:   '01',
    title: 'Proven Expertise',
    desc:  'Over 11 years of dedicated aerospace manufacturing experience, with a team honed across the most demanding 5-axis applications in the industry.',
  },
  {
    num:   '02',
    title: 'Cost-Effective Solutions',
    desc:  'Streamlined workflows and remote programming capabilities allow us to deliver world-class quality at highly competitive pricing with rapid turnaround.',
  },
  {
    num:   '03',
    title: 'Zero-Collision Guarantee',
    desc:  'Every program is verified using Vericut simulation software before delivery, ensuring collision-free, precision-optimized code that protects your equipment.',
  },
  {
    num:   '04',
    title: 'Global Client Support',
    desc:  'We have successfully supported customers across the world, bridging geographic barriers to deliver high-quality aerospace programming services remotely.',
  },
  {
    num:   '05',
    title: 'Licensed Software Stack',
    desc:  'We operate exclusively with fully licensed industry software — Mastercam, Vericut, CATIA — ensuring compliance, quality, and full IP protection.',
  },
  {
    num:   '06',
    title: 'Full-Spectrum Service',
    desc:  'From 3D modelling and fixture design to machine simulation and final verification — a single partner for the complete aerospace manufacturing workflow.',
  },
];

export const CONTACT = {
  phone:   '+91 99408 98851',
  email:   'sasi@sasiaerospace.com',
  address: 'SM104, KSSIDC Industrial Estate,\nVeerasandra, Hosur Main Road,\nBangalore – 560 100, India',
};

export const FOOTER_LINKS = {
  navigate: [
    { label: 'About Us',     href: '#about'    },
    { label: 'Our Services', href: '#services' },
    { label: 'Software',     href: '#software' },
    { label: 'FAQ',          href: '#faq'      },
    { label: 'Contact Us',   href: '#contact'  },
  ],
  services: [
    { label: 'CNC Programming',       href: '#services' },
    { label: 'Custom Tool Design',     href: '#services' },
    { label: '3D Modelling',           href: '#services' },
    { label: 'Machine Simulation',     href: '#services' },
    { label: 'Materials Expertise',    href: '#services' },
  ],
};
