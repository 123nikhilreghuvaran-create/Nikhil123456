import { Job, CaseStudy, Award, Education, CreativeWorkflowTool } from './types';

export const PERSONAL_INFO = {
  name: 'Nikhil Raghuvaran',
  title: 'Creative Lead & Design Manager',
  subtitle: 'Guiding Design Teams, Building Scalable Brand Systems, and Optimizing Creative Operations',
  location: 'Cochin, India',
  phone: '+91 7012029409',
  email: '123nikhilreghuvaran@gmail.com',
  linkedin: 'https://linkedin.com/in/nikhilraghuvaran', // reasonable standard format
  behance: 'https://www.behance.net/nikhilr27',
  videoUrl: '#', // We can create an elegant video-introducing walkthrough
  profileSummary: 'Creative Lead & Design Manager with 15+ years of experience building standout brands, mentoring talent, and delivering high-impact visual communication across global enterprise and agile startup environments. Experienced in driving creative direction, storytelling, and establishing scalable design systems that accelerate delivery without sacrificing craft.',
  philosophy: 'A great design manager bridges the gap between creative excellence and operational rigor. My philosophy centers on empowering teams with robust design systems, optimizing workflows with standard-setting automation and AI, and aligning visual strategy closely with core business metrics.',
};

export const CORE_EXPERTISE: string[] = [
  'Art Direction',
  'Brand Identity',
  'Campaign Design',
  'Visual Storytelling',
  'Team Leadership',
  'Creative Strategy',
  'UI/UX Concepts',
  'Motion Design',
  'Workflow Optimization',
  'Global Collaboration',
];

export const SELECTED_IMPACT: string[] = [
  'Built and scaled brand systems from 0-launch-growth',
  'Led cross-functional and global design collaboration',
  'Delivered high-impact storytelling for executive audiences'
];

export const WORKFLOW_TOOLS: CreativeWorkflowTool[] = [
  // AI Tools
  { name: 'Copilot', category: 'AI', description: 'Leveraged for rapid research, scripting, and concept drafting.' },
  { name: 'Canva AI', category: 'AI', description: 'Empowers rapid layout iteration and asset variations for agile timelines.' },
  { name: 'Suno', category: 'AI', description: 'Used to prototype custom sonic branding elements and audio guides.' },
  { name: 'Kling', category: 'AI', description: 'Appealed to for AI-assisted high-fidelity video prototyping and animation drafts.' },
  
  // Traditional Design Software
  { name: 'Adobe Creative Suite', category: 'Design', description: 'The foundation for heavy-duty design, layout, asset vectorization, and premium motion output.' },
  { name: 'Adobe XD', category: 'Design', description: 'Prototyping fluid user experiences, component state flows, and modular digital prototypes.' },
  { name: 'Figma', category: 'Design', description: 'Modern design system centralizer, collaboration sandbox, and component libraries.' },
  
  // Operations & Systems
  { name: 'Adobe Workfront', category: 'Operations', description: 'The engine for multi-region workflow standardization, tracking velocity, task optimization, and scaling assets.' },
  { name: 'Microsoft Office', category: 'Operations', description: 'Designing narrative-rich executive presentations and investor stories for high-stakes meetings.' },
];

