import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';
import './Experience.css';

const Experience = () => {
  const [workExperienceOpen, setWorkExperienceOpen] = useState(false);
  const [internshipExperienceOpen, setInternshipExperienceOpen] = useState(true);
  const [softwareEngineerInternOpen, setSoftwareEngineerInternOpen] = useState(false);
  const [juniorPythonDeveloperInternOpen, setJuniorPythonDeveloperInternOpen] = useState(false);
  const [contentWriterInternOpen, setContentWriterInternOpen] = useState(false);
  
  const toggleWorkExperienceContent = () => {
    setWorkExperienceOpen(!workExperienceOpen);
  };

  const toggleInternshipExperience = () => {
    setInternshipExperienceOpen(!internshipExperienceOpen);
  };

  const toggleSoftwareEngineerIntern = () => {
    setSoftwareEngineerInternOpen(!softwareEngineerInternOpen);
  };

  const toggleJuniorPythonDeveloperIntern = () => {
    setJuniorPythonDeveloperInternOpen(!juniorPythonDeveloperInternOpen);
  };

  const toggleContentWriterIntern = () => {
    setContentWriterInternOpen(!contentWriterInternOpen);
  };

  return (
    <div className="experience">
      <div>
        <div className="sub-content">
          <div className="sub-heading" onClick={toggleWorkExperienceContent}>
            {workExperienceOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
            Work Experience
          </div>
          {workExperienceOpen && (
            <div className="content">
              Work Experience Content
            </div>
          )}
        </div>
        <div className="sub-content">
          <div className="sub-heading" onClick={toggleInternshipExperience}>
            {internshipExperienceOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
            Internship Experience
          </div>
          {internshipExperienceOpen && (
            <div className="content">
              <div className="sub-sub-heading" onClick={toggleSoftwareEngineerIntern}>
                {softwareEngineerInternOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
                Software Engineer Intern
                <span className="Internship-date">Apr 2023 - Aug 2023</span>
              </div>
              {softwareEngineerInternOpen && (
                <div className="internship-sub-content">
                  <h4>One Convergence Devices Pvt Ltd</h4>
                  <span>
                    <a href="https://oneconvergence.com/">Website</a>
                  </span>
                  <ul>
                    <li>Enhanced user experience: Devised and implemented 4 new features, elevating user engagement by 20%.</li>
                    <li>Reduced downtime: Rigorous testing led to a 25% decrease in system downtime, boosting user satisfaction.</li>
                    <li>Tech Stack: HTML, CSS, JavaScript, WordPress, PHP, MySQL, AWS</li>
                  </ul>
                </div>
              )}
              <div className="sub-sub-heading" onClick={toggleJuniorPythonDeveloperIntern}>
                {juniorPythonDeveloperInternOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
                Junior Python Developer Intern
                <span className="Internship-date">May 2022 - Oct 2022</span>
              </div>
              {juniorPythonDeveloperInternOpen && (
                <div className="internship-sub-content">
                  <h4>Menorah AI</h4>
                  <span>
                    <a href="https://menorah.ai/">Website</a>
                  </span>
                  <ul>
                    <li>Innovated Python tools: Enhanced user experience and garnered positive feedback from 200+ users.</li>
                    <li>Boosted accuracy: Developed an advanced Python-based OCR Banksy tool, increasing annotation precision by 15%.</li>
                    <li>Resolved issues: Rectified 10 Jira bugs, heightening UI/UX; Leveraged Python, ReactJS, and Node.</li>
                  </ul>
                </div>
              )}
              <div className="sub-sub-heading" onClick={toggleContentWriterIntern}>
                {contentWriterInternOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
                Content Writer Intern
                <span className="Internship-date">Aug 2022 - Oct 2022</span>
              </div>
              {contentWriterInternOpen && (
                <div className="internship-sub-content">
                  <h4>JavaTpoint</h4>
                  <span>
                    <a href="https://www.javatpoint.com/">Website</a>
                  </span>
                  <ul>
                    <li>Authored enriched content: Crafted 15 technical articles on diverse topics, generating 30% higher engagement.</li>
                    <li>Mastery in emerging tech: Attained expertise in new technologies, adding depth to 20+ articles and reaching 100k+ readers.</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
