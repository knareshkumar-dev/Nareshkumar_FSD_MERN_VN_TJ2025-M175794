const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    name: { type: String, required: true },
    code: { type: String, required: true },
    logo: String
  },
  flightNumber: {
    type: String,
    required: true,
    unique: true
  },
  route: {
    from: {
      code: { type: String, required: true }, // JFK
      city: { type: String, required: true }, // New York
      country: { type: String, required: true }
    },
    to: {
      code: { type: String, required: true }, // LAX
      city: { type: String, required: true }, // Los Angeles
      country: { type: String, required: true }
    }
  },
  schedule: {
    departure: {
      date: { type: Date, required: true },
      time: { type: String, required: true }
    },
    arrival: {
      date: { type: Date, required: true },
      time: { type: String, required: true }
    },
    duration: { type: String, required: true } // "5h 30m"
  },
  aircraft: {
    type: { type: String, required: true }, // Boeing 737
    totalSeats: { type: Number, required: true },
    seatMap: {
      economy: { rows: Number, seatsPerRow: Number },
      business: { rows: Number, seatsPerRow: Number },
      first: { rows: Number, seatsPerRow: Number }
    }
  },
  pricing: {
    economy: { type: Number, required: true },
    business: { type: Number, required: true },
    first: { type: Number, required: true }
  },
  availability: {
    economy: { type: Number, required: true },
    business: { type: Number, required: true },
    first: { type: Number, required: true }
  },
  status: {
    type: String,
    enum: ['scheduled', 'delayed', 'cancelled', 'boarding', 'departed'],
    default: 'scheduled'
  }
}, {
  timestamps: true
});

// Indexes for flight search optimization
flightSchema.index({ 'route.from.code': 1, 'route.to.code': 1, 'schedule.departure.date': 1 });
flightSchema.index({ 'airline.name': 1 });
flightSchema.index({ 'pricing.economy': 1 });

module.exports = mongoose.model('Flight', flightSchema);