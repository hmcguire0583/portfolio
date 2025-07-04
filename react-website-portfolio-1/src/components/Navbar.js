import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button'; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  window.addEventListener('resize', showButton);
  return (
    <>      
    <nav className = "navbar">
        <div className = "navbar-container">
        <Link to="/" className="navbar-logo">
        Harry McGuire <i className = 'fab fa-typo3' />  
        </Link>
        <div className = 'menu-icon' onClick={handleClick}>
          <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className = {click ? 'nav-menu active' : 'nav-menu'}> 
            <li className = 'nav-item'>
              <Link to="/home" className = 'nav-links' onClick={closeMobileMenu}>
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
          {button && <Button buttonStyle ='btn--outline'>Contact</Button>}
        </div>
    </nav>
    </>
  );
}

export default Navbar
