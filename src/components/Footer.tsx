import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Phone, MapPin, Linkedin, Heart, FileDown, CheckCircle2, ChevronRight, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Design Manager', message: '' });
  const [inboxLogs, setInboxLogs] = useState<any[]>(() => {
    const saved = localStorage.getItem('hiring_inbox');
    return saved ? JSON.parse(saved) : [];
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    const newLog = {
      ...formData,
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
    };

    const updatedLogs = [newLog, ...inboxLogs];
    setInboxLogs(updatedLogs);
    localStorage.setItem('hiring_inbox', JSON.stringify(updatedLogs));
    setFormSubmitted(true);
    setFormData({ name: '', email: '', role: 'Design Manager', message: '' });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <footer className="bg-stone-950 text-stone-300 py-16 px-4 border-t-2 border-[#ab8355]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Column 1: Contact Detail Cards */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#ab8355] tracking-widest uppercase block mb-1">
                Let's Build Synergy
              </span>
              <h3 className="font-display font-black text-3xl text-white tracking-tight leading-tight">
                Get In Touch
              </h3>
              <p className="font-sans text-stone-400 text-sm leading-relaxed max-w-sm">
                Inquiries regarding Design Leadership, creative direction mentorship, brand scaling, or consulting scopes are always welcome. Connect directly via these channels:
              </p>
            </div>

            {/* Quick Contacts details */}
            <div className="space-y-3 font-mono text-xs text-stone-300">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-3.5 bg-stone-900 border border-stone-800 hover:border-[#ab8355] p-3.5 rounded-xl transition-all hover:-translate-y-0.5 group"
              >
                <div className="p-2 rounded-lg bg-[#ab8355]/10 text-[#dbb78e]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-stone-500 font-bold uppercase tracking-wider text-[9px]">Direct Email</span>
                  <span className="font-sans text-xs text-stone-200 group-hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center space-x-3.5 bg-stone-900 border border-stone-800 hover:border-[#ab8355] p-3.5 rounded-xl transition-all hover:-translate-y-0.5 group"
              >
                <div className="p-2 rounded-lg bg-[#ab8355]/10 text-[#dbb78e]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-stone-500 font-bold uppercase tracking-wider text-[9px]">Mobile Phone</span>
                  <span className="font-sans text-xs text-stone-200 group-hover:text-white transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center space-x-3.5 bg-stone-900 border border-stone-800 p-3.5 rounded-xl">
                <div className="p-2 rounded-lg bg-[#ab8355]/10 text-[#dbb78e]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-stone-500 font-bold uppercase tracking-wider text-[9px]">Location Zone</span>
                  <span className="font-sans text-xs text-stone-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Recruiting Box */}
          <div className="lg:col-span-7 bg-stone-900 rounded-xl p-6 md:p-8 border border-stone-800 shadow-xl relative overflow-hidden">
            <h3 className="font-display font-semibold text-white text-md tracking-tight mb-4 flex items-center space-x-2">
              <Send className="w-4 h-4 text-[#ab8355]" />
              <span>Leave a Message (Hiring Manager Sandbox)</span>
            </h3>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-10 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">
                    Message Sent Successfully
                  </h4>
                  <p className="font-sans text-stone-400 text-xs max-w-xs leading-relaxed">
                    Thank you! Your simulated message has been stored in your browser's persistent local storage.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Hiring Manager"
                        className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#ab8355] transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        required
                        onChange={handleInputChange}
                        placeholder="hr@company.com"
                        className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#ab8355] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1 sm:col-span-2 space-y-1">
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400">
                        Purpose of Discussion
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#ab8355] transition-all"
                      >
                        <option value="Design Manager">Full-time Design Manager Role</option>
                        <option value="Creative Director">Creative Director Opportunity</option>
                        <option value="Contract Advisory">Freelance / Advisory Consulting</option>
                        <option value="Behance Inquiry">Behance Portfolio Connection</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400">
                      Message Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      placeholder="Hi Nikhil, we noticed your case studies on design systems and creative operations..."
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg p-3.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#ab8355] resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[#ab8355] text-white hover:bg-[#967247] text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all shadow-md cursor-pointer"
                  >
                    <span>Submit Message Outline</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </AnimatePresence>

            {/* Simulated Inbox logs helper inside local storage */}
            {inboxLogs.length > 0 && (
              <div className="mt-5 border-t border-stone-800 pt-4">
                <span className="block text-[8px] font-mono tracking-widest text-[#ab8355] uppercase mb-2">
                  Hiring Sandbox Inbox Log ({inboxLogs.length})
                </span>
                <div className="max-h-24 overflow-y-auto space-y-1.5 pr-2">
                  {inboxLogs.map((log) => (
                    <div key={log.id} className="p-2 bg-stone-950/70 border border-stone-800/40 rounded text-[10px] flex justify-between items-center text-stone-400">
                      <div>
                        <span className="font-semibold text-stone-200">{log.name}</span> ({log.email})
                        <span className="block text-[8px] text-stone-500 font-mono mt-0.5">{log.role}</span>
                      </div>
                      <span className="text-[8px] text-stone-600 font-mono">{log.date}</span>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      localStorage.removeItem('hiring_inbox');
                      setInboxLogs([]);
                    }}
                    className="text-[8px] text-rose-500 hover:underline hover:text-rose-450 uppercase block font-mono"
                  >
                    Clear Inbox Records
                  </button>
                </div>
              </div>
            )}
          </div>
          
        </div>

        {/* Dynamic Credits */}
        <div className="mt-14 pt-6 border-t border-stone-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div className="flex items-center space-x-1">
            <span>© 2026 Nikhil Raghuvaran. Crafted under strict Design Manager principles.</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>& TypeScript digital engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
