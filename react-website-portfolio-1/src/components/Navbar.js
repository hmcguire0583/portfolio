import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>      
    <nav className = "navbar">
        <div className = "navbar-container">
        <Link to="/" className="navbar-logo">
        My Projects <i className = 'fab fa-typo3' />  
        </Link>
        <div className = 'menu-icon' onClick={handleClick}>
          <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className = {click ? 'nav-menu active' : 'nav-menu'}> 
            <li className = 'nav-item'>
              <Link to="/" className = 'nav-links' onClick={closeMobileMenu}>
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
        </div>
    </nav>
    </>
  )
}

export default Navbar
