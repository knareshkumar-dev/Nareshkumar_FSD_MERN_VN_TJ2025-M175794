import { useState } from 'react'

export function Task15EditableProfile() {
  const [profile, setProfile] = useState({
    name: 'Student Name',
    email: 'student@example.com',
    phone: '9876543210',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="section">
      <h2>15. Editable Profile</h2>
      <div className="form">
        <label className="field">
          Name:{' '}
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          Email:{' '}
          <input
            name="email"
            type="email"
            value={profile.email}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          Phone:{' '}
          <input
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="result">
        <p>
          <strong>Preview:</strong>
        </p>
        <p>{profile.name}</p>
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
      </div>
    </div>
  )
}


