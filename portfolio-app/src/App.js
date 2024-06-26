import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'; 
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Events from './components/Events';
import ContactMeFrame from './components/Contact_Me_Frame';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

const DesktopOnlyWrapper = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
  }, []);

  if (isMobile) {
    return null; 
  } else {
    return <>{children}</>; 
  }
};

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const eventsRef = useRef(null);

  const [isContactMeFrameOpen, setContactMeFrameOpen] = useState(false);
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);

  const handleSetActiveSection = (section) => {
    let ref;
    switch (section) {
      case 'home':
        ref = homeRef;
        break;
      case 'about':
        ref = aboutRef;
        break;
      case 'projects':
        ref = projectsRef;
        break;
      case 'events':
        ref = eventsRef;
        break;
      default:
        break;
    }
    if (ref) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        window.scrollBy(0, -100); 
      }, 500); 
    }

    if (section === 'ContactMeFrame') {
      setContactMeFrameOpen(true);
    } else {
      setContactMeFrameOpen(false);
    }
    if (section === 'Feedback') {
      setFeedbackOpen(true);
    } else {
      setFeedbackOpen(false);
    }
  };

  return (
    <div className="App">
      <Header setActiveSection={handleSetActiveSection} />
      <DesktopOnlyWrapper>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={eventsRef}>
          <Events />
        </div>
      </DesktopOnlyWrapper>
      
      {isContactMeFrameOpen && <ContactMeFrame isOpen={isContactMeFrameOpen} setIsOpen={setContactMeFrameOpen} />}
      {isFeedbackOpen && <Feedback isOpen={isFeedbackOpen} setIsOpen={setFeedbackOpen} />}
      <Footer setActiveSection={handleSetActiveSection} />
    </div>
  );
}

export default App;
