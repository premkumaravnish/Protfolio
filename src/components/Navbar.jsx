// ==========================================
// NAVBAR COMPONENT
// ==========================================
// React Concept: useState Hook
// - useState lets us store data that can CHANGE (like menu open/close)
// - When state changes, React automatically re-renders the component
//
// React Concept: Conditional Rendering
// - We use {condition && <JSX>} to show/hide the mobile menu
// ==========================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll to add background to navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = ['about', 'skills', 'projects', 'education', 'activities', 'contact'];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-bracket">&lt;</span>
          Prem
          <span className="logo-bracket"> /&gt;</span>
        </motion.div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <a onClick={() => scrollToSection(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
              Resume
            </a>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
