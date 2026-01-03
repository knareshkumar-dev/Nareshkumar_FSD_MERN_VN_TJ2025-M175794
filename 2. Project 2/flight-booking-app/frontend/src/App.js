import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { loadUser } from './store/slices/authSlice';

// Components
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import FlightSearch from './pages/FlightSearch';
import BookingFlow from './pages/BookingFlow';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import TrackFlight from './pages/TrackFlight';
import ThemeToggle from './components/ui/ThemeToggle';

// Styles
import './styles/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    // Load user if token exists
    if (localStorage.getItem('token')) {
      store.dispatch(loadUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <ThemeToggle />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<FlightSearch />} />
            <Route path="/track" element={<TrackFlight />} />
            <Route path="/booking/:flightId" element={<BookingFlow />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Router>
    </Provider>
  );
}

export default App;