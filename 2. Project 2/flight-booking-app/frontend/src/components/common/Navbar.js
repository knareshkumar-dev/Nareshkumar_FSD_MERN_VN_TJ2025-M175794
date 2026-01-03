import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { logout } from '../../store/slices/authSlice';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const location = useLocation();

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            ✈️ FlightBooking
          </motion.div>
        </Link>

        <div id="main-navigation" className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="navbar-links">
            <motion.div variants={linkVariants} whileHover="hover" className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" className="nav-item">
              <Link to="/flights" className={`nav-link ${location.pathname.startsWith('/flights') ? 'active' : ''}`}>Flights</Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" className="nav-item">
              <Link to="/track" className={`nav-link ${location.pathname === '/track' ? 'active' : ''}`}>Track Flight</Link>
            </motion.div>
          </div>

          <div className="navbar-actions">
            {isAuthenticated ? (
              <>
                <motion.div variants={linkVariants} whileHover="hover" className="nav-item">
                  <Link to="/profile" className="nav-link">
                    {user?.profile?.firstName || 'Profile'}
                  </Link>
                </motion.div>
                <motion.button
                  className="btn btn-outline"
                  onClick={handleLogout}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <motion.div variants={linkVariants} whileHover="hover" className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </motion.div>
                <motion.div variants={linkVariants} whileHover="hover" className="nav-item">
                  <Link to="/register" className="btn btn-primary">Sign Up</Link>
                </motion.div>
              </>
            )}
          </div>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          type="button"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setIsMobileMenuOpen(false);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;