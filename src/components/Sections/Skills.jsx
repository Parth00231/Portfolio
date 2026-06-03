import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    color: '#3b82f6', // blue-500
    skills: ['C', 'C++', 'Java', 'Python'],
    radius: 120,
    speed: 20
  },
  {
    name: 'Frontend',
    color: '#8b5cf6', // violet-500
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js'],
    radius: 180,
    speed: 25
  },
  {
    name: 'Backend',
    color: '#10b981', // emerald-500
    skills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB'],
    radius: 240,
    speed: 30
  },
  {
    name: 'AI & Core',
    color: '#ec4899', // pink-500
    skills: ['Gen AI', 'Prompt Eng', 'DSA', 'OOP', 'Git/GitHub'],
    radius: 300,
    speed: 35
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wider mb-4">
            TECHNICAL <span className="text-brand-500">ORBIT</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technological ecosystem and proficiencies.
          </p>
        </motion.div>

        <div className="relative h-[700px] w-full max-w-[800px] mx-auto flex items-center justify-center">
          {/* Central Hub */}
          <div className="absolute z-20 w-24 h-24 rounded-full bg-space-800 border-2 border-brand-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <span className="font-display font-bold text-2xl text-white">CORE</span>
          </div>

          {/* Orbits */}
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={category.name}
              className="absolute rounded-full border border-white/5"
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
                      className="absolute group flex items-center justify-center"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                    >
                      {/* Counter-rotate to keep text upright */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: category.speed,
                          ease: "linear",
                          repeat: Infinity,
                          direction: idx % 2 === 0 ? "normal" : "reverse"
                        }}
                        className="relative"
                      >
                        <div 
                          className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-150"
                          style={{ backgroundColor: category.color, boxShadow: `0 0 10px ${category.color}` }}
                        ></div>
                        
                        {/* Always visible Label */}
                        <div className="absolute top-1/2 left-full ml-3 -translate-y-1/2 pointer-events-none whitespace-nowrap z-50">
                          <span className="text-slate-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 text-sm font-medium drop-shadow-md">{skill}</span>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
