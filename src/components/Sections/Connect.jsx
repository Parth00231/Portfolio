import { useState } from 'react';
import { motion } from 'framer-motion';
import { playThunderStrike } from '../../utils/audio';

const SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Parth00231',
    color: '#ffffff',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/parth-rastogi-7186ba336',
    color: '#0a66c2',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Parth_Rastogi/',
    color: '#ffa116',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.099l2.396-2.4a.5.5 0 0 0-.707-.707l-2.425 2.425c-1.814 1.814-4.741 1.853-6.605.088l-.037-.038-4.279-4.195a4.949 4.949 0 0 1-1.465-3.384 4.88 4.88 0 0 1 1.488-3.334l3.86-4.132 5.388-5.766c.186-.199.444-.312.721-.312.276 0 .534.113.72.312l2.398 2.564c.245.262.383.618.383.989 0 .371-.138.727-.383.988l-1.637 1.751a.5.5 0 0 0 .733.684l1.636-1.75a2.38 2.38 0 0 0 .61-1.673 2.38 2.38 0 0 0-.61-1.674L14.205.438A1.374 1.374 0 0 0 13.483 0zm-.99 8.06a.5.5 0 0 0-.322.862l5.748 5.176c1.196 1.077 1.066 3.018-.282 3.931l-3.329 2.259a.5.5 0 1 0 .559.824l3.329-2.259c1.884-1.277 2.066-3.987.153-5.708l-5.748-5.176a.5.5 0 0 0-.108-.009z"/>
      </svg>
    )
  }
];

export default function Connect() {
  const [flash, setFlash] = useState(false);

  const handleHover = () => {
    playThunderStrike();
    setFlash(true);
    setTimeout(() => setFlash(false), 150);
  };

  return (
    <section id="connect" className="py-32 px-6 relative z-10 border-t border-white/5">
      {flash && <div className="fixed inset-0 z-50 bg-white/20 pointer-events-none mix-blend-overlay"></div>}
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wider mb-4">
            LET'S <span className="text-brand-500">CONNECT</span>
          </h2>
          <p className="text-slate-400">
            Find my code, professional experience, and algorithmic problem solving on these platforms.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {SOCIALS.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleHover}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative flex items-center justify-center w-full md:w-48 h-32 bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden hover:bg-white/[0.05] transition-all duration-300 cursor-crosshair"
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${social.color} 0%, transparent 70%)` }}
              ></div>
              
              <div className="relative z-10 flex flex-col items-center gap-3 transition-transform duration-300 group-hover:-translate-y-2">
                <div style={{ color: social.color }} className="drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity">
                  {social.icon}
                </div>
                <span className="font-display font-medium text-slate-300 group-hover:text-white tracking-wide">
                  {social.name}
                </span>
              </div>

              <div 
                className="absolute bottom-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: social.color }}
              ></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
