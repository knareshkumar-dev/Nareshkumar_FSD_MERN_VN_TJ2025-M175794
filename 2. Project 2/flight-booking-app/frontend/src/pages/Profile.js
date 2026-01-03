import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const [bookings, setBookings] = useState([
    {
      _id: '1',
      bookingReference: 'BK001234',
      flightNumber: 'AA1234',
      route: 'JFK → LAX',
      date: '2024-01-15',
      status: 'Confirmed',
      amount: 299
    },
    {
      _id: '2', 
      bookingReference: 'BK001235',
      flightNumber: 'DL5678',
      route: 'CHI → MIA',
      date: '2024-01-20',
      status: 'Pending',
      amount: 349
    }
  ]);

  if (!isAuthenticated || !user) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Please log in to view your profile</h2>
        <a href="/login" style={{ color: '#2196f3' }}>Go to Login</a>
      </div>
    );
  }

  return (
    <div className="profile-page" style={{ padding: '100px 20px 50px', minHeight: '100vh', background: '#f5f5f5' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h1 style={{ color: '#1a237e', marginBottom: '20px' }}>👋 Welcome, {user.profile?.firstName}!</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div>
                <strong>Name:</strong> {user.profile?.firstName} {user.profile?.lastName}
              </div>
              <div>
                <strong>Email:</strong> {user.email}
              </div>
              <div>
                <strong>Member Since:</strong> January 2024
              </div>
              <div>
                <strong>Status:</strong> <span style={{ color: '#4caf50' }}>✅ Verified</span>
              </div>
            </div>
          </div>
          
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#1a237e', marginBottom: '20px' }}>✈️ Your Bookings</h2>
            {bookings.length > 0 ? (
              <div style={{ display: 'grid', gap: '15px' }}>
                {bookings.map(booking => (
                  <motion.div 
                    key={booking._id} 
                    style={{
                      background: '#f8f9fa',
                      padding: '20px',
                      borderRadius: '10px',
                      border: '1px solid #e9ecef',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                      gap: '15px',
                      alignItems: 'center'
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div>
                      <strong>Booking #{booking.bookingReference}</strong>
                      <p style={{ margin: '5px 0', color: '#666' }}>{booking.flightNumber}</p>
                    </div>
                    <div>
                      <strong>{booking.route}</strong>
                      <p style={{ margin: '5px 0', color: '#666' }}>{booking.date}</p>
                    </div>
                    <div>
                      <span style={{ 
                        background: booking.status === 'Confirmed' ? '#4caf50' : '#ff9800',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '15px',
                        fontSize: '0.8rem'
                      }}>
                        {booking.status}
                      </span>
                    </div>
                    <div>
                      <strong>${booking.amount}</strong>
                    </div>
                    <div>
                      <button style={{
                        background: '#2196f3',
                        color: 'white',
                        border: 'none',
                        padding: '8px 15px',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}>
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '20px' }}>No bookings found.</p>
                <a href="/flights" style={{ 
                  background: '#2196f3',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}>
                  🔍 Search Flights
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;