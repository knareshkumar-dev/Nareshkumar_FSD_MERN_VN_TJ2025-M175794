const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

app.use(express.json());

// In-memory data
const flights = [
  {
    _id: "1",
    airline: { name: "American Airlines", code: "AA" },
    flightNumber: "AA1234",
    route: {
      from: { code: "JFK", city: "New York", country: "USA" },
      to: { code: "LAX", city: "Los Angeles", country: "USA" }
    },
    schedule: {
      departure: { date: "2024-01-15", time: "08:00" },
      arrival: { date: "2024-01-15", time: "11:30" },
      duration: "5h 30m"
    },
    pricing: { economy: 299, business: 899, first: 1599 },
    availability: { economy: 150, business: 12, first: 4 },
    status: "scheduled"
  },
  {
    _id: "2",
    airline: { name: "Delta Airlines", code: "DL" },
    flightNumber: "DL5678",
    route: {
      from: { code: "JFK", city: "New York", country: "USA" },
      to: { code: "LAX", city: "Los Angeles", country: "USA" }
    },
    schedule: {
      departure: { date: "2024-01-15", time: "14:00" },
      arrival: { date: "2024-01-15", time: "17:30" },
      duration: "5h 30m"
    },
    pricing: { economy: 349, business: 999, first: 1799 },
    availability: { economy: 140, business: 10, first: 2 },
    status: "scheduled"
  }
];

// Routes
app.get('/api/flights/search', (req, res) => {
  res.json({ flights, totalPages: 1, currentPage: 1, total: flights.length });
});

app.get('/api/flights/:id', (req, res) => {
  const flight = flights.find(f => f._id === req.params.id);
  if (!flight) return res.status(404).json({ message: 'Flight not found' });
  res.json(flight);
});

app.post('/api/auth/login', (req, res) => {
  res.json({
    token: 'demo-token',
    user: { id: '1', email: 'demo@example.com', profile: { firstName: 'Demo' }, role: 'user' }
  });
});

app.post('/api/auth/register', (req, res) => {
  res.json({
    token: 'demo-token',
    user: { id: '1', email: req.body.email, profile: req.body.profile, role: 'user' }
  });
});

app.get('/api/auth/profile', (req, res) => {
  res.json({
    user: { id: '1', email: 'demo@example.com', profile: { firstName: 'Demo' }, role: 'user' }
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));