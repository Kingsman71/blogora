import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="navBar">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          BlogApp
        </Link>

        {/* Desktop Menu */}
        <nav className="desktopMenu">
          <NavLink to="/" className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}>
            Home
          </NavLink>
          <NavLink to="/create" className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}>
            Create Post
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}>
            About
          </NavLink>
        </nav>

        {/* Hamburger Button (Mobile) */}
        <button
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobileMenu">
          <NavLink to="/" onClick={closeMobileMenu} className="navLink">
            Home
          </NavLink>
          <NavLink to="/create" onClick={closeMobileMenu} className="navLink">
            Create Post
          </NavLink>
          <NavLink to="/about" onClick={closeMobileMenu} className="navLink">
            About
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
