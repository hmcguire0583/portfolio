import React, { useEffect, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import '../../App.css';
import Typed from 'typed.js';
import myImage from '../../images/IMG_2825.jpeg'; 

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0
    })
    gsap.fromTo('.para', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0, 
      delay: 1,
      stagger: 0.1
    })
  }, [])
}

export default function Home() {
  const typedEl = useRef();
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
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
      <div className="flex-1 flex flex-col items-center md:items-start mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 from-teal-300 to-blue-500 bg-gradient-to-r
          bg-clip-text text-transparent pb-1">
          <span ref={typedEl}></span>
        </h1>
        <p id="text" className="text-lg md:text-xl text-blue-100 max-w-md text-center md:text-left">
          Hi, I'm Harry McGuire, I have a passion for Object-Oriented Programming and I love creating dynamic web applications.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="shadow-xl absolute w-24 h-24 bg-blue-200 rounded-full shadow-blue-400 -left-8 -top-8"></div>
          <div className="shadow-xl absolute right-0 -bottom-8 w-40 h-40 bg-blue-500 rounded-full shadow-blue-400"></div>
          <div className="shadow-xl absolute -top-10 left-20 w-12 h-12 bg-blue-600 rounded-full shadow-blue-400"></div>
          <img src={myImage} className="relative w-full h-full rounded-full shadow-md object-cover shadow-sky-300" alt="Harry McGuire" />
        </div>
      </div>
    </div>
  );
}
