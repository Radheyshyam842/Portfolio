import React from 'react';
import { 
  FiHome, FiUser, FiCode, FiMonitor, FiGlobe, FiBriefcase, FiBook, 
  FiSettings, FiTag, FiCalendar, FiAward, FiMessageSquare, FiMail,
  FiLinkedin, FiGithub, FiTwitter, FiInstagram, FiLayers 
} from 'react-icons/fi';

const Sidebar = ({ isActive, closeMobileMenu, openThemePanel, activeSection }) => {
  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} id="sidebar">
      <div className="profile-section">
        <div className="profile-image-container">
          <div className="profile-image">
            <img src="v4/wp-content/uploads/2018/11/profile-140x140.jpg" alt="Radheyshyam Purohit" />
          </div>
        </div>
        <div className="profile-status">
          <span className="status-dot"></span>DM
        </div>
        <h1 className="profile-name">Radheyshyam Purohit</h1>
        <p className="profile-title">Full-Stack Software Engineer</p>
        <div className="profile-tags">
          <span className="tag">🚀 Entrepreneur</span>
          <span className="tag">🎯 Strategist</span>
          <span className="tag">💡 Innovator</span>
          <span className="tag">🌟 Leader</span>
        </div>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-num">3+</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat">
            <span className="stat-num">50+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-num">30+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>
      </div>
      <nav>
        <ul className="nav-menu">
          <li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
            <a href="#home" onClick={closeMobileMenu}>
              <FiHome className="icon" />Home
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
            <a href="#about" onClick={closeMobileMenu}>
              <FiUser className="icon" />About
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}>
            <a href="#skills" onClick={closeMobileMenu}>
              <FiCode className="icon" />Skills
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>
            <a href="#projects" onClick={closeMobileMenu}>
              <FiMonitor className="icon" />Projects
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'community' ? 'active' : ''}`}>
            <a href="#community" onClick={closeMobileMenu}>
              <FiGlobe className="icon" />Leadership
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}>
            <a href="#experience" onClick={closeMobileMenu}>
              <FiBriefcase className="icon" />Experience
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}>
            <a href="#education" onClick={closeMobileMenu}>
              <FiBook className="icon" />Education
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}>
            <a href="#services" onClick={closeMobileMenu}>
              <FiSettings className="icon" />Services
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'pricing' ? 'active' : ''}`}>
            <a href="#pricing" onClick={closeMobileMenu}>
              <FiTag className="icon" />Pricing
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'calendar' ? 'active' : ''}`}>
            <a href="#calendar" onClick={closeMobileMenu}>
              <FiCalendar className="icon" />Calendar
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'funfacts' ? 'active' : ''}`}>
            <a href="#funfacts" onClick={closeMobileMenu}>
              <FiAward className="icon" />Facts
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'quote' ? 'active' : ''}`}>
            <a href="#quote" onClick={closeMobileMenu}>
              <FiMessageSquare className="icon" />Vision
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
            <a href="#contact" onClick={closeMobileMenu}>
              <FiMail className="icon" />Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/radheyshyam-purohit-fullstackengineer/" className="social-link" target="_blank" rel="noreferrer">
          <FiLinkedin />
        </a>
        <a href="https://github.com/Radheyshyam842" className="social-link" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a href="https://twitter.com/RadheyshyamPur2" className="social-link" target="_blank" rel="noreferrer">
          <FiTwitter />
        </a>
        <a href="https://www.instagram.com/radheyshyam_purohit101/" className="social-link" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="https://stackoverflow.com/users/14808000/radheyshyam-purohit" className="social-link" target="_blank" rel="noreferrer">
          <FiLayers />
        </a>
      </div>
      <button className="theme-toggle" onClick={openThemePanel}>
        <FiSettings style={{ marginRight: '5px' }} /> Change Theme
      </button>
    </aside>
  );
};

export default Sidebar;
