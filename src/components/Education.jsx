// ==========================================
// EDUCATION COMPONENT
// ==========================================
// React Concept: Timeline Layout with .map()
// - We store education data in an array
// - Then use .map() to create timeline items
// - This pattern is extremely common in React!
// ==========================================

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const educationData = [
  {
    degree: 'BS in Data Science & Applications',
    institution: 'Indian Institute of Technology, Madras',
    year: '2024 - Present',
    description:
      'Pursuing a foundational BS degree from India\'s #1 ranked institute. Deep-diving into Mathematics, Statistics, Machine Learning, Deep Learning, Python programming, and Data Analysis. Building a strong foundation in AI and data-driven problem solving.',
    highlights: ['Machine Learning', 'Data Analysis', 'Python', 'Statistics', 'Deep Learning'],
    highlight: true,
    emoji: '🎓',
  },
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'BPMCE, Madhepura',
    year: '2024 - 2028',
    description:
      'Pursuing B.Tech with focus on core CS fundamentals — data structures, algorithms, OOP, DBMS, operating systems, and software engineering practices.',
    highlights: ['DSA', 'OOP', 'DBMS', 'Software Engineering'],
    highlight: false,
    emoji: '💻',
  },
];

function Education() {
  return (
    <section id="education" className="education">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">04.</span> Education
        </motion.h2>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`education-card ${edu.highlight ? 'highlighted' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="edu-timeline-dot">
                <div className="dot-inner"></div>
              </div>
              <div className="edu-card-inner">
                <div className="edu-emoji">{edu.emoji}</div>
                <div className="edu-content">
                  <div className="edu-header">
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <span className="edu-year">{edu.year}</span>
                  </div>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-description">{edu.description}</p>
                  {edu.highlights && (
                    <div className="edu-tags">
                      {edu.highlights.map((tag, i) => (
                        <span key={i} className="edu-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
