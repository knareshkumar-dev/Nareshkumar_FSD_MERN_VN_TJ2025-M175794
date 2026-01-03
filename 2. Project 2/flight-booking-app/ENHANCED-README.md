# 🛫 Enhanced Flight Booking App

A premium full-stack flight booking application with advanced features including flight comparison, real-time tracking, and modern UI/UX design.

## ✨ New Features Added

### 🔍 Flight Comparison Tool
- Compare up to 3 flights side-by-side
- Detailed comparison of prices, schedules, and aircraft
- Interactive modal with easy flight selection
- Mobile-responsive comparison table

### 📡 Real-Time Flight Tracker
- Live flight status tracking
- Gate and terminal information
- Progress indicators with visual timeline
- Delay notifications and updates
- Mock real-time data simulation

### 🎨 Enhanced UI/UX
- Updated navigation with new pages
- Improved responsive design
- Better accessibility compliance
- Smooth animations and transitions

### 📊 Comprehensive Data
- 400+ flights with current and future dates
- Multiple airlines and routes
- Realistic pricing and availability
- Popular route suggestions

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB
- Git

### Installation & Setup

1. **Clone and Install Dependencies**
```bash
cd flight-booking-app
npm install
cd backend && npm install
cd ../frontend && npm install
```

2. **Start MongoDB**
```bash
# Windows (if MongoDB service is installed)
net start MongoDB

# Or start manually
mongod
```

3. **Seed Database with Current Data**
```bash
cd backend
node seedCurrentFlights.js
```

4. **Start Development Servers**
```bash
# Option 1: Use the batch file (Windows)
start-dev.bat

# Option 2: Manual start
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm start
```

5. **Access the Application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Demo Page: Open `demo-features.html` in browser

## 🎯 Application Features

### Core Functionality
- **Smart Flight Search**: Advanced filtering and sorting
- **Secure Authentication**: JWT-based with role management
- **Booking Management**: Complete booking flow
- **User Profiles**: Personal dashboard and history
- **Responsive Design**: Mobile-first approach

### New Enhancements
- **Flight Comparison**: Side-by-side flight analysis
- **Flight Tracking**: Real-time status updates
- **Enhanced Navigation**: Improved user experience
- **Better Data**: Current flights with realistic schedules

## 📱 Pages & Navigation

### Main Pages
- **Home** (`/`) - Hero section with search
- **Flight Search** (`/flights`) - Search results with filters
- **Flight Tracker** (`/track`) - Real-time flight tracking
- **Booking Flow** (`/booking/:id`) - Multi-step booking
- **Profile** (`/profile`) - User dashboard
- **Authentication** (`/login`, `/register`) - User auth

### Key Components
- **SearchForm** - Advanced flight search
- **FlightCard** - Premium flight display
- **FlightComparison** - Side-by-side comparison
- **FlightTracker** - Real-time status tracking
- **Navbar** - Animated navigation

## 🛠️ Technology Stack

### Frontend
- **React 18** with Hooks and Context
- **Redux Toolkit** for state management
- **Framer Motion** for animations
- **SCSS** for styling
- **React Router** for navigation
- **Axios** for API calls

### Backend
- **Node.js & Express.js** server
- **MongoDB** with Mongoose ODM
- **JWT** authentication
- **bcryptjs** password hashing
- **Helmet & Rate Limiting** for security

### UI/UX
- **Bootstrap 5** responsive framework
- **React Icons** icon library
- **Glass Morphism** design effects
- **Mobile-first** responsive design

## 🔧 Development Scripts

### Root Directory
```bash
npm run dev          # Start both servers
npm run server       # Start backend only
npm run client       # Start frontend only
npm run install-deps # Install all dependencies
```

### Backend Scripts
```bash
npm start           # Production server
npm run dev         # Development with nodemon
node seedCurrentFlights.js  # Seed current data
```

### Frontend Scripts
```bash
npm start           # Development server
npm run build       # Production build
npm test            # Run tests
npm run lint        # ESLint check
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Flights
- `GET /api/flights` - Get all flights
- `GET /api/flights/search` - Search flights with filters
- `GET /api/flights/:id` - Get flight details
- `POST /api/flights` - Create flight (Admin)

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/user/:userId` - Get user bookings
- `PUT /api/bookings/:id/cancel` - Cancel booking

## 🎨 Design System

### Color Palette
- **Primary Navy**: #1a237e
- **Primary Blue**: #2196f3  
- **Accent Gold**: #ffc107
- **White**: #ffffff
- **Light Gray**: #f5f5f5
- **Dark Gray**: #424242

### Typography
- **Primary**: Montserrat (headings)
- **Secondary**: Open Sans (body text)

### Animations
- **Page Transitions**: Smooth fade effects
- **Hover States**: Lift and shadow elevation
- **Loading States**: Spinner animations
- **Form Interactions**: Focus transitions

## 🔐 Security Features

- **JWT Authentication** with secure tokens
- **Password Hashing** with bcryptjs
- **Rate Limiting** to prevent abuse
- **Helmet** for security headers
- **Input Validation** with express-validator
- **CORS** configuration

## 📱 Mobile Responsiveness

- **Mobile-first** design approach
- **Responsive Grid** layouts
- **Touch-friendly** interactions
- **Optimized Performance** for mobile
- **Accessible** navigation

## 🚀 Deployment Ready

### Environment Variables
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
```

### Production Build
```bash
# Frontend build
cd frontend && npm run build

# Backend production
cd backend && npm start
```

## 🧪 Testing

### Available Tests
- **Unit Tests** for components
- **API Tests** for backend routes
- **E2E Tests** for user flows
- **Accessibility Tests** with Lighthouse

### Run Tests
```bash
# Frontend tests
cd frontend && npm test

# Backend tests  
cd backend && npm test

# E2E tests
npm run test:e2e
```

## 📈 Performance Optimizations

- **Code Splitting** for faster loading
- **Lazy Loading** for images and components
- **API Caching** for better performance
- **Database Indexing** for quick queries
- **Asset Compression** for smaller bundles

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **React Ecosystem** for robust development
- **MongoDB** for flexible data storage
- **Express.js** for reliable backend framework

---

**Built with ❤️ for seamless air travel planning and booking**

### 🎯 Demo & Testing

1. **Open Demo Page**: `demo-features.html` for feature overview
2. **Test Flight Search**: Try searching JFK → LAX
3. **Compare Flights**: Use the comparison tool
4. **Track Flights**: Test with flight numbers like AA1234
5. **Book Flights**: Complete the booking flow
6. **Mobile Testing**: Test on different screen sizes

**Enjoy your premium flight booking experience! ✈️**