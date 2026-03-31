import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, zoomIn } from '../utils/motion';
import { FiBook, FiAward, FiCode, FiPenTool, FiCheckCircle } from 'react-icons/fi';

const Education = () => {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-card" 
      id="education"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title">
          <FiBook className="glow-icon" style={{ marginRight: '10px' }} />Education
        </h2>
        <span className="section-badge">Qualifications</span>
      </motion.div>
      <div className="education-grid">
        <motion.div variants={zoomIn(0.2, 0.8)} className="education-card">
          <div className="education-icon"><FiAward style={{ fontSize: '28px' }} /></div>
          <h3 className="education-degree">B.Tech Computer Science</h3>
          <p className="education-school">Maharana Pratap University</p>
          <p className="education-year">2018 - 2022</p>
        </motion.div>
        <motion.div variants={zoomIn(0.4, 0.8)} className="education-card">
          <div className="education-icon"><FiCode style={{ fontSize: '28px' }} /></div>
          <h3 className="education-degree">Programming Course</h3>
          <p className="education-school">Udaipur</p>
          <p className="education-year">2018 - 2019</p>
        </motion.div>
        <motion.div variants={zoomIn(0.6, 0.8)} className="education-card">
          <div className="education-icon"><FiPenTool style={{ fontSize: '28px' }} /></div>
          <h3 className="education-degree">Web Design Course</h3>
          <p className="education-school">Udaipur</p>
          <p className="education-year">8 Months</p>
        </motion.div>
        <motion.div variants={zoomIn(0.8, 0.8)} className="education-card">
          <div className="education-icon"><FiCheckCircle style={{ fontSize: '28px' }} /></div>
          <h3 className="education-degree">Higher Secondary</h3>
          <p className="education-school">Board of Secondary Education</p>
          <p className="education-year">2018</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
