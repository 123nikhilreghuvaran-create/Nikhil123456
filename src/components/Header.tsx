import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Menu, X, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'profile', label: 'Profile' },
    { id: 'experience', label: 'Career History' },
    { id: 'cases', label: 'Case Studies' },
    { id: 'workflow', label: 'Workflow & Tools' },
    { id: 'impact', label: 'Impact & Awards' },
  ];

  const handleNavClick = (id: string) => {
    onSectionChange(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <>
      {/* Top Banner / Color Accents */}
      <div className="w-full h-2 bg-stone-700 bg-gradient-to-r from-stone-600 via-[#ab8355] to-stone-800 no-print" />

      <header className="sticky top-0 z-40 w-full bg-[#f9f8f6]/95 backdrop-blur-md border-b border-stone-200/80 no-print">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Initials */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-stone-900 text-[#fbfafa] font-display font-semibold tracking-wider text-sm transition-transform duration-300 hover:rotate-6">
                NR
              </div>
              <div>
                <span className="block font-display font-bold text-stone-900 tracking-tight text-lg">
                  {PERSONAL_INFO.name}
                </span>
                <span className="block font-sans text-xs font-medium text-[#ab8355] tracking-wide uppercase">
                  Design Manager
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-md font-sans text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-stone-900 bg-stone-200/50 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={triggerPrint}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg border border-stone-200 text-stone-700 bg-white hover:bg-stone-50 hover:text-stone-900 text-xs font-medium transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-stone-500" />
                <span>PDF Resume</span>
              </button>
              <a
                href={PERSONAL_INFO.behance}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-[#ab8355] text-white hover:bg-[#967247] text-xs font-medium transition-all shadow-xs"
              >
                <span>Behance Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-150 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-stone-200 bg-[#f9f8f6] overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1.5 shadow-inner">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-sans font-medium transition-all ${
                      activeSection === item.id
                        ? 'text-stone-950 bg-stone-200/70 font-semibold'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-stone-200/60 mt-3 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      triggerPrint();
                    }}
                    className="flex items-center justify-center space-x-1.5 py-2.5 rounded-lg border border-stone-200 text-stone-700 bg-white text-xs font-medium w-full"
                  >
                    <FileText className="w-3.5 h-3.5 text-stone-500" />
                    <span>Print PDF</span>
                  </button>
                  <a
                    href={PERSONAL_INFO.behance}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-1.5 py-3 rounded-lg bg-[#ab8355] text-white text-sm font-semibold text-center w-full"
                  >
                    <span>View Behance Portfolio</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Header Area - Traditional visual display of profile summary */}
      <section className="relative py-16 md:py-24 border-b border-stone-800 overflow-hidden bg-stone-950 text-stone-100">
        
        {/* Background Video Loop */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none no-print">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25 scale-105"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-gold-dust-particles-34538-large.mp4"
              type="video/mp4"
            />
          </video>
          {/* Creative dark radial and linear gradients to blend the loop flawlessly and secure strict contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-stone-950" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-stone-950/80" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1
                }
              }
            }}
            className="md:flex md:items-center md:space-x-8 lg:space-x-14"
          >
            {/* Visual Headshot Representation */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
              }}
              className="flex-shrink-0 flex justify-center mb-6 md:mb-0"
            >
              <div className="relative group">
                {/* Visual Animated Gold/Bronze Frame */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[-6px] rounded-full border border-dashed border-[#ab8355]/40 scale-105" 
                />
                <motion.div 
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-[-12px] rounded-full border border-stone-800/40" 
                />
                
                <motion.div 
                  whileHover={{ scale: 1.06, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden bg-stone-900 border-4 border-stone-800 shadow-2xl flex items-center justify-center text-white relative cursor-pointer"
                >
                  {/* High-fidelity Vector Portrait resembling Nikhil Raghuvaran */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full select-none"
                    referrerPolicy="no-referrer"
                  >
                    <defs>
                      <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c7a175" />
                        <stop offset="50%" stopColor="#ab8355" />
                        <stop offset="100%" stopColor="#7a5a35" />
                      </linearGradient>
                      <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#242220" />
                        <stop offset="100%" stopColor="#0a0908" />
                      </linearGradient>
                      <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#202224" />
                        <stop offset="100%" stopColor="#121316" />
                      </linearGradient>
                    </defs>
                    
                    {/* Canvas Background with Rich Theme Gradient */}
                    <circle cx="50" cy="50" r="48" fill="url(#avatarGrad)" />
                    
                    {/* Neck / Collar */}
                    <rect x="44" y="62" width="12" height="15" fill="#dfb391" rx="2" />
                    
                    {/* Shirt Collar */}
                    <path d="M42,70 L50,80 L58,70 L50,67 Z" fill="#ffffff" />
                    {/* Gold Tie */}
                    <path d="M48,72 L52,72 L53,92 L47,92 Z" fill="#ab8355" />
                    
                    {/* Suit Jacket */}
                    <path d="M22,96 C22,78 34,75 50,75 C66,75 78,78 78,96 Z" fill="url(#suitGrad)" />
                    {/* Lapels */}
                    <path d="M35,75 L45,86 L43,96 L32,86 Z" fill="#2d3033" />
                    <path d="M65,75 L55,86 L57,96 L68,86 Z" fill="#2d3033" />
                    
                    {/* Face Shape */}
                    <path d="M34,44 C34,31 41,25 50,25 C59,25 66,31 66,44 C66,56 59,65 50,65 C41,65 34,56 34,44 Z" fill="#e8c39e" />
                    
                    {/* Side-swept Black Hair (Neat side-swept from his real portrait) */}
                    <path d="M34,35 C32,28 38,18 50,18 C62,18 67,23 68,30 C64,24 54,23 46,25 C39,27 35,31 34,35 Z" fill="url(#hairGrad)" />
                    {/* Hair sideburns */}
                    <path d="M33,36 L36,45 L34,45 Z" fill="url(#hairGrad)" />
                    <path d="M67,36 L64,45 L66,45 Z" fill="url(#hairGrad)" />
                    
                    {/* Well-trimmed Black Beard covering cheek lines and chin */}
                    <path d="M34,44 C34,54 40,65 50,65 C60,65 66,54 66,44 C66,49 64,54 62,56 C61,54 59,53 58,53 C57,55 53,57 50,57 C47,57 43,55 42,53 C41,53 39,54 38,56 C36,54 34,49 34,44 Z" fill="url(#hairGrad)" />
                    <path d="M38,56 C40,64 45,67 50,67 C55,67 60,64 62,56 C61,59 56,62 50,62 C44,62 39,59 38,56 Z" fill="#000000" />
                    
                    {/* Mustache */}
                    <path d="M41,51 C45,49 49,50 50,52 C51,50 55,49 59,51 C57,53 52,54 50,54 C48,54 43,53 41,51 Z" fill="#0c0a09" />
                    
                    {/* Smart Eyes */}
                    <circle cx="43" cy="42" r="2.2" fill="#1c1917" />
                    <circle cx="57" cy="42" r="2.2" fill="#1c1917" />
                    {/* Eyebrows */}
                    <path d="M38,37 C41,35 45,36 46,38" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M62,37 C59,35 55,36 54,38" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    
                    {/* Smart Round Glasses (Clear/silver-rimmed as in original photo) */}
                    <circle cx="43" cy="42" r="6.5" stroke="#f1f5f9" strokeWidth="1.8" fill="none" opacity="0.9" />
                    <circle cx="57" cy="42" r="6.5" stroke="#f1f5f9" strokeWidth="1.8" fill="none" opacity="0.9" />
                    {/* Glasses bridge */}
                    <path d="M49.5,41.5 L50.5,41.5" stroke="#f1f5f9" strokeWidth="1.8" />
                    {/* Subtle lens glare */}
                    <path d="M39.5,39.5 L42.5,37" stroke="#ffffff" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
                    <path d="M53.5,39.5 L56.5,37" stroke="#ffffff" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
                  </svg>

                  <div className="absolute bottom-1 right-1 bg-amber-500 rounded-full p-1 border-2 border-stone-900 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-stone-950" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Title Block */}
            <div className="flex-1 text-center md:text-left">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#dbb78e] text-xs font-mono mb-4 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Opportunities</span>
              </motion.div>

              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
              >
                {PERSONAL_INFO.name}
              </motion.h1>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="font-sans font-medium text-lg md:text-xl text-[#dbb78e] mt-2.5"
              >
                {PERSONAL_INFO.title}
              </motion.p>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="mt-5 flex flex-wrap justify-center md:justify-start gap-y-2.5 gap-x-5 text-xs font-mono text-stone-300"
              >
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#dbb78e]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#dbb78e]" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[#dbb78e] transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#dbb78e]" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#dbb78e] transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </motion.div>

              {/* Quick Contact Row */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="mt-7 flex flex-wrap justify-center md:justify-start gap-2.5"
              >
                <a
                  href={PERSONAL_INFO.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4.5 py-2.5 rounded-lg border border-[#ab8355] bg-[#ab8355] hover:bg-[#967247] hover:border-[#967247] text-white text-xs font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
                >
                  <span className="flex items-center justify-center w-3.5 h-3.5 rounded bg-white text-[#ab8355] font-bold text-[8px] tracking-tighter mr-0.5">Bē</span>
                  <span>Behance Portfolio</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
