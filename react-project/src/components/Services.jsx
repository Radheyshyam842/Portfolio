import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, zoomIn } from '../utils/motion';
import { FiSettings, FiCode, FiSmartphone, FiShoppingCart, FiSend } from 'react-icons/fi';

const Services = () => {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-card" 
      id="services"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title">
          <FiSettings className="glow-icon" style={{ marginRight: '10px' }} />Services
        </h2>
        <span className="section-badge">What I Offer</span>
      </motion.div>
      <div className="services-grid">
        <motion.div variants={zoomIn(0.2, 0.8)} whileHover={{ scale: 1.05, translateY: -5 }} className="service-card">
          <div className="service-icon"><FiCode style={{ fontSize: '28px' }} /></div>
          <h3 className="service-name">Full-Stack Development</h3>
          <p>End-to-end web solutions with React frontend and Laravel backend.</p>
          <ul className="service-features">
            <li>React & Laravel Apps</li>
            <li>Custom Dashboards</li>
            <li>RESTful APIs</li>
            <li>Authentication</li>
          </ul>
        </motion.div>
        <motion.div variants={zoomIn(0.4, 0.8)} whileHover={{ scale: 1.05, translateY: -5 }} className="service-card">
          <div className="service-icon"><FiSmartphone style={{ fontSize: '28px' }} /></div>
          <h3 className="service-name">Mobile-First Development</h3>
          <p>Responsive websites across all devices.</p>
          <ul className="service-features">
            <li>Responsive Design</li>
            <li>Cross-browser</li>
            <li>Performance</li>
            <li>Mobile-First</li>
          </ul>
        </motion.div>
        <motion.div variants={zoomIn(0.6, 0.8)} whileHover={{ scale: 1.05, translateY: -5 }} className="service-card">
          <div className="service-icon"><FiShoppingCart style={{ fontSize: '28px' }} /></div>
          <h3 className="service-name">E-Commerce Solutions</h3>
          <p>Complete e-commerce platforms.</p>
          <ul className="service-features">
            <li>WooCommerce</li>
            <li>Payment Gateway</li>
            <li>Admin Systems</li>
            <li>Custom Builds</li>
          </ul>
        </motion.div>
        <motion.div variants={zoomIn(0.8, 0.8)} whileHover={{ scale: 1.05, translateY: -5 }} className="service-card">
          <div className="service-icon"><FiSend style={{ fontSize: '28px' }} /></div>
          <h3 className="service-name">Digital Marketing & SEO</h3>
          <p>Websites designed for conversion.</p>
          <ul className="service-features">
            <li>SEO-Friendly</li>
            <li>Landing Pages</li>
            <li>Conversion</li>
            <li>Brand Strategy</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
