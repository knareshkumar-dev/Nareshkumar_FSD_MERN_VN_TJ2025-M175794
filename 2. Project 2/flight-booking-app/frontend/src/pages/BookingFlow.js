import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const BookingFlow = () => {
  const { flightId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(state => state.auth);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    passengers: [{
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: 'male',
      class: 'economy'
    }],
    payment: {
      amount: 299,
      method: 'card'
    }
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // Set flight data immediately
    setSelectedFlight({
      _id: flightId,
      airline: { name: 'American Airlines', code: 'AA' },
      flightNumber: 'AA1234',
      route: { from: { code: 'JFK', city: 'New York' }, to: { code: 'LAX', city: 'Los Angeles' } },
      schedule: { departure: { time: '08:00' }, arrival: { time: '11:30' }, duration: '5h 30m' },
      pricing: { economy: 299, business: 899, first: 1599 },
      aircraft: { type: 'Boeing 737' },
      status: 'scheduled'
    });
  }, [flightId, isAuthenticated, navigate]);

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...bookingData.passengers];
    updatedPassengers[index][field] = value;
    setBookingData({ ...bookingData, passengers: updatedPassengers });
  };

  const handleBooking = async () => {
    try {
      toast.success('Booking confirmed!');
      navigate('/profile');
    } catch (error) {
      toast.error('Booking failed. Please try again.');
    }
  };

  if (!selectedFlight) {
    return <div style={{ padding: '100px 20px' }}>Loading flight details...</div>;
  }

  return (
    <div className="booking-page" style={{ padding: '100px 20px 50px', minHeight: '100vh' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Complete Your Booking</h1>
          
          <div className="flight-summary" style={{ 
            background: 'white', 
            padding: '20px', 
            borderRadius: '10px', 
            marginBottom: '30px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3>{selectedFlight.airline?.name} - {selectedFlight.flightNumber}</h3>
            <p>{selectedFlight.route?.from?.city} → {selectedFlight.route?.to?.city}</p>
            <p>Price: ${selectedFlight.pricing?.economy}</p>
          </div>

          {step === 1 && (
            <div className="passenger-details">
              <h2>Passenger Details</h2>
              {bookingData.passengers.map((passenger, index) => (
                <div key={index} style={{ 
                  background: 'white', 
                  padding: '20px', 
                  borderRadius: '10px', 
                  marginBottom: '20px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  <h4>Passenger {index + 1}</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={passenger.firstName}
                      onChange={(e) => handlePassengerChange(index, 'firstName', e.target.value)}
                      style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={passenger.lastName}
                      onChange={(e) => handlePassengerChange(index, 'lastName', e.target.value)}
                      style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                    />
                    <input
                      type="date"
                      value={passenger.dateOfBirth}
                      onChange={(e) => handlePassengerChange(index, 'dateOfBirth', e.target.value)}
                      style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                    />
                    <select
                      value={passenger.gender}
                      onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
                      style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              ))}
              
              <motion.button
                onClick={() => setStep(2)}
                style={{
                  background: 'linear-gradient(135deg, #1a237e 0%, #2196f3 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue to Payment
              </motion.button>
            </div>
          )}

          {step === 2 && (
            <div className="payment-section">
              <h2>Payment Details</h2>
              <div style={{ 
                background: 'white', 
                padding: '20px', 
                borderRadius: '10px', 
                marginBottom: '20px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <p><strong>Total Amount: ${bookingData.payment.amount}</strong></p>
                <p>Payment Method: Credit Card</p>
                
                <motion.button
                  onClick={handleBooking}
                  style={{
                    background: 'linear-gradient(135deg, #1a237e 0%, #2196f3 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginTop: '20px'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Confirm Booking
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BookingFlow;