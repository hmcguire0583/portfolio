import React from 'react';
import '../../App.css';
import myImage from '../../images/IMG_2825.jpeg'; 

export default function Me() {
    return (
    <>  
    <div class="bg-transparent border shadow-teal-300 shadow-lg max-2xl p-6 rounded-lg dark:bg-gray-700 dark:text-gray-300">
    <h1 class="text-4xl text-blue-300 font-semibold
     font-extrabold py-3">Tailwind Playground</h1>
  </div>
    <h1 class='me'>About Me</h1>
    <img src={myImage} alt="My Image" width="200" height="250" />
    <p className='text-center text-sky-200 text-bold 
    '>This is a simple HTML page.</p>
    <img src="https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg" alt="Rolex Watch" width="200" height="200" />
    <div class=" dark:bg-gray-800 flex justify-center items-center w-screen h-screen p-5">
  
</div>
    </>
    
    );

}