import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';
import './Skills.css';

const Skills = () => {

  const [technicalSkillsOpen, setTechnicalSkillsOpen] = useState(true);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [otherSkillsOpen, setOtherSkillsOpen] = useState(false);

  const toggleTechnicalSkillsContent = () => {
    setTechnicalSkillsOpen(!technicalSkillsOpen);
  };

  const toggleLanguagesContent = () => {
    setLanguagesOpen(!languagesOpen);
  };

  const toggleTechnologiesContent = () => {
    setTechnologiesOpen(!technologiesOpen);
  };

  const toggleToolsContent = () => {
    setToolsOpen(!toolsOpen);
  };

  const toggleOtherSkillsContent = () => {
    setOtherSkillsOpen(!otherSkillsOpen);
  };

  return (
    <div className="skills">
      
        <div>
          <div className="sub-content">
            <div className="sub-heading" onClick={toggleTechnicalSkillsContent}>
              {technicalSkillsOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
              Technical Skills
            </div>
            {technicalSkillsOpen && (
              <div className="content">
                <div className="inner-toggle" onClick={toggleLanguagesContent}>
                  {languagesOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
                  Languages
                </div>
                {languagesOpen && (
                  <div className="inner-content">
                    <div className="skill-bar">
                      <div className="skill-name">C++</div>
                      <div className="skill-bar-fill" style={{ width: '95%' }}></div>
                      <div className="skill-percentage">95%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">C</div>
                      <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                      <div className="skill-percentage">80%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">Java</div>
                      <div className="skill-bar-fill" style={{ width: '75%' }}></div>
                      <div className="skill-percentage">75%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">Python</div>
                      <div className="skill-bar-fill" style={{ width: '95%' }}></div>
                      <div className="skill-percentage">95%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">HTML</div>
                      <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                      <div className="skill-percentage">90%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">CSS</div>
                      <div className="skill-bar-fill" style={{ width: '75%' }}></div>
                      <div className="skill-percentage">75%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">JavaScript</div>
                      <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                      <div className="skill-percentage">90%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">SQL</div>
                      <div className="skill-bar-fill" style={{ width: '95%' }}></div>
                      <div className="skill-percentage">95%</div>
                    </div>
                  </div>
                )}
                <div className="inner-toggle" onClick={toggleTechnologiesContent}>
                  {technologiesOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
                  Technologies/Frameworks
                </div>
                {technologiesOpen && (
                  <div className="inner-content">
                    <div className="skill-bar">
                      <div className="skill-name">Reactjs</div>
                      <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                      <div className="skill-percentage">80%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">Nodejs</div>
                      <div className="skill-bar-fill" style={{ width: '75%' }}></div>
                      <div className="skill-percentage">75%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">MongoDB</div>
                      <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                      <div className="skill-percentage">80%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">GitHub</div>
                      <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                      <div className="skill-percentage">90%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">WordPress</div>
                      <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                      <div className="skill-percentage">80%</div>
                    </div>
                  </div>
                )}
                <div className="inner-toggle" onClick={toggleToolsContent}>
                  {toolsOpen ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
                  Developer Tools
                </div>
                {toolsOpen && (
                  <div className="inner-content">
                    <div className="skill-bar">
                      <div className="skill-name">VS Code</div>
                      <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                      <div className="skill-percentage">90%</div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-name">Docker</div>
                      <div className="skill-bar-fill" style={{ width: '70%' }}></div>
                      <div className="skill-percentage">70%</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="sub-content">
            <div className="sub-heading" onClick={toggleOtherSkillsContent}>
              {otherSkillsOpen? <RiArrowDownSLine className="icon" /> :<RiArrowRightSLine className="icon" />}
              Other Skills
            </div>
            {otherSkillsOpen && (
              <div className="content">
                Other Skills Content
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Skills;
