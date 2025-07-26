import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button'; 

function Navbar() {
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
        HMC <i className='fab fa-typo3' />  
        </div>
        <div className = 'menu-icon' onClick={handleClick}>
          <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className = {click ? 'nav-menu active' : 'nav-menu'}> 
            <li className = 'nav-item'>
              <Link to="/" className = 'nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to="/me" className = 'nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to="/projects" className = 'nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to="/experience" className = 'nav-links' onClick={closeMobileMenu}>
                Experience
              </Link>
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
