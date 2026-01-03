import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

const SearchForm = ({ onSearch, compact = false }) => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: new Date(),
    class: 'economy',
    passengers: 1
  });
  const [errors, setErrors] = useState({});
  const isFormValid = () => {
    return searchData.from && searchData.to && searchData.date && searchData.from !== searchData.to;
  };

  const airportOptions = [
    { value: 'JFK', label: 'New York (JFK)' },
    { value: 'LAX', label: 'Los Angeles (LAX)' },
    { value: 'CHI', label: 'Chicago (CHI)' },
    { value: 'MIA', label: 'Miami (MIA)' },
    { value: 'LAS', label: 'Las Vegas (LAS)' }
  ];

  const classOptions = [
    { value: 'economy', label: 'Economy' },
    { value: 'business', label: 'Business' },
    { value: 'first', label: 'First Class' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!searchData.from) validationErrors.from = 'Please select a departure city.';
    if (!searchData.to) validationErrors.to = 'Please select a destination city.';
    if (!searchData.date) validationErrors.date = 'Please select a departure date.';
    if (searchData.from && searchData.to && searchData.from === searchData.to) validationErrors.to = 'Destination must differ from departure.';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSearch({
        ...searchData,
        date: searchData.date.toISOString().split('T')[0]
      });
    } else {
      // focus first invalid field
      const order = ['from', 'to', 'date'];
      for (const key of order) {
        if (validationErrors[key]) {
          const idMap = { from: 'from-select', to: 'to-select', date: 'departure-date' };
          const el = document.getElementById(idMap[key]);
          if (el && typeof el.focus === 'function') {
            el.focus();
          }
          break;
        }
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.form 
      className={`search-form ${compact ? 'compact' : ''}`}
      variants={formVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
    >
      <div className="form-row">
        <motion.div className="form-group" variants={fieldVariants}>
          <label htmlFor="from-select">✈️ From</label>
          <Select
            inputId="from-select"
            aria-label="From (departure)"
            aria-invalid={!!errors.from}
            options={airportOptions}
            value={airportOptions.find(option => option.value === searchData.from)}
            onChange={(option) => setSearchData({...searchData, from: option.value})}
            placeholder="Select departure city"
            className={`react-select-container ${errors.from ? 'has-error' : ''}`}
            classNamePrefix="react-select"
          />
          {errors.from && <div className="field-error" role="alert" style={{color:'#d32f2f',marginTop:6,fontSize:'0.875rem'}}>{errors.from}</div>}
        </motion.div>

        <motion.div className="form-group" variants={fieldVariants}>
          <label htmlFor="to-select">🏁 To</label>
          <Select
            inputId="to-select"
            aria-label="To (destination)"
            aria-invalid={!!errors.to}
            options={airportOptions}
            value={airportOptions.find(option => option.value === searchData.to)}
            onChange={(option) => setSearchData({...searchData, to: option.value})}
            placeholder="Select destination city"
            className={`react-select-container ${errors.to ? 'has-error' : ''}`}
            classNamePrefix="react-select"
          />
          {errors.to && <div className="field-error" role="alert" style={{color:'#d32f2f',marginTop:6,fontSize:'0.875rem'}}>{errors.to}</div>}
        </motion.div>

        <motion.div className="form-group" variants={fieldVariants}>
          <label htmlFor="departure-date">📅 Departure Date</label>
          <DatePicker
            id="departure-date"
            aria-label="Departure date"
            aria-invalid={!!errors.date}
            selected={searchData.date}
            onChange={(date) => setSearchData({...searchData, date})}
            minDate={new Date()}
            dateFormat="MMM dd, yyyy"
            className={`form-control ${errors.date ? 'has-error' : ''}`}
          />
          {errors.date && <div className="field-error" role="alert" style={{color:'#d32f2f',marginTop:6,fontSize:'0.875rem'}}>{errors.date}</div>}
        </motion.div>

        <motion.div className="form-group" variants={fieldVariants}>
          <label htmlFor="class-select">💺 Class</label>
          <Select
            inputId="class-select"
            aria-label="Travel class"
            options={classOptions}
            value={classOptions.find(option => option.value === searchData.class)}
            onChange={(option) => setSearchData({...searchData, class: option.value})}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </motion.div>

        <motion.div className="form-group" variants={fieldVariants}>
          <label htmlFor="passengers-select">👥 Passengers</label>
          <select
            id="passengers-select"
            aria-label="Number of passengers"
            value={searchData.passengers}
            onChange={(e) => setSearchData({...searchData, passengers: parseInt(e.target.value)})}
          >
            {[1,2,3,4,5,6].map(num => (
              <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </motion.div>
      </div>

      <motion.button
        type="submit"
        className="search-btn"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={!isFormValid()}
        aria-disabled={!isFormValid()}
      >
        Search Flights ✈️
      </motion.button>
    </motion.form>
  );
};

export default SearchForm;