import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { searchFlights, setFilters } from '../store/slices/flightSlice';
import FlightCard from '../components/ui/FlightCard';
import SearchForm from '../components/forms/SearchForm';
import FlightComparison from '../components/ui/FlightComparison';
import flightService from '../services/flightService';
import './FlightSearch.scss';

const FlightSearch = () => {
  const dispatch = useDispatch();
  const { flights, loading, searchParams, filters } = useSelector(state => state.flights);
  const [showComparison, setShowComparison] = useState(false);
  const [allFlights, setAllFlights] = useState([]);

  useEffect(() => {
    // Hardcoded flights for immediate display
    const staticFlights = [
      {
        _id: '1',
        airline: { name: 'American Airlines', code: 'AA' },
        flightNumber: 'AA1234',
        route: { from: { code: 'JFK', city: 'New York' }, to: { code: 'LAX', city: 'Los Angeles' } },
        schedule: { departure: { time: '08:00' }, arrival: { time: '11:30' }, duration: '5h 30m' },
        pricing: { economy: 299, business: 899, first: 1599 },
        aircraft: { type: 'Boeing 737' },
        status: 'scheduled'
      },
      {
        _id: '2',
        airline: { name: 'Delta Airlines', code: 'DL' },
        flightNumber: 'DL5678',
        route: { from: { code: 'CHI', city: 'Chicago' }, to: { code: 'MIA', city: 'Miami' } },
        schedule: { departure: { time: '14:00' }, arrival: { time: '17:30' }, duration: '3h 30m' },
        pricing: { economy: 349, business: 999, first: 1799 },
        aircraft: { type: 'Airbus A320' },
        status: 'scheduled'
      },
      {
        _id: '3',
        airline: { name: 'United Airlines', code: 'UA' },
        flightNumber: 'UA9012',
        route: { from: { code: 'LAS', city: 'Las Vegas' }, to: { code: 'SEA', city: 'Seattle' } },
        schedule: { departure: { time: '16:45' }, arrival: { time: '19:15' }, duration: '2h 30m' },
        pricing: { economy: 179, business: 549, first: 999 },
        aircraft: { type: 'Boeing 757' },
        status: 'scheduled'
      }
    ];
    
    setAllFlights(staticFlights);
    dispatch(searchFlights.fulfilled({ flights: staticFlights, totalPages: 1, currentPage: 1, total: staticFlights.length }));
  }, [dispatch]);

  const handleSearch = async (searchParams) => {
    try {
      dispatch({ type: 'flights/searchFlights/pending' });
      const response = await flightService.searchFlights(searchParams);
      dispatch({ type: 'flights/searchFlights/fulfilled', payload: response.data });
    } catch (error) {
      console.error('Search error:', error);
      // Fallback to client-side filtering
      const filtered = allFlights.filter(flight => 
        (!searchParams.from || flight.route.from.code === searchParams.from) &&
        (!searchParams.to || flight.route.to.code === searchParams.to)
      );
      dispatch({ type: 'flights/searchFlights/fulfilled', payload: { flights: filtered, totalPages: 1, currentPage: 1, total: filtered.length } });
    }
  };

  const handleFilterChange = (filterType, value) => {
    dispatch(setFilters({ [filterType]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="flight-search-page">
      <div className="search-header">
        <div className="container">
          <SearchForm onSearch={handleSearch} compact />
        </div>
      </div>

      <div className="container">
        <div className="search-content">
          <div className="filters-sidebar">
            <motion.div 
              className="filters-card"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Filters</h3>
              
              <div className="filter-group">
                <label>Price Range</label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={filters.priceRange[1]}
                  onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                />
                <span>${filters.priceRange[0]} - ${filters.priceRange[1]}</span>
              </div>

              <div className="filter-group">
                <label>Airlines</label>
                <select
                  value={filters.airline}
                  onChange={(e) => handleFilterChange('airline', e.target.value)}
                >
                  <option value="">All Airlines</option>
                  <option value="American Airlines">American Airlines</option>
                  <option value="Delta">Delta</option>
                  <option value="United">United</option>
                </select>
              </div>
            </motion.div>
          </div>

          <div className="results-section">
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Searching for the best flights...</p>
              </div>
            ) : (
              <motion.div
                className="flight-results"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="results-header">
                  <h2>{flights.length} flights found</h2>
                  <div className="results-actions">
                    <button 
                      className="compare-btn"
                      onClick={() => setShowComparison(true)}
                      disabled={flights.length < 2}
                    >
                      Compare Flights
                    </button>
                    <select className="sort-select">
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="departure">Departure Time</option>
                    </select>
                  </div>
                </div>

                {flights.map((flight) => (
                  <motion.div key={flight._id} variants={itemVariants}>
                    <FlightCard flight={flight} />
                  </motion.div>
                ))}

                {flights.length === 0 && !loading && (
                  <div className="no-results">
                    <h3>No flights found</h3>
                    <p>Try adjusting your search criteria</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {showComparison && (
          <FlightComparison 
            flights={flights} 
            onClose={() => setShowComparison(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlightSearch;