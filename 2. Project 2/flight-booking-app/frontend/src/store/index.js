import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import flightSlice from './slices/flightSlice';
import bookingSlice from './slices/bookingSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    flights: flightSlice,
    bookings: bookingSlice,
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;