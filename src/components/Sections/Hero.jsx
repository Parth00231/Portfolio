import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import { useState } from 'react';
import resumePDF from '../../assets/Parth_Rastogi_Resume (PDF).pdf';
import avatarImg from '../../assets/Avatar.png';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative z-10">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <motion.h2 
              className="text-brand-400 font-medium tracking-wider text-sm uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              System Online // Welcome
            </motion.h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight">
              PARTH <br /> RASTOGI
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-xl">
              <strong className="text-red-500 font-bold">Aspiring Web Developer</strong> Passionate about creating innovative, responsive and user-centric digital experiences. 
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative px-6 py-3 bg-brand-500/10 text-brand-400 border border-brand-500/50 hover:bg-brand-500 hover:text-white transition-all duration-300 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 w-0 bg-brand-500 transition-all duration-300 ease-out group-hover:w-full -z-10"></div>
              <Eye className="w-5 h-5" />
              <span className="font-medium tracking-wide">VIEW RESUME</span>
            </button>
            
            <a 
              href={resumePDF} 
              download="Parth_Rastogi_Resume.pdf" 
              className="group px-6 py-3 bg-white/5 text-slate-200 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span className="font-medium tracking-wide">DOWNLOAD PDF</span>
            </a>
          </div>
        </motion.div>

        {/* Avatar Area */}
        <motion.div 
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 md:w-[450px] flex items-center justify-center">
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={avatarImg} 
              alt="Parth Rastogi" 
              className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 flex-col items-center justify-center bg-transparent text-white/20">
              <span className="font-display text-4xl">PR</span>
              <span className="text-xs tracking-widest mt-2">[AVATAR_1]</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl h-[80vh] bg-space-800 border border-white/10 flex flex-col relative"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-space-900/50">
              <span className="font-display font-medium text-slate-300">Parth_Rastogi_Resume.pdf</span>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 w-full h-full bg-white rounded-b-lg overflow-hidden">
              <iframe 
                src={resumePDF} 
                className="w-full h-full border-0" 
                title="Resume PDF"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
