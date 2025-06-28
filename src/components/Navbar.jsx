import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#home" onClick={() => scrollToSection('home')}>
          <img src={require('../assets/ganesha.jpg')} alt="Ganesha Logo" style={{ height: '50px', width: '38px', objectFit: 'contain', marginRight: '10px', verticalAlign: 'middle', borderRadius: '8px', background: '#fff' }} />
          <span className="brand-text">Shivam Chhotu Builders</span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#home"
                onClick={() => scrollToSection('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#about"
                onClick={() => scrollToSection('about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#services"
                onClick={() => scrollToSection('services')}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#projects"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#contact"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 