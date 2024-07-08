import React, { useState } from 'react';
import { RiCloseLine, RiFullscreenLine, RiFullscreenExitLine } from 'react-icons/ri'; // Import icons from react-icons
import './ProjectViewer.css'; 

const ProjectViewer = ({ project, onClose }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div className={`project-viewer ${isMaximized ? 'maximized' : ''}`}>
      <div className="project-viewer-header">
        <span className="project-viewer-title">{project.title}</span>
        <div className="project-viewer-controls">
          <button className="maximize-button" onClick={toggleMaximize}>
            {isMaximized ? <RiFullscreenExitLine size={20} /> : <RiFullscreenLine size={20} />}
          </button>
          <button className="close-button" onClick={onClose}>
            <RiCloseLine size={20} />
          </button>
        </div>
      </div>
      <div className="project-viewer-content">
        <p>{project.description}</p>
        <div className="buttons">
          <a href={project.githubLink} className="button github-button" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.downloadLink} className="button download-button" target="_blank" rel="noopener noreferrer">Download</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewer;
