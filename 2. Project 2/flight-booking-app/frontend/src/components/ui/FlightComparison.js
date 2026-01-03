import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FlightComparison.scss';

const FlightComparison = ({ flights, onClose }) => {
  const [selectedFlights, setSelectedFlights] = useState([]);

  const addToComparison = (flight) => {
    if (selectedFlights.length < 3 && !selectedFlights.find(f => f._id === flight._id)) {
      setSelectedFlights([...selectedFlights, flight]);
    }
  };

  const removeFromComparison = (flightId) => {
    setSelectedFlights(selectedFlights.filter(f => f._id !== flightId));
  };

  const formatTime = (time) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <motion.div 
      className="flight-comparison-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="flight-comparison-modal"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
      >
        <div className="comparison-header">
          <h2>Compare Flights</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="flight-selector">
          <h3>Select flights to compare (max 3):</h3>
          <div className="available-flights">
            {flights.slice(0, 6).map(flight => (
              <div key={flight._id} className="flight-option">
                <span>{flight.airline.name} {flight.flightNumber}</span>
                <span>${flight.pricing.economy}</span>
                <button 
                  onClick={() => addToComparison(flight)}
                  disabled={selectedFlights.length >= 3 || selectedFlights.find(f => f._id === flight._id)}
                >
                  {selectedFlights.find(f => f._id === flight._id) ? 'Added' : 'Compare'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {selectedFlights.length > 0 && (
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  {selectedFlights.map(flight => (
                    <th key={flight._id}>
                      {flight.airline.name}
                      <button 
                        className="remove-flight"
                        onClick={() => removeFromComparison(flight._id)}
                      >
                        ×
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Flight Number</td>
                  {selectedFlights.map(flight => (
                    <td key={flight._id}>{flight.flightNumber}</td>
                  ))}
                </tr>
                <tr>
                  <td>Route</td>
                  {selectedFlights.map(flight => (
                    <td key={flight._id}>
                      {flight.route.from.code} → {flight.route.to.code}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Departure</td>
                  {selectedFlights.map(flight => (
                    <td key={flight._id}>
                      {formatTime(flight.schedule.departure.time)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Duration</td>
                  {selectedFlights.map(flight => (
                    <td key={flight._id}>{flight.schedule.duration}</td>
                  ))}
                </tr>
                <tr>
                  <td>Economy Price</td>
                  {selectedFlights.map(flight => (
                    <td key={flight._id} className="price">
                      ${flight.pricing.economy}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Business Price</td>
                  {selectedFlights.map(flight => (
                    <td key={flight._id} className="price">
                      ${flight.pricing.business}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Aircraft</td>
                  {selectedFlights.map(flight => (
                    <td key={flight._id}>{flight.aircraft.type}</td>
                  ))}
                </tr>
                <tr>
                  <td>Availability</td>
                  {selectedFlights.map(flight => (
                    <td key={flight._id}>
                      {flight.availability.economy} seats
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FlightComparison;