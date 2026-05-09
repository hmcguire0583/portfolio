import HeroSection from '../components/UI/HeroSection';
import Me from './me';
import Projects from './projects';
import Experience from './experience';

export default function Home({ meRef, projectsRef, experienceRef }) {
  return (
    <>
      <HeroSection />
      <div ref={meRef}>
        <Me />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
    </>
  );
}
