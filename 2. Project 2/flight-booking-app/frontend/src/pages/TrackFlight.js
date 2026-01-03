import React from 'react';
import { motion } from 'framer-motion';
import FlightTracker from '../components/ui/FlightTracker';
import './TrackFlight.scss';

const TrackFlight = () => {
  return (
    <motion.div 
      className="track-flight-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <FlightTracker />
        
        <motion.div 
          className="tracking-tips"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>📱 Tracking Tips</h3>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">🔍</div>
              <h4>Flight Number Format</h4>
              <p>Enter your flight number including the airline code (e.g., AA1234, DL5678)</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">⏰</div>
              <h4>Real-time Updates</h4>
              <p>Flight status is updated every few minutes for the most accurate information</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">📧</div>
              <h4>Notifications</h4>
              <p>Sign up for email or SMS alerts to get notified of any flight changes</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🗺️</div>
              <h4>Gate Information</h4>
              <p>Check gate and terminal information before heading to the airport</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="popular-routes"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>🌟 Popular Routes</h3>
          <div className="routes-grid">
            <div className="route-card">
              <div className="route-path">
                <span className="airport">JFK</span>
                <span className="arrow">→</span>
                <span className="airport">LAX</span>
              </div>
              <div className="route-info">
                <span className="cities">New York → Los Angeles</span>
                <span className="duration">~5h 30m</span>
              </div>
            </div>
            <div className="route-card">
              <div className="route-path">
                <span className="airport">CHI</span>
                <span className="arrow">→</span>
                <span className="airport">MIA</span>
              </div>
              <div className="route-info">
                <span className="cities">Chicago → Miami</span>
                <span className="duration">~3h 30m</span>
              </div>
            </div>
            <div className="route-card">
              <div className="route-path">
                <span className="airport">LAX</span>
                <span className="arrow">→</span>
                <span className="airport">LAS</span>
              </div>
              <div className="route-info">
                <span className="cities">Los Angeles → Las Vegas</span>
                <span className="duration">~1h 15m</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TrackFlight;