import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import TeamSection from './TeamSection';
import Contact from './Contact';

function Mainpage() {
  const location = useLocation();

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const path = location.pathname;
    let scrollTarget;

    switch (path) {
      case '/about':
        scrollTarget = aboutRef;
        break;
      case '/services':
        scrollTarget = servicesRef;
        break;
      case '/portfolio':
        scrollTarget = portfolioRef;
        break;
      case '/team':
        scrollTarget = teamRef;
        break;
      case '/contact':
        scrollTarget = contactRef;
        break;
      default:
        scrollTarget = null;
    }

    if (scrollTarget?.current) {
      scrollTarget.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Home />
      <div ref={aboutRef}><About /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={portfolioRef}><Portfolio /></div>
      <div ref={teamRef}><TeamSection /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default Mainpage;
