import React from 'react';
import { PERSONAL_INFO, CORE_EXPERTISE, SELECTED_IMPACT } from '../data';
import { Award, Briefcase, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="profile" className="py-12 md:py-16 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-10 pb-5 border-b border-stone-200">
          <span className="font-mono text-xs text-[#ab8355] tracking-widest uppercase block mb-1">
            01 / Professional Profile
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-stone-900 tracking-tight">
            Background & Management Competency
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Profile & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              whileHover={{ y: -3, borderColor: '#ab8355' }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="bg-white p-6 md:p-8 rounded-xl border border-stone-200/80 shadow-xs relative overflow-hidden transition-colors"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ab8355]/5 rounded-bl-full" />
              <h3 className="font-display font-semibold text-lg text-stone-900 mb-3.5 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-[#ab8355]" />
                <span>Executive Summary</span>
              </h3>
              <p className="font-sans text-stone-700 leading-relaxed text-sm md:text-base">
                {PERSONAL_INFO.profileSummary}
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="bg-stone-900 text-stone-100 p-6 md:p-8 rounded-xl border border-stone-850 shadow-md relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-stone-800">
                <Sparkles className="w-12 h-12 stroke-current" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#dbb78e] mb-3 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-[#ab8355]" />
                <span>Design Management Philosophy</span>
              </h3>
              <p className="font-sans text-stone-300 leading-relaxed text-sm md:text-base italic">
                "{PERSONAL_INFO.philosophy}"
              </p>
            </motion.div>
          </div>

          {/* Column 2: Core Expertise & Impact List */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Core Expertise Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs"
            >
              <h3 className="font-display font-semibold text-[#ab8355] text-sm tracking-wider uppercase mb-4 flex items-center space-x-2">
                <Briefcase className="w-4 h-4" />
                <span>Core Expertise</span>
              </h3>
              
              <div className="flex flex-wrap gap-1.5">
                {CORE_EXPERTISE.map((skill, index) => (
                  <motion.span
                    whileHover={{ scale: 1.04, borderColor: '#ab8355' }}
                    key={index}
                    className="inline-block px-3 py-1.5 rounded-md bg-stone-100 border border-stone-200/60 text-stone-800 text-xs font-sans font-medium transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Selected Impact Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="bg-white p-6 rounded-xl border border-[#ab8355]/20 shadow-xs transition-shadow hover:shadow-sm"
            >
              <h3 className="font-display font-semibold text-stone-900 text-sm tracking-wider uppercase mb-4 flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#ab8355]" />
                <span>Selected Leadership Impact</span>
              </h3>

              <ul className="space-y-3.5">
                {SELECTED_IMPACT.map((impact, index) => (
                  <motion.li 
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    key={index} 
                    className="flex items-start cursor-default"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#ab8355]/10 text-[#ab8355] font-mono text-[10px] font-bold mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="font-sans text-xs md:text-sm text-stone-700 font-medium">
                      {impact}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
