import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/5 relative z-10 bg-[#030712]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <span className="text-white/50 text-sm font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} Parth Rastogi
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 text-xs text-white/30 uppercase tracking-widest"
        >
          <span>Crafted with</span>
          <span className="text-[#0ea5e9] animate-pulse">React</span>
          <span>&</span>
          <span className="text-[#0ea5e9] animate-pulse">Vite</span>
        </motion.div>
      </div>
    </footer>
  );
}
