# Flight Booking App - Testing Guide

## 🧪 Test Suite Overview

This application includes comprehensive testing across multiple layers:

### 📡 Backend API Tests
- **Location**: `backend/__tests__/api.test.js`
- **Coverage**: Flight search, user authentication, booking APIs
- **Run**: `cd backend && npm test`

### 🎨 Frontend Component Tests  
- **Location**: `frontend/src/__tests__/components.test.js`
- **Coverage**: Navbar, SearchForm, Hero components
- **Run**: `cd frontend && npm test`

### 🌐 End-to-End Tests
- **Location**: `e2e/tests.spec.js`
- **Coverage**: Full user workflows, responsive design
- **Run**: `npx playwright test e2e/`

## 🚀 Quick Test Execution

### Windows
```bash
run-tests.bat
```

### Linux/Mac
```bash
chmod +x run-tests.sh
./run-tests.sh
```

## 📊 Test Categories

### Unit Tests
- Component rendering
- Form validation
- API endpoints
- Authentication flows

### Integration Tests
- Component interactions
- API data flow
- State management

### E2E Tests
- Complete user journeys
- Cross-browser compatibility
- Mobile responsiveness

## 🎯 Test Coverage Areas

✅ **Navigation**: Navbar links, routing, mobile menu
✅ **Search**: Form validation, flight filtering
✅ **Authentication**: Login, register, logout
✅ **Responsive**: Mobile, tablet, desktop layouts
✅ **Accessibility**: ARIA labels, keyboard navigation
✅ **Performance**: Load times, animations

## 📈 Database Test Data

The app now includes **50+ realistic flights** with:
- 6 major airlines (AA, DL, UA, WN, B6, AS)
- 8 airports across USA
- Various aircraft types
- Dynamic pricing
- Real availability data

Run `node backend/seedMoreFlights.js` to populate test data.

## 🔧 Test Setup Requirements

```bash
# Backend
npm install supertest jest

# Frontend  
npm install @testing-library/react @testing-library/jest-dom

# E2E
npm install @playwright/test
npx playwright install
```

## 📋 Manual Testing Checklist

- [ ] Homepage loads without errors
- [ ] Search form validates inputs
- [ ] Flight results display correctly
- [ ] User registration/login works
- [ ] Mobile navigation functions
- [ ] All links navigate properly
- [ ] Forms submit successfully
- [ ] Error messages appear appropriately