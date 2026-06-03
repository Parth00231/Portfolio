import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-6 md:px-12 z-40 flex justify-between items-center bg-[#0a0a16]/40 backdrop-blur-xl border-b border-white/5 shadow-sm">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="w-10 h-10 border border-brand-500/50 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-brand-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="font-display font-bold text-lg text-white relative z-10 tracking-tighter">PR</span>
          <svg className="w-3 h-3 absolute top-1 right-1 text-brand-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5v10M19 5H9" />
          </svg>
        </div>
        <span className="font-display font-bold tracking-widest text-xl text-slate-200">PARTH</span>
      </motion.div>

      <nav className="hidden md:flex gap-8">
        {['About', 'Skills', 'Projects', 'Certifications', 'Connect', 'Contact'].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="text-sm font-medium tracking-wider text-slate-400 hover:text-white transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </nav>
      
      {/* Mobile Nav Toggle */}
      <button className="md:hidden text-white/70 hover:text-white">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
