import React, { useState } from 'react';
import { WORKFLOW_TOOLS } from '../data';
import { Cpu, Palette, Sliders } from 'lucide-react';
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

        <div className="space-y-8">
          
          <div className="max-w-3xl space-y-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
            {filteredTools.map((tool) => {
              const isAI = tool.category === 'AI';
              const isOps = tool.category === 'Operations';
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  key={tool.name}
                  className={`p-5 rounded-xl border transition-all duration-200 ${
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
                  <p className="font-sans text-stone-600 text-xs leading-relaxed">
                    {tool.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
