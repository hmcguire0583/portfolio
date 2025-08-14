import React from 'react';
import '../../App.css';
import CustomCarousel from './UI/CustomCarousel';

export default function Me() {
  return (
    <>
      <h1 className= "text-center font-semibold text-indigo-400"> 
          I am currently an undergraduate student at the 
          University of Massachusetts Lowell <br /> I like learning
      </h1>
      <CustomCarousel/>
    </>
  );
}
