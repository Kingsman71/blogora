import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          BlogApp
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Home</NavLink>
          <NavLink to="/create" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Create Post</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>About</NavLink>
        </div>

        {/* Hamburger Icon */}
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink} onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/create" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink} onClick={closeMobileMenu}>Create Post</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink} onClick={closeMobileMenu}>About</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;