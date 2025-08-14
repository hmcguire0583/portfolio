import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../App.css';

const logos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3" },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
  desktop:           { breakpoint: { max: 1024, min: 768 },  items: 4 },
  tablet:            { breakpoint: { max: 768, min: 464 },   items: 3 },
  mobile:            { breakpoint: { max: 464, min: 0 },     items: 2 },
};

export default function CustomCarousel() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-6 px-4">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={1500}
          arrows={false}
          showDots={false}
          draggable={true}
          swipeable={true}
        >
          {logos.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6">
              <img src={tech.src} alt={tech.name} className="w-24 h-24 
              object-contain hover:scale-110 transition-transform duration-300" />
              <p className="mt-2 text-sm font-semibold text-blue-300">{tech.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
