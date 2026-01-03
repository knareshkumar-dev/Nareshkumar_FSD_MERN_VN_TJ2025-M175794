import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';

import Navbar from '../components/common/Navbar';
import SearchForm from '../components/forms/SearchForm';
import Hero from '../components/ui/Hero';
import authSlice from '../store/slices/authSlice';

const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      auth: authSlice
    },
    preloadedState: initialState
  });
};

const renderWithProviders = (component, initialState = {}) => {
  const store = createTestStore(initialState);
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
};

describe('Navbar Component', () => {
  test('renders navbar with brand', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('✈️ FlightBooking')).toBeInTheDocument();
  });

  test('shows login/signup when not authenticated', () => {
    renderWithProviders(<Navbar />, { auth: { isAuthenticated: false } });
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});

describe('SearchForm Component', () => {
  const mockOnSearch = jest.fn();

  test('renders all form fields', () => {
    render(<SearchForm onSearch={mockOnSearch} />);
    expect(screen.getByLabelText(/from/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/to/i)).toBeInTheDocument();
  });

  test('shows validation errors for empty fields', async () => {
    render(<SearchForm onSearch={mockOnSearch} />);
    
    const submitButton = screen.getByRole('button', { name: /search flights/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/please select a departure city/i)).toBeInTheDocument();
    });
  });
});

describe('Hero Component', () => {
  test('renders hero content', () => {
    render(
      <Hero posterUrl="test.jpg">
        <h1>Test Title</h1>
      </Hero>
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});