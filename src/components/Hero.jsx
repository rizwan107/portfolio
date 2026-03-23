import React from 'react';
import { FaFileAlt, FaDownload, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content flex-animate">
        
        {/* PROFILE IMAGE */}
        <div className="hero-image-wrapper filter-animate">
          <div className="hero-image-container">
            <img
              src="/profile.png"
              alt="Rizwan Mohammed"
              className="hero-profile-pic"
            />
          </div>
        </div>

        <div className="status-badge fade-animate">
          <span className="status-dot"></span>
          <span className="status-text">
            Available for Opportunities
          </span>
        </div>

        <h1 className="hero-name-split slide-up-animate">
          Rizwan Mohammed
        </h1>
        
        <h2
          className="hero-subtitle slide-up-animate delay-1"
          style={{ fontSize: '1.2rem', marginTop: '0.8rem' }}
        >
          Using Machine Learning and Data Science to create meaningful solutions from data.
        </h2>

        <div className="hero-buttons slide-up-animate delay-3">

          {/* VIEW RESUME */}
          <button
            className="btn-clone btn-view-resume"
            onClick={() =>
              window.open(
                "/certificates/rizwan-cv.pdf",
                "_blank"
              )
            }
          >
            <FaFileAlt className="btn-icon-clone" /> View Resume
          </button>

          {/* DOWNLOAD RESUME */}
          <a
            href="/certificates/rizwan-cv.pdf"
            download="Rizwan_CV.pdf"
            className="btn-clone btn-download-resume"
          >
            <FaDownload className="btn-icon-clone" /> Download Resume
          </a>

          {/* CONTACT */}
          <button
            className="btn-clone btn-contact-me"
            onClick={() =>
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            <FaEnvelope className="btn-icon-clone" /> Contact Me
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;
