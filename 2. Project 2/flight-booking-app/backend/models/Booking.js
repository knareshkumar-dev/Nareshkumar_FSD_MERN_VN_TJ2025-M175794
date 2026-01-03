const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingReference: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  flightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight',
    required: true
  },
  passengers: [{
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    passport: {
      number: String,
      expiryDate: Date,
      nationality: String
    },
    seatNumber: String,
    class: { type: String, enum: ['economy', 'business', 'first'], required: true }
  }],
  addOns: [{
    type: { type: String, enum: ['meal', 'baggage', 'seat', 'insurance'] },
    description: String,
    price: Number
  }],
  payment: {
    amount: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    method: { type: String, enum: ['card', 'paypal', 'bank'], required: true },
    transactionId: String,
    status: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], default: 'pending' }
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  cancellation: {
    reason: String,
    refundAmount: Number,
    cancelledAt: Date
  }
}, {
  timestamps: true
});

// Generate booking reference
bookingSchema.pre('save', function(next) {
  if (!this.bookingReference) {
    this.bookingReference = 'FB' + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase();
  }
  next();
});

// Index for user booking history
bookingSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model('Booking', bookingSchema);