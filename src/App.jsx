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
  return (
    <>
      <CustomCursor />
      <div className="relative w-full min-h-screen overflow-x-hidden">
        <CanvasBackground />
        <Header />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Connect />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
