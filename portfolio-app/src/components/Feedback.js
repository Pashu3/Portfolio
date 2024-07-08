import React, { useState } from 'react';
import './Feedback.css';

const Feedback = ({ isOpen, setIsOpen }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState('');

  const minimizeFrame = () => {
    setIsMinimized(true);
    setIsMaximized(false);
  };

  const maximizeFrame = () => {
    setIsMaximized(true);
    setIsMinimized(false);
  };

  const exitMaximizeFrame = () => {
    setIsMaximized(false);
  };

  const closeFrame = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setIsMaximized(false);
    setSubmitting(false); 
    setThankYouMessage(''); 
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    const { name, email, message } = e.target.elements;
  
    try {
      const response = await fetch('https://portfolio-67t0.onrender.com/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Server response:', data.message);
  
      setThankYouMessage(data.message);
  
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div>
      {isOpen && (
        <div className={`frame-overlay ${isMaximized ? 'maximized' : ''} ${isMinimized ? 'minimized' : ''}`}>
          <div className="frame-header">
            <div className="frame-title">Feedback</div>
            <div className="frame-buttons">
              <button className="frame-button" onClick={minimizeFrame}>-</button>
              <button className="frame-button" onClick={maximizeFrame}>+</button>
              <button className="frame-button" onClick={exitMaximizeFrame} style={{ display: isMaximized ? 'inline-block' : 'none' }}>⤢</button>
              <button className="frame-button" onClick={closeFrame}>✕</button>
            </div>
          </div>
          <div className="frame-content">
            {!thankYouMessage ? (
              <form onSubmit={handleFormSubmit}>
                <div className="sub-heading">
                  Name: <input type="text" name="name" placeholder="Enter your name" required />
                </div>
                <div className="sub-heading">
                  Email: <input type="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="sub-heading">
                  Feedback: <textarea name="message" placeholder="Enter your feedback" required></textarea>
                </div>
                <input type="submit" value={submitting ? 'Submitting...' : 'Submit'} disabled={submitting} />
                <button type="button" className="cancel-button" onClick={closeFrame}>Cancel</button>
              </form>
            ) : (
              <div className="thank-you-message">
                {thankYouMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
