import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { setSearchParams } from '../store/slices/flightSlice';
import SearchForm from '../components/forms/SearchForm';
import Hero from '../components/ui/Hero';
import FeaturedFlights from '../components/ui/FeaturedFlights';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (searchData) => {
    dispatch(setSearchParams(searchData));
    navigate('/flights');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="home-page">
      <Hero
        // Use aviation-related imagery for better context and trust
        posterUrl={"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=60"}
        imageUrls={[
          'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=600&q=60',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=60',
          'https://images.unsplash.com/photo-1505765052654-1c9024f1d7f4?auto=format&fit=crop&w=600&q=60'
        ]}
      >
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            Your Journey Begins Here
          </motion.h1>
          <motion.p variants={itemVariants}>
            Discover the world with our premium flight booking experience. 
            Search, compare, and book flights with confidence and ease.
          </motion.p>
        </motion.div>
      </Hero>

      <div className="search-card-wrapper">
        <SearchForm onSearch={handleSearch} />
      </div>

      <FeaturedFlights />

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div 
            className="features-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Search</h3>
              <p>Find the best flights with our intelligent search algorithm</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Secure Payment</h3>
              <p>Book with confidence using our secure payment system</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Ready</h3>
              <p>Manage your bookings anywhere with our mobile-first design</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;