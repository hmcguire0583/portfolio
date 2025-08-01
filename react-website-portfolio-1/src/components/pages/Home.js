import React, { useEffect, useRef } from 'react';
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import '../../App.css';
import Typed from 'typed.js';
import myImage from '../../images/IMG_2825.jpeg'; 
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(SplitText);
const GsapText = () => {
  gsap.set(".split" , { opacity: 1});
  let split = SplitText.create("#text", { 
    type: "words, lines, chars",
    wordsClass: "word",
    linesClass: "line",
    charsClass: "char",
    autoSplit: true
  });
  gsap.from(split.lines, {
    delay: 1,
    duration: 1,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05
  });
}
const GsapMove = () => {
  gsap.to(".circle1", {
    duration: 2,
    ease: "power1.inOut",
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: 100, y: 600 },
        { x: 200, y: 0 },
        { x: 300, y: -600 },
        { x: 400, y: 0 }],
      autoRotate: false,
      curviness: 2
    }
  });
}

export default function Home() {
  const typedEl = useRef();
  useEffect(() => {
      GsapText();
     // GsapMove();
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
          bg-clip-text text-transparent pb-1 dark:from-red-500 dark:to-red-700">
          <span ref={typedEl}></span>
        </h1>
        <p id="text" className="text-lg md:text-xl text-blue-100 max-w-md text-center 
        shadow-blue-400 md:text-left">
          Hi, I'm Harry McGuire, I have a passion for Object-Oriented Programming and I love creating dynamic web applications.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="circle1 shadow-xl absolute w-24 h-24 bg-blue-200 dark:bg-red-500 rounded-full shadow-blue-400 dark:shadow-red-400 -left-8 -top-8"></div>
          <div className="circle2 shadow-xl absolute right-0 -bottom-8 w-40 h-40 bg-blue-500 dark:bg-red-700 rounded-full shadow-blue-400 dark:shadow-red-400"></div>
          <div className="circle3 shadow-xl absolute -top-10 left-20 w-12 h-12 bg-blue-600 dark:bg-red-800 rounded-full shadow-blue-400 dark:shadow-red-400"></div>
          <img src={myImage} className="relative w-full h-full rounded-full shadow-md object-cover shadow-sky-300 dark:shadow-red-400" alt="Harry McGuire" />
          <i className="fa-brands fa-github text-white text-5xl"></i>
          <i className="fa-brands fa-linkedin ml-3 text-white text-5xl"></i>

        </div>
      </div>
    </div>
  );
}
