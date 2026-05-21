// ==========================================
// FOOTER COMPONENT
// ==========================================
// React Concept: Simple Functional Component
// - The simplest React component — just returns JSX
// - No state, no props, no hooks needed
// - Gets the current year dynamically with new Date().getFullYear()
// ==========================================

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top-line"></div>

        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="footer-name">
            <span className="logo-bracket">&lt;</span>
            Prem Avnish
            <span className="logo-bracket"> /&gt;</span>
          </p>
          <p className="footer-tagline">
            Building the future, one line of code at a time.
          </p>
        </motion.div>

        <div className="footer-links">
          <a href="https://github.com/premkumaravnish" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/prem-avnish" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            Made with <FaHeart className="heart-icon" /> by Prem Avnish &copy;{' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
