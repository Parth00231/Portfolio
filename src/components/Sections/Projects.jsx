import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import digitalTwinImg from '../../assets/Digital_twin.png';
import hackingSimuImg from '../../assets/Hacking_simu.png';
import { playThunderStrike } from '../../utils/audio';

const PROJECTS = [
  {
    title: 'Digital Twin of Productivity',
    description: 'Created an AI-ppwered Digital Twin of productivity that analyses daily activities generates personalized insights, and predicts future productivity through interactive simulations',
    tech: ['React', 'Node.js', 'Express Js', 'Tailwind CSS', 'SQL', 'Groq API' ],
    github: 'https://github.com/Parth00231/Digital-Twin.git',
    image: digitalTwinImg
  },
  {
    title: 'Hacking Simulation Interface',
    description: 'Built an interactive, responsive terminal-based simulation using JavaScript, featuring a custom command-based interaction system to emulate real-world environments.',
    tech: ['Html', 'CSS', 'Javascript'],
    github: 'https://github.com/Parth00231/Hacker-s-Terminal.git',
    image: hackingSimuImg
  }
];

export default function Projects() {
  const [flash, setFlash] = useState(false);

  const handleHover = () => {
    playThunderStrike();
    setFlash(true);
    setTimeout(() => setFlash(false), 150);
  };

  return (
    <section id="projects" className="py-24 px-6 relative z-10 border-t border-white/5">
      {flash && <div className="fixed inset-0 z-50 bg-white/20 pointer-events-none mix-blend-overlay"></div>}
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 flex-row-reverse"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wider text-right">
            FEATURED <span className="text-brand-500">PROJECTS</span>
          </h2>
          <div className="h-px bg-gradient-to-l from-brand-500/50 to-transparent flex-1"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              onMouseEnter={handleHover}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative flex flex-col h-full bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-md hover:bg-white/[0.05] transition-all duration-300 cursor-crosshair"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Image Container */}
              <div className="h-48 relative overflow-hidden bg-space-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center text-white/20 font-display">
                  [PROJECT_IMAGE]
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-400 transition-colors mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-brand-500/10 text-brand-300 border border-brand-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                    <Code className="w-4 h-4" /> Code
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
