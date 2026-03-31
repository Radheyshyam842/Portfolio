import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, fadeIn } from '../utils/motion';
import { FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const { name, phone, email, message } = formData;
    if (!name || !phone || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    const phoneRegex = /^[\d\s()+\-]+$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number (numbers and basic formatting only)');
      return;
    }
    
    fetch('https://script.google.com/macros/s/AKfycbyWKuvXMjchiC1wlXiSZPfk4GkXrYLeUCw6muDS5z0wf94j9fW7zxZ59c0U16Z8u0_U/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(text => {
      try {
        const data = JSON.parse(text);
        if (data.status === "success") {
          alert('Message sent successfully');
          setFormData({ name: '', phone: '', email: '', message: '' });
        } else {
          alert('Error: ' + (data.message || 'Unknown error'));
        }
      } catch (err) {
        alert('Response: ' + text);
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
      alert('Network error. Please check your connection and try again.');
    });
  };

  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-card" 
      id="contact"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title">
          <FiMail className="glow-icon" style={{ marginRight: '10px' }} />Get In Touch
        </h2>
        <span className="section-badge">Let's Talk</span>
      </motion.div>
      <div className="contact-grid">
        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="text-box">
          <p><strong>Ready to start your next project?</strong></p>
          <p>Whether you need a full-stack application, digital transformation, or technology strategy, I'm here to help.</p>
          <p style={{ marginTop: '10px' }}>Fill out the form or reach out directly.</p>
        </motion.div>
        <motion.div variants={fadeIn('left', 'tween', 0.4, 1)} className="contact-form">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows="3" required></textarea>
            </div>
            <button type="submit" className="cta-btn" style={{ width: '100%', justifyContent: 'center' }}>
              <FiSend style={{ marginRight: '8px' }} /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
