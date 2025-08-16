import React from 'react';
import '../../App.css';
import HeroSection from './UI/HeroSection';
import Me from './Me';
import Projects from './Projects';
import Experience from './Experience';

export default function Home({ meRef, projectsRef, experienceRef }) {
  return (
    <>
      <HeroSection />
      <div ref={meRef}><Me /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={experienceRef}><Experience /></div>/
    </>
  );
}