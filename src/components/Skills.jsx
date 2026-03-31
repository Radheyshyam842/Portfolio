import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, zoomIn, fadeIn } from '../utils/motion';
import { FiCode, FiMonitor, FiServer, FiDatabase, FiLink2, FiPenTool, FiTrendingUp } from 'react-icons/fi';

const Skills = () => {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-card" 
      id="skills"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title">
          <FiCode className="glow-icon" style={{ marginRight: '10px' }} />Technical Expertise
        </h2>
        <span className="section-badge">My Philosophy</span>
      </motion.div>
      <motion.div variants={fadeIn('up', 'spring', 0.2, 1)} className="text-box">
        <p>
          <strong>Product-First Development:</strong> Understand business goal → Design for users → 
          Architect for scale → Build for performance & security.
        </p>
      </motion.div>
      <div className="skills-container">
        
        {/* Frontend Engineering */}
        <motion.div 
          variants={zoomIn(0.3, 0.8)} 
          whileHover={{ scale: 1.05, translateY: -5 }}
          className="skill-category"
        >
          <div className="skill-header">
            <div className="skill-icon"><FiMonitor style={{ fontSize: '24px' }} /></div>
            <div>
              <h3 className="skill-title">Frontend Engineering</h3>
              <p>React.js, Hooks, Tailwind CSS, JavaScript ES6+</p>
            </div>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Hooks</span>
            <span className="skill-tag">Tailwind</span>
            <span className="skill-tag">ES6+</span>
            <span className="skill-tag">Responsive</span>
          </div>
          <div style={{ marginTop: '12px' }}>
            <div className="progress-item">
              <div className="progress-header">
                <span className="progress-name">React & Modern JS</span>
                <span className="progress-percent">95%</span>
              </div>
              <div className="progress-bar">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '95%' }} transition={{ duration: 1.5, delay: 0.8 }} className="progress-fill"></motion.div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-header">
                <span className="progress-name">UI/UX & Responsive</span>
                <span className="progress-percent">92%</span>
              </div>
              <div className="progress-bar">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} transition={{ duration: 1.5, delay: 0.8 }} className="progress-fill"></motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Backend Engineering */}
        <motion.div 
          variants={zoomIn(0.4, 0.8)} 
          whileHover={{ scale: 1.05, translateY: -5 }}
          className="skill-category"
        >
          <div className="skill-header">
            <div className="skill-icon"><FiServer style={{ fontSize: '24px' }} /></div>
            <div>
              <h3 className="skill-title">Backend Engineering</h3>
              <p>Laravel, PHP OOP, REST APIs, Authentication</p>
            </div>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">PHP OOP</span>
            <span className="skill-tag">Laravel</span>
            <span className="skill-tag">MVC</span>
            <span className="skill-tag">REST APIs</span>
          </div>
          <div style={{ marginTop: '12px' }}>
            <div className="progress-item">
              <div className="progress-header">
                <span className="progress-name">Laravel & PHP</span>
                <span className="progress-percent">93%</span>
              </div>
              <div className="progress-bar">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '93%' }} transition={{ duration: 1.5, delay: 0.9 }} className="progress-fill"></motion.div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-header">
                <span className="progress-name">API Development</span>
                <span className="progress-percent">90%</span>
              </div>
              <div className="progress-bar">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 1.5, delay: 0.9 }} className="progress-fill"></motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Database Architecture */}
        <motion.div 
          variants={zoomIn(0.5, 0.8)} 
          whileHover={{ scale: 1.05, translateY: -5 }}
          className="skill-category"
        >
          <div className="skill-header">
            <div className="skill-icon"><FiDatabase style={{ fontSize: '24px' }} /></div>
            <div>
              <h3 className="skill-title">Database Architecture</h3>
              <p>MySQL, Normalization, Optimization</p>
            </div>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">Database Design</span>
            <span className="skill-tag">Optimization</span>
            <span className="skill-tag">Complex Queries</span>
          </div>
        </motion.div>

        {/* API Development */}
        <motion.div 
          variants={zoomIn(0.6, 0.8)} 
          whileHover={{ scale: 1.05, translateY: -5 }}
          className="skill-category"
        >
          <div className="skill-header">
            <div className="skill-icon"><FiLink2 style={{ fontSize: '24px' }} /></div>
            <div>
              <h3 className="skill-title">API Development</h3>
              <p>REST APIs, JSON, Third-party Integration</p>
            </div>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">JSON</span>
            <span className="skill-tag">Integration</span>
            <span className="skill-tag">Auth Tokens</span>
          </div>
        </motion.div>

        {/* Design & Branding */}
        <motion.div 
          variants={zoomIn(0.7, 0.8)} 
          whileHover={{ scale: 1.05, translateY: -5 }}
          className="skill-category"
        >
          <div className="skill-header">
            <div className="skill-icon"><FiPenTool style={{ fontSize: '24px' }} /></div>
            <div>
              <h3 className="skill-title">Design & Branding</h3>
              <p>Figma, UI/UX, Print Design, Graphics</p>
            </div>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">UI/UX</span>
            <span className="skill-tag">Branding</span>
            <span className="skill-tag">Graphics</span>
          </div>
        </motion.div>

        {/* Digital Marketing */}
        <motion.div 
          variants={zoomIn(0.8, 0.8)} 
          whileHover={{ scale: 1.05, translateY: -5 }}
          className="skill-category"
        >
          <div className="skill-header">
            <div className="skill-icon"><FiTrendingUp style={{ fontSize: '24px' }} /></div>
            <div>
              <h3 className="skill-title">Digital Marketing</h3>
              <p>SEO, Conversion, Social Media</p>
            </div>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">SEO</span>
            <span className="skill-tag">Landing Pages</span>
            <span className="skill-tag">Funnels</span>
            <span className="skill-tag">Analytics</span>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Skills;
