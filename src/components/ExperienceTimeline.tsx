import React, { useState } from 'react';
import { JOBS } from '../data';
import { Calendar, MapPin, Building, ChevronDown, ChevronUp, Sparkles, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ExperienceTimeline() {
  const [expandedJobs, setExpandedJobs] = useState<Record<string, boolean>>({
    hubbell: true, // Expand Hubbell first by default
    g10x: true,
  });

  const toggleJob = (id: string) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-12 md:py-16 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-10 pb-5 border-b border-stone-200">
          <span className="font-mono text-xs text-[#ab8355] tracking-widest uppercase block mb-1">
            02 / Work Record
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-stone-900 tracking-tight">
            Professional Timeline & Career Growth
          </h2>
        </div>

        <div className="relative pl-4 md:pl-8 before:absolute before:top-4 before:bottom-4 before:left-[19px] md:before:left-[35px] before:w-[1.5px] before:bg-stone-200">
          {JOBS.map((job) => {
            const isExpanded = expandedJobs[job.id] || false;
            return (
              <div key={job.id} className="relative mb-10 last:mb-0">
                {/* Timeline Dot with Initial Indicator */}
                <div 
                  onClick={() => toggleJob(job.id)}
                  className={`absolute left-[-24px] md:left-[-44px] top-1.5 w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm border-2 transition-all duration-300 cursor-pointer ${
                    isExpanded 
                      ? 'bg-stone-900 text-[#fbfafa] border-stone-950 scale-105 shadow-md' 
                      : 'bg-white text-stone-500 border-stone-200 hover:border-[#ab8355] hover:text-stone-900'
                  }`}
                >
                  {job.logoText}
                </div>

                {/* Info Container */}
                <div className="pl-4 md:pl-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3.5">
                    <div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => toggleJob(job.id)}
                          className="font-display font-bold text-lg md:text-xl text-stone-950 text-left hover:text-[#ab8355] transition-colors focus:outline-none flex items-center space-x-1.5"
                        >
                          <span>{job.role}</span>
                        </button>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200/50">
                          {job.company}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center mt-1 text-xs font-mono text-stone-500 gap-x-3.5 gap-y-1">
                        <span className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 text-stone-400 mr-1" />
                          {job.period}
                        </span>
                        {job.location && (
                          <span className="flex items-center">
                            <MapPin className="w-3.5 h-3.5 text-stone-400 mr-1" />
                            {job.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => toggleJob(job.id)}
                      className="self-start md:self-auto inline-flex items-center space-x-1 text-xs text-[#ab8355] hover:text-[#967247] font-semibold transition-colors bg-stone-50 hover:bg-stone-100 px-2.5 py-1.5 rounded-md border border-stone-250/50 no-print"
                    >
                      <span>{isExpanded ? 'Collapse Details' : 'Expand Story'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Accordion Expand Area */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 pt-1 pb-2">
                          <ul className="space-y-2">
                            {job.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start text-stone-700 text-sm md:text-md leading-relaxed">
                                <span className="text-[#ab8355] mr-2.5 font-bold text-base select-none leading-none mt-0.5">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Leadership impact panel */}
                          {job.impactBullets && job.impactTitle && (
                            <div className="mt-4 p-4 rounded-lg bg-[#faf8f5] border-l-4 border-[#ab8355] space-y-1.5">
                              <h4 className="font-display font-semibold text-stone-900 text-xs tracking-wider uppercase flex items-center space-x-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-[#ab8355]" />
                                <span>{job.impactTitle}</span>
                              </h4>
                              <ul className="space-y-1">
                                {job.impactBullets.map((impactBullet, idx) => (
                                  <li key={idx} className="flex items-start text-stone-600 text-[13px] leading-relaxed">
                                    <span className="text-stone-400 mr-2 font-mono text-xs select-none">›</span>
                                    <span>{impactBullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
