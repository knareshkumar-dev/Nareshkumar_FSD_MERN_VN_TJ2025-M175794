import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookingService from '../../services/bookingService';

export const createBooking = createAsyncThunk(
  'bookings/create',
  async (bookingData, { rejectWithValue }) => {
    try {
      const response = await bookingService.createBooking(bookingData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getUserBookings = createAsyncThunk(
  'bookings/getUserBookings',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await bookingService.getUserBookings(userId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  bookings: [],
  currentBooking: null,
  loading: false,
  error: null
};

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setCurrentBooking: (state, action) => {
      state.currentBooking = action.payload;
    },
    clearBookings: (state) => {
      state.bookings = [];
      state.currentBooking = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBooking = action.payload;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserBookings.fulfilled, (state, action) => {
        state.bookings = action.payload.bookings;
      });
  }
});

export const { setCurrentBooking, clearBookings } = bookingSlice.actions;
export default bookingSlice.reducer;