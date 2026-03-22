import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container nav-flex">
        
        <div className="nav-logo" onClick={() => scrollToSection('top')}>
          <span className="logo-rm">RM</span><span className="logo-dot">.</span>
        </div>

        <ul className="nav-links">
          <li><button className="nav-btn" onClick={() => scrollToSection('about')}>ABOUT ME</button></li>
          <li><button className="nav-btn" onClick={() => scrollToSection('skills')}>SKILLS</button></li>
          <li><button className="nav-btn" onClick={() => scrollToSection('projects')}>PROJECTS</button></li>
          <li><button className="nav-btn" onClick={() => scrollToSection('certificates')}>CERTIFICATES</button></li>
          <li><button className="nav-btn" onClick={() => scrollToSection('resume')}>RESUME</button></li>
          <li><button className="nav-btn" onClick={() => scrollToSection('contact')}>GET IN TOUCH</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
