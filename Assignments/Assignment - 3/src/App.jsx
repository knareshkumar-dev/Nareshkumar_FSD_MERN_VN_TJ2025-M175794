import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Products, Electronics, Fashion } from './pages/Products.jsx'
import { TasksPage } from './pages/TasksPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1>React Assignment</h1>
          <nav className="nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/tasks">Tasks 1–18</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/products" element={<Products />}>
              <Route path="electronics" element={<Electronics />} />
              <Route path="fashion" element={<Fashion />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
