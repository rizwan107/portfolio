import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "⚡ Stock Sentiment Analysis Chatbot",
      description: "Analyzes real-time stock news using NLP and APIs.",
      tech: ["Python", "Streamlit", "NLP", "APIs"],
      github: "https://github.com/rizwan107/Stock-sentiment-chatbot"
    },
    {
      id: 2,
      title: "📊 Air Quality Index Classification",
      description: "Machine learning model to classify air quality.",
      tech: ["Python", "Scikit-learn"],
      github: "https://github.com/rizwan107/Air-Quality-Index-Classification"
    }
  ];

  return (
    <section id="projects" className="section container">
      <div className="section-header-group">
        <h2 className="section-title">◇ Projects</h2>
      </div>
      <div className="section-box">
        <div className="projects-list">
          {projects.map(project => (
            <div key={project.id} className="minimal-project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="Source Code">
                  <FaGithub />
                </a>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge-minimal">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a href="https://github.com/rizwan107" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            View More Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
