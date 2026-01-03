import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './FlightTracker.scss';

const FlightTracker = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [flightStatus, setFlightStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const flightStatuses = [
    'Scheduled',
    'Boarding',
    'Departed',
    'In Flight',
    'Landed',
    'Delayed',
    'Cancelled'
  ];

  const generateMockStatus = (flightNumber) => {
    const randomStatus = flightStatuses[Math.floor(Math.random() * flightStatuses.length)];
    const now = new Date();
    const departureTime = new Date(now.getTime() + Math.random() * 24 * 60 * 60 * 1000);
    const arrivalTime = new Date(departureTime.getTime() + (2 + Math.random() * 6) * 60 * 60 * 1000);
    
    return {
      flightNumber,
      status: randomStatus,
      departure: {
        airport: 'JFK',
        city: 'New York',
        scheduled: departureTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        actual: randomStatus === 'Delayed' ? 
          new Date(departureTime.getTime() + 30 * 60 * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) :
          departureTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        gate: `A${Math.floor(Math.random() * 20) + 1}`,
        terminal: Math.floor(Math.random() * 4) + 1
      },
      arrival: {
        airport: 'LAX',
        city: 'Los Angeles',
        scheduled: arrivalTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        actual: randomStatus === 'Delayed' ? 
          new Date(arrivalTime.getTime() + 30 * 60 * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) :
          arrivalTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        gate: `B${Math.floor(Math.random() * 30) + 1}`,
        terminal: Math.floor(Math.random() * 4) + 1
      },
      aircraft: {
        type: 'Boeing 737-800',
        registration: 'N' + Math.floor(Math.random() * 9000 + 1000) + 'AA'
      },
      progress: Math.min(100, Math.max(0, 
        randomStatus === 'Scheduled' ? 0 :
        randomStatus === 'Boarding' ? 10 :
        randomStatus === 'Departed' ? 25 :
        randomStatus === 'In Flight' ? 60 :
        randomStatus === 'Landed' ? 100 :
        randomStatus === 'Delayed' ? 5 : 0
      ))
    };
  };

  const trackFlight = async () => {
    if (!trackingNumber.trim()) {
      setError('Please enter a flight number');
      return;
    }

    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      try {
        const status = generateMockStatus(trackingNumber.toUpperCase());
        setFlightStatus(status);
        setLoading(false);
      } catch (err) {
        setError('Flight not found. Please check the flight number.');
        setLoading(false);
      }
    }, 1500);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Scheduled': return '#2196f3';
      case 'Boarding': return '#ff9800';
      case 'Departed': return '#4caf50';
      case 'In Flight': return '#4caf50';
      case 'Landed': return '#4caf50';
      case 'Delayed': return '#ff5722';
      case 'Cancelled': return '#f44336';
      default: return '#666';
    }
  };

  return (
    <div className="flight-tracker">
      <motion.div 
        className="tracker-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>✈️ Flight Tracker</h2>
        <p>Track your flight status in real-time</p>
      </motion.div>

      <motion.div 
        className="search-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="search-input">
          <input
            type="text"
            placeholder="Enter flight number (e.g., AA1234)"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && trackFlight()}
          />
          <button onClick={trackFlight} disabled={loading}>
            {loading ? '🔍 Tracking...' : '🔍 Track Flight'}
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </motion.div>

      {flightStatus && (
        <motion.div 
          className="flight-status"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="status-header">
            <h3>{flightStatus.flightNumber}</h3>
            <div 
              className="status-badge"
              style={{ backgroundColor: getStatusColor(flightStatus.status) }}
            >
              {flightStatus.status}
            </div>
          </div>

          <div className="flight-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${flightStatus.progress}%` }}
              ></div>
            </div>
            <div className="progress-text">{flightStatus.progress}% Complete</div>
          </div>

          <div className="flight-details">
            <div className="departure-info">
              <h4>🛫 Departure</h4>
              <div className="airport-info">
                <div className="airport-code">{flightStatus.departure.airport}</div>
                <div className="city-name">{flightStatus.departure.city}</div>
              </div>
              <div className="time-info">
                <div className="time-row">
                  <span>Scheduled:</span>
                  <span>{flightStatus.departure.scheduled}</span>
                </div>
                <div className="time-row">
                  <span>Actual:</span>
                  <span className={flightStatus.departure.actual !== flightStatus.departure.scheduled ? 'delayed' : ''}>
                    {flightStatus.departure.actual}
                  </span>
                </div>
              </div>
              <div className="gate-info">
                <span>Gate: {flightStatus.departure.gate}</span>
                <span>Terminal: {flightStatus.departure.terminal}</span>
              </div>
            </div>

            <div className="flight-path">
              <div className="path-line"></div>
              <div className="plane-icon">✈️</div>
            </div>

            <div className="arrival-info">
              <h4>🛬 Arrival</h4>
              <div className="airport-info">
                <div className="airport-code">{flightStatus.arrival.airport}</div>
                <div className="city-name">{flightStatus.arrival.city}</div>
              </div>
              <div className="time-info">
                <div className="time-row">
                  <span>Scheduled:</span>
                  <span>{flightStatus.arrival.scheduled}</span>
                </div>
                <div className="time-row">
                  <span>Estimated:</span>
                  <span className={flightStatus.arrival.actual !== flightStatus.arrival.scheduled ? 'delayed' : ''}>
                    {flightStatus.arrival.actual}
                  </span>
                </div>
              </div>
              <div className="gate-info">
                <span>Gate: {flightStatus.arrival.gate}</span>
                <span>Terminal: {flightStatus.arrival.terminal}</span>
              </div>
            </div>
          </div>

          <div className="aircraft-info">
            <h4>✈️ Aircraft Information</h4>
            <div className="aircraft-details">
              <span>Type: {flightStatus.aircraft.type}</span>
              <span>Registration: {flightStatus.aircraft.registration}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FlightTracker;