import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Sparkles, Terminal, Cpu } from 'lucide-react';
import digitalTwinImg from '../../assets/Digital_twin.png';
import hackingSimuImg from '../../assets/Hacking_simu.png';

const PROJECTS = [
  {
    title: 'Digital Twin of Productivity',
    tagline: 'AI-Powered Behavioral Analytics',
    category: 'AI & Full-Stack',
    icon: Sparkles,
    description: 'An intelligent Digital Twin platform that analyzes daily routines, generates real-time personalized productivity insights, and forecasts performance through interactive simulations.',
    tech: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'SQL', 'Groq API'],
    github: 'https://github.com/Parth00231/Digital-Twin.git',
    image: digitalTwinImg,
    featured: true,
  },
  {
    title: 'Hacking Simulation Interface',
    tagline: 'Terminal-Based Cyber Environment',
    category: 'Simulation & Web',
    icon: Terminal,
    description: 'An immersive, responsive terminal simulator built in JavaScript featuring custom command execution engines, system diagnostics, and simulated cybersecurity mechanics.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Terminal API'],
    github: 'https://github.com/Parth00231/Hacker-s-Terminal.git',
    image: hackingSimuImg,
    featured: true,
  }
];

export default function Projects() {
  const [flash, setFlash] = useState(false);

  const handleHover = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 120);
  };

  return (
    <section id="projects" className="py-32 px-6 relative z-10 border-t border-white/5 bg-space-950/40">
      {flash && <div className="fixed inset-0 z-50 bg-cyan-400/10 pointer-events-none mix-blend-screen" />}
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f2fe]" />
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wider">
                FEATURED <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">PROJECTS</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm md:text-base max-w-xl">
              Production-ready applications and interactive software experiments.
            </p>
          </div>
          
          <a
            href="https://github.com/Parth00231"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors self-start md:self-auto"
          >
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              onMouseEnter={handleHover}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative rounded-2xl bg-space-900/70 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(14,165,233,0.2)] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Corner Cyber Brackets */}
              <div className="cyber-bracket-tl" />
              <div className="cyber-bracket-br" />

              {/* Glowing Top Edge Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Image Showcase Container */}
                <div className="relative h-56 w-full overflow-hidden bg-space-950 border-b border-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter contrast-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 items-center justify-center text-white/20 font-mono text-xs">
                    [{project.title.toUpperCase()}_PREVIEW]
                  </div>

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/20 to-transparent" />
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/80 mt-0.5">{project.tagline}</p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="text-xs px-2.5 py-1 rounded-md bg-space-850 border border-white/5 text-slate-300 font-medium group-hover:border-cyan-500/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 mt-4">
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm group/btn"
                  >
                    <Code2 className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

