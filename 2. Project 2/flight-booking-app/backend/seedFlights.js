const mongoose = require('mongoose');
const Flight = require('./models/Flight');
require('dotenv').config();

const sampleFlights = [
  {
    airline: {
      name: "American Airlines",
      code: "AA",
      logo: "https://via.placeholder.com/50x50?text=AA"
    },
    flightNumber: "AA1234",
    route: {
      from: {
        code: "JFK",
        city: "New York",
        country: "USA"
      },
      to: {
        code: "LAX",
        city: "Los Angeles",
        country: "USA"
      }
    },
    schedule: {
      departure: {
        date: new Date('2024-01-15'),
        time: "08:00"
      },
      arrival: {
        date: new Date('2024-01-15'),
        time: "11:30"
      },
      duration: "5h 30m"
    },
    aircraft: {
      type: "Boeing 737",
      totalSeats: 180,
      seatMap: {
        economy: { rows: 25, seatsPerRow: 6 },
        business: { rows: 3, seatsPerRow: 4 },
        first: { rows: 2, seatsPerRow: 2 }
      }
    },
    pricing: {
      economy: 299,
      business: 899,
      first: 1599
    },
    availability: {
      economy: 150,
      business: 12,
      first: 4
    },
    status: "scheduled"
  },
  {
    airline: {
      name: "Delta Airlines",
      code: "DL",
      logo: "https://via.placeholder.com/50x50?text=DL"
    },
    flightNumber: "DL5678",
    route: {
      from: {
        code: "JFK",
        city: "New York",
        country: "USA"
      },
      to: {
        code: "LAX",
        city: "Los Angeles",
        country: "USA"
      }
    },
    schedule: {
      departure: {
        date: new Date('2024-01-15'),
        time: "14:00"
      },
      arrival: {
        date: new Date('2024-01-15'),
        time: "17:30"
      },
      duration: "5h 30m"
    },
    aircraft: {
      type: "Airbus A320",
      totalSeats: 160,
      seatMap: {
        economy: { rows: 22, seatsPerRow: 6 },
        business: { rows: 3, seatsPerRow: 4 },
        first: { rows: 2, seatsPerRow: 2 }
      }
    },
    pricing: {
      economy: 349,
      business: 999,
      first: 1799
    },
    availability: {
      economy: 140,
      business: 10,
      first: 2
    },
    status: "scheduled"
  },
  {
    airline: {
      name: "United Airlines",
      code: "UA",
      logo: "https://via.placeholder.com/50x50?text=UA"
    },
    flightNumber: "UA9012",
    route: {
      from: {
        code: "CHI",
        city: "Chicago",
        country: "USA"
      },
      to: {
        code: "MIA",
        city: "Miami",
        country: "USA"
      }
    },
    schedule: {
      departure: {
        date: new Date('2024-01-15'),
        time: "10:30"
      },
      arrival: {
        date: new Date('2024-01-15'),
        time: "14:00"
      },
      duration: "3h 30m"
    },
    aircraft: {
      type: "Boeing 757",
      totalSeats: 200,
      seatMap: {
        economy: { rows: 28, seatsPerRow: 6 },
        business: { rows: 4, seatsPerRow: 4 },
        first: { rows: 2, seatsPerRow: 2 }
      }
    },
    pricing: {
      economy: 199,
      business: 699,
      first: 1299
    },
    availability: {
      economy: 180,
      business: 16,
      first: 4
    },
    status: "scheduled"
  }
];

const seedFlights = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing flights
    await Flight.deleteMany({});
    console.log('Cleared existing flights');
    
    // Insert sample flights
    await Flight.insertMany(sampleFlights);
    console.log('Sample flights inserted successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding flights:', error);
    process.exit(1);
  }
};

seedFlights();