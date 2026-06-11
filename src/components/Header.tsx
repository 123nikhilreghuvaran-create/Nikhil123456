import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Menu, X, Play, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

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
                onClick={() => setShowVideoModal(true)}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg border border-stone-200 text-stone-700 bg-white hover:bg-stone-50 hover:text-stone-900 text-xs font-medium transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-stone-500 stroke-none" />
                <span>Video Reel</span>
              </button>
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
                <div className="pt-4 border-t border-stone-200/60 mt-3 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setShowVideoModal(true);
                    }}
                    className="flex items-center justify-center space-x-1.5 py-2.5 rounded-lg border border-stone-200 text-stone-700 bg-white text-xs font-medium"
                  >
                    <Play className="w-3.5 h-3.5 text-stone-500 fill-stone-500 stroke-none" />
                    <span>Watch Reel</span>
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      triggerPrint();
                    }}
                    className="flex items-center justify-center space-x-1.5 py-2.5 rounded-lg border border-stone-200 text-stone-700 bg-white text-xs font-medium"
                  >
                    <FileText className="w-3.5 h-3.5 text-stone-500" />
                    <span>Print PDF</span>
                  </button>
                  <a
                    href={PERSONAL_INFO.behance}
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-2 flex items-center justify-center space-x-1.5 py-3 rounded-lg bg-[#ab8355] text-white text-sm font-semibold text-center"
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
      <section className="bg-[#f0ece3] py-12 md:py-20 border-b border-stone-200/60 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:space-x-8 lg:space-x-14">
            {/* Visual Headshot Representation */}
            <div className="flex-shrink-0 flex justify-center mb-6 md:mb-0">
              <div className="relative">
                {/* Visual Frame */}
                <div className="absolute inset-0 rounded-full border border-[#ab8355]/30 scale-105 animate-pulse" />
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden bg-stone-900 border-4 border-white shadow-lg flex items-center justify-center text-white relative">
                  {/* We draw a refined digital representation resembling Cochin style developer image in styling */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-stone-300 fill-stone-800"
                    referrerPolicy="no-referrer"
                  >
                    <rect width="100" height="100" fill="#2d2926" />
                    {/* Head */}
                    <circle cx="50" cy="45" r="20" fill="#e8c39e" />
                    {/* Hair & Beard (Black, well-trimmed beard) */}
                    <path d="M30,45 C30,30 70,30 70,45 C70,30 30,30 30,45 Z" fill="#1c1917" />
                    {/* Beard shape covering chin */}
                    <path
                      d="M32,45 C32,65 68,65 68,45"
                      stroke="#1c1917"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path d="M40,64 C45,69 55,69 60,64" fill="#1c1917" />
                    {/* Glasses (Stylish transparent/clear thick frames as in image) */}
                    <circle cx="42" cy="43" r="6" stroke="#f1f5f9" strokeWidth="2.5" fill="none" />
                    <circle cx="58" cy="43" r="6" stroke="#f1f5f9" strokeWidth="2.5" fill="none" />
                    <line x1="48" y1="43" x2="52" y2="43" stroke="#f1f5f9" strokeWidth="2" />
                    {/* Eyes and Eyebrows */}
                    <ellipse cx="42" cy="43" rx="1.5" ry="1" fill="#1c1917" />
                    <ellipse cx="58" cy="43" rx="1.5" ry="1" fill="#1c1917" />
                    {/* Suit Collar/Jacket */}
                    <path d="M22,90 C22,70 35,70 50,70 C65,70 78,70 78,90 Z" fill="#1c1917" />
                    {/* White shirt inner */}
                    <path d="M42,70 L50,82 L58,70 Z" fill="#f8fafc" />
                    {/* Dark Tie */}
                    <path d="M48,80 L52,80 L52,90 L48,90 Z" fill="#ab8355" />
                  </svg>
                  <div className="absolute bottom-1 right-1 bg-amber-500 rounded-full p-1 border-2 border-white shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-stone-900" />
                  </div>
                </div>
              </div>
            </div>

            {/* Title Block */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-stone-900/5 border border-stone-900/10 text-stone-700 text-xs font-mono mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to Opportunities</span>
              </div>

              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-stone-950 tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </h1>

              <p className="font-sans font-medium text-lg md:text-xl text-[#ab8355] mt-2">
                {PERSONAL_INFO.title}
              </p>

              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-4 text-xs font-mono text-stone-600">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#ab8355]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-3.5 h-3.5 text-[#ab8355]" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[#ab8355] transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-[#ab8355]" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#ab8355] transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Quick Contact Row */}
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg border border-stone-300 bg-white/70 hover:bg-white hover:border-[#ab8355] text-stone-700 hover:text-stone-950 text-xs font-semibold tracking-wide transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-700 fill-sky-700 stroke-none" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={PERSONAL_INFO.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg border border-stone-300 bg-white/70 hover:bg-white hover:border-[#ab8355] text-stone-700 hover:text-stone-950 text-xs font-semibold tracking-wide transition-all"
                >
                  <span className="flex items-center justify-center w-3.5 h-3.5 rounded bg-blue-600 text-white font-bold text-[8px] tracking-tighter">Bē</span>
                  <span>Behance Projects</span>
                </a>
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg border border-stone-300 bg-white/70 hover:bg-white hover:border-[#ab8355] text-stone-700 hover:text-stone-950 text-xs font-semibold tracking-wide transition-all"
                >
                  <Play className="w-3.5 h-3.5 text-stone-900 fill-stone-900 stroke-none" />
                  <span>Introductory Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video introduction modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs no-print"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-stone-900 text-stone-100 rounded-2xl max-w-2xl w-full p-6 border border-stone-700 shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-white p-1.5 hover:bg-stone-800 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-[#ab8355]/20 text-[#dbb78e] text-[10px] font-mono uppercase mb-2">
                <span>REEL SHOTWALK</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-white pr-8">
                Nikhil Raghuvaran — Creative Video introduction
              </h3>
              <p className="font-sans text-xs text-stone-400 mt-1 mb-4">
                Executive portfolio overview, showcasing design systems leadership and multidisciplinary art direction.
              </p>

              {/* Simulated Elegant Video Frame */}
              <div className="aspect-video w-full rounded-lg bg-stone-950 flex flex-col items-center justify-center p-4 text-center border border-stone-800 relative group overflow-hidden">
                <div className="absolute inset-0 bg-radial from-transparent to-stone-950 opacity-80" />
                
                {/* Visual abstract soundwave/videowrapper representation */}
                <div className="flex items-center space-x-1.5 z-10 opacity-30 group-hover:opacity-60 transition-opacity">
                  <span className="w-1 h-8 bg-[#ab8355] rounded-full animate-pulse" />
                  <span className="w-1 h-12 bg-stone-500 rounded-full animate-pulse" />
                  <span className="w-1 h-16 bg-[#ab8355] rounded-full animate-pulse" />
                  <span className="w-1 h-10 bg-stone-400 rounded-full animate-pulse" />
                  <span className="w-1 h-14 bg-[#ab8355] rounded-full animate-pulse" />
                  <span className="w-1 h-8 bg-stone-600 rounded-full animate-pulse" />
                </div>

                <div className="mt-4 z-10">
                  <div className="mx-auto w-16 h-16 rounded-full bg-white text-stone-900 group-hover:bg-[#ab8355] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer">
                    <Play className="w-6 h-6 fill-current stroke-none ml-1" />
                  </div>
                  <span className="block text-xs font-mono text-stone-400 mt-3">
                    Click to launch video demonstration on Behance
                  </span>
                </div>
              </div>

              <div className="mt-5 flex justify-end space-x-2">
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="px-4 py-2 border border-stone-800 rounded-lg hover:bg-stone-800 text-stone-300 text-xs font-medium transition-all"
                >
                  Close Window
                </button>
                <a
                  href={PERSONAL_INFO.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#ab8355] hover:bg-[#967247] text-white rounded-lg text-xs font-semibold transition-all inline-flex items-center space-x-1"
                >
                  <span>Go to Behance Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
