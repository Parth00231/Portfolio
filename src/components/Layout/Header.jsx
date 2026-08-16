import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Certifications', 'Connect', 'Contact'];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map(item => item.toLowerCase());
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-4 md:px-8 py-4 transition-all duration-300">
      <div className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 flex items-center justify-between px-5 py-3 ${
        isScrolled 
          ? 'bg-space-900/80 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] shadow-glow-cyan/10' 
          : 'bg-space-900/40 backdrop-blur-md border border-white/5'
      }`}>
        
        {/* Logo */}
        <motion.a 
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-9 h-9 rounded-lg bg-space-800/80 border border-brand-500/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-brand-400 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
            <div className="cyber-bracket-tl" />
            <div className="cyber-bracket-br" />
            <span className="font-display font-bold text-sm text-white tracking-tighter">PR</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-widest text-sm text-slate-100 group-hover:text-cyan-400 transition-colors">PARTH</span>
            <span className="text-[10px] tracking-widest text-slate-400 font-mono -mt-1">PORTFOLIO</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-space-950/60 p-1.5 rounded-xl border border-white/5">
          {NAV_ITEMS.map((item, i) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <motion.a
                key={item}
                href={`#${id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wider transition-all duration-200 uppercase ${
                  isActive 
                    ? 'text-cyan-400 font-semibold shadow-[0_0_10px_rgba(14,165,233,0.3)]' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-lg bg-brand-500/15 border border-brand-500/40 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item}
              </motion.a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="#contact" 
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500/20 to-violet-500/20 hover:from-brand-500/30 hover:to-violet-500/30 border border-brand-500/40 hover:border-brand-400 text-xs font-semibold tracking-wider text-cyan-300 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.2)] flex items-center gap-1.5 group cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>LET'S TALK</span>
          </a>
        </div>
        
        {/* Mobile Nav Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-6xl mx-auto p-4 rounded-2xl bg-space-900/95 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.7)] flex flex-col gap-2"
          >
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium tracking-wider uppercase transition-colors flex items-center justify-between ${
                    isActive ? 'bg-brand-500/20 text-cyan-400 font-bold border border-brand-500/30' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-lg bg-brand-500/20 text-cyan-300 font-semibold text-sm border border-brand-500/40"
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

