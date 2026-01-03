const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const Flight = require('../models/Flight');

describe('Flight API', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/flight-booking-test');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('GET /api/flights returns flights', async () => {
    const response = await request(app)
      .get('/api/flights')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /api/flights with search filters', async () => {
    const response = await request(app)
      .get('/api/flights?from=JFK&to=LAX')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });
});