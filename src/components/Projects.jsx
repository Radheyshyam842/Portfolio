import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, zoomIn } from '../utils/motion';
import { FiMonitor, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full-Stack React & Laravel',
      tags: ['React', 'Laravel', 'MySQL', 'Stripe'],
      link: '#',
      color: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)',
    },
    {
      title: 'Real Estate Dashboard',
      category: 'Analytics Web App',
      tags: ['React', 'Tailwind', 'Chart.js', 'Firebase'],
      link: '#',
      color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    },
    {
      title: 'Healthcare NGO Portal',
      category: 'Custom CMS',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'Auth'],
      link: '#',
      color: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    },
    {
      title: 'AI Chat Interface',
      category: 'Frontend Engineering',
      tags: ['React', 'Framer Motion', 'OpenAI'],
      link: '#',
      color: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
    }
  ];

  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-card" 
      id="projects"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title">
          <FiMonitor className="glow-icon" style={{ marginRight: '10px' }} />Featured Projects
        </h2>
        <span className="section-badge">Portfolio</span>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={zoomIn(0.2 * index, 0.8)}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            whileHover={{ scale: 1.05, translateY: -10, borderColor: 'var(--theme-color)' }}
          >
            <div style={{ width: '100%', height: '140px', background: project.color, position: 'relative' }}>
               <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '8px', fontSize: '10px', color: '#fff', display: 'flex', alignItems: 'center', gap: '4px' }}>
                 <FiExternalLink /> View
               </div>
            </div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#fff', marginBottom: '5px' }}>{project.title}</h3>
              <p style={{ fontSize: '12px', color: 'var(--text-color-muted)', marginBottom: '15px' }}>{project.category}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} style={{ padding: '4px 8px', background: 'rgba(120, 204, 109, 0.1)', color: 'var(--theme-color)', fontSize: '10px', borderRadius: '10px', fontWeight: '600' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
