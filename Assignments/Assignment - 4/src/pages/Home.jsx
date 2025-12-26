import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DepartmentCard from '../components/DepartmentCard';
import '../styles/home.css';

export default function Home() {
  const [topDepartments, setTopDepartments] = useState([]);

  useEffect(() => {
    fetch('/departments.json')
      .then(res => res.json())
      .then(data => setTopDepartments(data.slice(0, 3)));
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to B.S Abdur Rahman Institute</h1>
            <p>Excellence in Education, Innovation in Learning</p>
            <div className="hero-buttons">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
              <Link to="/departments" className="btn-secondary">
                Explore Departments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why This College Section */}
      <section className="why-college">
        <div className="container">
          <h2 className="section-title">Why Choose Our College?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Expert Faculty</h3>
              <p>Learn from highly qualified professors with industry experience and research background.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Modern Labs</h3>
              <p>Access state-of-the-art laboratories and equipment for hands-on learning experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Industry Connect</h3>
              <p>Strong partnerships with leading companies for internships and placements.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Network</h3>
              <p>International collaborations and exchange programs for global exposure.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Rich Library</h3>
              <p>Comprehensive digital and physical library resources for research and learning.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Achievements</h3>
              <p>Recognized for excellence in academics, research, and student development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Departments */}
      <section className="top-departments">
        <div className="container">
          <h2 className="section-title">Featured Departments</h2>
          <div className="departments-grid">
            {topDepartments.length > 0 ? (
              topDepartments.map(dept => (
                <DepartmentCard
                  key={dept.id}
                  id={dept.id}
                  name={dept.name}
                  description={dept.description}
                />
              ))
            ) : (
              <p>Loading departments...</p>
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/departments" className="btn-primary">
              View All Departments
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
