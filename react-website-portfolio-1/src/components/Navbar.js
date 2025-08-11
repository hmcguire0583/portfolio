import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button'; 

function Navbar({ scrollToTop, scrollToMe, scrollToProjects, scrollToExperience }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
  setDarkMode(prevMode => !prevMode);
  document.documentElement.classList.toggle('dark');
};
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);
 
  return (
    <>      
    <nav className = "navbar">
        <div className = "navbar-container">
        <div className="navbar-logo" onClick={toggleDarkMode}>
          <div className="HM">HM</div>
          <i className="fa-solid fa-code fa-bounce ml-2" style={{ "--fa-bounce-start-scale-x": 1, "--fa-bounce-start-scale-y": 1, "--fa-bounce-jump-scale-x": 1, "--fa-bounce-jump-scale-y": 1, "--fa-bounce-land-scale-x": 1, "--fa-bounce-land-scale-y": 1, "--fa-bounce-rebound": 0, "--fa-animation-duration": "4s" }}></i>
        </div>
        <div className = 'menu-icon' onClick={handleClick}>
          <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className = {click ? 'nav-menu active' : 'nav-menu'}> 
            <li className = 'nav-item'>
              <button to="/" className = 'nav-links' onClick={() => {scrollToTop(); closeMobileMenu();}}>
                Home
              </button>
            </li>
            <li className = 'nav-item'>
              <button to="/me" className = 'nav-links' onClick={() => {scrollToMe(); closeMobileMenu();}}>
                About Me
              </button>
            </li>
            <li className = 'nav-item'>
              <button to="/projects" className = 'nav-links' onClick={() => {scrollToProjects(); closeMobileMenu();}}>
                Projects
              </button>
            </li>
            <li className = 'nav-item'>
              <button to="/experience" className = 'nav-links' onClick={() => {scrollToExperience(); closeMobileMenu();}}>
                Experience
              </button>
            </li>
            <li className = 'nav-item'>
              <Link to="/contact" className = 'nav-links-mobile' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <div className='shadow-lg shadow-teal-300 dark:shadow-red-500 rounded-xl bg-transparent'>
          {button && <Button buttonStyle ='btn--outline'>Contact</Button>}
          </div>
        </div>
    </nav>
    </>
  );
}

export default Navbar
