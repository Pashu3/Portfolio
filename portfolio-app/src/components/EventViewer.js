import React, { useState } from 'react';
import { RiCloseLine, RiFullscreenLine, RiFullscreenExitLine } from 'react-icons/ri'; // Import icons from react-icons
import './EventViewer.css'; 

const EventViewer = ({ event, onClose }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };
  return (
    <div className={`event-viewer ${isMaximized ? 'maximized' : ''}`}>
      <div className="event-viewer-header">
        <span className="event-viewer-title">{event.title}</span>
        <div className="event-viewer-controls">
          <button className="maximize-button" onClick={toggleMaximize}>
            {isMaximized ? <RiFullscreenExitLine size={20} /> : <RiFullscreenLine size={20} />}
          </button>
          <button className="close-button" onClick={onClose}>
            <RiCloseLine size={20} />
          </button>
        </div>
      </div>
      <div className="event-viewer-content">
        {event.description}
      </div>
    </div>
  );
};

export default EventViewer;
