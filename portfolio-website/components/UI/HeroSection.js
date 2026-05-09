import { useEffect, useRef } from 'react';
import gsap from "gsap";
import Typed from 'typed.js';
import styles from './HeroSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const GsapText = () => {
  gsap.from("#text .word", {
    delay: 1,
    duration: 1,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05
  });
};

const GsapMove1 = (circle1) => {
  gsap.fromTo(circle1, { x: 900, y: 0 }, {
    duration: 5,
    ease: "power1.inOut",
    motionPath: {
      path: [
        { x: 900, y: 0 },
        { x: 100, y: 600 },
        { x: 200, y: 0 },
        { x: 300, y: -600 },
        { x: 400, y: 0 },
        { x: 0, y: 0 }
      ],
      curviness: 2,
      duration: 8
    }
  }
);
};

const GsapMove2 = (circle2) => {
  gsap.fromTo(circle2, { x: 0, y: -1000 }, {
    delay: 5,
    duration: 5,
    ease: "power1.inOut",
    motionPath: {
      path: [
        { x: 0, y: -1000 },
        { x: 600, y: 800 },
        { x: 0, y: 200 },
        { x: -600, y: 300 },
        { x: 0, y: 400 },
        { x: 0, y: 0 }
      ],
      curviness: 2,
      duration: 8
    }
  }
);
};

const GsapMove3 = (circle3) => {
  gsap.fromTo(circle3, { x: -2000, y: 0 }, {
    delay: 10,
    duration: 5,
    ease: "power1.inOut",
    motionPath: {
      path: [
        { x: -2000, y: 0 },
        { x: 600, y: 800 },
        { x: 0, y: 200 },
        { x: -600, y: 300 },
        { x: 0, y: 400 },
        { x: 0, y: 0 }
      ],
      curviness: 2,
      duration: 8
    }
  }
);
};

export default function HeroSection() {
  const typedEl = useRef();
  const circle1Ref = useRef();
  const circle2Ref = useRef();
  const circle3Ref = useRef();

  useEffect(() => {
    import("gsap/MotionPathPlugin").then(({ MotionPathPlugin }) => {
      gsap.registerPlugin(MotionPathPlugin);
      GsapText();
      GsapMove1(circle1Ref.current);
      GsapMove2(circle2Ref.current);
      GsapMove3(circle3Ref.current);
    });

    const typed = new Typed(typedEl.current, {
      strings: [
        'Welcome to my website!',
        'Feel free to reach out!',
        'I am always open to open-source contribution.',
        ' '
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    });

    const enableGitHubClick = setTimeout(() => {
      const githubIcon = document.querySelector(`.${styles.githubIcon}`);
      if (githubIcon) githubIcon.classList.add(styles.active);
    }, 5300);

    const enableLinkedInClick = setTimeout(() => {
      const linkedinIcon = document.querySelector(`.${styles.linkedinIcon}`);
      if (linkedinIcon) linkedinIcon.classList.add(styles.active);
    }, 10150);

    return () => {
      typed.destroy();
      clearTimeout(enableGitHubClick);
      clearTimeout(enableLinkedInClick);
    };
  }, []);

  const textContent = "Hi, I'm Harry McGuire, I am an aspiring software developer.";
  const words = textContent.split(" ");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 overflow-visible">
      <div className="flex-1 flex flex-col items-center md:items-start mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 from-teal-300 to-blue-500 bg-gradient-to-r bg-clip-text
        text-transparent pb-1 dark:from-red-500 dark:to-red-700">
          <span ref={typedEl}></span>
        </h1>
        <p id="text" className="text-lg md:text-xl text-blue-100 max-w-md text-center shadow-blue-400 md:text-left">
          {words.map((word, i) => (
            <span key={i} className="word">{word} </span>
          ))}
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div ref={circle1Ref} className="absolute w-24 h-24 rounded-full bg-blue-200 dark:bg-red-500 shadow-xl shadow-blue-400 dark:shadow-red-400 -left-8 -top-8"></div>
          <div ref={circle2Ref} className="absolute w-40 h-40 rounded-full bg-blue-500 dark:bg-red-700 shadow-xl shadow-blue-400 dark:shadow-red-400 right-0 -bottom-8"></div>
          <div ref={circle3Ref} className="absolute w-12 h-12 rounded-full bg-blue-600 dark:bg-red-800 shadow-xl shadow-blue-400 dark:shadow-red-400 -top-10 left-20"></div>
          {}
          <img
            src="/images/IMG_2825.jpeg"
            className="relative w-full h-full rounded-full shadow-md object-cover shadow-sky-300 dark:shadow-red-400"
            alt="Harry McGuire"
          />
          <a href="https://github.com/hmcguire0583" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <FontAwesomeIcon
              icon={faGithub}
              className={`${styles.githubIcon} ${styles.fadeFlip} text-5xl absolute top-[-8px] left-[-14px] text-blue-900 dark:text-black`}
            />
          </a>
          <a href="https://www.linkedin.com/in/harry-mcguire-0595bb301" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ width: "30px", height: "30px" }}
              className={
                `${styles.linkedinIcon} ${styles.fadeShake} inline-flex items-center justify-center p-2 rounded-full
               text-blue-500 bg-[#003153] dark:bg-black dark:text-red-700 absolute right-8 bottom-[-12px]`
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
}