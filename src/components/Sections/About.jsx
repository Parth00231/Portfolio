import { motion } from 'framer-motion';
import photoImg from '../../assets/Photo.jpeg';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wider">
            ABOUT <span className="text-brand-500">ME</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-brand-500/50 to-transparent flex-1"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-40 items-stretch">
          {/* Avatar 2 Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full flex"
          >
            <div 
              className="relative w-full max-w-[360px] mx-auto md:ml-auto md:mr-24 h-full min-h-[350px] overflow-hidden rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              <img 
                src={photoImg} 
                alt="Parth Casual" 
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 flex-col items-center justify-center bg-space-800 text-white/20">
                <span className="font-display text-4xl">PR</span>
                <span className="text-xs tracking-widest mt-2">[AVATAR_2]</span>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-300 leading-relaxed text-lg font-light"
          >
            <p>
              Hi, I'm <strong className="text-white font-medium">Parth Rastogi</strong>, a Computer Science and Data Science undergraduate dedicated to crafting creative digital experiences. I bridge the gap between complex data and impactful, scalable full-stack applications. Driven by a passion for modern web technologies and Generative AI, I turn complex technical challenges into clean, user-centric solutions.
            </p>
            <p>
              Committed to creating user-centric designs, clean architecture, and efficient code. I thrive in environments that challenge me to continuously learn and apply cutting-edge technologies to solve real-world problems.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-6 border-t border-white/10">
              <div>
                <h4 className="text-brand-400 text-sm uppercase tracking-wider mb-2">Location</h4>
                <p className="text-white">Noida Uttar Pradesh</p>
              </div>
              <div>
                <h4 className="text-brand-400 text-sm uppercase tracking-wider mb-2">Availability</h4>
                <p className="text-white">Open to Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
