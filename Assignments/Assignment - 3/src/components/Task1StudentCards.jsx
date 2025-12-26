import './cards.css'

const students = [
  { name: 'Aishwarya N', dept: 'Computer Science', year: '2nd Year' },
  { name: 'Vikram S', dept: 'Electronics & Communication', year: '3rd Year' },
  { name: 'Rahul K', dept: 'Information Technology', year: '1st Year' },
]

export function Task1StudentCards() {
  return (
    <div className="section">
      <h2>1. Student Profiles (.map)</h2>
      <div className="card-grid">
        {students.map((student, index) => (
          <div key={index} className="card">
            <h3>{student.name}</h3>
            <p>Department: {student.dept}</p>
            <p>Year: {student.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


