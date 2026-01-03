import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  return (
    <motion.button
      className="theme-toggle"
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        background: isDark ? '#333' : '#fff',
        color: isDark ? '#fff' : '#333',
        border: '2px solid #ddd',
        borderRadius: '50px',
        padding: '10px 20px',
        cursor: 'pointer',
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </motion.button>
  );
};

export default ThemeToggle;