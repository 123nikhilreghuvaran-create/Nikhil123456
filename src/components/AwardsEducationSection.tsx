import React from 'react';
import { AWARDS, EDUCATION_ITEMS } from '../data';
import { Trophy, BookOpen, Star, CalendarRange } from 'lucide-react';

export default function AwardsEducationSection() {
  return (
    <section id="impact" className="py-12 md:py-16 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11">
          
          {/* Column 1: Awards & Honors */}
          <div className="lg:col-span-7 space-y-6">
            <div className="pb-4 border-b border-stone-200">
              <span className="font-mono text-xs text-[#ab8355] tracking-widest uppercase block mb-1">
                05 / Awards & Honors
              </span>
              <h3 className="font-display font-bold text-2xl text-stone-900 tracking-tight">
                Peer Recognition & Performance
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AWARDS.map((award, index) => {
                const isMcKinsey = award.issuer.includes('McKinsey');
                return (
                  <div
                    key={index}
                    className={`p-5 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                      isMcKinsey
                        ? 'bg-stone-900 border-stone-950 text-white shadow-md'
                        : 'bg-white border-stone-200 hover:border-[#ab8355] hover:shadow-xs'
                    }`}
                  >
                    {/* Decorative star background */}
                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Trophy className="w-16 h-16 stroke-current" />
                    </div>

                    <div className="relative z-10 space-y-2">
                      <div className={`p-1.5 rounded-lg w-8 h-8 flex items-center justify-center ${
                        isMcKinsey ? 'bg-[#ab8355]/20 text-[#dbb78e]' : 'bg-stone-150 text-[#ab8355]'
                      }`}>
                        <Trophy className="w-4 h-4 fill-current stroke-none" />
                      </div>
                      
                      <div>
                        <span className={`block font-display font-bold leading-tight ${
                          isMcKinsey ? 'text-white' : 'text-stone-900'
                        }`}>
                          {award.title}
                        </span>
                        <span className={`block text-xs font-semibold uppercase font-mono mt-1 ${
                          isMcKinsey ? 'text-[#dbb78e]' : 'text-stone-500'
                        }`}>
                          {award.issuer}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Educational Foundation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pb-4 border-b border-stone-200">
              <span className="font-mono text-xs text-[#ab8355] tracking-widest uppercase block mb-1">
                06 / Education & Background
              </span>
              <h3 className="font-display font-bold text-2xl text-stone-900 tracking-tight">
                Academic Pedigree
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-stone-200/80 hover:border-[#ab8355] hover:shadow-xs transition-all space-y-2 flex items-start space-x-4"
                >
                  <div className="p-2.5 rounded-lg bg-[#ab8355]/10 text-[#ab8355] flex-shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-stone-900 text-sm">
                      {item.degree}
                    </h4>
                    <p className="font-sans text-stone-500 text-xs font-semibold uppercase mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
