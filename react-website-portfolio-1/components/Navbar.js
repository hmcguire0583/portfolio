'use client';

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import './Navbar.css';
import { Button } from './Button'; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 960) {
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
        <Link href="/" className="navbar-logo">
        Harry McGuire <i className = 'fab fa-typo3' />  
        </Link>
        <div className = 'menu-icon' onClick={handleClick}>
          <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className = {click ? 'nav-menu active' : 'nav-menu'}> 
            <li className = 'nav-item'>
              <Link href="/" className = 'nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link href="/me" className = 'nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link href="/projects" className = 'nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link href="/experience" className = 'nav-links' onClick={closeMobileMenu}>
                Experience
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link href="/contact" className = 'nav-links-mobile' onClick={closeMobileMenu}>
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
