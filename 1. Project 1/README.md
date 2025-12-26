# 🛒 ShopEZ E-Commerce Application

Welcome to **ShopEZ**! ShopEZ is your one-stop destination for effortless online shopping. With a user-friendly interface and a comprehensive product catalog, finding the perfect items has never been easier. This feature-rich e-commerce application is built using the powerful MERN stack, complete with an intuitive user-facing store and a robust admin dashboard.

## ✨ Features

### 🌟 User Frontend:

- **🔒 Secure Authentication**: Register, login, and manage user profiles effortlessly.
- **🛍️ Product Exploration**: Browse and search through a comprehensive product catalog with detailed descriptions and customer reviews.
- **🛒 Shopping Cart**: Add products to your cart, modify quantities, and proceed to a seamless checkout experience.
- **💳 Secure Payments**: Make secure payments using Stripe integration with instant order confirmation.
- **📦 Order Management**: View order history, track deliveries, and manage returns with ease.
- **💰 Discounts & Deals**: Access available discounts to make informed purchasing decisions.

### ⚙️ Admin Dashboard:

- **🛠️ Product Management**: Add, update, or delete products with a user-friendly interface.
- **📂 Category Management**: Organize products into categories for better navigation.
- **📑 Order Management**: View, process, and update orders efficiently with insightful analytics.
- **👥 User Management**: Manage user roles and access levels.
- **📊 Business Analytics**: Drive business growth with comprehensive insights and reports.

## 🛠️ Tech Stack

- **MongoDB**: Robust NoSQL database for storing all application data.
- **Express.js**: Fast and minimalistic backend framework.
- **React.js**: Modern frontend library for building dynamic user interfaces.
- **Node.js**: JavaScript runtime environment for running the backend.
- **Stripe**: Integrated payment gateway for processing transactions.
- **JWT**: JSON Web Tokens for secure user sessions.
- **Tailwind CSS**: Modern utility-first CSS framework for styling.

## 🗂️ Folder Structure

```plaintext
/
|-- admin/            # React.js admin frontend code
|-- backend/          # Node.js backend code (Express.js)
|-- frontend/         # React.js frontend code
|-- .gitignore        # Files and folders to be ignored by Git
|-- README.md         # Project documentation
```

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [NPM](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/YourUsername/ShopEZ-Ecommerce.git
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

<details>
<summary><code>/admin/.env</code></summary>

```env
VITE_BACKEND_URL = "http://localhost:4000"
```

</details>

<details>
<summary><code>/backend/.env</code></summary>

```env
MONGODB_URI =

CLOUDINARY_API_KEY =

CLOUDINARY_SECRET_KEY =

CLOUDINARY_CLOUD_NAME =

JWT_SECRET =

ADMIN_EMAIL = "admin@shopez.com"

ADMIN_PASSWORD = "admin@123"

```

</details>

<details>
<summary><code>/frontend/.env</code></summary>

```env
VITE_BACKEND_URL = "http://localhost:4000"
```

</details>

Replace the placeholder values with your actual credentials.

**Running the Project**

**Admin Dashboard:**

```bash
cd admin
npm run dev
```

**Backend Server:**

```bash
cd backend
npm run server
```

**Frontend Application:**

```bash
cd frontend
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) in your browser to view the admin dashboard.

Open [http://localhost:4000](http://localhost:4000) in your browser to access the backend API.

Open [http://localhost:5173](http://localhost:5173) in your browser to view the ShopEZ frontend.

## 🎨 Design & Branding

ShopEZ features a fresh, modern design with an emerald green and teal color palette that emphasizes ease of use and trust. The interface is designed to provide an effortless shopping experience with intuitive navigation and clear product information.

## 📝 About ShopEZ

ShopEZ is designed to revolutionize online shopping by making it simple, secure, and enjoyable. Whether you're a customer looking for quality products or a seller managing your inventory, ShopEZ provides all the tools you need for success.

**Experience the future of online shopping with ShopEZ today!**
