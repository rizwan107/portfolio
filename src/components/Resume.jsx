import React from 'react';
import { FaFileDownload, FaTrophy } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="section container">
      <div className="section-header-group">
        <h2 className="section-title">◇ Resume</h2>
      </div>
      <div className="section-box">
        <div className="resume-grid">
          <div className="resume-card text-center" style={{padding: '0', background: 'transparent', border: 'none'}}>
            <h3 className="section-title" style={{fontSize: '2rem', marginBottom: '1.5rem'}}>Resume</h3>
            <p className="resume-desc" style={{marginBottom: '1.5rem', fontSize: '1.15rem'}}>
              Passionate Data Scientist and ML Engineer with a strong foundation in problem solving and analytical thinking.
            </p>
            <ul className="resume-highlights" style={{marginBottom: '1.5rem', fontSize: '1.1rem'}}>
              <li>✨ Extensive Data Science Projects</li>
              <li>✨ Machine Learning Experience</li>
              <li>✨ Rigorous DSA Training</li>
            </ul>
            <a
  href="/certificates/rizwan-cv.pdf"
  download="Rizwan_CV.pdf"
  className="btn-primary flex-btn"
  style={{margin: '0 auto', display: 'inline-flex', padding: '1rem 2rem', fontSize: '1.1rem'}}
>
  <FaFileDownload className="btn-icon" /> Download Resume
</a>
          </div>

          <div className="achievements-card" style={{padding: '0', background: 'transparent', border: 'none'}}>
            <h3 className="section-title" style={{fontSize: '1.7rem', marginBottom: '1.5rem'}}>Accomplishments</h3>
            <div className="achievement-list">
              <div className="achievement-item">
                <div className="achievement-icon">
                  <FaTrophy />
                </div>
                <div className="achievement-text">
                  <h4>LeetCode Problem Solver</h4>
                  <p>Solved 150+ problems on LeetCode.</p>
                </div>
              </div>
              
              <div className="achievement-item">
                <div className="achievement-icon">
                  <FaTrophy />
                </div>
                <div className="achievement-text">
                  <h4>DSA Master</h4>
                  <p>Solved 250+ DSA problems.</p>
                </div>
              </div>
              
              <div className="achievement-item">
                <div className="achievement-icon">
                  <FaTrophy />
                </div>
                <div className="achievement-text">
                  <h4>Continuous Learner</h4>
                  <p>Completed 10+ professional Certificates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