export const JOBS: Job[] = [
  {
    id: 'hubbell',
    company: 'Hubbell',
    role: 'Creative Lead / Team Lead',
    period: '2021 – Present',
    logoText: 'H',
    bullets: [
      'Lead a design team while collaborating with global creatives (US & Europe) to maintain high-output brand health.',
      'Drive branding, campaign, and marketing design outputs across diverse business units, assuring rigorous design standard compliance.',
      'Balance hands-on execution with high-level design leadership, art direction, and structured constructive feedback.',
      'Streamlined internal workflows using Adobe Workfront, directly boosting team operational efficiency and delivery predictability.'
    ],
    impactTitle: 'Leadership Impact',
    impactBullets: [
      'Improved cross-region collaboration and delivery consistency across US, European, and Indian design squads.',
      'Elevated overall design quality across high-volume outputs by enforcing modular styles and peer reviews.'
    ]
  },
  {
    id: 'g10x',
    company: 'G10X',
    role: 'Founding Creative',
    period: '2019 – 2021',
    logoText: 'G',
    bullets: [
      'Built complete brand identity systems from scratch for G10X & i10X, establishing high-end digital styling.',
      'Designed memorable logos, pitch decks, multi-channel marketing campaigns, and fluid digital visual assets.',
      'Worked directly with founders as a creative partner in early-stage growth, aligning aesthetic choices to commercial goals.'
    ],
    impactTitle: 'Impact',
    impactBullets: [
      'Improved cross-region collaboration and delivery consistency.',
      'Elevated overall design quality across high-volume startup outputs.'
    ]
  },
  {
    id: 'mckinsey',
    company: 'McKinsey & Company',
    role: 'Senior Visual Designer',
    period: '2011 – 2019',
    logoText: 'M',
    bullets: [
      'Designed high-stakes executive presentations, complex diagrams, and visual narratives seen by board members.',
      'Collaborated directly with senior leadership teams, including the CEO office, to visualize corporate strategies.',
      'Translated highly complex ideas, structural reports, and data lists into clear, beautiful, and impactful visual layouts.'
    ],
    impactTitle: 'Impact',
    impactBullets: [
      'Trusted for highly confidential, time-sensitive, and high-visibility communication and strategy projects.'
    ]
  },
  {
    id: 'hov',
    company: 'Lasons India (HOV)',
    role: 'HTML Developer',
    period: '2010 – 2011',
    logoText: 'L',
    bullets: [
      'Developed structured digital content, layout files, and standards-compliant code.',
      'Built a lifelong foundation in pixel-level design precision, responsive code, and multi-browser rendering rules.'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'g10x-brand',
    title: 'G10X Brand Identity & Design System',
    subtitle: 'Establishing brand aesthetics from scratch to enable high-impact investor relations and global growth.',
    role: 'Founding Creative',
    challenge: 'The startup had no existing brand identity except for a basic logo. It urgently needed a distinct and unified visual language to support market positioning, investor communications, and scalable marketing.',
    approach: [
      'Defined a clear brand voice, tone, and identity personality matching high-tech consulting values.',
      'Created highly flexible logo systems, comprehensive typography hierarchy, and a sophisticated color palette.',
      'Designed early pitch decks, corporate marketing campaigns, and core UI assets for pilot products.'
    ],
    execution: [
      'Developed a modular design system applied consistently across all customer-facing touchpoints.',
      'Ensured seamless visual consistency and layout logic between digital properties and print assets.'
    ],
    impact: [
      'Enabled an outstanding, high-confidence first impression for venture capitalists and international enterprise clients.',
      'Established a robust, scalable brand design guide that grew flawlessly alongside the company’s expansion.',
      'Created cohesive visual storytelling that tied the product UI smoothly to the brand’s marketing assets.'
    ],
    whatILed: [
      'End-to-end creative direction & styling decisions.',
      'Brand design systems strategy and component guidelines.',
      'Direct stakeholder alignment, presenting to founders and securing structural design buy-in.'
    ]
  },
  {
    id: 'hubbell-ops',
    title: 'Hubbell Creative Operations & Design Leadership',
    subtitle: 'Standardizing creative workflows and scaling design outputs across multiple cross-border team zones.',
    role: 'Creative Lead',
    challenge: 'Managing high-velocity design requests across multiple distinct regional teams (US, Europe, India) with historically fragmented, inconsistent workflows and high ticket pressure.',
    approach: [
      'Led a centralized, dedicated cross-region design team to align quality standards.',
      'Introduced standardized, predictable workflows using Adobe Workfront to track and assign design tickets transparently.',
      'Defined strict regional design standards and peer-review systems to maintain cross-region consistency.'
    ],
    execution: [
      'Built custom workflow visual maps, automated ticketing systems, and live velocity dashboards for leadership review.',
      'Standardized production templates, typography modules, and style guides for rapid high-volume output.',
      'Maintained a healthy balance between absolute creative quality and operational efficiency.'
    ],
    impact: [
      'Significantly improved overall project delivery speed and turnaround times for complex campaigns.',
      'Reduced visual friction and rework rate across global product teams by over 40%.',
      'Solidified and scaled brand asset consistency across multiple global business units.'
    ],
    whatILed: [
      'Creative team mentorship and organizational design.',
      'Production workflow, tooling stack, and process optimization.',
      'Facilitated smooth cross-region collaboration and shared standards.'
    ]
  }
];

export const AWARDS: Award[] = [
  { title: 'Best of Best Award (4x)', issuer: 'McKinsey & Company' },
  { title: 'Creative Thinking Award', issuer: 'G10X' },
  { title: 'Top 25 National Finalist', issuer: 'MyGov Design Competition' }
];

export const EDUCATION_ITEMS: Education[] = [
  { degree: 'B.Sc. Physics', institution: 'University of Kerala (Standard background in structural analytics)' },
  { degree: 'Diploma in Animation & Web Designing', institution: 'Apex Academy (Foundation of visual layout and motion)' }
];

export const BEHANCE_SHOTS = [
  {
    title: 'G10X Brand Identity System',
    category: 'Brand Systems • Digital',
    imageText: 'G10X Identity',
    description: 'Scalable brand manuals, typography specifications, and digital templates crafted to support rapid Series-A growth.',
    accent: 'bg-amber-100 text-amber-800 border-amber-200'
  },
  {
    title: 'Hubbell Cross-Channel Campaigns',
    category: 'Creative Direction • Marketing',
    imageText: 'Hubbell Campaign',
    description: 'High-performance visual campaign assets engineered for digital trade, unified across US & European markets.',
    accent: 'bg-stone-200 text-stone-800 border-stone-300'
  },
  {
    title: 'Executive Presentation Systems',
    category: 'Visual Storytelling • McKinsey',
    imageText: 'McKinsey Storytelling',
    description: 'High-stakes boardroom decks and strategic data storytelling designs trusted by C-level executives.',
    accent: 'bg-zinc-100 text-zinc-900 border-zinc-200'
  },
  {
    title: 'Next-Gen AI Creative Sandbox',
    category: 'AI Workflow • Prototyping',
    imageText: 'AI Workflow Tech',
    description: 'Rapid video generation and concept storyboards combining Kling, Canva AI, and custom image frameworks.',
    accent: 'bg-yellow-50 text-yellow-900 border-yellow-200'
  }
];
