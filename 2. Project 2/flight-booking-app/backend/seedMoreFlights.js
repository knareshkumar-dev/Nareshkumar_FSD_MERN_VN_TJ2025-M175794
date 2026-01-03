const mongoose = require('mongoose');
const Flight = require('./models/Flight');
require('dotenv').config();

const airlines = [
  { name: "American Airlines", code: "AA", logo: "https://via.placeholder.com/50x50?text=AA" },
  { name: "Delta Airlines", code: "DL", logo: "https://via.placeholder.com/50x50?text=DL" },
  { name: "United Airlines", code: "UA", logo: "https://via.placeholder.com/50x50?text=UA" },
  { name: "Southwest Airlines", code: "WN", logo: "https://via.placeholder.com/50x50?text=WN" },
  { name: "JetBlue Airways", code: "B6", logo: "https://via.placeholder.com/50x50?text=B6" },
  { name: "Alaska Airlines", code: "AS", logo: "https://via.placeholder.com/50x50?text=AS" }
];

const airports = [
  { code: "JFK", city: "New York", country: "USA" },
  { code: "LAX", city: "Los Angeles", country: "USA" },
  { code: "CHI", city: "Chicago", country: "USA" },
  { code: "MIA", city: "Miami", country: "USA" },
  { code: "LAS", city: "Las Vegas", country: "USA" },
  { code: "SEA", city: "Seattle", country: "USA" },
  { code: "DEN", city: "Denver", country: "USA" },
  { code: "ATL", city: "Atlanta", country: "USA" }
];

const aircraft = [
  { type: "Boeing 737", seats: 180 },
  { type: "Airbus A320", seats: 160 },
  { type: "Boeing 757", seats: 200 },
  { type: "Boeing 777", seats: 350 },
  { type: "Airbus A330", seats: 300 }
];

const generateFlights = () => {
  const flights = [];
  const today = new Date();
  
  for (let i = 0; i < 50; i++) {
    const airline = airlines[Math.floor(Math.random() * airlines.length)];
    const fromAirport = airports[Math.floor(Math.random() * airports.length)];
    let toAirport = airports[Math.floor(Math.random() * airports.length)];
    while (toAirport.code === fromAirport.code) {
      toAirport = airports[Math.floor(Math.random() * airports.length)];
    }
    
    const plane = aircraft[Math.floor(Math.random() * aircraft.length)];
    const flightDate = new Date(today.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000);
    const depHour = Math.floor(Math.random() * 24);
    const depMin = Math.floor(Math.random() * 4) * 15;
    const duration = Math.floor(Math.random() * 8) + 1;
    
    const basePrice = Math.floor(Math.random() * 400) + 150;
    
    flights.push({
      airline,
      flightNumber: `${airline.code}${Math.floor(Math.random() * 9000) + 1000}`,
      route: { from: fromAirport, to: toAirport },
      schedule: {
        departure: {
          date: flightDate,
          time: `${depHour.toString().padStart(2, '0')}:${depMin.toString().padStart(2, '0')}`
        },
        arrival: {
          date: new Date(flightDate.getTime() + duration * 60 * 60 * 1000),
          time: `${((depHour + duration) % 24).toString().padStart(2, '0')}:${depMin.toString().padStart(2, '0')}`
        },
        duration: `${duration}h ${Math.floor(Math.random() * 60)}m`
      },
      aircraft: {
        type: plane.type,
        totalSeats: plane.seats,
        seatMap: {
          economy: { rows: Math.floor(plane.seats * 0.8 / 6), seatsPerRow: 6 },
          business: { rows: Math.floor(plane.seats * 0.15 / 4), seatsPerRow: 4 },
          first: { rows: Math.floor(plane.seats * 0.05 / 2), seatsPerRow: 2 }
        }
      },
      pricing: {
        economy: basePrice,
        business: basePrice * 3,
        first: basePrice * 5
      },
      availability: {
        economy: Math.floor(Math.random() * 100) + 50,
        business: Math.floor(Math.random() * 20) + 5,
        first: Math.floor(Math.random() * 8) + 2
      },
      status: "scheduled"
    });
  }
  
  return flights;
};

const seedMoreFlights = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    const flights = generateFlights();
    await Flight.insertMany(flights);
    console.log(`${flights.length} flights added successfully`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding flights:', error);
    process.exit(1);
  }
};

seedMoreFlights();