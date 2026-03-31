import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, fadeIn } from '../utils/motion';
import { FiUser } from 'react-icons/fi';

const About = () => {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-card" 
      id="about"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title">
          <FiUser className="glow-icon" style={{ marginRight: '10px' }} />About Me
        </h2>
        <span className="section-badge">My Story</span>
      </motion.div>
      <motion.div variants={fadeIn('up', 'spring', 0.2, 1)} className="text-box">
        <p>
          <strong>Full-Stack Software Engineer, Digital Entrepreneur, and Technology Strategist</strong> with 
          strong experience in React, Laravel, PHP, modern UI/UX, branding, and scalable product development.
        </p>
      </motion.div>
      <motion.div variants={fadeIn('up', 'spring', 0.4, 1)} className="text-box">
        <p>
          <strong>Philosophy:</strong> Product-first development — Understand business goal → Design for users 
          → Architect for scale → Build for performance & security.
        </p>
      </motion.div>
      <motion.div variants={fadeIn('up', 'spring', 0.6, 1)} className="text-box">
        <p>
          <strong>Entrepreneurship:</strong> I actively build and manage real businesses. I think like a founder, 
          not just a coder.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
