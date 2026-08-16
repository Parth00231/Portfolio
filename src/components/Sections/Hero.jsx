import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, X, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import resumePDF from '../../assets/Parth_Rastogi_Resume(PDF).pdf';
import avatarImg from '../../assets/Avatar.png';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative z-10">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 space-y-7"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-3">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 font-mono font-medium tracking-widest text-xs uppercase"
            >
              System Online // Welcome
            </motion.h2>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]"
            >
              PARTH <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                RASTOGI
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-300 font-light max-w-xl leading-relaxed"
            >
              <span className="font-semibold text-cyan-300">Aspiring Full-Stack & GenAI Developer</span> passionate about engineering scalable, visually stunning, and intelligent digital architectures.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-semibold tracking-wider text-sm flex items-center gap-2.5 shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:shadow-[0_0_35px_rgba(14,165,233,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Eye className="w-4 h-4 relative z-10" />
              <span className="relative z-10 uppercase">View Resume</span>
            </button>
            
            <a 
              href={resumePDF} 
              download="Parth_Rastogi_Resume.pdf" 
              className="group px-6 py-3.5 rounded-xl bg-space-850/80 hover:bg-space-800 text-slate-200 border border-white/10 hover:border-cyan-500/40 font-semibold tracking-wider text-sm flex items-center gap-2.5 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              <span className="uppercase">Download PDF</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Avatar Showcase */}
        <motion.div 
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="relative w-72 sm:w-80 md:w-[440px] flex items-center justify-center">
            
            {/* Background Halo Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500/20 via-cyan-400/10 to-violet-500/20 blur-2xl animate-pulse-slow pointer-events-none" />
            
            <div className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-cyan-400/20 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[105%] h-[105%] rounded-full border border-violet-500/20 animate-spin-reverse-slow pointer-events-none" />
            
            {/* Floating Avatar Card */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full"
            >
              <img 
                src={avatarImg} 
                alt="Parth Rastogi" 
                className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(14,165,233,0.35)] filter hover:brightness-110 transition-all duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 flex-col items-center justify-center bg-space-850/80 rounded-3xl border border-white/10 text-white/40">
                <span className="font-display text-5xl font-bold">PR</span>
                <span className="text-xs tracking-widest mt-2 font-mono">[PARTH_AVATAR]</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div 
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md cursor-pointer"
          >
            <motion.div 
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-4xl h-[85vh] bg-space-900 border border-brand-500/30 rounded-2xl flex flex-col relative shadow-[0_0_60px_rgba(14,165,233,0.2)] overflow-hidden cursor-default"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-space-950/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-display font-medium text-sm text-slate-200 tracking-wide">
                    Parth_Rastogi_Resume.pdf
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <a 
                    href={resumePDF} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button 
                    onClick={() => setIsModalOpen(false)} 
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full h-full bg-slate-900 overflow-hidden">
                <iframe 
                  src={resumePDF} 
                  className="w-full h-full border-0" 
                  title="Resume PDF Preview"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

