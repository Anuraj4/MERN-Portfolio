import React from 'react';

const WorkExperience = () => {
  return (
    <section className="experience-section">
      <h2>Work Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Full Stack Developer Intern</h3>
            <span className="timeline-date">June 2024 - August 2024</span>
            <p>Meta Craftlab</p>
            <p>Worked on collaborative full-stack projects including Git and GitHub.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Web Developer Intern</h3>
            <span className="timeline-date">Dec 2023 - Jan 2024</span>
            <p>EduNexa Tech</p>
            <p>Developed responsive user interfaces for web applications with performance optimization.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
