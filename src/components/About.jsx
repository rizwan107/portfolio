import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="section-header-group">
        <h2 className="section-title" style={{fontSize: '2.5rem'}}>◇ About Me</h2>
      </div>
      <div className="section-box">
        <div className="about-content-minimal">
          <p style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
            I am a Computer Science student with a strong interest in Data Science, Machine Learning, and Data Analytics, focused on converting raw data into actionable insights and developing smart solutions for real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
