const express = require('express');
const { query, body, validationResult } = require('express-validator');
const Flight = require('../models/Flight');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get all flights (for testing/demo)
router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find().limit(20);
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Search flights
router.get('/search', [
  query('from').notEmpty(),
  query('to').notEmpty(),
  query('date').isISO8601()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { from, to, date, class: flightClass, airline, sort } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // Build search query
    const searchQuery = {
      'route.from.code': from.toUpperCase(),
      'route.to.code': to.toUpperCase(),
      'schedule.departure.date': {
        $gte: new Date(date),
        $lt: new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000)
      }
    };

    if (airline) {
      searchQuery['airline.name'] = new RegExp(airline, 'i');
    }

    // Sort options
    let sortQuery = {};
    switch (sort) {
      case 'price-low':
        sortQuery = { 'pricing.economy': 1 };
        break;
      case 'price-high':
        sortQuery = { 'pricing.economy': -1 };
        break;
      case 'departure':
        sortQuery = { 'schedule.departure.time': 1 };
        break;
      default:
        sortQuery = { 'schedule.departure.date': 1 };
    }

    const flights = await Flight.find(searchQuery)
      .sort(sortQuery)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Flight.countDocuments(searchQuery);

    res.json({
      flights,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get flight by ID
router.get('/:id', async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    res.json(flight);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create flight (Admin only)
router.post('/', [auth, adminAuth], [
  body('airline.name').notEmpty(),
  body('flightNumber').notEmpty(),
  body('route.from.code').isLength({ min: 3, max: 3 }),
  body('route.to.code').isLength({ min: 3, max: 3 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).json(flight);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Flight number already exists' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;