import React, { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { Award, Layers, Target, Compass, CheckCircle, ShieldCheck, Users, CornerDownRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CaseStudiesSection() {
  const [activeStudyId, setActiveStudyId] = useState(CASE_STUDIES[0].id);
  const [activeTab, setActiveTab] = useState<'all' | 'challenge' | 'approach' | 'impact' | 'leadership'>('all');

  const selectedStudy = CASE_STUDIES.find((study) => study.id === activeStudyId) || CASE_STUDIES[0];

  const tabItems = [
    { id: 'all', label: 'Full Case' },
    { id: 'challenge', label: 'Challenge & Brief' },
    { id: 'approach', label: 'Approach & Execution' },
    { id: 'impact', label: 'Impact & Results' },
    { id: 'leadership', label: 'What I Led' },
  ];

  return (
    <section id="cases" className="py-12 md:py-16 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-10 pb-5 border-b border-stone-200">
          <span className="font-mono text-xs text-[#ab8355] tracking-widest uppercase block mb-1">
            03 / Strategic Case Studies
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-stone-900 tracking-tight">
            Design Leadership in Action
          </h2>
        </div>

        {/* Case Study Selector (Large Tabs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 no-print">
          {CASE_STUDIES.map((study) => {
            const isSelected = study.id === activeStudyId;
            return (
              <button
                key={study.id}
                onClick={() => {
                  setActiveStudyId(study.id);
                  setActiveTab('all'); // Reset tab on study switch
                }}
                className={`p-6 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group focus:outline-none ${
                  isSelected
                    ? 'bg-stone-950 text-white border-stone-950 shadow-md ring-1 ring-stone-900/10'
                    : 'bg-white text-stone-850 border-stone-200 hover:border-[#ab8355] hover:bg-stone-50/50'
                }`}
              >
                {/* Background decorative token */}
                <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full transition-colors duration-300 ${
                  isSelected ? 'bg-stone-900 opacity-55' : 'bg-stone-50 group-hover:bg-amber-50'
                }`} />

                <div className="relative z-10">
                  <div className="flex items-center space-x-1 mb-2">
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${
                      isSelected ? 'text-[#dbb78e]' : 'text-[#ab8355]'
                    }`}>
                      {study.role}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg leading-tight tracking-tight mb-2">
                    {study.title}
                  </h3>
                  <p className={`font-sans text-xs line-clamp-2 ${
                    isSelected ? 'text-stone-300' : 'text-stone-500'
                  }`}>
                    {study.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Case Study Detail Sheet */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
          
          {/* Cover card representation */}
          <div className="p-6 md:p-10 bg-stone-900 text-stone-100 border-b border-stone-800 relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ab8355]/5 rounded-bl-full pointer-events-none" />
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs text-[#ab8355] tracking-widest uppercase">
                Detailed Breakdown
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
                {selectedStudy.title}
              </h3>
              <p className="font-sans text-[#dbb78e] text-sm md:text-base max-w-2xl font-light">
                {selectedStudy.subtitle}
              </p>
              
              <div className="pt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-stone-400">
                <div>
                  <span className="text-stone-500">ROLE:</span>{' '}
                  <span className="text-white font-medium">{selectedStudy.role}</span>
                </div>
                <div>
                  <span className="text-stone-500">FOCUS:</span>{' '}
                  <span className="text-white font-medium">
                    {selectedStudy.id === 'g10x-brand' ? 'Product Design Guidelines' : 'Global Operations'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Navigation Tabs for Study Details */}
          <div className="px-4 border-b border-stone-200 bg-[#fbfafa] flex overflow-x-auto no-print scrollbar-none">
            <div className="flex space-x-1 py-2">
              {tabItems.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3.5 py-1.5 rounded-lg font-sans text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Information Viewport */}
          <div className="p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedStudy.id}-${activeTab}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* 1. Challenge & Brief */}
                {(activeTab === 'all' || activeTab === 'challenge') && (
                  <div className="space-y-3">
                    <h4 className="font-display font-semibold text-stone-950 text-sm tracking-wider uppercase flex items-center space-x-2">
                      <Target className="w-4 h-4 text-rose-600" />
                      <span>The Challenge</span>
                    </h4>
                    <p className="font-sans text-stone-700 text-sm md:text-md leading-relaxed bg-rose-50/20 p-4 rounded-xl border border-rose-100/50">
                      {selectedStudy.challenge}
                    </p>
                  </div>
                )}

                {/* 2. Approach & Execution */}
                {(activeTab === 'all' || activeTab === 'approach') && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                    <div className="space-y-4">
                      <h4 className="font-display font-semibold text-stone-950 text-sm tracking-wider uppercase flex items-center space-x-2">
                        <Compass className="w-4 h-4 text-[#ab8355]" />
                        <span>Strategic Approach</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedStudy.approach.map((point, index) => (
                          <li key={index} className="flex items-start text-stone-700 text-sm">
                            <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded bg-amber-50 text-[#ab8355] font-mono text-xs font-bold mr-3 mt-0.5">
                              {index + 1}
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-display font-semibold text-stone-950 text-sm tracking-wider uppercase flex items-center space-x-2">
                        <Layers className="w-4 h-4 text-stone-600" />
                        <span>Execution Cycle</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedStudy.execution.map((point, index) => (
                          <li key={index} className="flex items-start text-stone-700 text-sm">
                            <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded bg-stone-50 text-stone-700 font-mono text-xs font-bold mr-3 mt-0.5">
                              {index + 1}
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* 3. Impact & Results */}
                {(activeTab === 'all' || activeTab === 'impact') && (
                  <div className="space-y-4 pt-1">
                    <h4 className="font-display font-semibold text-stone-950 text-sm tracking-wider uppercase flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Proven Business Impact</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedStudy.impact.map((point, index) => (
                        <div
                          key={index}
                          className="bg-emerald-50/15 border border-emerald-100 p-5 rounded-xl space-y-2 hover:border-emerald-200 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="font-mono text-[10px] text-emerald-700 font-bold uppercase tracking-wider">
                              Result {index + 1}
                            </span>
                          </div>
                          <p className="font-sans text-stone-700 text-xs md:text-sm leading-relaxed font-semibold">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Leadership */}
                {(activeTab === 'all' || activeTab === 'leadership') && (
                  <div className="space-y-4 pt-1">
                    <h4 className="font-display font-semibold text-stone-950 text-sm tracking-wider uppercase flex items-center space-x-2">
                      <Users className="w-4 h-4 text-indigo-600" />
                      <span>Design Ownership — What I Led</span>
                    </h4>
                    <div className="bg-stone-50 p-5 rounded-xl border border-stone-200/80">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedStudy.whatILed.map((point, index) => (
                          <li key={index} className="flex items-start text-stone-700 text-sm pb-1.5 border-b border-stone-200/20 last:border-0 md:even:border-b-0 md:odd:border-b">
                            <CornerDownRight className="w-4 h-4 text-[#ab8355] mr-2.5 mt-0.5 flex-shrink-0" />
                            <span className="font-sans text-xs md:text-sm font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
