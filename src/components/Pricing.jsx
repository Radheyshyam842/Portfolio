import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, fadeIn } from '../utils/motion';
import { FiTag, FiBattery, FiCheck, FiX } from 'react-icons/fi';

const Pricing = () => {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-card" 
      id="pricing"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title">
          <FiTag className="glow-icon" style={{ marginRight: '10px' }} />Pricing
        </h2>
        <span className="section-badge">Investment</span>
      </motion.div>
      <div className="pricing-grid">
        <motion.div 
          variants={fadeIn('up', 'spring', 0.3, 1)} 
          whileHover={{ scale: 1.05, translateY: -10 }}
          className="pricing-card"
        >
          <div className="pricing-icon"><FiBattery style={{ fontSize: '40px' }} /></div>
          <h3 className="pricing-name">Basic</h3>
          <div className="pricing-amount">
            <span className="pricing-currency">$</span>
            <span className="pricing-price">22</span>
            <span className="pricing-period">/hour</span>
          </div>
          <ul className="pricing-features">
            <li><FiCheck /> Frontend Development</li>
            <li><FiCheck /> WordPress Websites</li>
            <li><FiCheck /> Basic SEO Setup</li>
            <li><FiCheck /> Email Support</li>
            <li className="disable"><FiX /> Backend Development</li>
          </ul>
          <a href="#contact" className="cta-btn cta-btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: '15px' }}>
            Get Started
          </a>
        </motion.div>
        
        <motion.div 
          variants={fadeIn('up', 'spring', 0.6, 1)} 
          whileHover={{ scale: 1.05, translateY: -10 }}
          className="pricing-card featured"
        >
          <div className="pricing-icon"><FiBattery style={{ fontSize: '40px', color: '#fff' }} fill="#fff" /></div>
          <h3 className="pricing-name">Professional</h3>
          <div className="pricing-amount">
            <span className="pricing-currency">$</span>
            <span className="pricing-price">48</span>
            <span className="pricing-period">/hour</span>
          </div>
          <ul className="pricing-features">
            <li><FiCheck /> Full-Stack Development</li>
            <li><FiCheck /> Custom Web Applications</li>
            <li><FiCheck /> API Development</li>
            <li><FiCheck /> Priority Support</li>
            <li><FiCheck /> Consultation Calls</li>
          </ul>
          <a href="#contact" className="cta-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '15px' }}>
            Get Started
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Pricing;
