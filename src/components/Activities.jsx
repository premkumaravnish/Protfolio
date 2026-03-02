// ==========================================
// ACTIVITIES & HACKATHONS COMPONENT
// ==========================================
// React Concept: Conditional rendering + animations
// - Each activity card shows event details
// - We use framer-motion staggerChildren for
//   sequential card animations on scroll
// ==========================================

import { motion } from 'framer-motion';
import { FaTrophy, FaCalendar, FaMapMarkerAlt, FaUsers, FaCertificate } from 'react-icons/fa';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import './Activities.css';

const activitiesData = [
  {
    title: 'BIT BY BIT | Enyugma\'26',
    type: 'Hackathon',
    date: '2026',
    location: 'IIIT Bhagalpur',
    description:
      'Participated in Round 2: Offline Hackathon & Final Submission (Development Phase) of BIT BY BIT, organized by Indian Institute of Information Technology (IIIT), Bhagalpur as part of their annual techfest Enyugma\'26. Hosted on Unstop.',
    tags: ['Offline Hackathon', 'Development', 'Team Collaboration', 'Problem Solving'],
    icon: '🏆',
    featured: true,
    certificate: '#', // TODO: Replace with your certificate link
  },
  {
    title: 'Open Source Contributions',
    type: 'Community',
    date: 'Ongoing',
    location: 'GitHub',
    description:
      'Actively contributing to open-source projects and building personal projects on GitHub. Exploring AI/ML tools, web frameworks, and developer utilities.',
    tags: ['Open Source', 'GitHub', 'Collaboration'],
    icon: '🌍',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Activities() {
  return (
    <section id="activities" className="activities">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">05.</span> Activities
        </motion.h2>

        <motion.div
          className="activities-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {activitiesData.map((activity, index) => (
            <motion.div
              key={index}
              className={`activity-card ${activity.featured ? 'featured' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {activity.featured && (
                <div className="featured-badge">
                  <HiOutlineLightningBolt /> Featured
                </div>
              )}

              <div className="activity-icon">{activity.icon}</div>

              <div className="activity-type">
                <FaTrophy className="type-icon" />
                {activity.type}
              </div>

              <h3 className="activity-title">{activity.title}</h3>

              <div className="activity-meta">
                <span className="meta-item">
                  <FaCalendar /> {activity.date}
                </span>
                <span className="meta-item">
                  <FaMapMarkerAlt /> {activity.location}
                </span>
              </div>

              <p className="activity-description">{activity.description}</p>

              <div className="activity-tags">
                {activity.tags.map((tag, i) => (
                  <span key={i} className="activity-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {activity.certificate && (
                <a
                  href={activity.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate-btn"
                >
                  <FaCertificate /> View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="activities-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="cta-text">
            <FaUsers className="cta-icon" />
            Always looking for the next challenge — hackathons, collaborations, and community events!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Activities;
