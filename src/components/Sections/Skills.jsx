import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbit, LayoutGrid, Code, Globe, Server, Sparkles, Cpu, Layers } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    color: '#00f2fe',
    icon: Code,
    description: 'Core programming foundations',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
    radius: 125,
    speed: 24
  },
  {
    name: 'Frontend Stack',
    color: '#38bdf8',
    icon: Globe,
    description: 'Modern client-side interfaces',
    skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
    radius: 185,
    speed: 30
  },
  {
    name: 'Backend & Data',
    color: '#8b5cf6',
    icon: Server,
    description: 'Scalable APIs & database design',
    skills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'REST APIs'],
    radius: 245,
    speed: 36
  },
  {
    name: 'AI & Core CS',
    color: '#ec4899',
    icon: Sparkles,
    description: 'Generative intelligence & algorithms',
    skills: ['Gen AI', 'Prompt Eng', 'Groq API', 'DSA', 'OOP', 'Git/GitHub'],
    radius: 305,
    speed: 42
  }
];

export default function Skills() {
  const [viewMode, setViewMode] = useState('orbit'); // 'orbit' | 'grid'

  return (
    <section id="skills" className="py-32 px-6 relative z-10 overflow-hidden border-t border-white/5 bg-space-950/60">
      <div className="max-w-6xl mx-auto">

        {/* Section Header with View Mode Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f2fe]" />
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wider">
                TECHNICAL <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">ECOSYSTEM</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-xl text-sm md:text-base">
              A structured overview of technologies, frameworks, and AI workflows I leverage.
            </p>
          </motion.div>

          {/* View Toggle Pill */}
          <div className="flex items-center bg-space-900 border border-white/10 p-1 rounded-xl self-start md:self-auto shadow-inner">
            <button
              onClick={() => setViewMode('orbit')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${viewMode === 'orbit'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-brand-500/30 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(14,165,233,0.3)]'
                  : 'text-slate-400 hover:text-white'
                }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>ORBIT</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${viewMode === 'grid'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-brand-500/30 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(14,165,233,0.3)]'
                  : 'text-slate-400 hover:text-white'
                }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>MATRIX</span>
            </button>
          </div>
        </div>

        {/* Orbit View */}
        {viewMode === 'orbit' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[680px] w-full max-w-[850px] mx-auto flex items-center justify-center scale-[0.58] sm:scale-[0.8] md:scale-95 lg:scale-100 origin-center my-[-60px] sm:my-0"
          >
            {/* Celestial Grid & Ambient Glow */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none rounded-full" />
            <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Central Energy Core */}
            <div className="absolute z-30 w-28 h-28 rounded-full bg-space-900 border-2 border-cyan-400/60 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,242,254,0.4)] backdrop-blur-xl group">
              <div className="absolute -inset-1 rounded-full border border-cyan-400/30 animate-ping opacity-30" />
              <Cpu className="w-6 h-6 text-cyan-400 mb-0.5 group-hover:rotate-45 transition-transform" />
              <span className="font-display font-extrabold text-sm text-white tracking-widest">CORE</span>
              <span className="text-[9px] text-cyan-300 font-mono tracking-tighter">ENGINE</span>
            </div>

            {/* Orbit Rings */}
            {SKILL_CATEGORIES.map((category, idx) => (
              <div
                key={category.name}
                className="absolute rounded-full border border-dashed border-white/10 hover:border-cyan-400/40 transition-colors"
                style={{
                  width: category.radius * 2,
                  height: category.radius * 2,
                }}
              >
                <motion.div
                  className="w-full h-full relative"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: category.speed,
                    ease: "linear",
                    repeat: Infinity,
                    direction: idx % 2 === 0 ? "normal" : "reverse"
                  }}
                >
                  {category.skills.map((skill, i) => {
                    const angle = (i / category.skills.length) * Math.PI * 2;
                    const x = Math.cos(angle) * category.radius;
                    const y = Math.sin(angle) * category.radius;

                    return (
                      <div
                        key={skill}
                        className="absolute group flex items-center justify-center cursor-pointer"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                        }}
                      >
                        {/* Counter-rotate to keep badge upright */}
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{
                            duration: category.speed,
                            ease: "linear",
                            repeat: Infinity,
                            direction: idx % 2 === 0 ? "normal" : "reverse"
                          }}
                          className="relative flex items-center"
                        >
                          {/* Pulsing Node */}
                          <div
                            className="w-3.5 h-3.5 rounded-full transition-transform duration-300 group-hover:scale-175 relative z-10"
                            style={{
                              backgroundColor: category.color,
                              boxShadow: `0 0 14px ${category.color}`
                            }}
                          />

                          {/* Label Pill */}
                          <div className="ml-2.5 px-2.5 py-1 rounded-md bg-space-900/90 border border-white/10 backdrop-blur-md whitespace-nowrap shadow-lg group-hover:border-cyan-400/60 group-hover:bg-space-850 transition-all duration-300">
                            <span
                              className="text-xs font-semibold tracking-wide transition-colors group-hover:text-cyan-300"
                              style={{ color: '#e2e8f0' }}
                            >
                              {skill}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            ))}
          </motion.div>
        ) : (
          /* Grid Matrix View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-space-900/60 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform"
                      style={{ color: cat.color }}
                    >
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">{cat.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-space-850 border border-white/5 text-xs text-slate-200 font-medium group-hover:border-cyan-500/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Proficiency</span>
                  <span className="text-cyan-400 font-bold">Intermediate</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}

