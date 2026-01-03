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
  { code: "LAS", city: "Las Vegas", country: "USA" }
];

const generateCurrentFlights = () => {
  const flights = [];
  const today = new Date();
  
  // Generate flights for next 30 days
  for (let day = 0; day < 30; day++) {
    const flightDate = new Date(today);
    flightDate.setDate(today.getDate() + day);
    
    // Generate multiple flights per day for popular routes
    const popularRoutes = [
      { from: airports[0], to: airports[1] }, // JFK to LAX
      { from: airports[1], to: airports[0] }, // LAX to JFK
      { from: airports[0], to: airports[2] }, // JFK to CHI
      { from: airports[2], to: airports[0] }, // CHI to JFK
      { from: airports[2], to: airports[3] }, // CHI to MIA
      { from: airports[3], to: airports[2] }, // MIA to CHI
      { from: airports[1], to: airports[4] }, // LAX to LAS
      { from: airports[4], to: airports[1] }  // LAS to LAX
    ];
    
    popularRoutes.forEach((route, routeIndex) => {
      // 2-3 flights per route per day
      const flightsPerRoute = Math.floor(Math.random() * 2) + 2;
      
      for (let f = 0; f < flightsPerRoute; f++) {
        const airline = airlines[Math.floor(Math.random() * airlines.length)];
        const depHour = 6 + (f * 4) + Math.floor(Math.random() * 3);
        const depMin = Math.floor(Math.random() * 4) * 15;
        const duration = Math.floor(Math.random() * 4) + 2;
        
        const basePrice = Math.floor(Math.random() * 300) + 200;
        
        flights.push({
          airline,
          flightNumber: `${airline.code}${Math.floor(Math.random() * 9000) + 1000}`,
          route: route,
          schedule: {
            departure: {
              date: new Date(flightDate),
              time: `${depHour.toString().padStart(2, '0')}:${depMin.toString().padStart(2, '0')}`
            },
            arrival: {
              date: new Date(flightDate.getTime() + duration * 60 * 60 * 1000),
              time: `${((depHour + duration) % 24).toString().padStart(2, '0')}:${depMin.toString().padStart(2, '0')}`
            },
            duration: `${duration}h ${Math.floor(Math.random() * 60)}m`
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
            economy: basePrice,
            business: basePrice * 2.5,
            first: basePrice * 4
          },
          availability: {
            economy: Math.floor(Math.random() * 100) + 50,
            business: Math.floor(Math.random() * 12) + 3,
            first: Math.floor(Math.random() * 4) + 1
          },
          status: "scheduled"
        });
      }
    });
  }
  
  return flights;
};

const seedCurrentFlights = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing flights
    await Flight.deleteMany({});
    console.log('Cleared existing flights');
    
    const flights = generateCurrentFlights();
    await Flight.insertMany(flights);
    console.log(`${flights.length} current flights added successfully`);
    
    // Show sample of what was added
    const sampleFlights = await Flight.find().limit(5);
    console.log('\nSample flights added:');
    sampleFlights.forEach(flight => {
      console.log(`${flight.flightNumber}: ${flight.route.from.code} → ${flight.route.to.code} on ${flight.schedule.departure.date.toDateString()}`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding flights:', error);
    process.exit(1);
  }
};

seedCurrentFlights();