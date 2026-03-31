import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant, zoomIn } from '../utils/motion';
import { FiSend, FiDownload, FiMapPin, FiMail, FiLinkedin, FiClock } from 'react-icons/fi';

const Hero = () => {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-card" 
      id="home"
    >
      <div className="hero-content">
        <motion.div variants={fadeIn('right', 'spring', 0.2, 1.5)} className="hero-text">
          <motion.h2 variants={textVariant(0.3)}>
            Jai Mahadev, I'm <span>Radheyshyam Purohit</span>
          </motion.h2>
          <motion.p variants={textVariant(0.4)} className="hero-tagline">
            Full-Stack Software Engineer | Digital Entrepreneur | Technology Strategist
          </motion.p>
          <motion.p variants={textVariant(0.5)}>
            I build systems, brands, and income-generating digital & Physical assets. 
            My work bridges technology + business + design + automation.
          </motion.p>
          <motion.div variants={fadeIn('up', 'tween', 0.6, 1)} className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Clients</span>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('up', 'tween', 0.8, 1)} className="cta-group">
            <a href="#contact" className="cta-btn">
              <FiSend className="glow-icon" style={{ marginRight: '8px' }} /> Lets Build Project
            </a>
            <a href="RESUME.pdf" className="cta-btn cta-btn-outline" download>
              <FiDownload className="glow-icon" style={{ marginRight: '8px' }} /> Download CV
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          variants={zoomIn(0.6, 1)} 
          className="contact-card"
          whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5 }}
          style={{ perspective: 1000 }}
        >
          <div className="contact-item">
            <div className="contact-icon">
              <FiMapPin className="glow-icon" style={{ fontSize: '24px' }} />
            </div>
            <div className="contact-info">
              <label>Location</label>
              <span>Udaipur, Rajasthan, India</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <FiMail className="glow-icon" style={{ fontSize: '24px' }} />
            </div>
            <div className="contact-info">
              <label>Email</label>
              <span>radheyshyampurohit72@gmail.com</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <FiLinkedin className="glow-icon" style={{ fontSize: '24px' }} />
            </div>
            <div className="contact-info">
              <label>LinkedIn</label>
              <span>radheyshyam-purohit</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <FiClock className="glow-icon" style={{ fontSize: '24px' }} />
            </div>
            <div className="contact-info">
              <label>Availability</label>
              <span>Open to Project</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
