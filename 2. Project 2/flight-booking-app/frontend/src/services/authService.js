import api from './api';

const authService = {
  login: async (email, password) => {
    return await api.post('/auth/login', { email, password });
  },

  register: async (userData) => {
    return await api.post('/auth/register', userData);
  },

  getProfile: async () => {
    return await api.get('/auth/profile');
  },

  updateProfile: async (profileData) => {
    return await api.put('/auth/profile', profileData);
  }
};

export default authService;