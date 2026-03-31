import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, fadeIn } from '../utils/motion';
import { FiAward } from 'react-icons/fi';

const FunFacts = () => {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-card" 
      id="funfacts"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title">
          <FiAward className="glow-icon" style={{ marginRight: '10px' }} />Fun Facts
        </h2>
        <span className="section-badge">About Me</span>
      </motion.div>
      <div className="funfacts-grid">
        <motion.div variants={fadeIn('up', 'spring', 0.2, 1)} whileHover={{ scale: 1.05, translateY: -5 }} className="funfact-card">
          <span className="funfact-icon">⭐</span>
          <div className="funfact-number">25+</div>
          <div className="funfact-label">Awards Won</div>
        </motion.div>
        <motion.div variants={fadeIn('up', 'spring', 0.4, 1)} whileHover={{ scale: 1.05, translateY: -5 }} className="funfact-card">
          <span className="funfact-icon">💡</span>
          <div className="funfact-number">Entrepreneurship</div>
          <div className="funfact-label">Passionate</div>
        </motion.div>
        <motion.div variants={fadeIn('up', 'spring', 0.6, 1)} whileHover={{ scale: 1.05, translateY: -5 }} className="funfact-card">
          <span className="funfact-icon">🌍</span>
          <div className="funfact-number">22+</div>
          <div className="funfact-label">States Visited</div>
        </motion.div>
        <motion.div variants={fadeIn('up', 'spring', 0.8, 1)} whileHover={{ scale: 1.05, translateY: -5 }} className="funfact-card">
          <span className="funfact-icon">✈️</span>
          <div className="funfact-number">2</div>
          <div className="funfact-label">Countries</div>
        </motion.div>
      </div>
      <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} className="text-box" style={{ marginTop: '15px', textAlign: 'center' }}>
        <span style={{ fontSize: '18px', marginRight: '8px' }}>👥</span>
        <strong style={{ fontSize: '14px' }}>RYR North - HFI, INDIA</strong>
        <p style={{ color: 'var(--text-color-muted)', fontSize: '11px', marginTop: '5px' }}>
          Regional Youth Representative (North Region)
        </p>
      </motion.div>
    </motion.section>
  );
};

export default FunFacts;
