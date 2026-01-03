import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './FlightCard.scss';

const FlightCard = ({ flight }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/booking/${flight._id}`);
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <motion.div 
      className="flight-card"
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flight-header">
        <div className="airline-info">
          <div className="airline-logo">
            {flight.airline?.logo ? (
              <img
                src={flight.airline.logo}
                alt={flight.airline.name}
                loading="lazy"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-airline.svg'; }}
              />
            ) : (
              <img src="/images/placeholder-airline.svg" alt="Airline logo" loading="lazy" />
            )}
          </div>
          <div>
            <div className="airline-name">{flight.airline?.name}</div>
            <div className="flight-number">{flight.flightNumber}</div>
          </div>
        </div>
        <div className="flight-status">
          <span className={`status ${flight.status}`}>{flight.status}</span>
        </div>
      </div>

      <div className="flight-route">
        <div className="route-info">
          <div className="time">{formatTime(flight.schedule?.departure?.time)}</div>
          <div className="airport">{flight.route?.from?.code}</div>
          <div className="city">{flight.route?.from?.city}</div>
        </div>

        <div className="route-line">
          <div className="duration">{flight.schedule?.duration}</div>
          <div className="line"></div>
          <div className="plane-icon">✈</div>
        </div>

        <div className="route-info">
          <div className="time">{formatTime(flight.schedule?.arrival?.time)}</div>
          <div className="airport">{flight.route?.to?.code}</div>
          <div className="city">{flight.route?.to?.city}</div>
        </div>
      </div>

      <div className="flight-footer">
        <div className="pricing">
          <div className="price-options">
            <div className="price-option">
              <span className="class">Economy</span>
              <span className="price">${flight.pricing?.economy}</span>
            </div>
            <div className="price-option">
              <span className="class">Business</span>
              <span className="price">${flight.pricing?.business}</span>
            </div>
          </div>
        </div>

        <motion.button
          className="book-btn"
          onClick={handleBookNow}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FlightCard;