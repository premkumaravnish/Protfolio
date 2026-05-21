// ==========================================
// CONTACT COMPONENT
// ==========================================
// React Concept: Event Handling
// - React uses camelCase event names: onClick, onChange, onSubmit
// - We pass functions as event handlers, NOT strings
//
// React Concept: Controlled Inputs (for future)
// - Currently this is a static contact section
// - Later you can add a form with useState to control each input
// ==========================================

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import './Contact.css';

const socials = [
  { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/premkumaravnish', color: '#a78bfa' },
  { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com/in/prem-avnish', color: '#6366f1' },
  { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com/your-twitter', color: '#ec4899' },
  { icon: <HiOutlineMail />, name: 'Email', url: 'mailto:premkavnish@gmail.com', color: '#22d3ee' },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">06.</span> Get In Touch
        </motion.h2>

        <motion.div
          className="contact-hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="contact-heading">
            Let's Build Something <span className="gradient-text">Amazing</span> Together
          </h3>
          <p className="contact-subtext">
            I'm currently open for freelance projects, internships, and full-time positions.
            Whether you have a project idea or just want to connect — let's talk!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-cards"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="info-card">
              <HiOutlineMail className="info-icon" />
              <div>
                <p className="info-label">Email</p>
                <a href="mailto:premkavnish@gmail.com">premkavnish@gmail.com</a>
              </div>
            </div>
            <div className="info-card">
              <HiOutlineLocationMarker className="info-icon" />
              <div>
                <p className="info-label">Location</p>
                <span>India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="social-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ y: -6, borderColor: s.color }}
              >
                <span className="social-card-icon" style={{ color: s.color }}>
                  {s.icon}
                </span>
                <span>{s.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="mailto:premkavnish@gmail.com" className="btn btn-primary btn-large">
            ✉️ Say Hello!
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
