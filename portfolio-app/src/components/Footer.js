import React from 'react';
import './Footer.css'; 

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <p>We use cookies to improve user experience on our website.</p>
          <button className="footer-button" onClick={() => setActiveSection('ContactMeFrame')}>Contact Me</button>
          <button className="footer-button" onClick={() => setActiveSection('Feedback')}>Feedback</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
