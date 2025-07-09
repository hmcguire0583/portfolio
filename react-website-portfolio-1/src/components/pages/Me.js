import React from 'react';
import '../../App.css';
import myImage from '../../images/IMG_2825.jpeg'; 

export default function Me() {
    return (
    <>  
    <h1 class='me'>About Me</h1>
    <img src={myImage} alt="My Image" width="200" height="250" />
    <p>This is a simple HTML page.</p>
    <img src="https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg" alt="Rolex Watch" width="200" height="200" />
    </>
    
    );

}