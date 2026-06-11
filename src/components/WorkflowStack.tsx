import React, { useState } from 'react';
import { WORKFLOW_TOOLS, BEHANCE_SHOTS } from '../data';
import { Cpu, Palette, Sliders, ExternalLink, Sparkles, Layout, FolderKanban } from 'lucide-react';
import { motion } from 'motion/react';

export default function WorkflowStack() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'AI' | 'Design' | 'Operations'>('all');

  const filteredTools = WORKFLOW_TOOLS.filter((tool) => {
    if (selectedCategory === 'all') return true;
    return tool.category === selectedCategory;
  });

  return (
    <section id="workflow" className="py-12 md:py-16 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-10 pb-5 border-b border-stone-200">
          <span className="font-mono text-xs text-[#ab8355] tracking-widest uppercase block mb-1">
            04 / Modern Toolchain
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-stone-900 tracking-tight">
            Hybrid Workflow & Creative Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11">
          
          {/* Column 1: Tool Stack Filter Selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-stone-950 text-md tracking-tight">
                Process Governance & Tool Execution
              </h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                Applying standard enterprise layout, tracking systems, and design software alongside modern genAI workflows to deliver speed-to-market concepts, content variations, and pixel-precise design leadership.
              </p>
            </div>

            {/* Filter Toggle Pill Bars */}
            <div className="flex flex-wrap gap-1.5 no-print">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-sans transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-stone-950 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-950'
                }`}
              >
                All Tech & Stack
              </button>
              <button
                onClick={() => setSelectedCategory('AI')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-sans transition-all duration-200 flex items-center space-x-1.5 ${
                  selectedCategory === 'AI'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-xs'
                    : 'bg-amber-50/40 text-amber-800 border border-amber-100 hover:bg-amber-100/50'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>AI In Creative Workflows</span>
              </button>
              <button
                onClick={() => setSelectedCategory('Design')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-sans transition-all duration-200 flex items-center space-x-1.5 ${
                  selectedCategory === 'Design'
                    ? 'bg-stone-200 text-stone-900 border border-stone-300 shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-150'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Creative & UX Craft</span>
              </button>
              <button
                onClick={() => setSelectedCategory('Operations')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-sans transition-all duration-200 flex items-center space-x-1.5 ${
                  selectedCategory === 'Operations'
                    ? 'bg-stone-850 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-150'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Creative Ops & Metrics</span>
              </button>
            </div>

            {/* Grid display of active filtered tools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
              {filteredTools.map((tool) => {
                const isAI = tool.category === 'AI';
                const isOps = tool.category === 'Operations';
                return (
                  <div
                    key={tool.name}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      isAI
                        ? 'bg-amber-50/10 border-amber-200/60 hover:bg-amber-50/30'
                        : isOps
                        ? 'bg-stone-50 border-stone-250/50 hover:bg-stone-100/50'
                        : 'bg-white border-stone-200/80 hover:border-[#ab8355]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-bold text-stone-950 text-sm">
                        {tool.name}
                      </span>
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isAI
                          ? 'bg-amber-100 text-amber-800'
                          : isOps
                          ? 'bg-stone-200 text-stone-700'
                          : 'bg-stone-100 text-stone-600'
                      }`}>
                        {tool.category}
                      </span>
                    </div>
                    <p className="font-sans text-stone-600 text-[12px] leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Representative Portfolio Artifact blocks from Behance */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#faf8f5] p-5 rounded-xl border border-stone-200/80">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-stone-900 text-xs tracking-wider uppercase flex items-center space-x-1.5">
                  <Layout className="w-4 h-4 text-[#ab8355]" />
                  <span>Behance Highlights</span>
                </h3>
                <a
                  href="https://www.behance.net/nikhilr27"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-sans font-bold text-[#ab8355] hover:text-[#967247] flex items-center space-x-1.5"
                >
                  <span>All Projects</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Dynamic portfolio grid showcasing his creative items */}
              <div className="space-y-3">
                {BEHANCE_SHOTS.map((shot, index) => (
                  <a
                    key={index}
                    href="https://www.behance.net/nikhilr27"
                    target="_blank"
                    rel="noreferrer"
                    className="block group"
                  >
                    <div className="p-3.5 bg-white rounded-lg border border-stone-200 hover:border-[#ab8355] hover:shadow-xs transition-all flex items-start space-x-3.5">
                      {/* Stylized geometric representation block instead of heavy files */}
                      <div className={`w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center font-display font-semibold text-[10px] text-center p-1 border tracking-tighter ${shot.accent} group-hover:scale-105 transition-transform duration-300`}>
                        {shot.imageText}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[9px] text-[#ab8355] font-bold uppercase tracking-wider block">
                            {shot.category}
                          </span>
                        </div>
                        <span className="block font-display font-bold text-stone-900 text-xs truncate group-hover:text-[#ab8355] transition-colors mt-0.5">
                          {shot.title}
                        </span>
                        <p className="font-sans text-stone-500 text-[10px] line-clamp-1 mt-0.5">
                          {shot.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
