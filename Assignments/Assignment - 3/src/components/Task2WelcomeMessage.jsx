import { useState } from 'react'

export function Task2WelcomeMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div className="section">
      <h2>2. Conditional Welcome</h2>
      <p>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</p>
      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        Toggle Login (currently {isLoggedIn ? 'Logged In' : 'Logged Out'})
      </button>
    </div>
  )
}


