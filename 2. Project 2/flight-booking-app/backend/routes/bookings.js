const express = require('express');
const { body, validationResult } = require('express-validator');
const Booking = require('../models/Booking');
const Flight = require('../models/Flight');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Create booking
router.post('/', [auth], [
  body('flightId').isMongoId(),
  body('passengers').isArray({ min: 1 }),
  body('payment.amount').isNumeric()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { flightId, passengers, addOns, payment } = req.body;

    // Check flight availability
    const flight = await Flight.findById(flightId);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    // Check seat availability
    const requestedClass = passengers[0].class;
    if (flight.availability[requestedClass] < passengers.length) {
      return res.status(400).json({ message: 'Not enough seats available' });
    }

    const booking = new Booking({
      userId: req.user._id,
      flightId,
      passengers,
      addOns: addOns || [],
      payment
    });

    await booking.save();

    // Update flight availability
    flight.availability[requestedClass] -= passengers.length;
    await flight.save();

    await booking.populate('flightId');

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user bookings
router.get('/user/:userId', auth, async (req, res) => {
  try {
    if (req.user._id.toString() !== req.params.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const bookings = await Booking.find({ userId: req.params.userId })
      .populate('flightId')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Booking.countDocuments({ userId: req.params.userId });

    res.json({
      bookings,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Cancel booking
router.put('/:id/cancel', auth, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (booking.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({ message: 'Booking already cancelled' });
    }

    booking.status = 'cancelled';
    booking.cancellation = {
      reason: req.body.reason || 'User cancellation',
      refundAmount: booking.payment.amount * 0.8, // 80% refund
      cancelledAt: new Date()
    };

    await booking.save();

    // Restore flight availability
    const flight = await Flight.findById(booking.flightId);
    const passengerClass = booking.passengers[0].class;
    flight.availability[passengerClass] += booking.passengers.length;
    await flight.save();

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;