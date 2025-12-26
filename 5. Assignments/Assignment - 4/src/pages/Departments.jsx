import { useEffect, useState } from 'react';
import DepartmentCard from '../components/DepartmentCard';
import '../styles/departments.css';

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/departments.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch departments');
        return res.json();
      })
      .then(data => {
        setDepartments(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main>
        <div className="container departments-container">
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666' }}>
            Loading departments...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div className="container departments-container">
          <p style={{ textAlign: 'center', color: '#d32f2f', fontSize: '1.1rem' }}>
            Error loading departments: {error}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="container departments-container">
        <div className="departments-header">
          <h1>Our Departments</h1>
          <p>Explore our diverse range of academic programs</p>
        </div>

        <div className="departments-grid">
          {departments.map(dept => (
            <DepartmentCard
              key={dept.id}
              id={dept.id}
              name={dept.name}
              description={dept.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
