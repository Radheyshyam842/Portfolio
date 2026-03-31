import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Community from './components/Community';
import Experience from './components/Experience';
import Education from './components/Education';
import Services from './components/Services';
import Pricing from './components/Pricing';
import CalendarClock from './components/CalendarClock';
import FunFacts from './components/FunFacts';
import Vision from './components/Vision';
import Contact from './components/Contact';
import ThemePanel from './components/ThemePanel';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Load saved preferences
    const savedColor = localStorage.getItem('themeColor') || '#78cc6d';
    document.documentElement.style.setProperty('--theme-color', savedColor);
    
    if(localStorage.getItem('lightMode') === 'true') {
      document.body.classList.add('light-mode');
    }

    // ScrollSpy Logic
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'community', 'experience', 'education', 'services', 'pricing', 'calendar', 'funfacts', 'quote', 'contact'];
      const scrollY = window.scrollY;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 150;
          const offsetHeight = element.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleThemePanel = () => setIsThemePanelOpen(!isThemePanelOpen);

  return (
    <>
      <motion.div 
        style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'var(--theme-color)', transformOrigin: '0%', zIndex: 9999 }} 
      />
      <div className="background"></div>
      <div className="bg-mesh"></div>
      <div className="bg-grid"></div>
      
      <button className="menu-toggle" onClick={toggleMobileMenu} style={{ display: isMobileMenuOpen ? 'flex' : '' }}>
        <i className="fas fa-bars"></i>
      </button>
      
      <div className={`sidebar-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} style={{ display: isMobileMenuOpen ? 'block' : 'none' }}></div>
      
      <div className="main-wrapper">
        <Sidebar 
          isActive={isMobileMenuOpen} 
          closeMobileMenu={() => setIsMobileMenuOpen(false)}
          openThemePanel={toggleThemePanel}
          activeSection={activeSection}
        />
        
        <main className="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Community />
          <Experience />
          <Education />
          <Services />
          <Pricing />
          <CalendarClock />
          <FunFacts />
          <Vision />
          <Contact />
        </main>
      </div>

      <ThemePanel 
        isOpen={isThemePanelOpen} 
        onClose={toggleThemePanel} 
      />

      <button className="floating-theme-btn" onClick={toggleThemePanel}>
        <i className="ion ion-ios-color-palette"></i>
      </button>
    </>
  );
}

export default App;
