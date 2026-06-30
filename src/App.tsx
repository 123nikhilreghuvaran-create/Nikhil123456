import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import CaseStudiesSection from './components/CaseStudiesSection';
import WorkflowStack from './components/WorkflowStack';
import AwardsEducationSection from './components/AwardsEducationSection';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('profile');

  // Simple scroll listener to spy active sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'experience', 'cases', 'workflow', 'impact'];
      const scrollPos = window.scrollY + 120; // offset for the sticky header

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const element = document.getElementById(id);
        if (element && scrollPos >= element.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] selection:bg-[#ab8355]/30 selection:text-stone-900 font-sans">
      
      {/* Navigation Header */}
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Narrative Structure */}
      <main>
        {/* Profile & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          id="profile-container"
        >
          <AboutSection />
        </motion.div>

        {/* Career & Work History Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          id="experience-container"
        >
          <ExperienceTimeline />
        </motion.div>

        {/* Case Studies deep-dive */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          id="cases-container"
        >
          <CaseStudiesSection />
        </motion.div>

        {/* Hybrid Operations & Tool Stack */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          id="workflow-container"
        >
          <WorkflowStack />
        </motion.div>

        {/* Selected Impact, Awards & Academic Pedigree */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          id="impact-container"
        >
          <AwardsEducationSection />
        </motion.div>
      </main>

      {/* Footer & Hiring Manager Messaging Portal */}
      <Footer />

    </div>
  );
}
