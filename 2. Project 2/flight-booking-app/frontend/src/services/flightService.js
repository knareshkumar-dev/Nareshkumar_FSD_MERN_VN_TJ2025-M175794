import api from './api';

const flightService = {
  getAllFlights: async () => {
    return await api.get('/flights');
  },

  searchFlights: async (params) => {
    const queryString = new URLSearchParams(params).toString();
    return await api.get(`/flights/search?${queryString}`);
  },

  getFlightById: async (flightId) => {
    return await api.get(`/flights/${flightId}`);
  },

  createFlight: async (flightData) => {
    return await api.post('/flights', flightData);
  },

  updateFlight: async (flightId, flightData) => {
    return await api.put(`/flights/${flightId}`, flightData);
  },

  deleteFlight: async (flightId) => {
    return await api.delete(`/flights/${flightId}`);
  }
};

export default flightService;