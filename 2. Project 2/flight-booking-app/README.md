# Flight Booking App 🛫

A premium full-stack flight booking application built with the MERN stack, featuring stunning animations, video backgrounds, and a modern UI/UX design.

## ✨ Features

- **Premium UI/UX**: Cinematic video backgrounds, smooth animations, glass morphism effects
- **Smart Flight Search**: Advanced filtering and sorting options
- **Secure Authentication**: JWT-based auth with role-based access control
- **Responsive Design**: Mobile-first approach with Bootstrap integration
- **Real-time Updates**: Live flight status and booking management
- **Payment Integration**: Secure payment processing
- **Admin Panel**: Flight and user management dashboard

## 🚀 Tech Stack

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- Express Rate Limiting & Helmet for security

### Frontend
- React.js 18 with Hooks
- Redux Toolkit for state management
- Framer Motion for animations
- SCSS for styling
- React Router for navigation
- Axios for API calls

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- MongoDB
- Git

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with your configurations:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/flight-booking
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
```

4. Start MongoDB service

5. Run the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🎨 Design System

### Color Palette
- **Primary Navy**: #1a237e
- **Primary Blue**: #2196f3
- **Accent Gold**: #ffc107
- **White**: #ffffff
- **Light Gray**: #f5f5f5
- **Dark Gray**: #424242

### Typography
- **Primary Font**: Montserrat (headings)
- **Secondary Font**: Open Sans (body text)

### Animations
- **Hero Section**: Fade-in with stagger effect
- **Flight Cards**: Hover lift with shadow elevation
- **Form Elements**: Smooth focus transitions
- **Navigation**: Glass morphism with backdrop blur

## 📱 Pages & Components

### Pages
- **Home**: Hero section with video background and search form
- **Flight Search**: Results with filtering and sorting
- **Booking Flow**: Multi-step booking process
- **Profile**: User dashboard and booking history
- **Auth**: Login and registration forms

### Key Components
- **Navbar**: Animated navigation with glass effect
- **SearchForm**: Advanced flight search with date picker
- **FlightCard**: Premium flight display cards
- **BookingForm**: Multi-step booking process

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Flights
- `GET /api/flights/search` - Search flights
- `GET /api/flights/:id` - Get flight details
- `POST /api/flights` - Create flight (Admin)

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/user/:userId` - Get user bookings
- `PUT /api/bookings/:id/cancel` - Cancel booking

## 🎬 Video Background Setup

1. Add your hero video file to `frontend/public/videos/hero-flight.mp4`
2. Recommended specs:
   - Format: MP4 (H.264)
   - Duration: 10-15 seconds loop
   - Resolution: 1920x1080
   - Size: <2MB compressed

## 🚀 Deployment

### Backend Deployment
1. Set production environment variables
2. Build and deploy to your preferred platform (Heroku, AWS, etc.)

### Frontend Deployment
1. Build the production version:
```bash
npm run build
```
2. Deploy the `build` folder to your hosting service

## 📊 Database Schema

### Users Collection
```javascript
{
  email: String,
  password: String (hashed),
  profile: {
    firstName: String,
    lastName: String,
    preferences: Object
  },
  role: String (user/admin)
}
```

### Flights Collection
```javascript
{
  airline: Object,
  flightNumber: String,
  route: { from: Object, to: Object },
  schedule: { departure: Object, arrival: Object },
  pricing: { economy: Number, business: Number, first: Number },
  availability: Object
}
```

### Bookings Collection
```javascript
{
  bookingReference: String,
  userId: ObjectId,
  flightId: ObjectId,
  passengers: Array,
  payment: Object,
  status: String
}
```

## 🎯 Performance Optimizations

- **Lazy Loading**: Video backgrounds and images
- **Code Splitting**: Route-based code splitting
- **Caching**: API response caching
- **Compression**: Asset compression and minification
- **Database Indexing**: Optimized queries for flight search

## 🔧 Development

### Available Scripts

Backend:
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

Frontend:
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Framer Motion for smooth animations
- React ecosystem for robust development
- MongoDB for flexible data storage
- Express.js for reliable backend framework

---

**Built with ❤️ for seamless air travel planning and booking**