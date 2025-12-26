import { Link } from 'react-router-dom';
import '../styles/departmentCard.css';

export default function DepartmentCard({ id, name, description }) {
  return (
    <div className="department-card">
      <div className="card-header">
        <h3>{name}</h3>
      </div>
      <div className="card-body">
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <Link to={`/departments/${id}`} className="btn-view-more">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
