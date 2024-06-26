import React, { useState } from 'react';
import './Header.css'; 

import { RiLinkedinLine, RiGithubLine, RiFileCodeLine, RiEyeLine, RiDownloadLine } from 'react-icons/ri'; // Import social media icons from react-icons
import ResumeViewer from './ResumeViewer'; 

const Header = ({ setActiveSection }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false); 

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
    
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'Pashupathi_Mali_Resume.pdf';
    link.download = 'Pashupathi_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <a href='#home' className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </a>

      <nav className="navbar">
        <ul className="nav-items">
          <li><a href="#contactme" onClick={() => handleNavLinkClick('ContactMeFrame')}>Contact Me</a></li>
        </ul>
      </nav>
      <div className="sidebar open">
        <div className="profile-picture">
          <img src="sample-picture.jpg" alt="Profile" className="profile-img"/>
        </div>
        <div className="nickname">
          <h3>Pashupathi</h3>
        </div>
        <ul>
          <li><a href="#home" onClick={() => handleNavLinkClick('home')}>Home</a></li>
          <li><a href="#about" onClick={() => handleNavLinkClick('about')}>About</a></li>
          <li><a href="#projects" onClick={() => handleNavLinkClick('projects')}>Projects</a></li>
          <li><a href="#events" onClick={() => handleNavLinkClick('events')}>Events</a></li>
          <li><a href="#Feedback" onClick={() => handleNavLinkClick('Feedback')}>Feedback</a></li>
          <li className="resume-download">
            <h4>Resume</h4>
            <RiEyeLine className="view-icon" size={25} onClick={() => setIsResumeOpen(true)} />
            <RiDownloadLine className="download-icon" size={25} onClick={handleDownload} />
          </li>
        </ul>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/mali-pashupathi/" target="_blank" rel="noopener noreferrer">
            <RiLinkedinLine className="social-icon linkedin" size={25} />
          </a>
          <a href="https://github.com/Pashu3" target="_blank" rel="noopener noreferrer">
            <RiGithubLine className="social-icon github" size={25} />
          </a>
          <a href="https://leetcode.com/Pashu_003/" target="_blank" rel="noopener noreferrer">
            <RiFileCodeLine className="social-icon leetcode" size={25} />
          </a>
        </div>
      </div>
      {isResumeOpen && <ResumeViewer onClose={() => setIsResumeOpen(false)} />}
    </header>
  );
};

export default Header;
