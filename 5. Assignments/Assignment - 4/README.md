# College Information Portal - B.S Abdur Rahman Crescent Institute

A fully functional, responsive College Information Website built with React.js and Vite. This is a frontend-only application that showcases a complete college portal with multiple pages, dynamic routing, and interactive components.

**Student Name:** Naresh Kumar K  
**College:** B.S Abdur Rahman Crescent Institute of Science and Technology, Chennai

## 🎯 Project Overview

This project fulfills all requirements of FSD_MERN_VN Assignment 4. It includes:

- **5 Complete Pages:** Home, About, Departments, Department Details (Dynamic), Contact
- **Dynamic Routing:** Using React Router with URL parameters
- **Reusable Components:** Header, Footer, DepartmentCard
- **State Management:** useState for forms and data management
- **Data Loading:** useEffect to fetch department data from JSON
- **Responsive Design:** Mobile-friendly UI with professional styling
- **Interactive Form:** Contact form with submission display

## 📋 Features Implemented

### ✅ Pages Built

1. **Home Page**
   - Hero section with banner and tagline
   - "Why Choose Our College?" section with 6 feature cards
   - Featured departments display (top 3)
   - Call-to-action buttons for navigation

2. **About Page**
   - College history
   - Mission & Vision statements
   - Achievements with statistics
   - Core values section

3. **Departments Page**
   - All 6 departments displayed as cards
   - Department information: Name, Description, View More button
   - Responsive grid layout
   - Departments included:
     - Computer Science Engineering (CSE)
     - Information Technology (IT)
     - Electronics & Communication Engineering (ECE)
     - Mechanical Engineering
     - Civil Engineering
     - Master of Business Administration (MBA)

4. **Department Details Page (Dynamic Route)**
   - Dynamic routing: `/departments/:id`
   - Full department description
   - List of courses offered
   - Faculty members list
   - Labs & facilities section
   - Back button for navigation
   - Data loaded from JSON based on route parameter

5. **Contact Page**
   - Contact form with fields: Name, Email, Department (dropdown), Message
   - Form validation
   - Submitted data display on same page
   - Contact information display (office, phone, email)
   - No backend required

### ✅ React Concepts Used

1. **React Router**
   - BrowserRouter for routing
   - Routes component for defining paths
   - useParams for accessing dynamic route parameters
   - useNavigate for programmatic navigation
   - useLocation for active link highlighting

2. **Components (Reusable)**
   - `Header.jsx` - Navigation bar with active route highlighting
   - `Footer.jsx` - Footer with contact info and links
   - `DepartmentCard.jsx` - Reusable card component for departments

3. **Props**
   - Passed department data to cards
   - Dynamic route parameters passed through routes

4. **State Management (useState)**
   - Contact form state management
   - Form submission state (submitted/not submitted)
   - Menu toggle state for mobile navigation
   - Department loading state

5. **Effects (useEffect)**
   - Fetching department data from JSON file
   - Loading state management
   - Error handling

### ✅ Navigation Features

- Active link highlighting based on current route
- Smooth navigation without page refresh
- Mobile responsive hamburger menu
- Navigation bar: Home, About, Departments, Contact
- Back buttons on detail pages

### ✅ UI/UX Features

- **Responsive Design:** Mobile-first approach
- **Color Theme:** Professional blue gradient with accent colors
- **Modern Layout:** Grid-based layouts with flexbox
- **Smooth Animations:** Hover effects and transitions
- **Professional Typography:** Clean, readable fonts
- **Consistent Styling:** Unified color scheme throughout

## 📁 Project Structure

```
Assignment - 4/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation with active route highlighting
│   │   ├── Footer.jsx          # Footer component
│   │   └── DepartmentCard.jsx  # Reusable department card
│   ├── pages/
│   │   ├── Home.jsx            # Hero + Features + Top Departments
│   │   ├── About.jsx           # History + Mission/Vision + Achievements
│   │   ├── Departments.jsx     # All departments grid
│   │   ├── DepartmentDetails.jsx # Dynamic detail page
│   │   └── Contact.jsx         # Contact form with submission display
│   ├── data/
│   │   └── departments.json    # Department data (also in public/)
│   ├── styles/
│   │   ├── global.css          # Global styles and variables
│   │   ├── header.css          # Header/Navigation styles
│   │   ├── footer.css          # Footer styles
│   │   ├── home.css            # Home page styles
│   │   ├── about.css           # About page styles
│   │   ├── departments.css     # Departments page styles
│   │   ├── departmentCard.css  # Card component styles
│   │   ├── departmentDetails.css # Detail page styles
│   │   └── contact.css         # Contact page styles
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global CSS
├── public/
│   └── departments.json        # Department data (fetched at runtime)
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 📦 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.10.0"
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Navigate to project directory:
```bash
cd "d:\Vetri-Nichayam\Assignments\Assignment - 4"
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser and visit:
```
http://localhost:5174/
```

## 💻 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Color Scheme

- **Primary:** #1e3c72 (Deep Blue)
- **Secondary:** #2a5298 (Blue)
- **Accent:** #ff6b6b (Red/Coral)
- **Light Background:** #f5f7fa
- **Dark Text:** #333333
- **Light Text:** #666666

## 📱 Responsive Breakpoints

- **Desktop:** > 1200px - Full layout
- **Tablet:** 769px - 1200px - Adjusted grid
- **Mobile:** < 768px - Single column, hamburger menu

## 🔄 Data Management

Department data is stored in `/public/departments.json` and includes:
- Department ID and Name
- Full description
- Courses offered (array)
- Faculty members (array)
- Labs and facilities (array)

Each department card fetches this data using the `fetch()` API in a `useEffect` hook.

## 🧪 Testing Checklist

✅ All pages load correctly  
✅ Navigation works without page refresh  
✅ Active route highlighting works  
✅ Department cards display correctly  
✅ Dynamic routing works (department detail pages)  
✅ Contact form displays submitted data  
✅ Responsive design works on mobile  
✅ All links function properly  
✅ JSON data loads successfully  
✅ No console errors  

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- React fundamentals (components, props, state, hooks)
- React Router (routing, dynamic routes, navigation)
- REST API integration (fetch API)
- CSS styling and responsive design
- Component reusability
- State management patterns
- Form handling in React
- Conditional rendering

## 📝 Notes

- No backend server required - frontend only
- JSON data is static and loaded from the public folder
- All data is client-side (no database)
- Form submission displays data on the same page only
- Mobile-optimized with touch-friendly navigation

## 🔗 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

**Created:** December 2024  
**Framework:** React 19.2.0 + Vite 7.2.6  
**Build Tool:** Vite  
**Styling:** Vanilla CSS with CSS Variables  
