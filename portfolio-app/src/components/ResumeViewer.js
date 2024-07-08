import React from 'react';
import { RiCloseLine } from 'react-icons/ri'; 
import './ResumeViewer.css'; 

const ResumeViewer = ({ onClose }) => {
  return (
    <div className="resume-viewer">
      <div className="resume-viewer-content">
        <button className="close-button" onClick={onClose}>
          <RiCloseLine size={25} />
        </button>
        <iframe src="Pashupathi_Mali_resume.pdf" title='Resume' width="100%" height="100%"></iframe>
      </div>
    </div>
  );
};

export default ResumeViewer;
