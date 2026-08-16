import { motion } from 'framer-motion';
import { MapPin, GraduationCap, BrainCircuit, Briefcase } from 'lucide-react';
import photoImg from '../../assets/Photo.jpeg';

export default function About() {
  const highlights = [
    { icon: MapPin, label: 'Location', value: 'Noida, Uttar Pradesh', color: 'text-cyan-400' },
    { icon: GraduationCap, label: 'Education', value: 'B.Tech CS & Data Science', color: 'text-indigo-400' },
    { icon: BrainCircuit, label: 'Specialty', value: 'Web Dev & GenAI Systems', color: 'text-violet-400' },
    { icon: Briefcase, label: 'Availability', value: 'Open for Opportunities', color: 'text-emerald-400' },
  ];

  return (
    <section id="about" className="py-32 px-6 relative z-10 border-t border-white/5 bg-space-950/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f2fe]" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wider">
              ABOUT <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">ME</span>
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-cyan-500/40 via-indigo-500/20 to-transparent flex-1 ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] group">
              {/* Backlight Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-violet-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative rounded-2xl bg-space-900 border border-white/15 p-2 overflow-hidden shadow-2xl">
                <div className="cyber-bracket-tl" />
                <div className="cyber-bracket-br" />
                
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                  <img 
                    src={photoImg} 
                    alt="Parth Rastogi" 
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 flex-col items-center justify-center bg-space-850 text-white/30 font-mono">
                    <span className="font-display text-4xl font-bold">PR</span>
                    <span className="text-xs mt-2">[PROFILE_PHOTO]</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text & Bento Metrics Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-slate-300"
          >
            <div className="space-y-4 text-base md:text-lg font-light leading-relaxed">
              <p>
                Hello! I'm <strong className="text-white font-semibold">Parth Rastogi</strong>, a Computer Science & Data Science undergraduate dedicated to engineering interactive, responsive, and performance-first digital products.
              </p>
              <p>
                I thrive at the intersection of modern full-stack development, modern web standards, and Generative AI. Whether building scalable web interfaces, architectural simulations, or data-driven tooling, my focus is delivering clean code and remarkable user experiences.
              </p>
            </div>

            {/* Bento Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item) => (
                <div 
                  key={item.label}
                  className="p-4 rounded-xl bg-space-900/60 border border-white/10 hover:border-cyan-500/30 backdrop-blur-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">{item.label}</p>
                      <p className="text-sm font-semibold text-white mt-0.5">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

