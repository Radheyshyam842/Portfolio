import React, { useState, useEffect } from 'react';
import { FiX, FiSettings, FiMoon, FiSun } from 'react-icons/fi';

const ThemePanel = ({ isOpen, onClose }) => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeColor, setActiveColor] = useState('#78cc6d');

  useEffect(() => {
    // Check initial state from body and css variables
    setIsLightMode(document.body.classList.contains('light-mode'));
    const savedColor = localStorage.getItem('themeColor') || '#78cc6d';
    setActiveColor(savedColor);
  }, []);

  const toggleThemeMode = () => {
    const newLightMode = !isLightMode;
    setIsLightMode(newLightMode);
    
    if (newLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('lightMode', newLightMode);
  };

  const changeColor = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty('--theme-color', color);
    localStorage.setItem('themeColor', color);
  };

  const colors = [
    { value: '#78cc6d', name: 'green' },
    { value: '#ff9800', name: 'orange' },
    { value: '#ff5e94', name: 'pink' },
    { value: '#c446da', name: 'purple' },
    { value: '#e8676b', name: 'red' },
    { value: '#00bcd4', name: 'cyan' },
  ];

  return (
    <div className={`theme-panel ${isOpen ? 'active' : ''}`} id="theme-panel">
      <div className="theme-toggle-btn">
        <button className="close-panel" onClick={onClose}>
          <FiX />
        </button>
      </div>
      <div className="theme-options">
        <h3><FiSettings style={{ marginRight: '8px' }} /> Theme Settings</h3>
        <div className="theme-section">
          <h4>Appearance</h4>
          <div className="theme-toggle-row">
            <div className="setting-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {isLightMode ? <FiSun /> : <FiMoon />} {isLightMode ? 'Light Mode' : 'Dark Mode'}
              </span>
              <label className="switch">
                <input type="checkbox" checked={isLightMode} onChange={toggleThemeMode} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="theme-section">
          <h4>Accent Colors</h4>
          <div className="color-options">
            {colors.map((c) => (
              <span 
                key={c.name}
                className={`color-btn color-${c.name} ${activeColor === c.value ? 'active' : ''}`} 
                onClick={() => changeColor(c.value)}
                style={{ backgroundColor: c.value }}
              ></span>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Close Button */}
      <div className="mobile-theme-close" onClick={onClose}>
        <FiX style={{ marginRight: '5px' }} /> Close
      </div>
    </div>
  );
};

export default ThemePanel;
