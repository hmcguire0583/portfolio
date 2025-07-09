import React, { useEffect, useRef } from 'react';
import '../../App.css';

/**
 * This component serves as the landing page for the portfolio website.
 */
export default function Home() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const words = ["I am a full-stack developer", "Welcome to my website!", "I am motivated"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    let timeoutId;

    function type() {
      currentWord = words[i];
      if (isDeleting) {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentWord.substring(0, j - 1);
        }
        j--;
        if (j === 0) {
          isDeleting = false;
          i++;
          if (i === words.length) {
            i = 0;
          }
        }
      } else {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentWord.substring(0, j + 1);
        }
        j++;
        if (j === currentWord.length) {
          isDeleting = true;
        }
      }
      timeoutId = setTimeout(type, 200);
    }

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="h-48 flex justify-center items-center">
        <h1 ref={typewriterRef} className="text-4xl font-bold"></h1>
      </div>
    </>
  );
}
