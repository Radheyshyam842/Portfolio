import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, slideIn } from '../utils/motion';
import { FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-card" 
      id="experience"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title">
          <FiBriefcase className="glow-icon" style={{ marginRight: '10px' }} />Experience
        </h2>
        <span className="section-badge">Work History</span>
      </motion.div>
      <div className="timeline">
        <motion.div variants={slideIn('left', 'tween', 0.2, 0.8)} className="timeline-item">
          <span className="timeline-date">08/2023 - 12/2023</span>
          <h3 className="timeline-title">Junior Software Developer</h3>
          <p className="timeline-company">Webanix, Udaipur</p>
          <p className="timeline-description">
            Full-stack development creating comprehensive projects with expertise in both 
            frontend and backend technologies.
          </p>
        </motion.div>
        <motion.div variants={slideIn('left', 'tween', 0.4, 0.8)} className="timeline-item">
          <span className="timeline-date">11/2022 - 06/2023</span>
          <h3 className="timeline-title">Junior Software Developer</h3>
          <p className="timeline-company">Appcrave, Udaipur</p>
          <p className="timeline-description">
            Contributed to PHP and Laravel-based projects for a dynamic startup.
          </p>
        </motion.div>
        <motion.div variants={slideIn('left', 'tween', 0.6, 0.8)} className="timeline-item">
          <span className="timeline-date">04/2022 - 11/2022</span>
          <h3 className="timeline-title">Frontend Developer</h3>
          <p className="timeline-company">LakeBrains Technologies, Udaipur</p>
          <p className="timeline-description">
            Mastered advanced frontend development with React.js and built responsive interfaces.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
