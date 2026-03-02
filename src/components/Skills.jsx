// ==========================================
// SKILLS COMPONENT
// ==========================================
// React Concept: .map() — Rendering Lists
// - In React, we render lists/arrays using .map()
// - .map() loops through each item and returns JSX for each one
// - Each item MUST have a unique 'key' prop so React can track changes
//
// Example:
//   const fruits = ['Apple', 'Banana'];
//   fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
//   → <li>Apple</li><li>Banana</li>
//
// React Concept: Organizing Data
// - We store our skills data in arrays/objects
// - This makes it easy to add/remove skills without touching JSX
// ==========================================

import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaPython, FaGitAlt, FaDocker, FaFigma, FaAws
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTypescript, SiTailwindcss,
  SiNextdotjs, SiFirebase, SiPostgresql, SiRedux,
  SiTensorflow, SiVercel, SiPandas, SiNumpy,
  SiScikitlearn, SiJupyter, SiOpencv, SiKeras,
  SiPytorch, SiStreamlit
} from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
      { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    ],
  },
  {
    title: 'AI / ML & Data Science',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
      { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C' },
      { name: 'Keras', icon: <SiKeras />, color: '#D00000' },
      { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
      { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
      { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
      { name: 'OpenCV', icon: <SiOpencv />, color: '#5C3EE8' },
      { name: 'Jupyter', icon: <SiJupyter />, color: '#F37626' },
      { name: 'Streamlit', icon: <SiStreamlit />, color: '#FF4B4B' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
      { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
      { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">02.</span> Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <motion.div
                className="skills-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      borderColor: skill.color,
                      boxShadow: `0 4px 20px ${skill.color}22`,
                    }}
                  >
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
