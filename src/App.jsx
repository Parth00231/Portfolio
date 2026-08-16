import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import CanvasBackground from './components/Background/CanvasBackground';
import CustomCursor from './components/UI/CustomCursor';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Certifications from './components/Sections/Certifications';
import Connect from './components/Sections/Connect';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CustomCursor />
      
      {/* Global Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 via-cyan-400 to-purple-500 origin-left z-50 shadow-[0_0_12px_rgba(14,165,233,0.8)]"
        style={{ scaleX }}
      />

      {/* Ambient background mesh */}
      <div className="ambient-mesh" />

      <div className="relative w-full min-h-screen overflow-x-hidden">
        <CanvasBackground />
        <Header />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Connect />
          <Contact />
        </main>
        
        <Footer />

        {/* Floating Back to Top Button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-space-850/80 hover:bg-brand-500/20 text-brand-400 hover:text-white border border-brand-500/40 backdrop-blur-xl shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all duration-300 group cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </div>
    </>
  );
}

export default App;

