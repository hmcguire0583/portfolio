import React from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Me from './components/pages/Me';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <AnimatedBackground />
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/me" element={<Me />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;