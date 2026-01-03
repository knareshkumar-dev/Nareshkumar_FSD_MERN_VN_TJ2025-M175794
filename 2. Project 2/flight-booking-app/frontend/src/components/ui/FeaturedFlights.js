import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import flightService from '../../services/flightService';

const FeaturedFlights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Hardcoded featured flights
    const staticFlights = [
      {
        _id: '1',
        route: { from: { code: 'JFK' }, to: { code: 'LAX' } },
        airline: { name: 'American Airlines' },
        pricing: { economy: 299 }
      },
      {
        _id: '2',
        route: { from: { code: 'CHI' }, to: { code: 'MIA' } },
        airline: { name: 'Delta Airlines' },
        pricing: { economy: 199 }
      },
      {
        _id: '3',
        route: { from: { code: 'SEA' }, to: { code: 'DEN' } },
        airline: { name: 'United Airlines' },
        pricing: { economy: 249 }
      }
    ];
    setFlights(staticFlights);
  }, []);

  return (
    <section className="featured-flights">
      <div className="container">
        <h2>Featured Flights</h2>
        <div className="flights-grid">
          {flights.map((flight, index) => (
            <motion.div
              key={flight._id}
              className="flight-preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flight-route">
                <span className="from">{flight.route.from.code}</span>
                <span className="arrow">→</span>
                <span className="to">{flight.route.to.code}</span>
              </div>
              <div className="flight-info">
                <div className="airline">{flight.airline.name}</div>
                <div className="price">${flight.pricing.economy}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFlights;