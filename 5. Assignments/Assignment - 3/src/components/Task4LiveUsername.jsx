import { useState } from 'react'

export function Task4LiveUsername() {
  const [username, setUsername] = useState('')

  return (
    <div className="section">
      <h2>4. Live Username</h2>
      <label className="field">
        Username:{' '}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Type your username"
        />
      </label>
      <p>Typed username: {username || '(nothing yet)'}</p>
    </div>
  )
}


