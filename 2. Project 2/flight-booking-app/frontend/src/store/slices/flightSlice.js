import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import flightService from '../../services/flightService';

export const searchFlights = createAsyncThunk(
  'flights/search',
  async (searchParams, { rejectWithValue }) => {
    try {
      let response;
      if (Object.keys(searchParams).length === 0 || !searchParams.from) {
        // Get all flights if no search params
        response = await flightService.getAllFlights();
        return { flights: response, totalPages: 1, currentPage: 1, total: response.length };
      } else {
        response = await flightService.searchFlights(searchParams);
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error fetching flights');
    }
  }
);

export const getFlightById = createAsyncThunk(
  'flights/getById',
  async (flightId, { rejectWithValue }) => {
    try {
      const response = await flightService.getFlightById(flightId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  flights: [],
  selectedFlight: null,
  searchParams: {
    from: '',
    to: '',
    date: '',
    class: 'economy',
    passengers: 1
  },
  filters: {
    airline: '',
    priceRange: [0, 1000],
    departureTime: '',
    stops: 'any'
  },
  loading: false,
  error: null,
  totalPages: 0,
  currentPage: 1,
  total: 0
};

const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setSearchParams: (state, action) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFlights: (state) => {
      state.flights = [];
      state.selectedFlight = null;
    },
    setSelectedFlight: (state, action) => {
      state.selectedFlight = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.flights = action.payload.flights;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.total = action.payload.total;
      })
      .addCase(searchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getFlightById.fulfilled, (state, action) => {
        state.selectedFlight = action.payload;
      });
  }
});

export const { setSearchParams, setFilters, clearFlights, setSelectedFlight } = flightSlice.actions;
export default flightSlice.reducer;