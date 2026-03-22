import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div className="section-header-group">
        <h2 className="section-title">◇ Contact</h2>
      </div>
      
      <div className="section-box">
        <p className="contact-desc" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--text-secondary)'}}>
          I'm currently looking for new opportunities in Data Science and Machine Learning. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="contact-social-grid" style={{
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <a href="mailto:rizwanmansuri137@gmail.com" className="social-link" style={{
            padding: '1.5rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            minWidth: '200px',
            border: '1px solid var(--border-light)',
            borderRadius: '8px',
            background: 'var(--bg-card)'
          }}>
            <FaEnvelope size={30} color="var(--accent-cyan)" />
            <span style={{fontFamily: 'var(--font-mono)', fontSize: '0.9rem'}}>Email</span>
          </a>

          <a href="https://github.com/rizwan107" target="_blank" rel="noopener noreferrer" className="social-link" style={{
            padding: '1.5rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            minWidth: '200px',
            border: '1px solid var(--border-light)',
            borderRadius: '8px',
            background: 'var(--bg-card)'
          }}>
            <FaGithub size={30} color="var(--text-primary)" />
            <span style={{fontFamily: 'var(--font-mono)', fontSize: '0.9rem'}}>GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/rizwan137/" target="_blank" rel="noopener noreferrer" className="social-link" style={{
            padding: '1.5rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            minWidth: '200px',
            border: '1px solid var(--border-light)',
            borderRadius: '8px',
            background: 'var(--bg-card)'
          }}>
            <FaLinkedin size={30} color="#0077b5" />
            <span style={{fontFamily: 'var(--font-mono)', fontSize: '0.9rem'}}>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
