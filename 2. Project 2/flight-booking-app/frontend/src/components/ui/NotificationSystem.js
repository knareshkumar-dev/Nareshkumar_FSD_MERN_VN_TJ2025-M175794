import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => removeNotification(id), 5000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  useEffect(() => {
    // Simulate flight updates
    const interval = setInterval(() => {
      const messages = [
        'Flight AA1234 is now boarding',
        'Gate change: Flight DL5678 moved to Gate B12',
        'Flight UA9012 delayed by 15 minutes'
      ];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      addNotification(randomMessage, 'info');
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notification-container">
      <AnimatePresence>
        {notifications.map(notification => (
          <motion.div
            key={notification.id}
            className={`notification ${notification.type}`}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            onClick={() => removeNotification(notification.id)}
          >
            {notification.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationSystem;