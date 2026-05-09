import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar({ scrollToTop, scrollToMe, scrollToProjects, scrollToExperience }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-logo"]} onClick={toggleDarkMode}>
          <div className="HM">HM</div>
          <FontAwesomeIcon icon={faCode} className={`${styles.logoPeriodic} ${styles.logoBounce} ml-2`} />
        </div>
        <div className={styles["menu-icon"]} onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} className="text-white" />
        </div>
        <ul className={click ? `${styles["nav-menu"]} ${styles.active}` : styles["nav-menu"]}>
          <li className={styles["nav-item"]}>
            <button className={styles["nav-links"]} onClick={() => {scrollToTop(); closeMobileMenu();}}>
              Home
            </button>
          </li>
          <li className={styles["nav-item"]}>
            <button className={styles["nav-links"]} onClick={() => {scrollToMe(); closeMobileMenu();}}>
              About Me
            </button>
          </li>
          <li className={styles["nav-item"]}>
            <button className={styles["nav-links"]} onClick={() => {scrollToProjects(); closeMobileMenu();}}>
              Projects
            </button>
          </li>
          <li className={styles["nav-item"]}>
            <button className={styles["nav-links"]} onClick={() => {scrollToExperience(); closeMobileMenu();}}>
              Experience
            </button>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/contact" className={styles["nav-links-mobile"]} onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="shadow-lg shadow-teal-300 dark:shadow-red-500 rounded-xl bg-transparent">
          {button && (
            <Button buttonStyle="btn--outline" className={styles.navButton}>
              Contact
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;