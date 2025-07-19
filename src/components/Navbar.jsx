import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-scroll';
import "../index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 30) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar_logo">
        <img src={logo} alt="Design Node Logo" className="navbar_logo-img" />
      </div>

      <button
        className={`navbar_toggle ${menuOpen ? "open" : ""}`}
        onClick={handleToggle}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <ul className={`navbar_links ${menuOpen ? "active" : ""}`}>
        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
      </ul>
    </nav>
  );

}
