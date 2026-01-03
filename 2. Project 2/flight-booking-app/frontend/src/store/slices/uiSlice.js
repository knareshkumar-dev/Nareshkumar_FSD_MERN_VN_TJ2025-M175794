import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  success: null,
  modals: {
    login: false,
    booking: false
  }
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
    toggleModal: (state, action) => {
      const { modal, isOpen } = action.payload;
      state.modals[modal] = isOpen;
    }
  }
});

export const { setLoading, setError, setSuccess, clearMessages, toggleModal } = uiSlice.actions;
export default uiSlice.reducer;