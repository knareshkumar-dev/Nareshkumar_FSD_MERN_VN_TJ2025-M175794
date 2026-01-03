import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MobileFeatures = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="mobile-features">
      <motion.div 
        className="mobile-boarding-pass"
        style={{
          background: 'linear-gradient(135deg, #1a237e 0%, #2196f3 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '15px',
          margin: '20px 0'
        }}
        whileHover={{ scale: 1.02 }}
      >
        <h3>📱 Mobile Boarding Pass</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p><strong>AA1234</strong></p>
            <p>JFK → LAX</p>
            <p>Gate A12 • Seat 14A</p>
          </div>
          <motion.button
            onClick={() => setShowQR(!showQR)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              padding: '10px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {showQR ? '📱' : '📊'}
          </motion.button>
        </div>
        
        {showQR && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            style={{
              background: 'white',
              color: 'black',
              padding: '20px',
              borderRadius: '8px',
              marginTop: '15px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '60px' }}>📱</div>
            <p>QR Code for Mobile Check-in</p>
          </motion.div>
        )}
      </motion.div>

      <div className="mobile-notifications" style={{ marginTop: '20px' }}>
        <h4>📲 Push Notifications</h4>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
          <strong>✈️ Flight Update</strong>
          <p>Your flight AA1234 is now boarding at Gate A12</p>
          <small>2 minutes ago</small>
        </div>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
          <strong>🎫 Check-in Available</strong>
          <p>Check-in is now open for your flight tomorrow</p>
          <small>1 hour ago</small>
        </div>
      </div>
    </div>
  );
};

export default MobileFeatures;