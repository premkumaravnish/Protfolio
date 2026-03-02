// ==========================================
// PROJECTS COMPONENT
// ==========================================
// React Concept: Props (Properties)
// - Props are how we pass data from a parent to a child component
// - Think of props like function arguments
// - Example: <ProjectCard title="My App" /> → inside ProjectCard, props.title = "My App"
//
// React Concept: Reusable Components
// - ProjectCard is a reusable "template" component
// - We render it multiple times with DIFFERENT data (props)
// - This is the power of React: write once, reuse everywhere
//
// React Concept: Conditional Rendering with &&
// - {condition && <JSX>} only renders JSX if condition is true
// - Example: {link && <a href={link}>Link</a>} → only shows link if it exists
// ==========================================

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'SmartroadAI',
    description:
      'An AI-powered smart road analysis application that uses artificial intelligence to analyze road conditions and provide intelligent insights for urban planning.',
    tech: ['React.js', 'Node.js', 'AI/ML', 'Python', 'MongoDB'],
    github: 'https://github.com/premkumaravnish/SmartroadAI',
    live: 'https://smartroad-ai.vercel.app',
    featured: true,
    emoji: '🛣️',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern portfolio built with React.js featuring framer-motion animations, gradient design, glassmorphism, and responsive layout.',
    tech: ['React.js', 'Framer Motion', 'CSS3', 'Vite'],
    github: 'https://github.com/premkumaravnish',
    live: '#',
    featured: true,
    emoji: '🎨',
  },
  {
    title: 'Coming Soon',
    description:
      'An exciting new full-stack project in development. Stay tuned for a cutting-edge application with modern tech stack.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    github: '',
    live: '',
    featured: false,
    emoji: '🚀',
  },
];

function ProjectCard({ title, description, tech, github, live, featured, emoji, index }) {
  return (
    <motion.div
      className={`project-card ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-card-inner">
        {featured && <span className="featured-badge">Featured</span>}
        <div className="project-emoji">{emoji}</div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-tech">
          {tech.map((item, i) => (
            <span key={i} className="tech-tag">{item}</span>
          ))}
        </div>

        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub /> Code
            </a>
          )}
          {live && live !== '#' && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">03.</span> Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
