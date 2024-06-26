import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';
import './About.css'; 
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Accomplishments from './Accomplishments';

const About = () => {
  const [activeContent, setActiveContent] = useState('experience');
  const [isAboutOpen, setIsAboutOpen] = useState(true);

  const handleToggleContent = (content) => {
    setActiveContent(content);
    setIsAboutOpen(true); 
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <div className="about">
      <div className="about-navbar">
        <div className="about-heading" onClick={toggleAbout}>
          {isAboutOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
          <span>About</span>
        </div>
      </div>
      <div className="about-me">
        <h3>Who I Am </h3>
        <p>Hello! </p>
        <p>I'm a versatile and passionate fresher with a diverse skill set in software development, design, and data analysis. Although I am at the beginning of my professional journey, I have equipped myself with a unique blend of technical expertise, creative thinking, and analytical prowess, enabling me to tackle complex challenges and deliver innovative solutions.</p>
      </div>
      <div className="about-buttons">
        <button className={activeContent === 'experience' ? 'active' : ''} onClick={() => handleToggleContent('experience')}>Experience</button>
        <span className="button-space"></span>
        <button className={activeContent === 'education' ? 'active' : ''} onClick={() => handleToggleContent('education')}>Education</button>
        <span className="button-space"></span>
        <button className={activeContent === 'skills' ? 'active' : ''} onClick={() => handleToggleContent('skills')}>Skills</button>
        <span className="button-space"></span>
        <button className={activeContent === 'accomplishments' ? 'active' : ''} onClick={() => handleToggleContent('accomplishments')}>Accomplishments</button>
      </div>
      {isAboutOpen && (
        <div className="about-content">
          {activeContent === 'experience' && <Experience />}
          {activeContent === 'education' && <Education />}
          {activeContent === 'skills' && <Skills />}
          {activeContent === 'accomplishments' && <Accomplishments />}
        </div>
      )}
    </div>
  );
};

export default About;
