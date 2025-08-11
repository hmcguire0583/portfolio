import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

function App() {
  const meRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToMe = () => meRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToExperience = () => experienceRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <AnimatedBackground />
      <Router>
        <Navbar 

          scrollToTop={scrollToTop}
          scrollToMe={scrollToMe}
          scrollToProjects={scrollToProjects}
          scrollToExperience={scrollToExperience}
        />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                meRef={meRef}
                projectsRef={projectsRef}
                experienceRef={experienceRef}
              />
            } 
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;