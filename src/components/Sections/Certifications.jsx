import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Award, Shield, Cloud, Cpu, Database, BarChart, Eye, X, ExternalLink } from 'lucide-react';

import cert1 from '../../assets/Certificate Prompting Essentials completion .pdf';
import cert2 from '../../assets/Certificate AI Essentials completion.pdf';
import cert3 from '../../assets/Certificate Deloitte.pdf';
import cert4 from '../../assets/Certificate AWS Academy.pdf';
import cert5 from '../../assets/Certificate Be10x.pdf';
import cert6 from '../../assets/Certificate Outskill.pdf';
import cert7 from '../../assets/Certificate Power-Bi.pdf';
import cert8 from '../../assets/Certificate QS-Igauge.pdf';

const CERTIFICATIONS = [
  { title: "Google Prompting Essentials", issuer: "Coursera / Google", year: "2026", category: "AI & GenAI", icon: Cpu, pdf: cert1 },
  { title: "Google AI Essentials", issuer: "Coursera / Google", year: "2026", category: "AI & GenAI", icon: Zap, pdf: cert2 },
  { title: "Cyber Job Simulation", issuer: "Deloitte", year: "2026", category: "Cloud & Security", icon: Shield, pdf: cert3 },
  { title: "AWS Academy Cloud Foundations", issuer: "AWS Academy", year: "2026", category: "Cloud & Security", icon: Cloud, pdf: cert4 },
  { title: "AI Tools Workshop", issuer: "Be10x", year: "2026", category: "AI & GenAI", icon: Database, pdf: cert5 },
  { title: "Generative AI Mastermind", issuer: "Outskill", year: "2025", category: "AI & GenAI", icon: Award, pdf: cert6 },
  { title: "Power BI Workshop", issuer: "OfficeMaster", year: "2025", category: "Data Analytics", icon: BarChart, pdf: cert7 },
  { title: "QS I-GAUGE Certification", issuer: "QS I-GAUGE", year: "2025", category: "Academic & Leadership", icon: Award, pdf: cert8 },
];

const CATEGORIES = ['All', 'AI & GenAI', 'Cloud & Security', 'Data Analytics'];

export default function Certifications() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPdf(null);
    };
    if (selectedPdf) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPdf]);

  const filteredCerts = selectedCategory === 'All' 
    ? CERTIFICATIONS 
    : CERTIFICATIONS.filter(c => c.category === selectedCategory || (selectedCategory === 'Data Analytics' && c.category === 'Academic & Leadership'));

  const handleHover = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 120);
  };

  return (
    <section id="certifications" className="py-32 px-6 relative z-10 overflow-hidden border-t border-white/5 bg-space-950/60">
      {flash && <div className="fixed inset-0 z-50 bg-cyan-400/10 pointer-events-none mix-blend-screen" />}
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wider">
            HONORS & <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">CERTIFICATIONS</span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            Industry-recognized certifications in Generative AI, Cloud Computing, Cybersecurity, and Business Analytics.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(14,165,233,0.3)]'
                    : 'bg-space-900/80 text-slate-400 border border-white/5 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.title}
              onMouseEnter={handleHover}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl bg-space-900/60 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] flex flex-col justify-between"
            >
              {/* Corner Cyber Brackets */}
              <div className="cyber-bracket-tl" />
              <div className="cyber-bracket-br" />

              <div>
                {/* Header with Icon and Year */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-transparent flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all">
                    <cert.icon className="w-5 h-5 text-cyan-400" strokeWidth={1.75} />
                  </div>
                  <span className="text-cyan-300 font-mono text-xs px-2.5 py-1 rounded-md bg-space-850 border border-white/5">
                    {cert.year}
                  </span>
                </div>
                
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-xs font-medium text-slate-400 tracking-wide uppercase font-mono mb-4">
                  {cert.issuer}
                </p>
              </div>

              {/* Card Bottom CTA */}
              <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-end">
                {cert.pdf && (
                  <button 
                    onClick={() => setSelectedPdf(cert.pdf)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <Eye className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                    <span>VIEW</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <div 
            onClick={() => setSelectedPdf(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md cursor-pointer"
          >
            <motion.div 
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-5xl h-[85vh] bg-space-900 border border-cyan-500/30 rounded-2xl flex flex-col relative overflow-hidden shadow-[0_0_60px_rgba(14,165,233,0.25)] cursor-default"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-space-950/90">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-display font-bold text-slate-200 tracking-wider text-xs uppercase">
                    Credential Verification Viewer
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <a 
                    href={selectedPdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button 
                    onClick={() => setSelectedPdf(null)} 
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    title="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full h-full bg-slate-900 overflow-hidden">
                <iframe 
                  src={selectedPdf} 
                  className="w-full h-full border-0" 
                  title="Certificate Preview"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

