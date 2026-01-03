import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SeatSelection.scss';

const SeatSelection = ({ aircraft, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatClass, setSeatClass] = useState('economy');

  const generateSeats = () => {
    const seats = [];
    const config = aircraft.seatMap[seatClass];
    
    for (let row = 1; row <= config.rows; row++) {
      for (let col = 0; col < config.seatsPerRow; col++) {
        const seatId = `${row}${String.fromCharCode(65 + col)}`;
        const isOccupied = Math.random() < 0.3; // 30% occupied
        seats.push({
          id: seatId,
          row,
          col,
          occupied: isOccupied,
          selected: selectedSeats.includes(seatId)
        });
      }
    }
    return seats;
  };

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
    onSeatSelect(selectedSeats);
  };

  return (
    <div className="seat-selection">
      <div className="class-selector">
        <button 
          className={seatClass === 'economy' ? 'active' : ''}
          onClick={() => setSeatClass('economy')}
        >
          Economy
        </button>
        <button 
          className={seatClass === 'business' ? 'active' : ''}
          onClick={() => setSeatClass('business')}
        >
          Business
        </button>
        <button 
          className={seatClass === 'first' ? 'active' : ''}
          onClick={() => setSeatClass('first')}
        >
          First Class
        </button>
      </div>

      <div className="aircraft-layout">
        <div className="seat-map">
          {generateSeats().map(seat => (
            <motion.div
              key={seat.id}
              className={`seat ${seat.occupied ? 'occupied' : ''} ${seat.selected ? 'selected' : ''}`}
              onClick={() => !seat.occupied && handleSeatClick(seat.id)}
              whileHover={!seat.occupied ? { scale: 1.1 } : {}}
              whileTap={!seat.occupied ? { scale: 0.9 } : {}}
            >
              {seat.id}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="seat-legend">
        <div className="legend-item">
          <div className="seat available"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="seat occupied"></div>
          <span>Occupied</span>
        </div>
        <div className="legend-item">
          <div className="seat selected"></div>
          <span>Selected</span>
        </div>
      </div>

      <div className="selection-summary">
        <h4>Selected Seats: {selectedSeats.join(', ')}</h4>
        <p>Total: ${selectedSeats.length * 25} seat fees</p>
      </div>
    </div>
  );
};

export default SeatSelection;