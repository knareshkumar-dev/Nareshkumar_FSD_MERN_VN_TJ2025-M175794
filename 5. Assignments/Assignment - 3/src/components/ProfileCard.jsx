import './cards.css'

export function ProfileCard({ name, role, image }) {
  return (
    <div className="card profile-card">
      <img src={image} alt={name} className="avatar" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  )
}

export function Task3ProfileCards() {
  const profiles = [
    {
      name: 'Priya',
      role: 'Frontend Developer',
      image: 'https://via.placeholder.com/80?text=P',
    },
    {
      name: 'Rahul',
      role: 'Backend Developer',
      image: 'https://via.placeholder.com/80?text=R',
    },
    {
      name: 'Anita',
      role: 'UI/UX Designer',
      image: 'https://via.placeholder.com/80?text=A',
    },
  ]

  return (
    <div className="section">
      <h2>3. ProfileCard Component</h2>
      <div className="card-grid">
        {profiles.map((p) => (
          <ProfileCard key={p.name} name={p.name} role={p.role} image={p.image} />
        ))}
      </div>
    </div>
  )
}


