// ==========================================
// ABOUT COMPONENT
// ==========================================
// React Concept: Pure JSX Component
// - This is a "presentational" component - it just displays static content
// - No state, no hooks - just returns JSX
// - This is the simplest type of React component
//
// React Concept: Fragment <>...</>
// - We can wrap multiple elements in a Fragment to avoid extra DOM nodes
// ==========================================

import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const highlights = [
  { icon: <FaCode />, number: '10+', label: 'Technologies' },
  { icon: <FaRocket />, number: '5+', label: 'Projects Built' },
  { icon: <FaGraduationCap />, number: '2', label: 'Degrees Pursuing' },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <span className="title-number">01.</span> About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {[
              <>Hello! I'm <span className="highlight">Prem Avnish</span>, a passionate Full Stack Developer and AI Engineer. I love building things that live on the internet — whether that's websites, web apps, or AI-powered solutions.</>,
              <>I'm currently pursuing a <span className="highlight">dual degree</span> — BS in Data Science from <span className="highlight">IIT Madras</span> and B.Tech from BPMCE, Madhepura. My passion for development drives me to constantly learn and master new technologies.</>,
              <>I specialize in the <span className="highlight">MERN stack</span> and have experience with AI/ML, combining both to create intelligent, scalable applications that solve real-world problems.</>,
              <>I'm actively open for <span className="highlight">freelance projects</span>, <span className="highlight">internships</span>, and <span className="highlight">full-time roles</span> where I can contribute, learn, and grow as a developer.</>,
            ].map((text, i) => (
              <motion.p key={i} variants={fadeInUp} custom={i}>
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="about-highlights"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="highlight-card"
                variants={fadeInUp}
                custom={i}
                whileHover={{ y: -6, borderColor: 'rgba(167, 139, 250, 0.4)' }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
