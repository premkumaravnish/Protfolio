// ==========================================
// HERO COMPONENT (Landing Section)
// ==========================================
// React Concept: Importing Images
// - In React + Vite, we import images at the top of the file
// - Vite converts the import to a proper URL for the browser
//
// React Concept: JSX Expressions
// - We use {} to embed JavaScript expressions inside JSX
// - Example: <img src={logo} /> uses the imported image variable
// ==========================================

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../assets/logo.jpeg';
import './Hero.css';

function Hero() {
  // Typing animation titles
  const titles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'AI Engineer',
    'Freelancer',
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  return (
    <section id="hero" className="hero">
      {/* Floating animated orbs */}
      <div className="hero-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="greeting-wave">&#128075;</span> Hey there, I'm
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Prem <span className="gradient-text">Avnish</span>
          </motion.h1>

          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            I'm a <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            I craft modern web apps, scalable APIs, and AI-powered solutions.
            Dual degree student at IIT Madras &amp; BPMCE — turning ideas into
            production-ready code.
          </motion.p>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <a href="https://github.com/premkumaravnish" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:premkavnish@gmail.com" className="social-link" aria-label="Email">
              <HiOutlineMail />
            </a>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
        >
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <div className="image-ring"></div>
            <img src={logo} alt="Prem Avnish" className="profile-img" />
          </div>
          {/* Floating tech badges around image */}
          <motion.div
            className="floating-badge badge-1"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            &#9889; React
          </motion.div>
          <motion.div
            className="floating-badge badge-2"
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            &#128640; Node.js
          </motion.div>
          <motion.div
            className="floating-badge badge-3"
            animate={{ y: [-6, 10, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            &#129302; AI/ML
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
