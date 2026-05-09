import { useRef } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
      {router.pathname !== '/contact' && (
        <Navbar
        scrollToTop={scrollToTop}
        scrollToMe={scrollToMe}
        scrollToProjects={scrollToProjects}
        scrollToExperience={scrollToExperience}
        />
      )}
      <Component
        {...pageProps}
        meRef={meRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
      />
    </>
  );
}