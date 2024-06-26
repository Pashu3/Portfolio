import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';
import './Accomplishments.css';

const Accomplishments = () => {
  
  const [publicationsOpen, setPublicationsOpen] = useState(false);
  const [hackathonsOpen, setHackathonsOpen] = useState(false);
  const [certificationsOpen, setCertificationsOpen] = useState(false);

  const togglePublicationsContent = () => {
    setPublicationsOpen(!publicationsOpen);
  };

  const toggleHackathonsContent = () => {
    setHackathonsOpen(!hackathonsOpen);
  };

  const toggleCertificationsContent = () => {
    setCertificationsOpen(!certificationsOpen);
  };

  const handleViewCertificate = (url) => {
    window.open(url, '_blank');
  };
  const handleviewLink = (url) => {
    window.open(url,'_blank');
  };
  return (
    <div className="accomplishments">
      <div className="sub-content">
        <div className="toggle-item">
          <div className="navbar-item" onClick={togglePublicationsContent}>
            {publicationsOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
            Publications
          </div>
          {publicationsOpen && (
            <ul>
              <li>Published "Vehicle Detection" paper at CICTN-2023, showcasing advanced computer vision expertise and receiving recognition for pioneering research in transportation technology.<button className="view-button" onClick={() => handleviewLink('https://ieeexplore.ieee.org/document/10140443?signout=success')}>View</button></li>
            </ul>
          )}
        </div>
        <div className="toggle-item">
          <div className="navbar-item" onClick={toggleHackathonsContent}>
            {hackathonsOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
            Hackathons
          </div>
          {hackathonsOpen && (
            <ul>
              <li>Clinched 1st place in the ML-DS Workshop - 2K22, outperforming 400 participants and demonstrating unmatched proficiency in Machine Learning and Data Science.</li>
            </ul>
          )}
        </div>
        <div className="toggle-item">
          <div className="navbar-item" onClick={toggleCertificationsContent}>
            {certificationsOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
            Certifications
          </div>
          {certificationsOpen && (
            <ul>
              <li>Attained DSA Certification from GeeksforGeeks with a top percentile score, validating mastery in data structures and algorithms.<button className="view-button" onClick={() => handleViewCertificate('GFG-CIP_Certificate.jpg')}>View</button></li>
              <li>Achieved certification from Coursera in "Programming for Everybody: Getting Started with Python," demonstrating proficiency in foundational Python programming skills. <button className="view-button" onClick={() => handleViewCertificate('coursera_Python.jpg')}>View</button></li>
              <li>Earned Cisco certifications in "PCAP: Programming Essentials in Python" and "CLA: Programming Essentials in C," showcasing expertise in fundamental programming skills in Python and C, respectively. <button className="view-button" onClick={() => handleViewCertificate('Cisco_Python & C.pdf')}>View</button></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;
