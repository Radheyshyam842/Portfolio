import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, zoomIn } from '../utils/motion';
import { FiMessageSquare } from 'react-icons/fi';

const Vision = () => {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-card" 
      id="quote"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title">
          <FiMessageSquare className="glow-icon" style={{ marginRight: '10px' }} />Vision & Mission
        </h2>
        <span className="section-badge">My Purpose</span>
      </motion.div>
      <motion.div variants={zoomIn(0.3, 1)} className="quote-box">
        <div className="quote-icon"><FiMessageSquare style={{ fontSize: '30px' }} /></div>
        <p className="quote-text">
          "Innovation drives success—partner with us and stay ahead of the competition."
        </p>
        <p className="quote-author">— Radheyshyam Purohit</p>
        <p className="quote-role">Website Designer & Developer</p>
      </motion.div>
    </motion.section>
  );
};

export default Vision;
