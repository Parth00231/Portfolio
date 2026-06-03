import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Shield, Cloud, Cpu, Database, BarChart, Eye, X } from 'lucide-react';
import { playThunderStrike } from '../../utils/audio';

import cert1 from '../../assets/Certificate Prompting Essentials completion .pdf';
import cert2 from '../../assets/Certificate AI Essentials completion.pdf';
import cert3 from '../../assets/Certificate Deloitte.pdf';
import cert4 from '../../assets/Certificate AWS Academy.pdf';
import cert5 from '../../assets/Certificate Be10x.pdf';
import cert6 from '../../assets/Certificate Outskill.pdf';
import cert7 from '../../assets/Certificate Power-Bi.pdf';

const CERTIFICATIONS = [
  { title: "Google Prompting Essentials", issuer: "Coursera", year: "2026", icon: Cpu, pdf: cert1 },
  { title: "Google AI Essentials", issuer: "Coursera", year: "2026", icon: Zap, pdf: cert2 },
  { title: "Cyber Job Simulation", issuer: "Deloitte", year: "2026", icon: Shield, pdf: cert3 },
  { title: "AWS Academy Graduate Cloud Foundations", issuer: "AWS Academy", year: "2026", icon: Cloud, pdf: cert4 },
  { title: "AI Tools Workshop", issuer: "Be10x", year: "2026", icon: Database, pdf: cert5 },
  { title: "Generative AI Mastermind", issuer: "Outskill", year: "2025", icon: Award, pdf: cert6 },
  { title: "Power BI Workshop", issuer: "OM OfficeMaster", year: "2025", icon: BarChart, pdf: cert7 },
];

export default function Certifications() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [flash, setFlash] = useState(false);

  const handleHover = () => {
    playThunderStrike();
    setFlash(true);
    setTimeout(() => setFlash(false), 150);
  };

  return (
    <section id="certifications" className="py-40 px-6 relative z-10 overflow-hidden">
      {flash && <div className="fixed inset-0 z-50 bg-white/20 pointer-events-none mix-blend-overlay"></div>}
      <style>{`
        @keyframes neon-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ea5e9, 0 0 40px #0ea5e9;
          }
          20%, 24%, 55% {
            opacity: 0.4;
            text-shadow: none;
          }
        }
        .flicker-text {
          animation: neon-flicker 4s infinite alternate;
        }
        @keyframes lightning-flash {
          0% { box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03); background-color: rgba(13, 13, 26, 0.8); }
          5% { box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.9), 0 0 50px rgba(14, 165, 233, 0.8); background-color: rgba(14, 165, 233, 0.2); }
          10% { box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03); background-color: rgba(13, 13, 26, 0.8); }
          15% { box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 30px rgba(14, 165, 233, 0.5); background-color: rgba(14, 165, 233, 0.1); }
          100% { box-shadow: inset 0 0 0 1px rgba(14, 165, 233, 0.4), 0 0 15px rgba(14, 165, 233, 0.1); background-color: rgba(13, 13, 26, 0.8); }
        }
        .lightning-card:hover {
          animation: lightning-flash 0.5s ease-out forwards;
        }
        .lightning-card {
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
        }
        .lightning-border::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(14, 165, 233, 1) 50%, transparent 100%);
          background-size: 200% 100%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .lightning-card:hover .lightning-border::before {
          opacity: 1;
          animation: strike 0.8s ease-in-out infinite;
        }
        @keyframes strike {
          0% { background-position: 200% 0; opacity: 1; }
          2% { opacity: 0; }
          4% { opacity: 1; filter: brightness(2); }
          6% { opacity: 0; }
          10% { opacity: 1; background-position: -200% 0; filter: brightness(1); }
          100% { background-position: -200% 0; opacity: 0; }
        }
      `}</style>
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0ea5e9]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-[0.2em] uppercase mb-6">
            <span className="text-[#0ea5e9] flicker-text">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light tracking-wider leading-relaxed">
            Verified expertise in cloud architecture, artificial intelligence, and advanced cyber operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={handleHover}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`lightning-card relative group bg-[#0d0d1a]/80 backdrop-blur-xl rounded-2xl p-10 transition-transform duration-500 hover:-translate-y-3 cursor-crosshair ${idx === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="lightning-border absolute inset-0 rounded-2xl pointer-events-none"></div>
              
              <div className="flex flex-col h-full relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0ea5e9]/10 to-transparent flex items-center justify-center mb-10 border border-[#0ea5e9]/20 group-hover:border-[#0ea5e9]/50 transition-colors duration-300">
                  <cert.icon className="w-7 h-7 text-[#0ea5e9] group-hover:flicker-text" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-display font-medium text-white mb-4 tracking-wide leading-tight group-hover:text-[#0ea5e9] transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5">
                  <div className="flex flex-col gap-3">
                    <span className="text-slate-400 font-medium tracking-[0.15em] text-xs uppercase">
                      {cert.issuer}
                    </span>
                    {cert.pdf && (
                      <button 
                        onClick={() => setSelectedPdf(cert.pdf)}
                        className="flex items-center gap-1.5 text-xs font-bold text-[#0ea5e9] hover:text-white transition-colors duration-300"
                      >
                        <Eye className="w-4 h-4" /> VIEW CERTIFICATE
                      </button>
                    )}
                  </div>
                  <span className="text-[#0ea5e9] font-mono text-sm bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.1)] group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all">
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-5xl h-[85vh] bg-[#0a0a16] border border-[#0ea5e9]/30 rounded-2xl flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.2)]"
          >
            <div className="flex justify-between items-center p-5 border-b border-[#0ea5e9]/20 bg-[#0ea5e9]/5">
              <span className="font-display font-bold text-[#0ea5e9] tracking-[0.2em] text-sm uppercase">Credential Viewer</span>
              <button 
                onClick={() => setSelectedPdf(null)} 
                className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 w-full h-full bg-white/5">
              <iframe 
                src={selectedPdf} 
                className="w-full h-full border-0" 
                title="Certificate PDF"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
