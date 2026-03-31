import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, fadeIn, zoomIn } from '../utils/motion';
import { 
  FiUsers, FiAward, FiGlobe, FiMic, FiHeart, FiSmile, FiSettings, 
  FiStar, FiCheck, FiCpu, FiMonitor, FiFeather, FiBriefcase, FiMessageCircle, FiRefreshCw
} from 'react-icons/fi';

const Community = () => {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-card" 
      id="community"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title"><FiUsers className="glow-icon" style={{ marginRight: '10px' }} />Global Leadership & Community</h2>
        <span className="section-badge">🌍 International</span>
      </motion.div>
      <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="community-badges">
        <span className="badge">🌍 International Delegate – Spain</span>
        <span className="badge">🇮🇳 Global Youth Representative</span>
        <span className="badge">🏆 GNMOT Fellow</span>
        <span className="badge">🎗️ Regional Youth Representative - North</span>
      </motion.div>
      
      {/* Website-Ready Highlight Statement */}
      <motion.div variants={zoomIn(0.3, 1)} className="text-box highlight-box" style={{ background: 'linear-gradient(135deg, rgba(120, 204, 109, 0.15), rgba(8, 86, 193, 0.15))', borderLeftColor: 'var(--theme-color)', borderLeftWidth: '6px' }}>
        <p style={{ fontSize: '18px', textAlign: 'center', fontWeight: '600' }}>
          <strong>🌍 Represented India at Global NMO Training and World Congress in Madrid, Spain</strong>
        </p>
        <p style={{ fontSize: '15px', textAlign: 'center', marginTop: '10px' }}>
          — gaining international leadership exposure, global healthcare insights, and cross-cultural collaboration experience.
        </p>
      </motion.div>
      
      {/* GNMOT Learning */}
      <motion.div variants={textVariant(0.4)} className="section-header" style={{ marginTop: '30px', animation: 'fadeInUp 0.6s ease-out' }}>
        <h3 className="section-title" style={{ fontSize: '20px' }}><FiAward style={{ marginRight: '8px' }} />What I Gained from GNMOT</h3>
      </motion.div>
      <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} className="text-box"><p><strong>Global leadership perspectives</strong> — Strategic thinking for NGO growth — Governance & organizational sustainability — Youth engagement strategies — Ethical leadership practices — Cross-cultural collaboration skills</p></motion.div>
      <motion.div variants={fadeIn('up', 'tween', 0.6, 1)} className="text-box"><p><strong>Impact:</strong> This training reshaped my thinking from local execution to global vision — teaching me how international organizations function, grow, and sustain long-term impact.</p></motion.div>
      
      {/* World Congress Section */}
      <motion.div variants={textVariant(0.7)} className="section-header" style={{ marginTop: '30px', animation: 'fadeInUp 0.6s ease-out' }}>
        <h3 className="section-title" style={{ fontSize: '20px' }}><FiGlobe style={{ marginRight: '8px' }} />World Congress – Global Learning & Representation</h3>
      </motion.div>
      <motion.div variants={fadeIn('up', 'tween', 0.8, 1)} className="text-box"><p>The World Congress brought together <strong>International patient leaders, Medical professionals, Researchers, Policy makers, Global NGOs & federations</strong></p></motion.div>
      <div className="skills-container">
        <motion.div variants={zoomIn(0.9, 0.8)} whileHover={{ scale: 1.05 }} className="skill-category">
          <div className="skill-header"><div className="skill-icon"><FiMic style={{ fontSize: '24px' }} /></div><div><h3 className="skill-title">My Role</h3><p>Represented Indian youth voices on a global stage</p></div></div>
          <div className="skill-tags">
            <span className="skill-tag"><FiMic /> Speaking</span><span className="skill-tag"><FiAward /> India Representative</span><span className="skill-tag"><FiGlobe /> Global</span>
          </div>
        </motion.div>
        <motion.div variants={zoomIn(1.0, 0.8)} whileHover={{ scale: 1.05 }} className="skill-category">
          <div className="skill-header"><div className="skill-icon"><FiHeart style={{ fontSize: '24px' }} /></div><div><h3 className="skill-title">Learning</h3><p>Global healthcare systems, policies, best practices</p></div></div>
          <div className="skill-tags">
            <span className="skill-tag"><FiHeart /> Healthcare</span><span className="skill-tag"><FiFeather /> Policy</span><span className="skill-tag"><FiMonitor /> Research</span>
          </div>
        </motion.div>
        <motion.div variants={zoomIn(1.1, 0.8)} whileHover={{ scale: 1.05 }} className="skill-category">
          <div className="skill-header"><div className="skill-icon"><FiUsers style={{ fontSize: '24px' }} /></div><div><h3 className="skill-title">Networking</h3><p>Built connections with leaders from multiple countries</p></div></div>
          <div className="skill-tags">
            <span className="skill-tag"><FiGlobe /> International</span><span className="skill-tag"><FiRefreshCw /> Cross-cultural</span><span className="skill-tag"><FiBriefcase /> Professional</span>
          </div>
        </motion.div>
      </div>
      <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} className="text-box"><p>This exposure strengthened my <strong>confidence, global communication skills, and policy understanding</strong> — proving I can represent organizations globally with professionalism and maturity.</p></motion.div>
      
      {/* Cross-Cultural Skills */}
      <motion.div variants={textVariant(0.6)} className="section-header" style={{ marginTop: '30px', animation: 'fadeInUp 0.6s ease-out' }}>
        <h3 className="section-title" style={{ fontSize: '20px' }}><FiGlobe style={{ marginRight: '8px' }} />Cross-Cultural & Global Collaboration Skills</h3>
      </motion.div>
      <motion.div variants={fadeIn('up', 'tween', 0.7, 1)} className="text-box"><p>Representing at Spain helped me develop:</p></motion.div>
      <div className="skills-container">
        <motion.div variants={zoomIn(0.8, 0.8)} className="skill-category">
          <div className="skill-header"><div className="skill-icon"><FiGlobe style={{ fontSize: '24px' }} /></div><div><h3 className="skill-title">Borderless Communication</h3><p>Cross-border communication skills</p></div></div>
        </motion.div>
        <motion.div variants={zoomIn(0.9, 0.8)} className="skill-category">
          <div className="skill-header"><div className="skill-icon"><FiSmile style={{ fontSize: '24px' }} /></div><div><h3 className="skill-title">Cultural Intelligence</h3><p>Cultural sensitivity & adaptability</p></div></div>
        </motion.div>
        <motion.div variants={zoomIn(1.0, 0.8)} className="skill-category">
          <div className="skill-header"><div className="skill-icon"><FiUsers style={{ fontSize: '24px' }} /></div><div><h3 className="skill-title">Professional Networks</h3><p>International professional networking</p></div></div>
        </motion.div>
        <motion.div variants={zoomIn(1.1, 0.8)} className="skill-category">
          <div className="skill-header"><div className="skill-icon"><FiSettings style={{ fontSize: '24px' }} /></div><div><h3 className="skill-title">Team Mindset</h3><p>Global teamwork mindset</p></div></div>
        </motion.div>
      </div>
      <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} className="text-box"><p><strong>I learned how to listen, speak, and collaborate globally</strong> — a skill crucial for leadership, entrepreneurship, and international projects.</p></motion.div>
      
      {/* Giving Back */}
      <motion.div variants={textVariant(0.6)} className="section-header" style={{ marginTop: '30px' }}>
        <h3 className="section-title" style={{ fontSize: '20px' }}><FiHeart style={{ marginRight: '8px' }} />Giving Back to India</h3>
      </motion.div>
      <motion.div variants={fadeIn('up', 'tween', 0.7, 1)} className="text-box" style={{ background: 'rgba(255, 215, 0, 0.15)', borderLeftColor: 'gold', borderLeftWidth: '6px' }}>
        <p style={{ fontSize: '16px' }}><strong>The purpose of this global exposure was never personal recognition.</strong></p>
      </motion.div>
      <motion.div variants={fadeIn('up', 'tween', 0.8, 1)} className="text-box"><p><strong>My Commitment: apply global learnings at the grassroots level.</strong></p></motion.div>
      
      {/* Hemophilia Federation Background */}
      <motion.div variants={textVariant(0.6)} className="section-header" style={{ marginTop: '30px' }}>
        <h3 className="section-title" style={{ fontSize: '20px' }}><FiUsers style={{ marginRight: '8px' }} />Hemophilia Federation of India</h3>
      </motion.div>
      <motion.div variants={fadeIn('right', 'tween', 0.8, 1)} className="text-box"><p><strong>15+ years of community leadership</strong> representing patient communities at district, state, and national levels.</p></motion.div>
      <motion.div variants={fadeIn('right', 'tween', 0.9, 1)} className="text-box"><p><strong>Regional Youth Representative (North Region)</strong> — Event planning & execution — Training & facilitation — Community management</p></motion.div>
      
      {/* Why This Matters */}
      <motion.div variants={textVariant(0.7)} className="section-header" style={{ marginTop: '30px' }}>
        <h3 className="section-title" style={{ fontSize: '20px' }}><FiStar style={{ marginRight: '8px', color: 'gold' }} fill="gold" />Why This Matters</h3>
      </motion.div>
      <motion.div variants={fadeIn('up', 'tween', 0.8, 1)} className="text-box" style={{ background: 'linear-gradient(135deg, rgba(120, 204, 109, 0.15), rgba(8, 86, 193, 0.15))', borderLeftColor: 'var(--theme-color)', borderLeftWidth: '6px' }}>
        <p style={{ fontSize: '16px' }}>This international representation proves that I:</p>
        <p style={{ fontSize: '15px' }}>✅ Can represent organizations globally</p>
        <p style={{ fontSize: '15px' }}>✅ Think beyond borders with maturity</p>
        <p style={{ fontSize: '15px' }}>✅ Combine social leadership + technology</p>
      </motion.div>
    </motion.section>
  );
};

export default Community;
