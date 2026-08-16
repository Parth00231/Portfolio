import { motion } from 'framer-motion';
import { Heart, Terminal, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 relative z-10 bg-space-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="w-7 h-7 rounded-lg bg-space-850 border border-cyan-500/40 flex items-center justify-center">
            <span className="font-display font-bold text-xs text-cyan-400">PR</span>
          </div>
          <div>
            <p className="text-white text-xs font-semibold tracking-wider font-display uppercase">
              Parth Rastogi
            </p>
            <p className="text-slate-500 text-[10px] font-mono">
              © {new Date().getFullYear()} • All Rights Reserved
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 text-xs text-slate-400 font-mono"
        >
          <span>Crafted with</span>
          <span className="text-cyan-400 font-medium">React 19</span>
          <span>•</span>
          <span className="text-indigo-400 font-medium">Tailwind</span>
          <span>•</span>
          <span className="text-violet-400 font-medium">Framer</span>
        </motion.div>

      </div>
    </footer>
  );
}

