import api from './api';

const bookingService = {
  createBooking: async (bookingData) => {
    return await api.post('/bookings', bookingData);
  },

  getUserBookings: async (userId) => {
    return await api.get(`/bookings/user/${userId}`);
  },

  cancelBooking: async (bookingId, reason) => {
    return await api.put(`/bookings/${bookingId}/cancel`, { reason });
  }
};

export default bookingService;