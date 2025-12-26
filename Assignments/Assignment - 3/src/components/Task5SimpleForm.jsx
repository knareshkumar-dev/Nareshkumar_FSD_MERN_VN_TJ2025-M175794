import { useState } from 'react'

export function Task5SimpleForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted({ name, email })
  }

  return (
    <div className="section">
      <h2>5. Simple Form (Name & Email)</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="field">
          Name:{' '}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="field">
          Email:{' '}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="result">
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
        </div>
      )}
    </div>
  )
}


