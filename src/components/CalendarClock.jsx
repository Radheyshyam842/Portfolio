import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, zoomIn } from '../utils/motion';
import { FiCalendar } from 'react-icons/fi';

const CalendarClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const getCalendarDays = () => {
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const m = time.getMonth();
    const y = time.getFullYear();
    const td = time.getDate();
    
    let firstDay = new Date(y, m, 1).getDay();
    firstDay = (firstDay + 6) % 7; // Adjusting so Monday is first day
    
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    
    const blanks = Array.from({ length: firstDay }, (_, i) => (
      <div key={`blank-${i}`} className="calendar-day" style={{ opacity: 0.3 }}></div>
    ));
    
    const days = Array.from({ length: daysInMonth }, (_, i) => {
      const d = i + 1;
      return (
        <div key={`day-${d}`} className={`calendar-day ${d === td ? 'today' : ''}`}>
          {d}
        </div>
      );
    });

    return { monthYear: `${monthNames[m]} ${y}`, grids: [...blanks, ...days] };
  };

  const calendarData = getCalendarDays();
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  
  const formattedTime = `${(h % 12 || 12).toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`;
  
  const sd = s * 6;
  const md = m * 6 + s * 0.1;
  const hd = (h % 12) * 30 + m * 0.5;

  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-card" 
      id="calendar"
    >
      <motion.div variants={textVariant(0.1)} className="section-header">
        <h2 className="section-title">
          <FiCalendar className="glow-icon" style={{ marginRight: '10px' }} />Calendar & Clock
        </h2>
        <span className="section-badge">Live Time</span>
      </motion.div>
      <div className="calendar-clock-grid">
        <motion.div variants={zoomIn(0.2, 1)} className="calendar-box">
          <div className="calendar-title">
            <h3>{calendarData.monthYear}</h3>
          </div>
          <div className="calendar-grid">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
              <div key={d} className="calendar-day-header">{d}</div>
            ))}
            {calendarData.grids}
          </div>
        </motion.div>
        <motion.div variants={zoomIn(0.4, 1)} className="clock-box">
          <div className="clock-title">
            <h3>Current Time</h3>
          </div>
          <div className="analog-clock">
            <div className="analog-clock-face">
              <div className="clock-hand hour-hand" style={{ transform: `translateX(-50%) rotate(${hd}deg)` }}></div>
              <div className="clock-hand minute-hand" style={{ transform: `translateX(-50%) rotate(${md}deg)` }}></div>
              <div className="clock-hand second-hand" style={{ transform: `translateX(-50%) rotate(${sd}deg)` }}></div>
              <div className="clock-center"></div>
            </div>
          </div>
          <div className="digital-clock">{formattedTime}</div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CalendarClock;
