# Flight Booking App - Quick Start Guide

## 🚀 Quick Setup

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend  
npm install
```

### 2. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows (if MongoDB is installed as service)
net start MongoDB

# Or start manually
mongod
```

### 3. Seed Sample Data
```bash
cd backend
node seedFlights.js
```

### 4. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### 5. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🎯 Test the App

1. **Home Page**: Visit http://localhost:3000 to see the hero section with search form
2. **Search Flights**: Use the search form to find flights (try JFK to LAX)
3. **Register**: Create a new account at /register
4. **Login**: Sign in at /login
5. **Book Flight**: Click "Book Now" on any flight card
6. **Profile**: View your bookings at /profile

## 📱 Features Implemented

✅ **Backend**
- Express.js server with security middleware
- MongoDB models and API routes
- JWT authentication
- Flight search with filters
- Booking system

✅ **Frontend**
- React 18 with Redux Toolkit
- Framer Motion animations
- Premium UI with SCSS
- Responsive design
- Flight search and booking flow

## 🎨 UI Features

- **Video Background**: Hero section (add video to `/public/videos/hero-flight.mp4`)
- **Glass Morphism**: Navigation and cards
- **Smooth Animations**: Page transitions and hover effects
- **Premium Colors**: Navy, blue, and gold theme
- **Mobile Responsive**: Works on all devices

## 🔧 Troubleshooting

**MongoDB Connection Issues:**
- Ensure MongoDB is running
- Check connection string in `.env`

**Port Conflicts:**
- Backend runs on port 5000
- Frontend runs on port 3000
- Change ports in respective config files if needed

**Missing Dependencies:**
```bash
# Clear cache and reinstall
npm cache clean --force
npm install
```

## 🚀 Next Steps

1. Add video file to `frontend/public/videos/hero-flight.mp4`
2. Customize colors and branding
3. Add payment integration
4. Implement seat selection
5. Add admin panel
6. Deploy to production

**Enjoy your premium flight booking experience! ✈️**