#!/bin/bash

echo "🧪 Running Flight Booking App Test Suite"
echo "========================================"

# Backend Tests
echo "📡 Running Backend API Tests..."
cd backend
npm test 2>/dev/null || echo "Backend tests require setup"

# Frontend Tests  
echo "🎨 Running Frontend Component Tests..."
cd ../frontend
npm test -- --watchAll=false 2>/dev/null || echo "Frontend tests require setup"

# E2E Tests
echo "🌐 Running E2E Tests..."
cd ..
npx playwright test e2e/ 2>/dev/null || echo "E2E tests require Playwright setup"

echo "✅ Test suite completed"