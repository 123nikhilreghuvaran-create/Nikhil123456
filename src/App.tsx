import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import CaseStudiesSection from './components/CaseStudiesSection';
import WorkflowStack from './components/WorkflowStack';
import AwardsEducationSection from './components/AwardsEducationSection';
import Footer from './components/Footer';

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
        <section id="profile-container">
          <AboutSection />
        </section>

        {/* Career & Work History Timeline */}
        <section id="experience-container">
          <ExperienceTimeline />
        </section>

        {/* Case Studies deep-dive */}
        <section id="cases-container">
          <CaseStudiesSection />
        </section>

        {/* Hybrid Operations & Tool Stack */}
        <section id="workflow-container">
          <WorkflowStack />
        </section>

        {/* Selected Impact, Awards & Academic Pedigree */}
        <section id="impact-container">
          <AwardsEducationSection />
        </section>
      </main>

      {/* Footer & Hiring Manager Messaging Portal */}
      <Footer />

    </div>
  );
}
