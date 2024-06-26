import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css'; // Make sure to import your CSS file if needed

const Home = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const options = {
        strings: ['Designer', 'Developer', 'Data Analyst'],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
      };

      const typed = new Typed('.typed', options);

      return () => {
        typed.destroy();
      };
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="home">
      {/* Apply the background image directly */}
      <div className="about-me-box" style={{ backgroundImage: `url('/Bg_Image.png')` }}>
        <div className="about-me-content animated">
          <h1 className="name-heading">Pashupathi Mali</h1>
          <div className="subheader-container">
            <p className="typed-container">
              I'm a <span className="typed"></span>
              <span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
