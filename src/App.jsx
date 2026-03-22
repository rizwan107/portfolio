import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import AnimatedSection from './components/AnimatedSection';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />

      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <Skills />
      </AnimatedSection>

      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      <AnimatedSection>
        <Certificates />
      </AnimatedSection>

      <AnimatedSection>
        <Resume />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>

      <footer
        style={{
          textAlign: 'center',
          padding: '2rem 0',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          borderTop: '1px solid var(--border-light)'
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Rizwan Mohammed. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
