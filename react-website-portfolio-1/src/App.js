import React from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <AnimatedBackground />
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;