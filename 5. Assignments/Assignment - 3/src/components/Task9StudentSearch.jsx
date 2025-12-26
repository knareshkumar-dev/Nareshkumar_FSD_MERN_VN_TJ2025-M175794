import { useState } from 'react'

const studentNames = ['Kiran', 'Divya', 'Manoj', 'Sneha', 'Arun', 'Lakshmi']

export function Task9StudentSearch() {
  const [query, setQuery] = useState('')

  const filtered = studentNames.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="section">
      <h2>9. Student Search</h2>
      <input
        type="text"
        placeholder="Search student..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}


