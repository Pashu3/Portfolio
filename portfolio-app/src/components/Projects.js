
import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';
import './Projects.css';
import ProjectViewer from './ProjectViewer'; // Import ProjectViewer component
import ProjectDesc from './ProjectDesc';

const Projects = () => {
  const [project1Open, setProject1Open] = useState(false);
  const [project2Open, setProject2Open] = useState(false);
  const [project3Open, setProject3Open] = useState(false);
  const [project4Open, setProject4Open] = useState(false);
  const [project5Open, setProject5Open] = useState(false);


  const [selectedProject, setSelectedProject] = useState(null);

  const toggleProjectContent = (projectNumber) => {
    switch (projectNumber) {
      case 1:
        setProject1Open(!project1Open);
        break;
      case 2:
        setProject2Open(!project2Open);
        break;
      case 3:
        setProject3Open(!project3Open);
        break;
      case 4:
        setProject4Open(!project4Open);
        break;
      case 5:
        setProject5Open(!project5Open);
        break;
      default:
        break;
    }
  };

  const openProjectViewer = (project) => {
    setSelectedProject(project);
  };

  const closeProjectViewer = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      <div className="horizontal-navbar">
        <div className="navbar-item">
          Projects
        </div>
      </div>
      <div>
        <div className="sub-content">
          <div className="sub-heading" onClick={() => toggleProjectContent(1)}>
            {project1Open ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
            Budget Tracking Application
            <span className="project-date">Feb-2024</span>
          </div>
          {project1Open && (
            <div className="content">
              <ul>
                <li>Developed a comprehensive budget tracking application that allows users to manage and track their expenses efficiently.</li>
                <li>Implemented features such as expense categorization, budget planning, and financial reporting, leading to better personal financial management.</li>
              </ul>
              <div className="box">
                <button className="view-link" onClick={() => openProjectViewer({
                  title: ProjectDesc.project1.title,
                  description: ProjectDesc.project1.description,
                  date:ProjectDesc.project1.date,
                  githubLink: ProjectDesc.project1.githubLink,
                  downloadLink: ProjectDesc.project1.downloadLink
                })}>View Project</button>
              </div>
            </div>
          )}
        </div>
        <div className="sub-content">
          <div className="sub-heading" onClick={() => toggleProjectContent(2)}>
            {project2Open ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
            Data Intensive Computing
            <span className="project-date">Nov-2023</span>
          </div>
          {project2Open && (
            <div className="content">
              <ul>
                <li>Implemented XGBoost for Ethereum fraud detection, effectively reducing fraudulent activities and enhancing overall security.</li>
                <li>Led the development of a robust fraud detection system by integrating XGBoost for transaction analysis, achieving a notable increase in accuracy for identifying and preventing fraudulent transactions in the Ethereum network.</li>
              </ul>
              <div className="box">
                <button className="view-link" onClick={() => openProjectViewer({
                  title: ProjectDesc.project2.title,
                  description: ProjectDesc.project2.description,
                  date:ProjectDesc.project2.date,
                  githubLink: ProjectDesc.project2.githubLink,
                  downloadLink: ProjectDesc.project2.downloadLink
                })}>View Project</button>
              </div>
            </div>
          )}
        </div>
        <div className="sub-content">
          <div className="sub-heading" onClick={() => toggleProjectContent(3)}>
            {project3Open ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
            Stock Price Prediction using LSTM and XGBoost
            <span className="project-date">May-2023</span>
          </div>
          {project3Open && (
            <div className="content">
              <ul>
                <li>Spearheaded a sophisticated stock price prediction model using XGBoost and LSTM algorithms, yielding precise stock price forecasts with an average error rate of less than 3%.</li>
                <li>Evaluated model performance using advanced data analysis techniques, achieving a prediction accuracy of 90%.</li>
              </ul>
              <div className="box">
                <button className="view-link" onClick={() => openProjectViewer({
                  title: ProjectDesc.project3.title,
                  description: ProjectDesc.project3.description,
                  date:ProjectDesc.project3.date,
                  githubLink: ProjectDesc.project3.githubLink,
                  downloadLink: ProjectDesc.project3.downloadLink
                })}>View Project</button>
              </div>
            </div>
          )}
        </div>
        <div className="sub-content">
          <div className="sub-heading" onClick={() => toggleProjectContent(4)}>
            {project4Open ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
            Vehicle Detection, Classification and Counting
            <span className="project-date">Apr-2023</span>
          </div>
          {project4Open && (
            <div className="content">
              <ul>
                <li>Led OpenCV-based vehicle tracking, achieving 98% detection accuracy for enhanced security and efficiency.</li>
                <li>Managed development of advanced vehicle tracking using OpenCV, delivering exceptional results with 98% detection rate, boosting security and efficiency.</li>
              </ul>
              <div className="box">
                <button className="view-link" onClick={() => openProjectViewer({
                  title: ProjectDesc.project4.title,
                  description: ProjectDesc.project4.description,
                  date:ProjectDesc.project4.date,
                  githubLink: ProjectDesc.project4.githubLink,
                  downloadLink: ProjectDesc.project4.downloadLink
                })}>View Project</button>
              </div>
            </div>
          )}
        </div>
        <div className="sub-content">
          <div className="sub-heading" onClick={() => toggleProjectContent(5)}>
            {project5Open ? <RiArrowDownSLine className="icon" /> : <RiArrowRightSLine className="icon" />}
            Lane Line Detection using OpenCV
            <span className="project-date">Oct-2022</span>
          </div>
          {project5Open && (
            <div className="content">
              <ul>
                <li>Lane Line Detection: Skilled in using OpenCV for accurate lane line detection, enhancing autonomous vehicle systems.</li>
                <li>Computer Vision Problem-solving: Proficient in addressing challenges in lane line detection, optimizing algorithms for real-world applications.</li>
              </ul>
              <div className="box">
                <button className="view-link" onClick={() => openProjectViewer({
                  title: ProjectDesc.project5.title,
                  description: ProjectDesc.project5.description,
                  date:ProjectDesc.project5.date,
                  githubLink: ProjectDesc.project5.githubLink,
                  downloadLink: ProjectDesc.project5.downloadLink
                })}>View Project</button>
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedProject && (
        <ProjectViewer project={selectedProject} onClose={closeProjectViewer} />
      )}
    </div>
  );
};

export default Projects;
