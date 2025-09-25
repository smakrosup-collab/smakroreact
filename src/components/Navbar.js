import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <a href="/" className={styles.logo}>Smakro</a>
          <button 
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
          </button>
          <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
            <li><a href="#features">Features</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#support">Support Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
