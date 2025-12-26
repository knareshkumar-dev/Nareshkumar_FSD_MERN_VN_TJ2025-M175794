import { useEffect, useState } from 'react'
import axios from 'axios'

export function Task17EditableUser() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [status, setStatus] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setStatus('Loading user...')
        const res = await axios.get('https://dummyjson.com/users/1')
        const data = res.data
        setUser({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
        })
        setStatus('')
      } catch (err) {
        setStatus('Error loading user')
      }
    }
    fetchUser()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      setStatus('Updating user...')
      await axios.put('https://dummyjson.com/users/1', user)
      setStatus('User updated!')
    } catch (err) {
      setStatus('Error updating user')
    }
  }

  return (
    <div className="section">
      <h2>17. Editable User (Axios PUT)</h2>
      <form onSubmit={handleUpdate} className="form">
        <label className="field">
          First Name:{' '}
          <input
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          Last Name:{' '}
          <input
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          Email:{' '}
          <input name="email" value={user.email} onChange={handleChange} />
        </label>
        <button type="submit">Update User</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  )
}


