import React from 'react';
import './Skills.css';

const Skills = () => {
  const categories = [
    { title: "Languages", skills: ["C++", "Java", "SQL", "Python"] },
    { title: "Libraries", skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] },
    { title: "Tools", skills: ["Power BI", "Excel"] },
    { title: "Core Skills", skills: ["DSA", "Problem Solving", "Analytical Thinking"] }
  ];

  return (
    <section id="skills" className="section container">
      <div className="section-header-group">
        <h2 className="section-title" style={{fontSize: '2.5rem'}}>◇ Skills</h2>
      </div>
      <div className="section-box">
        <div className="skills-grid-minimal">
          {categories.map((category, index) => (
            <div key={index} className="skill-group skill-box-animate" style={{ animationDelay: `${index * 0.15}s` }}>
              <h3 className="skill-category-title" style={{fontSize: '1.4rem'}}>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag" style={{fontSize: '1.1rem'}}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
