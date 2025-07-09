import React, { useEffect, useRef } from 'react';
import '../../App.css';
import Typed from 'typed.js';

/**
 * This component serves as the landing page for the portfolio website.
 */
export default function Home() {
  const typedEl = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['Welcome to my website!', 'I am a fullstack-developer', 'I have a passion for OOP', ' '],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <h1 className="text-4xl font-bold text-center mt-32 text-blue-300">
    <span ref={typedEl}></span>
    </h1>
    </>
  );
}
