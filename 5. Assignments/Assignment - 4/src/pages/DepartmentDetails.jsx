import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/departmentDetails.css';

export default function DepartmentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/departments.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then(data => {
        const dept = data.find(d => d.id === id);
        if (!dept) {
          throw new Error('Department not found');
        }
        setDepartment(dept);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main>
        <div className="container department-details-container">
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666' }}>
            Loading department details...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div className="container department-details-container">
          <button onClick={() => navigate('/departments')} className="back-button">
            ← Back to Departments
          </button>
          <p style={{ textAlign: 'center', color: '#d32f2f', fontSize: '1.1rem' }}>
            Error: {error}
          </p>
        </div>
      </main>
    );
  }

  if (!department) {
    return (
      <main>
        <div className="container department-details-container">
          <button onClick={() => navigate('/departments')} className="back-button">
            ← Back to Departments
          </button>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666' }}>
            Department not found
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="container department-details-container">
        <button onClick={() => navigate('/departments')} className="back-button">
          ← Back to Departments
        </button>

        <div className="department-details-header">
          <h1>{department.name}</h1>
          <p>{department.description}</p>
        </div>

        <div className="details-grid">
          {/* Courses Section */}
          <div className="details-section">
            <h2>📚 Courses Offered</h2>
            <ul>
              {department.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>

          {/* Faculty Section */}
          <div className="details-section">
            <h2>👨‍🏫 Faculty Members</h2>
            <ul>
              {department.faculty.map((faculty, index) => (
                <li key={index}>{faculty}</li>
              ))}
            </ul>
          </div>

          {/* Labs Section */}
          <div className="details-section full-width">
            <h2>🔬 Labs & Facilities</h2>
            <ul>
              {department.labs.map((lab, index) => (
                <li key={index}>{lab}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
